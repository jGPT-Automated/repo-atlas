# Instruction OS — Daily Deep Dive (2026-08-19)

**Repo:** `agenticjess-star/instruction-hub`  
**Recent activity:** latest commit `6b0404c` on 2026-07-09; 2 stars, 0 open issues  
**Verification:** shallow source checkout, recursive GitHub tree, README/package inspection, `npm run build`, `npm test`

## Product read

Instruction OS is a versioned custom-instruction library with three connected surfaces: a React app for groups/instructions/versions/threads, an MCP server for agent access, and Telegram ingestion that scrapes URLs or cleans pasted text before AI classification. The flywheel is sensible: real conversations become rated threads, then feed instruction optimization.

## Code-verified architecture

- React 18/Vite/TypeScript frontend with Supabase Auth/Postgres and RLS-oriented data access.
- Edge functions: `mcp`, `telegram-webhook`, and `optimize-instructions`.
- MCP tools include read tools plus write operations for creating threads and comments; tool clients are constructed with the caller's auth context.
- The repo includes migrations for instruction groups, versions, threads, Telegram bindings, roles, and MCP-related access.
- Only the starter `src/test/example.test.ts` exists; no tests cover Telegram delivery, external extraction, optimizer failures, MCP auth, or RLS assumptions.

## Verification results

- `npm run build`: **PASS**.
- `npm test -- --run`: **PASS** (1 starter test).
- Vite reports a **779.67 kB** minified entry chunk and recommends route-level dynamic imports.
- README confirms Telegram and Firecrawl are production-critical integration paths, but the repository has no function-level regression suite.

## Product risks

1. Telegram webhook is a multi-system boundary (Telegram → link/auth lookup → Firecrawl or text cleaning → AI classification → persistence); failures and duplicate deliveries need explicit idempotency and observability.
2. MCP write tools and OAuth 2.1 are high-trust surfaces; tests should prove caller scoping and reject cross-user access rather than relying only on schema/RLS intent.
3. The single large frontend bundle will make the first load heavier than necessary, especially for a product with multiple authenticated workspaces and docs pages.
4. Roadmap items are clear, but the next leverage is reliability of ingestion and agent access before adding more UI.

## Agent tasks created

- `instruction-hub-001` — harden Telegram ingest with idempotency, safe failure behavior, and tests.
- `instruction-hub-002` — route-split the frontend bundle and verify production navigation.
