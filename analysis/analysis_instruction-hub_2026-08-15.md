# Instruction OS — Deep Dive (2026-08-15)

Repository: `agenticjess-star/instruction-hub`
Branch reviewed: `main`
Scope: read-only code review; no changes made to source repo.

## Executive assessment
Instruction OS has a credible product wedge: versioned AI instructions plus Telegram ingestion plus an MCP read/write surface. The UI and data model are substantially beyond a landing-page prototype. The main risk is not feature depth; it is trustworthiness at the ingestion boundary. The Telegram webhook is an unauthenticated, service-role endpoint that accepts raw Telegram-shaped JSON, performs paid/slow external calls, and writes threads without an update-id idempotency key. That creates spoofing, replay, duplicate-insert, and cost-amplification risk.

## Code-verified findings

### 1. Telegram webhook has no request authentication or Telegram secret-token validation (P0)
Evidence: `supabase/functions/telegram-webhook/index.ts` starts `Deno.serve`, accepts every POST, parses `message`/`edited_message`, then looks up the chat. There is no validation of Telegram's `X-Telegram-Bot-Api-Secret-Token`, source signature, or a configured webhook secret. The function uses `SUPABASE_SERVICE_ROLE_KEY` for all database access.

Impact: an attacker can forge updates for a known `chat.id`, replay messages, or force Firecrawl/AI work. The `/link CODE` branch is especially sensitive because it mutates the profile associated with any valid code; the endpoint itself does not establish message authenticity.

### 2. Telegram updates are not idempotent and edited messages are processed as new threads (P0)
Evidence: `const message = update.message ?? update.edited_message;` is followed by an insert into `threads`; neither `update.update_id` nor `message.message_id` is persisted or checked. A retry from Telegram or an edited message can create duplicate threads and repeated external calls.

### 3. External calls are unbounded and failure handling is not operationally safe (P1)
Evidence: `firecrawlScrape()` performs one fetch with no timeout or retry budget. `classifyThread()` performs one AI request with no timeout. The webhook waits synchronously for both before responding. `sendTelegram()` catches errors but does not bound its fetch. Existing backlog IH-002 correctly covers health/retry resilience; this review confirms it remains open.

### 4. MCP capability is asymmetric with the product promise (P1)
Evidence: `src/lib/mcp/index.ts` registers list_groups, list_instructions, get_production_instruction, list_threads, create_thread, and add_thread_comment. There are no create/update/delete instruction or version-management tools, while README describes the MCP server as exposing the user's instruction library and the product's core value is versioned instruction management. Existing IH-001 remains correctly prioritized.

### 5. README and implementation are drifting on naming and generated-source ownership (P1)
Evidence: README calls the hierarchy “Groups → Instructions → Versions,” while the MCP implementation queries both `categories` and `instruction_groups`; `supabase/functions/mcp/index.ts` is explicitly generated and says not to edit it, while source ownership lives in `src/lib/mcp/index.ts`. This is manageable, but it increases the chance that production behavior and docs diverge during MCP changes.

## Recommended next moves
1. Execute IH-003 and IH-004 before growth work: deployed RLS verification and Telegram authentication/idempotency are trust prerequisites.
2. Execute IH-001 after the security work, with source-generated parity checks so generated MCP code cannot silently lag.
3. Add a small end-to-end webhook fixture suite covering forged requests, retries, edited messages, Firecrawl timeout, and duplicate suppression.

## Verdict
Promising product, not production-trustworthy yet. The strongest near-term milestone is not another UI feature; it is proving that one Telegram update produces exactly one durable thread, only from an authentic Telegram request, with bounded cost and auditable failure behavior.
