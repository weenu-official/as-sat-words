# A's SAT Words — project brief for Claude Code

## What this is
A paid web app (PWA) for Digital SAT vocabulary: 350 "Basic" words, 15 minutes a day, parent report behind a PIN.
Brand: **A's SAT** / **A's SAT Words**. Seller of record in Korea: 주식회사 위누 (Weenu Co., Ltd.), contact admin@weenu.com.
Story: built by a mom for her daughter "A" (never use the daughter's real name anywhere).

## Stack
- `public/` static site, no build step. `index.html` = landing (EN / 한국어 / 中文), `app/index.html` = the app (all 350 words embedded as JSON).
- `public/config.js` = runtime settings. Empty `supabaseUrl` => local demo mode (purchases simulated in localStorage).
- Supabase: magic-link auth, tables `progress`, `entitlements`, `payments` (see `supabase/schema.sql`, RLS on).
- Supabase Edge Functions: `paddle-webhook` (verifies Paddle signature, grants/revokes access) and `guarantee` (44-day promise).
- Paddle Billing (merchant of record): Paddle.js v2 overlay checkout, `customData.user_id` links the purchase to the Supabase user.

## Business rules (do not change without asking)
- Free trial: Units 1–3 (first 30 words). Units 4–35 locked until paid.
- 3-month program: +90 days access (stacks on top of an active period). Launch price $29 / 39,000원, regular $39 / 49,000원.
- Review pass: +30 days, $7.99 / 9,900원. One-time payments only. No subscriptions.
- 44-day promise: after day 44 from `program_start`, if not all 350 words started AND study days (days with answers or new words) in that window >= 30 => +30 days, once. Decided server-side only.
- Entitlements are written ONLY by the two edge functions (service role). Clients can read their own row, never write it.
- Refund policy shown to users: within 7 days if units beyond the trial were not used.

## Content rules
- Do not edit the embedded word data, definitions or example sentences without being asked.
- Keep the license notices: NAWL (CC BY-SA 4.0), WordNet 3.0 © Princeton (full notice in the app's "Sources and licenses"), and the College Board non-affiliation line in the landing footer.
- Use "A's SAT" instead of "we/저희/我们" in marketing copy. The mom's letter stays first person.

## Secrets
- `config.js` may contain only public values: Supabase URL, anon key, Paddle client-side token, price IDs.
- Never put the Supabase service-role key or the Paddle webhook secret in `public/` or in git. They live in Supabase function secrets.

## Launch plan (work through in order, confirm with the owner at each step)
1. Supabase: create or pick the project, apply `supabase/schema.sql` as a migration, deploy both functions
   (`paddle-webhook` with JWT verification OFF, `guarantee` with it ON). Put URL + anon key into `config.js`.
2. Auth: Site URL = production domain; Redirect URLs include `http://localhost:3000/app/` and `https://<domain>/app/`.
   Brand the magic-link email as "A's SAT Words".
3. Local test: `npx serve public -l 3000`, sign in, study, confirm a row appears in `progress`.
4. Paddle sandbox (owner creates the account at sandbox-vendors.paddle.com): two products/prices with KRW overrides,
   client-side token, notification destination -> `https://<ref>.supabase.co/functions/v1/paddle-webhook`
   for `transaction.completed`, `adjustment.created`, `adjustment.updated`. Set function secrets
   `PADDLE_WEBHOOK_SECRET`, `PADDLE_PRICE_PROGRAM`, `PADDLE_PRICE_EXTENSION`.
5. End-to-end sandbox tests: buy program -> units unlock; buy review pass -> +30 days; approved refund -> access reduced;
   promise: set `program_start` 45 days back on a test user and call `guarantee`.
6. Deploy `public/` (Vercel or Cloudflare Pages), connect domain, approve the domain in Paddle, update Supabase auth URLs.
7. Before going live: replace `public/legal/*` with reviewed documents, native-speaker check of Chinese copy,
   switch `paddleEnv` to "production" with production token and price IDs.
