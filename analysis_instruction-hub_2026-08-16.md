# Repo Atlas deep dive — agenticjess-star/instruction-hub — 2026-08-16

## Scope
Recent activity scan selected this repo (last push 2026-08-11). Read-only source audit of MCP registration, React data hooks, generated Edge Function bundle, and Telegram webhook.

## Findings

### 1. MCP product surface is still asymmetric
`src/lib/mcp/index.ts` registers six tools: three read tools and three thread tools. There is still no instruction group/version create, update, archive, or restore tool. The UI can mutate instruction data through `useInstructionGroups.ts`, but an external agent cannot manage the core artifact. This is a product capability gap, not just missing polish.

### 2. Telegram ingestion still trusts the public POST body
`supabase/functions/telegram-webhook/index.ts` checks HTTP method only. It does not validate Telegram's secret-token header, claim/dedupe `update_id`, or define an edited-message policy before doing Firecrawl, LLM, DB, and Telegram side effects. Existing IH-004 remains valid and launch-critical.

### 3. Ingestion cost/abuse controls are absent
The handler extracts an arbitrary URL from user text, calls Firecrawl synchronously, then sends up to 8,000 characters into the classifier. There is no explicit request/body size cap, URL scheme/host policy, timeout budget, or per-chat rate limit. Because the function uses the service-role key, abuse can create paid external work and write against linked accounts. IH-002/IH-004 should be implemented before growth traffic.

## Recommended next task
Add a bounded ingestion guardrail layer: reject oversized updates, accept only http/https URLs, enforce an explicit timeout with one bounded retry for Firecrawl, and add a per-chat rate limiter/idempotency record before any external call. Keep Telegram secret validation and update_id claim in IH-004 so responsibilities do not overlap.

## Verdict
Instruction Hub has a coherent wedge and credible implementation, but its external-agent promise is currently read-heavy while its Telegram path is an unauthenticated, expensive side-effect pipeline. Security/resilience work should precede new surface area.
