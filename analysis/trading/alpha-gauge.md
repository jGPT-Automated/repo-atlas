# alpha-gauge

**Cluster:** Trading / Options intelligence  
**Date:** 2026-06-10  
**Link:** https://github.com/agenticjess-star/alpha-gauge  
**Rating:** 3.9/5 (MEDIUM-HIGH)

---

## Overview

A real-time crypto trading intelligence dashboard focused on Polymarket prediction markets. Streams live price feeds, implied probabilities, and model-driven edge signals for UP/DOWN binary options. Built with React 18 + Vite + Tailwind + Shadcn. Last commit April 17, 2026 (7 weeks stale). **No live URL found.**

---

## Technical Architecture

**Frontend Stack:**
- React 18 + Vite (build)
- TypeScript + ESLint
- Tailwind CSS + Shadcn + Radix UI (full component library)
- React Hook Form + Zod (form validation)
- TanStack React Query v5 (state + data sync)
- Recharts (charting library for price visualization)
- Embla Carousel (carousel component)
- react-resizable-panels (layout management — important for dashboard)

**Backend/Services:**
- Lovable Cloud (Supabase edge functions implied)
- Polymarket Gamma API (live order book)
- CLOB WebSocket (continuous limit order book — real-time feeds)
- RTDS WebSocket (real-time data stream)

**Architecture Diagram (from README):**
```
Spot vs Strike → Implied Probability → Model Edge → Action
           ↓                ↓                ↓            ↓
      [Underlying price check]  [Market pricing]  [AI/ML comparison]  [Buy/Hold/Exit]
```

**File Structure:**
- 132 total files | 98 code files | 100 TypeScript files
- Resizable panel layout (suggesting multi-pane dashboard UI)
- Main src files not fully enumerated (sorting error in extraction)

**Deployment:**
- No live URL detected
- Bun lockfile (local build with Bun)
- Build output likely in dist/ (Vite default)
- README mentions "Ready for deployment" but no evidence of public URL

---

## Product Architecture

**Dashboard Flow:**

1. **Left Panel: Spot Check**
   - Current underlying asset price (e.g., BTC price)
   - Is it above or below the strike?
   - Visual indicator of position

2. **Center Panel: Probability Analysis**
   - Polymarket implied probability for UP
   - Polymarket implied probability for DOWN
   - Real-time price (WebSocket feed)
   - Visual chart (Recharts)

3. **Right Panel: Model Edge**
   - "Does our model disagree with market?"
   - Filtered probability (custom ML/statistical model)
   - Edge signal: If model says 65% UP but market prices 50% UP → **BUY UP contract**
   - Explainable reasoning

4. **Action Panel**
   - Buy / Hold / Exit buttons
   - Governance constraints (risk limits, position sizing)
   - Order execution (WebSocket to CLOB)

---

## Code Quality Signals

**Strengths:**
- ✅ **Full TypeScript** (type-safe)
- ✅ **Real-time architecture** (WebSocket + React Query = live data)
- ✅ **Dashboard UX sophistication** (resizable panels, Recharts, Shadcn design system)
- ✅ **Form validation + trading logic** (Zod + React Hook Form)
- ✅ **Component modularity** (Shadcn + Radix)
- ✅ **Production build pipeline** (ESLint, Vite, bun.lock)

**Concerns:**
- ⚠ **7 weeks stale** (April 17 last commit)
- ⚠ **No public deployment** (no live URL = hiring managers assume abandoned)
- ⚠ **Limited commit history** (only 5 recent commits visible; unclear how long in development)
- ⚠ **Regulatory/legal risks** (crypto trading + Polymarket = gray area in US)
- ⚠ **API dependencies** (Polymarket API + CLOB WebSocket — third-party risk)
- ⚠ **No visible testing** (no Jest/Vitest in deps)
- ⚠ **Model/ML layer unclear** (where does the "edge" come from?)

---

## Commit History (Last 5)

```
2026-04-17  Merge pull request #1 — Harden live feeds and align market decision UX
2026-04-16  Harden live feeds and align market decision UX
2026-03-29  Redesign center panel around live prices
2026-03-29  Recenter to live prices
2026-03-29  Redesign center price chart
```

**Pattern:**
- March 29: Redesign sprint (price chart UX)
- April 16-17: Final hardening + PR merge
- **No activity since April 17 (silent for 7 weeks)**

---

## Portfolio Value

**Strengths:**
- ✅ **Complex real-time UI** (WebSocket + React = advanced frontend)
- ✅ **Financial domain expertise** (options, probability, edge signals)
- ✅ **Trading product thinking** (decision flow is crystal clear)
- ✅ **Production-grade code** (TypeScript, Shadcn, validation)
- ✅ **Crypto / DeFi knowledge** (Polymarket, CLOB, implied probability)

**Weaknesses:**
- ⚠ **No live demo** (can't see it in action)
- ⚠ **Stale codebase** (7 weeks = appears abandoned)
- ⚠ **Regulatory uncertainty** (crypto trading in uncertain legal landscape)
- ⚠ **ML/model layer hidden** (where does the alpha come from? Black box?)
- ⚠ **No monetization visible** (is this a tool for personal use? B2B play?)

---

## Deployment Blockers (Hypotheses)

**Why it's not live:**

1. **Regulatory risk** — Hosting a crypto trading UI could trigger SEC/FinRA scrutiny
2. **API stability** — Polymarket CLOB WebSocket or Gamma API may have changed
3. **Model unprofitable** — If the statistical model doesn't generate alpha, deployment seems pointless
4. **Pivoted to other work** — LocalCheck + TEAIMS may have higher ROI
5. **Domain registration / hosting** — Missing infra decision

**To ship it:**
1. Deploy to Vercel with public URL
2. Add explainability dashboard (show model accuracy over time)
3. Clarify legal status (is this for personal use only? B2B tool?)
4. Add backtesting results (prove the edge exists)
5. Consider iOS app for mobile trading

---

## Tier Assessment

- **Code quality:** 8/10 (real-time architecture, component design solid)
- **Scope:** 7/10 (full trading dashboard, complex domain)
- **Deployment:** 2/10 (no live URL, stale)
- **Portfolio impact:** 6/10 (looks impressive, but unverifiable without demo)
- **Momentum:** 1/10 (silent for 7 weeks)

**Final Score: 3.9/5 (MEDIUM-HIGH, but stalled) — Has technical depth, needs proof.**

---

## Key Insight

**Pattern across all repos:** Jesse ships fast (code quality 8+/10), but **deployment is where he gets stuck**. This repo is a perfect example: the UX is sophisticated, the architecture is sound, but there's no public URL. This is the #1 signal for hiring managers: "Can he take it to market?"

**Recommendation:** Pick the 3-5 repos with highest portfolio value (alpha-gauge is one), deploy each to Vercel with a single landing page, and link them from genjess.github.io. Each live demo cuts through 100 "just shipped" claims.

---
