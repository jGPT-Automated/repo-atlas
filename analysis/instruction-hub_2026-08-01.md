# instruction-hub — Daily Deep Dive (2026-08-01)

## Status
**ACTIVE INFRASTRUCTURE / QUIET AFTER RECENT DEVELOPMENT** — confidence 4.4/5. Last repository update is 2026-07-24, with the public README describing a substantial Instruction OS rather than a simple prompt library.

## Product
Instruction OS is positioned as a version-controlled operating system for custom AI instructions. It has three interaction surfaces: a web app to organize/version/promote instructions, an MCP server for agent access over OAuth, and a Telegram inbox that accepts chat URLs or pasted threads, scrapes/classifies them, and sorts them into groups.

## Evidence
- README names the core flywheel: Groups → Instructions → Versions → system prompts, with rated threads feeding an optimizer.
- Integrations/architecture called out in the repo: Model Context Protocol 2.1, Lovable Cloud backend, Firecrawl ingestion, Lovable AI classification, and Telegram.
- The repo contains 127 tracked files and the latest public user activity is on `mcp-work`, indicating MCP work is the most recent visible direction.

## Strategic read
This is potentially the highest-leverage repo in the queue because it can become the memory/instruction layer for every other agent project. Its risk is scope: app, MCP server, Telegram ingestion, scraping, classification, versioning, and optimization are multiple products.

## Recommendation
Force a narrow v1 around one reliable loop: ingest a thread → classify → create a versioned instruction → retrieve it through MCP. Defer optimizer scoring, multi-provider parity, and broad persona templates until the end-to-end loop has telemetry. The next deep dive should inspect OAuth boundaries, Telegram ingestion failure handling, and whether versions have immutable IDs/diffs.
