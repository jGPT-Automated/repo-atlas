# Instruction Hub — 2026-08-13

Repository: https://github.com/agenticjess-star/instruction-hub
Commit reviewed: latest `main` commit visible via GitHub API (`6b0404ce`, 2026-07-09; repository metadata last pushed 2026-08-11)

## Verified findings

1. **MCP remains only partially writable.** `supabase/functions/mcp/index.ts` registers `list_groups`, `list_instructions`, `get_production_instruction`, `list_threads`, `create_thread`, and `add_thread_comment`. There are no instruction-group CRUD tools and no version-management tools. Existing `create_thread` does not satisfy the instruction-management task.
2. **Telegram webhook has no request authentication or durable idempotency.** `supabase/functions/telegram-webhook/index.ts` accepts any POST body, reads `update.message ?? update.edited_message`, and never checks Telegram's secret token or persists/checks `update_id`. A retry can repeat scraping, classification, and insertion; edited messages enter the same path.
3. **URL ingestion has no bounded retry/backoff.** `firecrawlScrape()` performs one request and returns `null` on any non-2xx response or exception, after which the handler tells the user to paste raw text and exits.
4. **Profiles RLS history contains the corrective migration, but deployment coverage is unverified.** The original migration created `Users can view all profiles ... USING (true)`. Migration `20260709190732` drops that policy and creates owner-only SELECT. The inspected repository has no deployed-policy verification script or cross-user regression test.

## Backlog disposition

No `in_review` tasks were present. Existing IH-001 through IH-004 remain `pending_review`; their evidence and acceptance framing were refreshed in `backlog/tasks.json`. LocalCheck was not accessed.
