# outbound-studio (B&R Client Deliverables) — Deep Analysis

**Accounts:** jGPT-Automated (canonical, most recent), agenticjess-star (mirror)  
**Last updated:** 2026-05-30 (jGPT-Automated)  
**Size:** 6,276 KB  
**Status:** 🟢 DONE  
**Portfolio value:** ⭐ HIGH — real client work, live demos

---

## IMPORTANT: Do Not Confuse With GenJess_OS

There are TWO repos named "outbound-studio":

| Repo | What it is |
|------|-----------|
| `jGPT-Automated/GenJess_OS` | The Outbound Studio **product monorepo** — the system, dashboard, and skill library |
| `jGPT-Automated/outbound-studio` | The **client deliverables** — actual spec sites and pitch docs built FOR leads using the system |

This analysis covers the **client deliverables repo**.

---

## What's In It

```
outbound-studio/
├── index.html                    ← Main hub/index (27KB)
├── BNR-Digital-Opportunity.html  ← B&R Power Washing opportunity one-pager (37KB)
├── alkemy-barber-studio/         ← Spec site built for Alkemy Barber Studio
│   ├── index.html                ← Full site (28KB)
│   ├── llms.txt                  ← AEO/LLM citation text
│   ├── pitch/                    ← Pitch materials
│   └── robots.txt
├── alkemy-barber-studio-demo/    ← Demo variant
├── blawgy/                       ← Blawgy spec site (40KB)
├── blawgy-captain/               ← Blawgy CAPTAIN variant, light-mode editorial SaaS (41KB)
├── blawgy-sp/                    ← Another Blawgy variant
├── ventura-demo/                 ← Ventura demo (41KB) + llms.txt
├── assets/                       ← Shared assets
└── builds/                       ← Build outputs
```

---

## Clients / Leads Represented

### 1. B&R Power Washing (Houston)
- **File:** `BNR-Digital-Opportunity.html` (37KB)
- **Type:** Opportunity one-pager / pitch doc
- **Purpose:** Demonstrates digital opportunity to B&R — weak web presence → here's what we'd build
- **Status:** Active client, also has repos `bnr-power-washing`, `BNR_Project_Hub`, `bnr-seo-report`

### 2. Alkemy Barber Studio
- **Files:** Full spec site + pitch + llms.txt
- **Type:** Spec site built on-spec before outreach
- **llms.txt:** AEO optimization — makes the site citable by AI search
- **Status:** Demo delivered

### 3. Blawgy (SaaS)
- **Variants:** `blawgy/`, `blawgy-captain/`, `blawgy-sp/`
- **Type:** Editorial SaaS redesign — 3 style variants (standard, CAPTAIN light-mode, third variant)
- **Size:** Each 40-41KB — these are full, complete site builds
- **Note:** Multiple variants suggest an A/B or persona-testing workflow (matches Outbound Studio's "Persona Tester" agent)

### 4. Ventura Demo
- **Files:** Full site (41KB) + llms.txt
- **Type:** Spec demo site
- **Ottine Mineral Springs** — most recent commit (May 30) added pitch site for Ottine

---

## llms.txt Pattern

Two of the spec sites include `llms.txt` — a structured file that makes the business citable by AI language models (AEO: Answer Engine Optimization). This is a signal that Jesse/Outbound Studio understands the AEO thesis and is implementing it in actual client deliverables. This is a differentiator worth highlighting in the portfolio.

---

## Most Recent Commits (May 2026)

```
2026-05-30 | add: Ottine pitch site (proposal, receipts, tiers, 12-mo timeline)
2026-05-30 | fix: replace hotlink-blocked images with Ottine-hosted images
2026-05-27 | feat: Blawgy CAPTAIN variant — light-mode editorial SaaS redesign
```

Active. Real clients being onboarded as recently as May 30.

---

## Portfolio Assessment

**What makes this high-value:**
- Real spec sites with real business names and actual pitch materials
- AEO-native (`llms.txt`) — ahead of market
- Multiple style variants per lead = systematic, testable approach
- Shows the full loop: prospect → build → pitch

**What to show externally:**
- Alkemy Barber Studio site (clean barber shop example)
- Blawgy CAPTAIN (SaaS editorial — strong design)
- Ventura or Ottine (hospitality/local business)
- The `llms.txt` pattern as an AEO differentiator

**What NOT to show:** Internal pitch pricing, client contact details, pipeline internals

---

## Canonical vs. Mirror

- `jGPT-Automated/outbound-studio` — **canonical** (most recent commits, May 30)
- `agenticjess-star/outbound-studio` — **mirror** (last updated May 28, slightly behind)
- `agenticjess-star/OutboundStudio` — **3KB stub**, ignore

**Recommendation:** Point all references to `jGPT-Automated/outbound-studio`.
