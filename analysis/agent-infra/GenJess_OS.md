# GenJess_OS — Deep Analysis

**Account:** jGPT-Automated  
**Last updated:** 2026-05-26  
**Size:** 5,222 KB  
**Deployed:** https://ios-launch-plan.vercel.app  
**Commits:** 16 (May 6 – May 26, 2026)  
**Status:** 🟢 DONE  
**Portfolio value:** ⭐ HIGH — command center + skills library

---

## What It Actually Is

This is **Outbound Studio's operating system** — not a standalone app, but the full production monorepo for the 7-agent autonomous outbound sales system. The repo name "GenJess_OS" is slightly misleading; the correct framing is:

> **Outbound Studio** (the product) lives inside **GenJess_OS** (the monorepo shell).

The Vercel homepage (`ios-launch-plan.vercel.app`) points to an **iOS App Store launch plan** artifact — a separate initiative page Jesse built on top of this monorepo. The actual Outbound Studio dashboard is at `jaw-three.vercel.app` (that's JAW, a separate repo — see below).

---

## Architecture

**Monorepo stack (pnpm workspaces):**
- `lib/db/` — PostgreSQL + Drizzle ORM (source of truth for schema)
- `lib/api-spec/` — OpenAPI spec → drives all validation + client generation
- `lib/api-zod/` — generated Zod schemas (never hand-edit)
- `lib/api-client-react/` — generated React Query hooks (never hand-edit)
- `artifacts/api-server/` — Express 5 + Clerk auth (port 8080)
- `artifacts/outbound-studio/` — React + Vite + Tailwind frontend
- `artifacts/ios-launch-plan/` — standalone iOS launch plan HTML page (53KB)
- `artifacts/mockup-sandbox/` — design sandbox
- `.agents/skills/` — 25 skill modules (the gem of this repo)
- `scripts/` — minimal, just a placeholder `hello.ts`

**Auth:** Clerk (`@clerk/express` on server, `@clerk/react` on frontend)  
**Design system:** Technical brutalism — JetBrains Mono, 0 shadows, 0 gradients, 2px max border-radius, uppercase mono labels, dark landing / light dashboard split

---

## DB Schema

Three tables. Clean and purposeful:

```
leads          — businessName, domain, vertical, geo, contactEmail, contactPhone,
                 status, opportunityTag, siteUrl, priceOffered, notes
pipeline_runs  — leadId (FK), status, currentAgent, agentLogs, siteUrl,
                 emailDraft, auditScore
activity       — type, businessName, description, leadId, runId
```

**Status values (important):** `running | completed | failed | paused | awaiting_approval`  
**opportunityTag values:** `no_website | weak_website | outdated | not_ai_citable`

---

## The Skills Library (The Real Gem)

25 skill modules live in `.agents/skills/`. These are **structured knowledge files designed to be read by AI agents** — not just humans. This is Jesse's accumulated knowledge base for how to do elite-level work across design, architecture, iOS, outbound, SEO, etc.

| Skill | Size | Value |
|-------|------|-------|
| `ui-ux-pro-max` | 44KB | ⭐⭐⭐ Massive — 50+ styles, 161 color palettes, 57 font pairings, 99 UX guidelines |
| `architecture-patterns` | 18KB | ⭐⭐⭐ Clean/Hexagonal/DDD patterns |
| `outbound-studio` | 6KB | ⭐⭐⭐ Full 7-agent system spec |
| `mobile-ios-design` | 6KB | ⭐⭐ iOS design patterns + references |
| `agent-tools` | 6KB | ⭐⭐ inference.sh CLI, 250+ AI apps |
| `frontend-design` | 4KB | ⭐⭐ Design fundamentals |
| `supabase-postgres-best-practices` | — | ⭐⭐ DB patterns |
| `vercel-react-best-practices` | — | ⭐⭐ Deploy patterns |
| `vercel-react-native-skills` | — | ⭐⭐ Mobile deploy |
| `tailwind-design-system` | — | ⭐⭐ Tailwind system |
| + 15 more | — | ⭐ solid reference material |

**Critical insight:** These skills are directly usable by any agent I run. I should load the relevant skill file at the start of each analysis session that involves design, architecture, or iOS work.

---

## The 7-Agent Outbound Crew

Full system spec from `outbound-studio/SKILL.md`:

1. **Prospector** — Google Maps + Exa → scored lead JSONL
2. **Strategist** — SEO audit + target dossier
3. **Builder** — spec site built + deployed to Vercel
4. **Auditor** — quality gate before delivery
5. **Packager** — video walkthrough + outreach email
6. **Persona Tester** — simulates target customer
7. **Conductor** — notify Jesse, await approval, recycle if no claim

**Core mechanic:** Build the best version of their site → show it → 7-day claim window → recycle if they pass.

---

## Frontend Pages

The Outbound Studio frontend has 7 pages:
- **Landing** (public, dark) — typewriter terminal demo, 7-agent pipeline diagram, AEO thesis, 3-tier pricing
- **Skills directory** (public) — 22 skill modules, searchable, markdown-rendered
- **Dashboard** (auth) — KPI strip, pipeline runs with 7-step progress, analytics tab
- **Leads console** (auth) — operator table, inject lead sheet, execute sequence
- **Runs console** (auth) — 7-step progress strip, telemetry terminal, audit score ring
- **Agents console** (auth) — roster with system prompts, Slack live channel stream
- **Settings** (auth) — Firecrawl, Browserbase, Supabase, Telegram, n8n webhook config

---

## What's Live vs. What's Not

| Artifact | Status |
|----------|--------|
| iOS launch plan page | ✅ Live at ios-launch-plan.vercel.app |
| Outbound Studio dashboard | ⚠️ Deployed but may need DB connection |
| Agent execution (actual 7-agent runs) | ❓ Unknown — built but not confirmed running |
| Slack integration | ✅ Connected via Replit connectors SDK |

---

## iOS Launch Plan Artifact

The `artifacts/ios-launch-plan/index.html` is a 53KB standalone HTML page detailing an 11-phase iOS App Store launch plan. This appears to be documentation/planning for the LocalCheck iOS app or a general iOS product. Stored here as a Replit artifact alongside the Outbound Studio monorepo.

---

## Integration Ecosystem (31 connected tools in the broader agent stack)

- **Web/Data:** Firecrawl, Browserbase, Serply, Exa, Google Maps, Drive, Docs, Sheets
- **Messaging:** Slack, Telegram, Discord, Reddit, Twitter, LinkedIn, Gmail
- **Payments:** Gumroad, Zoho Invoice, Klaviyo
- **Dev/Deploy:** GitHub, Vercel, Devin MCP, Mobbin MCP
- **AI/Voice:** ElevenLabs, Vapi, OpenRouter, Textit
- **Storage:** Supabase, Cloudinary

---

## Portfolio Assessment

**Verdict: ⭐ HIGH portfolio value — two distinct stories**

1. **Outbound Studio system** — a real AI product with genuine business logic. 7-agent pipeline, live client work (B&R power washing demos), spec sites delivered. This is proof of agentic product thinking, not just vibe coding.

2. **Skills library** — 25 structured knowledge modules that make any agent work smarter. Reusable, composable, valuable to show.

**What to surface externally:** The Outbound Studio landing page, the 7-agent pipeline diagram, a case study on the B&R demos + Ottine pitch.  
**What stays internal:** Clerk credentials, DB schema internals, agent system prompts.

---

## Action Items

- [ ] Confirm Outbound Studio dashboard is live and DB-connected
- [ ] Pull the `ui-ux-pro-max` and `mobile-ios-design` skills into my working context for LocalCheck analysis
- [ ] Determine if the iOS launch plan artifact is for LocalCheck specifically
- [ ] Cross-reference with `jGPT-Automated/outbound-studio` (the B&R client deliverables repo — different from this)
- [ ] Feature GenJess_OS Outbound Studio in portfolio as "AI-native outbound agency system"

---

## Key Files for Reference

```
.agents/skills/ui-ux-pro-max/SKILL.md        ← load for any design work
.agents/skills/outbound-studio/SKILL.md      ← 7-agent full spec
.agents/skills/mobile-ios-design/SKILL.md    ← load for LocalCheck iOS
.agents/skills/architecture-patterns/SKILL.md ← load for backend analysis
lib/db/src/schema/                           ← canonical DB schema
artifacts/outbound-studio/src/pages/         ← frontend page files
replit.md                                    ← full architecture decisions doc
```
