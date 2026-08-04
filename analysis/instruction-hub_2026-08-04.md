# instruction-hub — 2026-08-04 Deep Dive

## Snapshot
- **Owner:** agenticjess-star
- **Last push:** 2026-07-28
- **Stage:** active infrastructure candidate, but no activity in the last 7 days
- **Stack:** React 18/Vite/TypeScript, Supabase Auth + Postgres + Edge Functions, Lovable MCP integration, Framer Motion, React Query, Zod
- **Repository:** https://github.com/agenticjess-star/instruction-hub

## What is real in the repository
This is not a shell repo. It contains a full React route tree for landing, auth, dashboard, groups, thread library, optimization workspace, public endpoints, OAuth consent, and agent documentation. The README describes three product surfaces: version-controlled instruction groups, Telegram auto-ingestion, and an OAuth 2.1 MCP server.

The Supabase tree includes dedicated `mcp`, `telegram-webhook`, and `optimize-instructions` edge functions plus migrations through July 2026. The client uses Supabase auth and generated types. The dependency set includes `@lovable.dev/mcp-js`, `@supabase/supabase-js`, React Query, Zod, Radix UI, and Framer Motion.

## Architecture read
The strongest design decision is the separation between durable instruction groups and raw/rated conversation threads. That gives the optimizer a corpus rather than a single prompt. The public endpoint route (`/p/:slug`) and OAuth consent page indicate an attempt to make instruction sets callable by external agents, not merely editable in a dashboard.

The Telegram flow is strategically important: URL or pasted-thread ingestion → Firecrawl extraction → AI classification → group assignment. The README also claims per-user RLS and one-time Telegram binding codes. Those claims need a deployed integration test, because the source tree alone cannot prove webhook reachability, connector permissions, or policy correctness.

## Risks / verification gates
1. **Deployment proof:** verify the current Supabase project, edge-function URLs, secrets, and production branch. README placeholders such as `<project>.supabase.co` are documentation, not evidence of a live endpoint.
2. **OAuth/MCP security:** test dynamic client registration, consent, token audience scoping, revocation, and unauthorized cross-user reads with two accounts.
3. **Telegram idempotency:** repeated webhook delivery must not duplicate threads or classifications; validate Telegram secret-token verification and link-code expiry.
4. **Prompt/data boundary:** confirm scraped thread content is isolated from system instructions and that raw conversations have retention/deletion controls.
5. **AI cost control:** optimizer calls need rate limits, bounded input sizes, and a visible failure state when Firecrawl or model calls time out.

## Score
**4.4/5 for architecture / 3.2/5 for proven production readiness.** This is the highest-leverage infrastructure project in the queue, but its next milestone should be an end-to-end proof rather than another UI feature.

## Next move
Create one acceptance script: Telegram URL → stored thread → classified group → human rating → versioned instruction → MCP retrieval by an authorized client. Record request IDs, policy outcomes, and duplicate-delivery behavior.
