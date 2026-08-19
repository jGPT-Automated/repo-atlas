# instruction-hub — 2026-08-03 deep dive

## Verdict
**🟡 Highest-leverage infrastructure bet — 4.4/5.** The repository has a real product spine: React/Vite UI, Supabase migrations, three Edge Functions, MCP tools, Telegram ingestion, Firecrawl extraction, and an optimizer loop. It is materially more than a landing page. The next proof is not another feature: it is a controlled end-to-end run with OAuth, Telegram binding, ingestion, classification, RLS, and failure handling.

## Evidence inspected
- 127 tracked files; TypeScript; default branch `main`; repository pushed 2026-07-28.
- `supabase/functions/mcp/index.ts`, `telegram-webhook/index.ts`, and `optimize-instructions/index.ts`.
- Supabase migrations, MCP tool modules, `AuthContext`, public endpoint/OAuth consent pages, and README/package configuration.
- The tracked `.env` contains a Supabase URL, project id, and an anon publishable key. No service-role key was observed in that file; nevertheless, committing environment files is poor hygiene and should be removed/rotated if this repository is ever made broadly visible.

## What is real
The README’s hierarchy (groups → instructions → versions → threads) is represented in the database/UI, and the MCP surface includes read tools plus thread/comment writes. The Telegram webhook parses `/link CODE`, extracts URLs, calls Firecrawl v2, cleans raw text, sends content to Gemini through the Lovable gateway for title/group/rating classification, and writes through the Supabase service-role client. The classifier validates the returned `group_id` against the user’s groups instead of trusting arbitrary model output.

## Risks / gaps
1. **Service-role blast radius:** the webhook uses the Supabase service-role key for every request. The chat binding must be the hard authorization boundary; verify that every non-link message requires a valid binding and that bindings are scoped to the exact Telegram chat/user.
2. **Ingestion reliability:** Firecrawl, AI, Telegram send, and database writes are sequential external calls. Add idempotency on Telegram `update_id`, explicit status/error records, bounded content sizes, and retry/dead-letter behavior.
3. **Prompt/data boundary:** scraped thread content is placed directly into the classifier prompt. Treat imported content as untrusted input and constrain classification output with a schema plus length limits. Do not let scraped instructions influence tool behavior.
4. **MCP authorization proof:** the README claims OAuth 2.1 and RLS; the next test should use two accounts and prove that `list_*`, `get_production_instruction`, and write tools cannot cross tenant boundaries.
5. **Tracked `.env`:** keep only `.env.example`; rotate any credential that has ever been committed and add secret scanning/pre-commit checks.

## Recommended next move
Run one golden-path test: create a temporary group/instruction, bind a Telegram chat, ingest one URL and one text thread, verify classification and source tags, retrieve the production instruction through MCP, then repeat the read/write calls as a second user. Capture latency, failure behavior, and RLS evidence in a small smoke-test document.
