# instruction-hub — 2026-08-02 Deep Dive

## Status
🟡 **Active infrastructure bet / narrow the v1** · confidence 4.4/5

Instruction OS is a Lovable/Vite React application intended to become a version-controlled, agent-callable instruction library. The README describes three surfaces: a visual app, an MCP server with OAuth 2.1, and a Telegram inbox that scrapes or cleans conversations, classifies them with Lovable AI, and links them back to instructions. The repo has 127 tracked files, but the visible frontend is still a standard React shell with a large generated UI component set; the product value is primarily in the backend edge functions and data model.

## Product loop
Groups → Instructions → Versions → production system prompt; rated Threads feed the optimizer; Telegram ingests real conversations; MCP exposes the resulting library to external agents. That is a real flywheel, but it is also four products in one.

## Architecture signals
- React 18 + Vite + TypeScript + Tailwind/shadcn-style UI.
- Lovable Cloud/Supabase is the backend boundary.
- MCP endpoint is a Supabase Edge Function; documented tools include list/read tools plus thread writes/comments.
- OAuth and RLS are part of the intended contract.
- Telegram and Firecrawl ingestion are the differentiating workflow, not the CRUD dashboard.

## Strengths
1. Clear data hierarchy and production-version concept; this avoids turning prompts into an unsearchable notes dump.
2. The MCP surface has a useful read/write split and an explicit `get_production_instruction` primitive.
3. Source tagging for Telegram threads creates a credible audit trail and makes later optimizer evaluation possible.

## Risks / verification gaps
- The README promises MCP/OAuth/Telegram/Firecrawl behavior, but the fetched tree is dominated by frontend files; current edge-function implementation and deployed behavior need a separate verification pass.
- OAuth scope and tenant isolation are existential: a single cross-user instruction or thread leak destroys trust.
- URL scraping creates privacy and prompt-injection risk; fetched conversation text must be treated as untrusted input and never allowed to mutate production instructions without review.
- The optimizer can create a dangerous self-reinforcing loop if low-quality or adversarial threads are rated as evidence.
- `.env` is tracked in the tree listing; verify it contains no live secrets and add a repository-level secret scan gate.

## Next action
Freeze feature expansion and prove one vertical slice end to end: Telegram `/link` → URL/raw text ingest → Firecrawl extraction → classification → draft Thread → human rating → new Instruction Version → MCP `get_production_instruction`. Add explicit draft/published states, audit events, RLS tests, OAuth scope tests, and secret scanning before broad connector rollout.

## Score
**4.4/5** — strategically valuable shared instruction/memory layer, but backend/OAuth proof is the critical next milestone.
