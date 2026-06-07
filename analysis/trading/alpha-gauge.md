# alpha-gauge — Deep Analysis

**Account:** agenticjess-star  
**Created:** 2026-03-02  
**Last updated:** 2026-05-24  
**Size:** 513KB  
**Status:** 🟢 DONE  
**Portfolio value:** ⭐⭐ MEDIUM — solid trading dashboard, core concept complete, missing deployment

---

## What It Is

A **real-time Polymarket trading intelligence dashboard** — monitors crypto Up/Down binary contracts on Polymarket, streams live WebSocket price feeds, and surfaces trading edges via a multi-panel decision engine.

The core use case: operators spot market mispricing between Polymarket's implied probability and a proprietary edge model (Particle Filter + Monte Carlo), then execute trades with logged governance.

---

## Stack

- **Frontend**: React 18 + TypeScript + Vite + Tailwind + shadcn/ui
- **Backend**: Lovable Cloud (Supabase Edge Functions)
- **Data**: Polymarket Gamma API + CLOB WebSocket + RTDS WebSocket
- **Analysis**: Particle Filter, Monte Carlo simulation, Brier scoring, Decision Engine
- **Build**: Vite, Vitest, Bun (lock files present)

---

## Architecture & UI

**Decision flow** (operator-centric, clearly documented in README):
1. **Spot vs strike** — "Is the underlying currently above/below the market threshold?"
2. **Implied probability** — "What is Polymarket pricing for UP vs DOWN right now?"
3. **Model edge** — "Does filtered probability disagree with market enough to matter?"
4. **Action** — "BUY / HOLD / EXIT with explainable conditions + governance log"

**18 components** (well-organized by concern):
- `UpDownDisplay.tsx` — 5.2KB — primary UI showing UP/DOWN contracts + spot price
- `ProbabilityEngine.tsx` — 9KB — largest component, edge model logic
- `EventHistory.tsx` — 5.5KB — audit trail of trades/decisions
- `GovernancePanel.tsx` — 3.5KB — rule engine + decision logging
- `MarketsPanel.tsx` — 6.4KB — market discovery + timeframe selector
- `PriceChart.tsx`, `SpotPriceChart.tsx` — 7.8KB combined — charting
- `BrierScoreDisplay.tsx`, `MonteCarloGrid.tsx` — model accuracy metrics
- `DecisionEngineDisplay.tsx`, `RulesEngine.tsx` — action logic

**UI Design Pattern**: Center-panel narrative (spot → probability → edge → action) with telemetry strips in top bar. Operators can reason quickly under time pressure.

---

## Key Technical Features

### Polymarket Price Pipeline (Well-Documented)

**Two discovery strategies:**

1. **Deterministic epoch-based slugs** (5m, 15m, 4h):
   - Pattern: `{asset}-updown-{timeframe}-{epoch_timestamp}`
   - Predictable — you can compute the slug for any past/future window
   - Direct fetch via `GET https://gamma-api.polymarket.com/events/slug/{exact-slug}`

2. **Non-deterministic markets** (daily, weekly, monthly):
   - No computable pattern
   - Discovery via `/events?limit=1000` + filter for `updown` slug + asset

**WebSocket streams:**
- CLOB WebSocket — `wss://ws.polymarket.com` — real-time order book depth
- RTDS WebSocket — market-specific price ticks (subscription required)

README documents the exact protocols, endpoints, and subscription patterns. This is detailed operational knowledge.

### Governance & Auditing

- `GovernancePanel` — define decision rules (e.g., "only buy if edge > 5% AND Brier score > 0.75")
- `EventHistory` — immutable log of all trades + reasoning
- `DecisionEngineDisplay` — explainable conditions for each action

This is sophisticated for a trading dashboard — most retail dashboards don't have built-in decision logging.

---

## What's Missing / Incomplete

- **No deployed URL** — repo has `.env` file (350 bytes) but no public hosting reference
- **Backend not wired** — Lovable Cloud (Supabase Edge Functions) referenced but no actual functions visible in repo
- **Real trading integration** — components exist but unclear if hooked to actual Polymarket account/API keys
- **Particle Filter implementation** — referenced in README but actual algorithm not visible in components (likely in `/lib` or `/integrations` — didn't traverse deep)
- **Data sources** — Polymarket Gamma API documented, but no live connection confirmation

**Last commit (2026-05-24):** "Harden live feeds and align market decision UX" — suggests work was active. But the project appears stalled at feature-complete (no commits since May 24, 53 days ago).

---

## Portfolio Assessment

**Strengths:**
- ✅ Polymarket integration is real and detailed — not a tutorial project
- ✅ Operator-centric design (decision flow clarity) shows product thinking
- ✅ Governance/audit layer is sophisticated for retail trading
- ✅ Well-documented README (12.8KB) — technical spec + API patterns

**Gaps:**
- ❌ No live product URL — can't verify the UI works end-to-end
- ❌ Missing backend glue — Edge Functions not visible or not deployed
- ❌ No trading activity history — can't show "I executed X trades with Y profitability"
- ❌ Stalled since May 24 — suggests incomplete or deprioritized

**Tier assessment:** MEDIUM-to-HIGH if deployed and wired. Currently MEDIUM because it's a well-designed concept missing live deployment.

---

## Action Items

1. **Deploy** — host on Vercel (frontend) + wire Supabase Edge Functions (backend). This moves it to HIGH tier immediately.
2. **Case study** — document the Polymarket integration + decision logic in a written case study. The README is 80% there already.
3. **Trading history** — if live, include a redacted P&L screenshot or trade count to prove it works.
4. **Compare to trading-bot projects** — see if this should be folded into a larger "AI Trading" case study with other repos (polyupgrade, polygo-up-or-down-live).

---

## Cross-Reference

Overlaps with **polyupgrade** and **polygo-up-or-down-live** (both agenticjess-star). These likely form a "Polymarket Thesis" cluster in the portfolio. Recommend analyzing them together and consolidating into 1 canonical case study.
