# Repo Atlas analysis — agenticjess-star/instruction-hub — 2026-08-07

## Scope
Reviewed latest GitHub activity (latest commit 2026-07-09, `6b0404c`), the Telegram Edge Function, generated MCP function, package/test layout, and the two July security migrations. No writes were made to this repository.

## Findings

### 1. Telegram webhook has no authenticity check and accepts arbitrary POST bodies
`supabase/functions/telegram-webhook/index.ts` checks method and parses JSON, but never validates Telegram's webhook secret token or an equivalent shared secret. A caller who can reach the function can submit a fabricated update and trigger profile lookup, Firecrawl scraping, LLM classification, thread insertion, and Telegram output attempts.

### 2. Telegram retries can duplicate expensive work and thread rows
The handler does not read or persist `update_id`. It selects `update.message ?? update.edited_message`, then performs scraping/classification and inserts a thread. Telegram retries, or repeated delivery of the same update, therefore repeat side effects. Edited messages are also treated as fresh inserts rather than an explicit policy.

### 3. MCP read surface still lacks instruction write operations
The generated MCP function exposes `list_groups`, `list_instructions`, `get_production_instruction`, `list_threads`, `create_thread`, and `add_thread_comment`. There are no create/update/delete instruction tools. Any write implementation should use the authenticated user-scoped client, validate ownership, and have RLS/integration tests before exposure.

### 4. Profiles RLS fix exists in migration history but deployment needs verification
Migration `20260709190732_...sql` drops `Users can view all profiles` and creates `Users can view own profile` with `USING (auth.uid() = user_id)`. The backlog item is correctly framed as verifying the deployed schema and regression coverage, because repository migration text alone cannot prove the production policy state.

## Backlog disposition
Existing IH-001, IH-002, IH-003, and IH-004 remain relevant and are still `pending_review`. No completed or `in_review` tasks were present, so no agent work was approved or rejected this cycle.
