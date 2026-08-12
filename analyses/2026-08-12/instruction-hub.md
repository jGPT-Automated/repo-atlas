# Repo Atlas analysis — 2026-08-12

Repository: `agenticjess-star/instruction-hub`
Scope: read-only inspection; no source changes.

## Backlog review
No tasks were marked `in_review` or `completed`, so there was no agent implementation to approve or request changes on. IH-001 through IH-004 remain gated by `pending_review`.

## Verified findings

### Telegram webhook
`supabase/functions/telegram-webhook/index.ts` accepts any POST with valid JSON and does not validate a configured Telegram secret token before reading profiles or invoking external services. It chooses `update.message ?? update.edited_message`, but has no durable `update_id` claim/unique constraint. Telegram retries can therefore repeat Firecrawl, LLM classification, and thread inserts; edited messages can also be processed as new submissions.

`firecrawlScrape()` returns `null` for every non-2xx response and for exceptions. The caller immediately tells the user to paste raw text and returns success, with no bounded retry/backoff. This supports IH-002 (health/retry) and IH-004 (authentication/idempotency/edited-message semantics); keep those scopes separate to avoid duplicate implementation.

### MCP surface
`src/lib/mcp/index.ts` and the generated `supabase/functions/mcp/index.ts` expose read/list tools plus `createThread` and `addThreadComment`; they do not expose instruction-group/version create/update/delete tools. IH-001 remains valid, with the source file—not the generated bundle—as the implementation target.

### Profiles RLS
The 2026-07-09 migration explicitly drops `Users can view all profiles` and creates `Users can view own profile` with `auth.uid() = user_id`. Migration history is improved, but this inspection cannot verify the deployed policy set. IH-003 should remain a deployed-schema check with a cross-user regression test.

## Recommended handoff
Keep all six existing tasks pending the owner safety gate. No LocalCheck paths were accessed or modified.
