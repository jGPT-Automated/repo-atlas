# Repo Atlas Deep Dive — agenticjess-star/instruction-hub

Date: 2026-08-05
Branch: main
Latest observed commit: `6b0404c` (2026-07-09)

## Scope
Read-only review of the current GitHub tree, MCP source/function bundle, Telegram webhook, and all six SQL migrations. No files were changed in the target repo.

## Findings

### P0 — profiles SELECT policy is globally readable
Evidence: `supabase/migrations/20260307174057_3fba95de-96c5-4591-92ff-a089d60ec7cd.sql:15` creates `Users can view all profiles` with `USING (true)` for `authenticated`. The profiles table includes `user_id`, `display_name`, `avatar_url`, and Telegram-link fields are added by later migrations. The later migration adds `Users can view own profile`, but does not remove the original permissive policy; PostgreSQL combines permissive policies with OR semantics.

Impact: any authenticated client using the user-scoped Supabase client can select other users' profile rows. This is especially sensitive because the table is used for Telegram account-linking metadata.

Required fix: replace the global SELECT policy with an own-row policy (`auth.uid() = user_id`), explicitly verify the effective policy set, and add a regression test/query showing a user cannot read another user's profile. Keep the service-role webhook behavior working for link lookup.

### Existing backlog alignment
The current backlog already contains IH-001 (MCP write tools), IH-002 (webhook resilience), and IH-003 (RLS audit). IH-003 is retained and sharpened with the concrete profile-policy finding above; no duplicate MCP/webhook task was added.

## Verification notes
- `src/lib/mcp/index.ts` currently registers six tools: three read tools plus `list_threads`, `create_thread`, and `add_thread_comment`.
- `supabase/functions/mcp/index.ts` is generated from the source and currently has no write-instruction tools or health endpoint.
- `supabase/functions/telegram-webhook/index.ts` uses a service-role client, has no processed-update idempotency record, and performs one Firecrawl request with no retry. Classification does fall back to an uncategorized thread on AI failure, which should be preserved in IH-002 implementation.
