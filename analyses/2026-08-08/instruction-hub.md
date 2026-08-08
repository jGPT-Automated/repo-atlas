# Repo Atlas analysis — 2026-08-08

## Scope
Reviewed `agenticjess-star/instruction-hub` at `main` (latest commit `6b0404c`, 2026-07-09). LocalCheck was not accessed. The repository was read-only.

## Backlog review
No `in_review` tasks were present. IH-001 through IH-004 remain `pending_review`; no approvals or change requests were issued.

## Verified findings
- `src/lib/mcp/index.ts` imports only the existing read/list/thread tools; it does not expose create/update/delete instruction tools. The generated `supabase/functions/mcp/index.ts` likewise registers only the current six tools. IH-001 remains valid.
- `supabase/functions/telegram-webhook/index.ts` accepts POST JSON without checking a Telegram secret-token header and supports `edited_message` without an explicit policy.
- The webhook never reads or persists `update_id` before side effects. A Telegram retry can repeat link handling, Firecrawl scraping, classification, thread insertion, and outbound messaging. IH-004 remains valid.
- `firecrawlScrape` performs one POST with no retry/backoff and returns null on failure. Classification failures are retained as inbox-like rows, but Firecrawl failures on URL-only messages are dropped after a user notification. IH-002 remains valid, with this distinction documented.
- The July 9 migration drops `Users can view all profiles` and adds an owner-only SELECT policy, but the original permissive policy remains in migration history. IH-003 should verify the deployed policy set and regression-test cross-user reads, not rely on migration order alone.

## Recommended review status
Keep all existing IH tasks `pending_review` behind Jesse's safety gate.
