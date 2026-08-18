# Repo Atlas Deep Dive — instruction-hub

**Date:** 2026-08-18  
**Repo:** `agenticjess-star/instruction-hub`  
**Scope:** read-only source/migration audit; last repository commit is `6b0404c` (2026-07-09).

## Verification

- `npm test` passes the only test (`src/test/example.test.ts`, 1 test).
- `npm run build` succeeds, but emits a large chunk warning (779.67 kB JS).
- `npm run lint` fails with 38 errors and 8 warnings, including numerous `no-explicit-any` violations in app pages/hooks, generated MCP `var` declarations, a Telegram webhook `any`, and a no-empty-interface error.
- `src/lib/mcp/index.ts` and generated `supabase/functions/mcp/index.ts` still expose only read tools for instruction groups/versions plus thread tools; existing IH-001 remains valid.

## Finding

### P1 — `add_thread_comment` permits cross-thread writes

`src/lib/mcp/tools/add-thread-comment.ts` inserts `{ thread_id, content, user_id: ctx.getUserId() }` after authentication, but does not verify that the target thread belongs to the caller. The migration policy only checks `auth.uid() = user_id` for INSERT, so a caller can create a comment row on any thread whose UUID they know. The separate SELECT policy lets the owner of the target thread see comments on their thread, so this is a cross-user data-integrity/privacy issue even though the attacker’s comment row is owned by the attacker.

The generated `supabase/functions/mcp/index.ts` mirrors the same behavior, so the source and deployed bundle must be updated together.

**Required fix:** enforce target-thread ownership in the insert policy and/or handler query (`EXISTS` against `threads` for the caller), then add an authenticated two-user regression test proving user A cannot comment on user B’s thread while user B can still comment on their own.

## Existing high-priority items reconfirmed

- IH-003: historical permissive `profiles` SELECT policy remains in migration history; deployed-policy verification and regression coverage are still needed.
- IH-004/IH-005: Telegram webhook secret/idempotency and payload/cost controls remain separate backlog work; the current webhook still parses arbitrary JSON and performs unbounded Firecrawl/LLM work per accepted update.
