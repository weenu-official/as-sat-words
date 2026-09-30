-- A's SAT Words: database schema (run once in the Supabase SQL editor)

-- 1) Study progress: one JSON document per account, written by the app.
create table if not exists public.progress (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  state      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.progress enable row level security;
create policy "progress: read own"   on public.progress for select using (auth.uid() = user_id);
create policy "progress: insert own" on public.progress for insert with check (auth.uid() = user_id);
create policy "progress: update own" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 2) What the account has paid for. Users can only READ this row.
--    Only the Paddle webhook and the guarantee function (service role) write it.
create table if not exists public.entitlements (
  user_id          uuid primary key references auth.users(id) on delete cascade,
  program_start    timestamptz,                 -- start of the 3-month program (drives the 44-day promise)
  expires_at       timestamptz,                 -- access ends here (program, promise month, review passes)
  guarantee_status text check (guarantee_status in ('extended','completed','not_eligible')),
  updated_at       timestamptz not null default now()
);
alter table public.entitlements enable row level security;
create policy "entitlements: read own" on public.entitlements for select using (auth.uid() = user_id);

-- 3) Payment ledger from Paddle webhooks (idempotency + refunds). No client access.
create table if not exists public.payments (
  transaction_id text primary key,
  user_id        uuid references auth.users(id) on delete set null,
  kind           text check (kind in ('program','extension')),
  status         text not null default 'completed',   -- completed | refunded
  currency       text,
  total          text,
  raw            jsonb,
  created_at     timestamptz not null default now()
);
alter table public.payments enable row level security;
