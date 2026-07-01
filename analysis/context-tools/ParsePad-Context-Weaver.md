# ParsePad (Context-Weaver) — AI Context Manager

**Account:** agenticjess-star  
**Repo:** agenticjess-star/Context-Weaver  
**Pushed:** 2026-05-05 (57 days stale)  
**Language:** TypeScript + React  
**Status:** MVP (live preview exists, needs production deployment)  
**Live Preview:** id-preview--7059bc71-a2ce-4cf9-950c-129dbceae8e7.lovable.app

---

## What It Is

ParsePad is a **context-preparation tool for the AI era**. It solves a real friction point in knowledge work:

Before any serious LLM session, knowledge workers spend 10–30 minutes:
- Copying from 10+ browser tabs
- Dragging PDFs into the chat
- Pasting text from Notion, Slack, email
- Re-ordering sources
- Hoping the context fits within the model's window

**ParsePad compresses this into a single shareable URL — one link that contains every source, normalized into clean text any model can ingest.**

---

## The Solution: Two Primitives

### 1. **Windows** — Project Containers
Collections of sources organized around how knowledge workers already think:
- Per client
- Per research topic
- Per feature sprint
- Per legal case

A Window is a **mutable collection** (add/remove sources anytime).

### 2. **Generated Pages** — Static HTML Artifacts
When you generate a Window, ParsePad compiles every source into a **static, framework-free HTML page** served at a permanent `/p/{slug}` URL.

**Why static HTML?**
- Works with browsing-enabled LLMs (Claude, ChatGPT web)
- Works with URL-injection tools
- Works with plain old humans reading it
- No JavaScript required
- Instant load, zero dependencies

**The flow:**
```
Create Window → Drop sources (URLs, files, text) → Generate → Share URL → Paste into any AI
```

---

## Strategic Design Decisions

### 1. Static HTML as Output Format
- Pre-rendered HTML stored in Postgres
- Served via `<iframe srcDoc>` (no client-side composition)
- No SPA shell wrapping it
- Zero JS overhead for consumption

**Why:** Generated pages need to be deterministic, shareable, and universally compatible.

### 2. Permanent URLs
- Once generated, `/p/{slug}` is permanent
- Context doesn't evaporate when the chat ends
- Shareable across teams, sessions, tools

### 3. Source Normalization
- **URLs:** Scraped (Firecrawl or similar)
- **PDFs:** Text extraction
- **Text:** As-is
- **Images:** OCR extraction
- All normalized to **clean, LLM-digestible text**

### 4. No User Account Friction
- Early versions may be login-free (public Windows)
- Later: optional auth for private collections

---

## Current Build Status

**What exists (MVP):**
- React + TypeScript frontend
- Window creation UI
- Source drag-and-drop (URLs, files, text)
- Lovable.app deployment (live preview)
- HTML generation logic

**Architecture:**
- Frontend: React, Tailwind, TypeScript
- Backend: Supabase (auth, data persistence)
- Deployment: Lovable.app (serverless, Postgres + API)
- Integration: Firecrawl or similar scraper for URL→text

**File count:** 97 (structured, mature codebase)

---

## Why This Scores High

1. **Solves real pain:** Every AI user feels this friction. ParsePad eliminates copy-paste chaos.
2. **Strategic simplicity:** Static HTML as the output format is elegant and future-proof.
3. **Portable format:** Works with Claude, ChatGPT, Anthropic Claude API, humans — no vendor lock-in.
4. **Scalable GTM:** Windows (personal) → Teams (shared) → Enterprise (governance).
5. **Live MVP:** Already deployed on Lovable (not vaporware).

---

## Gaps & Risks

1. **Stale:** Last commit 2026-05-05 (57 days). Waiting on what? Feature gap? Lower priority?
2. **Live preview only:** On `lovable.app` (not a production domain). Needs owned domain (`parsepad.xyz`, etc.).
3. **Integration gaps:** Firecrawl integration, PDF extraction, OCR — all referenced but not fully shown.
4. **Monetization unclear:** Free tiers? API pricing? Team plans? No strategy visible.
5. **Competition:** Pinecone, LangChain memory, prompt libraries, ChatGPT's "Custom Instructions" all solve adjacent problems.

---

## Market Positioning

**Category:** AI-native knowledge management + context compression

**Competitors:**
- ChatGPT Custom Instructions (limited, vendor lock-in)
- Notion + LLMs (generic, not optimized)
- Pinecone/Weaviate (requires engineering)
- LangChain memory (framework-specific)
- Obsidian + plugins (static, not for AI)

**Differentiation:**
- Purpose-built for LLM context
- One-click generation of ready-to-paste URLs
- Zero engineering needed (GUI-driven)
- Portable format (works everywhere)

---

## Development Signals

- **Cadence:** Episodic (live MVP, then 57-day gap)
- **Decision-making:** Strong (static HTML, permanent URLs, source normalization)
- **Shipping readiness:** MVP ready, needs domain + marketing
- **Maintenance:** Appears deprioritized (May 5 → July 1 = 57 days gap)

---

## Hiring Signal

**Tier:** MEDIUM-HIGH — demonstrates product thinking + AI-native workflow design

**Keywords:**
- AI product design
- Context management at scale
- PDF/document processing
- Web scraping integration
- Supabase architecture
- Knowledge work optimization

**For:** AI product manager, full-stack engineer, knowledge work PM.

---

## Score: 4.0 / 5

**Reasoning:**
- ✅ Solves real AI-era problem
- ✅ Strategic design (static HTML, permanent URLs)
- ✅ MVP live + working (Lovable.app)
- ✅ Clean architecture (React + Supabase)
- ✅ Thoughtful source normalization
- ⚠️ Stale (57 days, deprioritized?)
- ⚠️ Lovable.app only (not production domain)
- ⚠️ Integration gaps visible (Firecrawl, OCR)
- ⚠️ Monetization strategy missing

---

## Next Steps

1. **Deploy to production domain** (ParsePad.xyz, contextweaver.app, etc.)
2. **Finish source integrations** (Firecrawl, PDFs, images)
3. **Add auth + private Windows** (monetization foundation)
4. **Build API** (integrate into LLM workflows, zapier, etc.)
5. **Iterate on Windows UX** (bulk import, tagging, labeling)

---

## Portfolio Positioning

ParsePad is a **strong show-and-tell for AI product thinking**. 

In interviews: *"I built a context-compression tool that solves the 10-minute copy-paste problem before LLM sessions. The insight was static HTML as the output format — it works with any model, any tool, any human. MVP is live on Lovable; currently iterating on source integrations and production deployment."*

Lead with the **problem identification** + **strategic simplicity** of the solution.
