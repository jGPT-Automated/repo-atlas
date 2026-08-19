# Repo Atlas analysis — 2026-08-09

Repository: `agenticjess-star/instruction-hub`
Scope: read-only inspection of the latest default-branch snapshot (`6b0404ce`, 2026-07-09).

## Verified findings

1. **MCP is still read-oriented.** `src/lib/mcp/index.ts` registers `list_groups`, `list_instructions`, `get_production_instruction`, `list_threads`, `create_thread`, and `add_thread_comment`; there are no instruction create/update/delete tools. The generated Supabase function mirrors that six-tool surface.
2. **Telegram webhook is unauthenticated.** `supabase/functions/telegram-webhook/index.ts` accepts any POST with JSON and never validates Telegram's `X-Telegram-Bot-Api-Secret-Token` (or an equivalent configured secret) before performing profile lookups, Firecrawl calls, AI classification, database writes, and outbound messages.
3. **Telegram updates are not durably deduplicated.** The handler selects `message`/`edited_message`, but never reads `update.update_id` or persists a processed-update key. A Telegram retry can repeat scraping, classification, thread insertion, and notification.
4. **URL ingestion fails closed without retry.** A failed Firecrawl scrape immediately sends “paste the raw text instead” and returns; there is no bounded retry/backoff or durable retry state.
5. **Profiles policy depends on migration ordering.** The initial migration creates `Users can view all profiles` with `USING (true)`; the July migration drops it and creates an owner-only SELECT policy. This is correct in the migration history but still warrants deployed-policy verification and a cross-user regression test.

## Backlog mapping

- IH-001: add instruction mutation tools with owner-scoped validation and tests.
- IH-002: add health/readiness coverage plus bounded webhook retry/error handling.
- IH-003: verify deployed profiles policies and add a cross-user SELECT regression test.
- IH-004: validate Telegram secret, atomically claim `update_id`, and define edited-message semantics.

No task was approved or rejected this cycle; no `in_review` items were present.
