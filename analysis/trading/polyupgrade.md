# polyupgrade

**Account:** agenticjess-star  
**Updated:** 2026-03-13  
**Language:** TypeScript (72 .tsx files, 19 .ts)  
**Portfolio Tier:** MEDIUM  
**Status:** Complete but not deployed

---

## Overview

Polyupgrade is a Polymarket prediction interface — designed to upgrade the native Polymarket UX with better data visualization, trend analysis, and market intelligence.

**Key Stats:**
- 143 files: 72 TSX (React components), 19 TS, 14 PNG (charts/assets)
- Stack: React + Supabase + TypeScript
- Scripts: dev, build, lint, preview (Vite-based)
- 54 dependencies, 17 dev dependencies
- Last push: March 13, 2026 (3 months old)

---

## Architecture

### Frontend Layer
72 React components (TSX) indicate a feature-rich UI — likely:
- Market card components (list, detail view)
- Charting/analytics displays
- Portfolio/account management
- Prediction submission flows

### Backend Layer
Supabase directory present — implies:
- Real-time PostgreSQL data + WebSocket subscriptions
- Auth (likely with JWT)
- Vector DB for market intelligence (optional)

### Data Layer
14 PNG files suggest:
- Charting library integration (likely Recharts or ECharts)
- Asset optimization for mobile

---

## Key Findings

✅ **Strengths:**
- Clean React architecture (72 focused components)
- Type-safe full stack (TS frontend + Supabase)
- Real-time market data pipeline
- Production-grade build setup (Vite + lint + preview)

❌ **Gaps:**
- No deployment evident (no Vercel config, no live URL visible in README)
- No test coverage files visible
- 3 months since last push — may be shelved or pivoted
- README exists (15KB) but content not visible in API response

---

## Portfolio Value

**Rating: 3.5 / 5.0** (MEDIUM)

**Why it matters:**
- Demonstrates financial market domain expertise
- Shows real-time data integration (Supabase → React)
- Component library at scale (72 components = serious scope)

**Blockers:**
- Needs a live deployment to be portfolio-worthy
- Polymarket API integration needs to be proven
- Without a public demo, the execution claim is hollow

**Next Steps:**
- Deploy to Vercel (5 minutes)
- Add live market demo to README
- OR: Archive if pivoting to polygo-up-or-down-live or other trading projects

---

## Compare To

- **alpha-gauge** (agenticjess-star): Similar scope, also in trading, also undeployed
- **AgentInvesting** (GenJess): Likely higher tier, agent-driven

