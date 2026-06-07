# 🗺️ Repo Atlas

**Owner:** Jesse Harrick  
**Managed by:** jGPT-Automated (cron agent, daily at 10am CST)  
**Focus accounts:** [agenticjess-star](https://github.com/agenticjess-star) · [GenJess](https://github.com/GenJess)

---

## What This Is

This repo is a **website** — not just a collection of files.

The agent maintains three layers:

| Layer | File | Audience | Auth |
|-------|------|----------|------|
| Public landing | `index.html` | Hiring managers, clients | None |
| Roadmap | `roadmap.html` | Public | None |
| Internal portal | `portal.html` | Jesse only (pin: private) | PIN gate |

Each repo analysis lives inside the portal as a stylized HTML view — click any repo card to open a rich detail modal with verdict, stack breakdown, architecture notes, and action items.

---

## Site Pages

- **`index.html`** — Public-facing portfolio landing. Particle canvas, project grid, skills marquee, about, contact. Emerald accent, Geist/Geist Mono typography, Vercel/Linear DNA.
- **`roadmap.html`** — Visual project roadmap. All active priorities, blockers, and next actions in card form.
- **`portal.html`** — Internal repo intelligence portal. PIN-gated. All analyzed repos displayed as interactive cards with expandable detail modals.

---

## Agent Workflow (Daily Cron)

Each day at 10am CST, the cron agent:

1. **Reads** `meta/progress-log.md` to find exactly where it left off
2. **Scans** for any new repos or pushes across agenticjess-star + GenJess (last 24h)
3. **Analyzes** the next 3 repos from the roadmap queue — reads actual code via GitHub API (file tree, key source files, commit history, not just README)
4. **Writes** analysis to `analysis/<cluster>/<repo>.md`
5. **Updates** `portal.html` — adds new repo cards + analysis data to the ANALYSES object
6. **Updates** `meta/progress-log.md` CURRENT POSITION and portal stats
7. **Commits + pushes** all changes to this repo
8. **Telegrams** Jesse a summary of what was found

> **The output is the website, not the markdown files.** The .md files in `analysis/` are the raw source. The portal is the presentation layer.

---

## Roadmap — 41 Repos, 6 Tiers

### TIER 1 — Agentic & Outbound *(Days 1–4, mostly done)*

| Status | Repo | Account | Size | What It Is |
|--------|------|---------|------|-----------|
| ✅ | [GenJess_OS](https://github.com/jGPT-Automated/GenJess_OS) | jGPT-Automated | 5.2MB | Outbound Studio monorepo — canonical |
| ✅ | [outbound-studio](https://github.com/jGPT-Automated/outbound-studio) | jGPT-Automated | 6.1MB | Real client deliverables (6 sites) |
| ✅ | [AgentAgency](https://github.com/agenticjess-star/AgentAgency) | agenticjess-star | 5.1MB | GenJess_OS mirror (DUPLICATE) |
| ✅ | [career-ops](https://github.com/GenJess/career-ops) | GenJess | 8.5MB | OSS job search tool (EXTERNAL) |
| ✅ | [AgenticJess](https://github.com/GenJess/AgenticJess) | GenJess | 138KB | Gemini voice portfolio SPA |
| ✅ | [TEAIMS](https://github.com/GenJess/TEAIMS) | GenJess | 399KB | 9-agent startup launch system |
| ✅ | [agentarena](https://github.com/GenJess/agentarena) | GenJess | 73KB | Agent debate UI prototype |
| ✅ | [context-canvas](https://github.com/agenticjess-star/context-canvas) | agenticjess-star | 464KB | Multi-user context SaaS |
| 🔴 | [context-weaver](https://github.com/agenticjess-star/context-weaver) | agenticjess-star | 1.9MB | Next |
| 🔴 | [instruction-hub](https://github.com/agenticjess-star/instruction-hub) | agenticjess-star | 421KB | Next |

### TIER 2 — Portfolio & Identity *(Week 1–2)*

| Status | Repo | Account | Size |
|--------|------|---------|------|
| 🔴 | GenerativeJesse-LIVE | GenJess | 9.3MB |
| 🔴 | GenJess.github.io | GenJess | 36KB |
| 🔴 | agentjess-portfolio | GenJess | 71KB |
| 🔴 | GenJess-v1 | GenJess | 67KB |
| 🔴 | JessesPortfolio | GenJess | 53KB |
| 🔴 | Scrolling-Portfolio | GenJess | 81KB |
| 🔴 | AgentInvesting | GenJess | 38KB |
| 🔴 | AreaScanner-Pro | GenJess | 65KB |
| 🔴 | Promptry | GenJess | 522KB |

### TIER 3 — LocalCheck *(Week 2)*

| Status | Repo | Account | Size |
|--------|------|---------|------|
| ✅ | LocalCheckLive | agenticjess-star | 12.5MB |
| 🔴 | localcheck | agenticjess-star | 1.1MB |
| 🔴 | LocalCheck-IOS | agenticjess-star | 282KB |
| 🔴 | CourtCheck | GenJess | 80KB |
| 🔴 | Pool-Hall | GenJess | 11KB |
| 🔴 | localcheck-nike | GenJess | 0KB |

### TIER 4 — OmniaVital *(Week 2)*

| Status | Repo | Account | Size |
|--------|------|---------|------|
| 🔴 | OmniVital | GenJess | 843KB |
| 🔴 | omnivital-vision | GenJess | 1.3MB |
| 🔴 | omniavital-v3 | agenticjess-star | 652KB |
| 🔴 | omniavital_v1 | GenJess | 309KB |
| 🔴 | OMNIVITAL-BUSINESS | agenticjess-star | 120KB |
| 🔴 | omnivital-pitch | agenticjess-star | 0KB |

### TIER 5 — Trading & Finance *(Week 3)*

| Status | Repo | Account | Size |
|--------|------|---------|------|
| ✅ | alpha-gauge | agenticjess-star | 513KB |
| 🔴 | OptIQ | GenJess | 842KB |
| 🔴 | stocktok | GenJess | 643KB |
| 🔴 | polygo-up-or-down-live | agenticjess-star | 3.2MB |
| 🔴 | polyupgrade | agenticjess-star | 3.1MB |
| 🔴 | crypto-ml | GenJess | 16KB |

### TIER 6 — Voice & Conversational *(Week 3)*

| Status | Repo | Account | Size |
|--------|------|---------|------|
| 🔴 | yeflow | GenJess | 17KB |
| 🔴 | yep | GenJess | 0KB |
| 🔴 | Medical-Voice-Agent-AssemblyAI | GenJess | 2.3MB |

---

## Skipped / Out of Scope

| Repo | Reason |
|------|--------|
| agenticjess-star/openclaw | External clone (243MB) |
| GenJess/cua | External clone (207MB) |
| jGPT-Automated/JAW | Per Jesse's direction |
| 2025-07-26 batch | Mass import — likely external/old |

---

## Structure

```
repo-atlas/
├── index.html            ← PUBLIC landing page
├── portal.html           ← INTERNAL portal (PIN-gated, all analysis)
├── roadmap.html          ← Visual roadmap page
├── README.md             ← This file
├── meta/
│   ├── progress-log.md   ← Agent working memory (READ FIRST each run)
│   ├── master-inventory.md
│   └── synthesis-notes.md
└── analysis/             ← Raw .md source files (agent writes here first)
    ├── agent-infra/
    ├── bnr-client/
    ├── localcheck/
    └── trading/
```
