# context-weaver (ParsePad) — Analysis

**Account:** agenticjess-star | **Last push:** 2026-05-05 | **Rating:** 4.2/5

## What It Is
ParsePad — AI context preparation tool. Drop links, PDFs, text → get a clean shareable URL containing all sources scraped and normalized for any LLM. Eliminates 10–30 min of manual copy-paste before AI sessions.

## Code Reality
- Full React + Lovable app (bun, shadcn, TypeScript)
- Components: DropZone, ContentCard, GeneratedPagePreview, ProtectedRoute
- Supabase backend implied (ProtectedRoute = auth)
- Live preview: lovable.app (undeployed to production domain)
- Last push May 5 — 5 weeks stale

## Architecture
- Input layer: URL scraper + PDF parser + text paste
- Processing: normalize → compress → store
- Output: shareable context URL for LLM sessions
- Auth gated (accounts, persistence)

## Verdict
**Real product with real pain point.** Context management for AI power users is a legitimate market (Sage Search angle overlap). Clean architecture, built properly. Gap: needs custom domain + actual user testing to confirm the scraping reliability.

## Portfolio Value
HIGH — demonstrates product thinking at the intersection of AI tooling and developer workflow. Strong PM story: "I use AI seriously, I built the infra I needed."

## Score: 4.2/5
