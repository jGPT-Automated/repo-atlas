# Repo Atlas analysis — 2026-08-10

Repository: `agenticjess-star/instruction-hub`
Scope: read-only analysis; no changes made.

## Backlog review
No tasks were marked `in_review`, `completed`, or otherwise ready for approval in the current backlog. IH-001 through IH-004 remain `pending_review`.

## Code-verified findings
- The generated MCP surface contains list/read tools plus `create-thread` and `add-thread-comment`; there are still no instruction create/update/delete tools. IH-001 remains valid.
- `supabase/functions/telegram-webhook/index.ts` accepts POST bodies without checking a Telegram webhook secret token. It processes `update.message` and `update.edited_message`, but does not persist or reject duplicate `update_id` values. IH-002/IH-004 remain valid.
- URL ingestion returns after one Firecrawl attempt when scraping fails. There is no bounded retry/backoff path, so transient extraction failures drop the submission. IH-002 remains valid.
- The original profiles migration contains `CREATE POLICY "Users can view all profiles" ... USING (true)`. The July migration drops it and creates an owner-only policy, but the repository has no integration/regression test proving the deployed policy blocks a second authenticated user. IH-003 remains valid.

## Action
No new task added. Existing acceptance criteria remain the safer handoff because these issues are already represented in IH-001–IH-004 and are awaiting Jesse's gate.
