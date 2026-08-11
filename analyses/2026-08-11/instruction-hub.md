# Repo Atlas analysis — 2026-08-11

Repository: `agenticjess-star/instruction-hub`

## Scope and activity

The latest visible commit remains `6b0404c` (`Wired Telegram & Agent page`, 2026-07-09). No backlog item is marked `in_review` or `completed`, so there was no implementation to approve this cycle.

## Verified findings

- `supabase/functions/telegram-webhook/index.ts` accepts any POST with JSON and does not validate a Telegram secret token/header before using the service-role client. The handler also does not persist or reject `update.update_id`, so Telegram retries can repeat Firecrawl calls, model classification, and thread inserts.
- URL-only messages return after a single Firecrawl failure. There is no bounded retry/backoff or durable retry state; a transient provider failure loses the submission.
- `supabase/functions/mcp/index.ts` exposes read tools plus `create_thread`; it does not expose instruction-group create/update/delete operations described by IH-001. Any write tool must preserve the authenticated user context and validate UUID/ownership through RLS.
- The migration history includes the profiles policy correction, but the repository test surface is still only a trivial example test. IH-003 should verify the deployed policy and cross-user read denial rather than relying on migration text.

## Backlog disposition

IH-001 through IH-004 remain valid and pending review. No new task was added because the remaining findings are already covered by those acceptance criteria.
