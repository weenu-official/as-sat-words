// Paddle Billing webhook -> grants access in public.entitlements.
// Deploy: supabase functions deploy paddle-webhook --no-verify-jwt
// Secrets: PADDLE_WEBHOOK_SECRET, PADDLE_PRICE_PROGRAM, PADDLE_PRICE_EXTENSION
import { createClient } from "npm:@supabase/supabase-js@2";

const SECRET = Deno.env.get("PADDLE_WEBHOOK_SECRET") ?? "";
const PRICE_PROGRAM = Deno.env.get("PADDLE_PRICE_PROGRAM") ?? "";
const PRICE_EXTENSION = Deno.env.get("PADDLE_PRICE_EXTENSION") ?? "";
const PROGRAM_DAYS = 90, EXTENSION_DAYS = 30;
const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const DAY = 86_400_000;
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * DAY).toISOString();

async function verify(raw: string, header: string): Promise<boolean> {
  // Paddle-Signature: ts=1700000000;h1=<hex HMAC-SHA256 of "ts:rawBody">
  const parts = Object.fromEntries(header.split(";").map((p) => p.split("=") as [string, string]));
  const ts = parts["ts"], h1 = parts["h1"];
  if (!ts || !h1 || !SECRET) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false; // reject replays older than 5 minutes
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${ts}:${raw}`)));
  const hex = [...sig].map((b) => b.toString(16).padStart(2, "0")).join("");
  if (hex.length !== h1.length) return false;
  let diff = 0;
  for (let i = 0; i < hex.length; i++) diff |= hex.charCodeAt(i) ^ h1.charCodeAt(i);
  return diff === 0;
}

Deno.serve(async (req) => {
  const raw = await req.text();
  if (!(await verify(raw, req.headers.get("paddle-signature") ?? ""))) return new Response("invalid signature", { status: 401 });
  const ev = JSON.parse(raw);

  if (ev.event_type === "transaction.completed") {
    const tx = ev.data;
    const userId: string | undefined = tx.custom_data?.user_id;
    if (!userId) return new Response("no user id", { status: 200 });
    const { data: seen } = await admin.from("payments").select("transaction_id").eq("transaction_id", tx.id).maybeSingle();
    if (seen) return new Response("duplicate", { status: 200 });

    const priceIds: string[] = (tx.items ?? []).map((i: any) => i.price?.id);
    const kind = priceIds.includes(PRICE_PROGRAM) ? "program" : priceIds.includes(PRICE_EXTENSION) ? "extension" : null;
    if (!kind) return new Response("unknown price", { status: 200 });

    const { data: ent } = await admin.from("entitlements").select("*").eq("user_id", userId).maybeSingle();
    const now = new Date();
    const active = !!ent?.expires_at && new Date(ent.expires_at) > now;
    const base = active ? new Date(ent!.expires_at) : now;
    const row = kind === "program"
      ? { user_id: userId, program_start: active && ent?.program_start ? ent.program_start : now.toISOString(),
          expires_at: addDays(base, PROGRAM_DAYS), guarantee_status: active ? ent?.guarantee_status ?? null : null, updated_at: now.toISOString() }
      : { user_id: userId, program_start: ent?.program_start ?? null,
          expires_at: addDays(base, EXTENSION_DAYS), guarantee_status: ent?.guarantee_status ?? null, updated_at: now.toISOString() };

    const { error } = await admin.from("entitlements").upsert(row);
    if (error) return new Response("db error", { status: 500 }); // Paddle retries on non-2xx
    await admin.from("payments").insert({ transaction_id: tx.id, user_id: userId, kind, currency: tx.currency_code,
      total: tx.details?.totals?.grand_total ?? null, raw: ev });
  }

  // Approved full refund -> end access that the refunded purchase granted.
  if ((ev.event_type === "adjustment.created" || ev.event_type === "adjustment.updated")
      && ev.data?.action === "refund" && ev.data?.status === "approved") {
    const { data: pay } = await admin.from("payments").select("*").eq("transaction_id", ev.data.transaction_id).maybeSingle();
    if (pay && pay.status !== "refunded") {
      const { data: ent } = await admin.from("entitlements").select("*").eq("user_id", pay.user_id).maybeSingle();
      if (ent?.expires_at) {
        const cut = pay.kind === "program" ? PROGRAM_DAYS : EXTENSION_DAYS;
        const newEnd = new Date(Math.max(Date.now(), new Date(ent.expires_at).getTime() - cut * DAY)).toISOString();
        await admin.from("entitlements").update({ expires_at: newEnd, updated_at: new Date().toISOString() }).eq("user_id", pay.user_id);
      }
      await admin.from("payments").update({ status: "refunded" }).eq("transaction_id", pay.transaction_id);
    }
  }
  return new Response("ok", { status: 200 });
});
