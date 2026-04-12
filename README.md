# iloveGTM — Waitlist

Warm minimal Next.js waitlist page, Supabase-backed.

## Setup

```bash
npm install
cp .env.local.example .env.local  # fill in Supabase values
npm run dev
```

## Supabase table

Run this in the Supabase SQL editor:

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  company text,
  created_at timestamptz default now()
);
```

The API route uses the **service role key** (server-side only — never expose it to the client).

## Env

- `NEXT_PUBLIC_SUPABASE_URL` — your project URL
- `SUPABASE_SERVICE_ROLE_KEY` — service role key (Settings → API)
