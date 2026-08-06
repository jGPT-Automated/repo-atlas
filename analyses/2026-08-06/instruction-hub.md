# Repo Atlas analysis — agenticjess-star/instruction-hub

Date: 2026-08-06
Scope: read-only review; no changes made to the target repository.

## Activity

- Default branch: `main`
- Latest observed commit: `6b0404c` (2026-07-09), “Wired Telegram & Agent page”
- Open GitHub issues: 0
- The planned `GenJess/vox-director` target returned 404 from GitHub and was not analyzed or modified.

## Findings

### P0 security follow-up: profiles RLS depends on a later corrective migration

The initial migration creates `public.profiles` with:

```sql
CREATE POLICY "Users can view all profiles" ON public.profiles
FOR SELECT TO authenticated USING (true);
```

A later migration drops that policy and creates an owner-only SELECT policy. The current migration sequence therefore appears corrected, but keeping the permissive policy in the migration history makes this easy to regress if migrations are replayed incorrectly or a deployment omits the corrective migration. IH-003 remains the task to verify the deployed schema, not merely the source files, and to add a regression check that cross-user profile reads are denied.

### P1 webhook hardening: Telegram updates are not idempotent

`supabase/functions/telegram-webhook/index.ts` accepts `message` and `edited_message`, then inserts a new thread for every delivery. There is no use of Telegram `update_id`, message id, or a durable deduplication key. Telegram retries or duplicate webhook deliveries can therefore create duplicate saved threads and repeat Firecrawl/LLM spend.

Recommended implementation: persist a unique provider event key such as `telegram:<update_id>` before expensive work, handle unique conflicts as an acknowledged duplicate, and define behavior for edited messages separately. Add a fixture test covering the same update delivered twice.

### P1 webhook authentication and abuse boundary

The handler checks HTTP method and parses JSON but does not verify a Telegram webhook secret token or equivalent shared secret. Anyone who can reach the function can submit a fabricated update and trigger classification, scraping, database writes, and outbound Telegram messages. Add a constant-time secret check at the edge, reject missing/invalid credentials, and test both paths. Keep the service-role key confined to the function.

### P2 outbound error handling

`sendTelegram` logs failures but does not return a status to the caller, so the function acknowledges successful processing even when the user notification failed. This is acceptable only if notification loss is explicitly tolerated; otherwise add bounded retry/backoff or persist a notification status for later recovery.

## Backlog action

Added `IH-004` for Telegram webhook authentication, idempotency, and fixture coverage. It is `pending_review`; no agent should execute it until the safety gate approves it.
