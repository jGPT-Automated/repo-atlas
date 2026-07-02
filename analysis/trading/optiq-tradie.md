# OptIQ (TrAide — AI Trading Platform)

**Account:** GenJess  
**Last push:** 2026-04-07 (86 days stale)  
**Files:** 176 — full stack React + Alpaca API  
**Status:** High-ambition, stalled mid-build

## What It Is

**TrAide**: A self-directed **retail trading platform** combining real-time market data (Alpaca), portfolio management, options analysis, and an AI trading assistant ("Trai") that educates but doesn't auto-trade.

Core thesis: *Best trading tools don't just show data — they help you understand it.*

## Architecture

| Layer | Tech |
|-------|------|
| **Frontend** | React 18 + TypeScript + Vite |
| **UI** | Tailwind + shadcn/ui (semantic tokens) |
| **State** | React hooks + TanStack Query |
| **Charts** | Recharts |
| **Backend** | Lovable Cloud (Supabase) |
| **Brokerage** | Alpaca Markets API (paper/live) |
| **AI** | Lovable AI (Gemini/GPT) for Trai |

## Key Patterns

1. **No mock data** — Every number is live from Alpaca API
2. **Edge functions as proxy** — Alpaca keys encrypted server-side, never on client
3. **Explicit order lifecycle** — Idea → Draft → Confirm → Submit. No one-click trading.
4. **Mobile-first responsive** — CSS Grid bento layout across all breakpoints

### Dashboard

Bento-box grid:
- Portfolio value chart (real equity curve, 1D/1W/1M/3M/1Y)
- Trai insights (AI summary + quick actions)
- Top 5 positions with P&L
- Market countdown (open/close timer)
- Top movers watchlist
- Pending orders

### Full Views

- Watchlist (real-time quotes, % change)
- Portfolio (full positions, performance attribution)
- Options chains
- Trade history

## Why This Is High-Signal

1. **Fintech + AI integration** — Alpaca API + conversational AI + state management is non-trivial
2. **Explicit design decisions** — Every architectural choice is documented (why edge functions, why explicit confirmation)
3. **Mobile-first thinking** — Responsive bento layout shows design maturity
4. **Real money connections** — This talks to live exchanges, not mock APIs

This is the kind of project that makes quant/fintech roles sit up and listen.

## Gaps

1. **Stale** — Last commit April 7 (86 days). No recent work.
2. **No live URL found** — README says "live" but no public deploy
3. **Incomplete features** — Options chains mentioned but unclear if implemented
4. **Potential scope creep** — Started as "dashboard" but ambitions grew (trade history, AI assistant)

## Score

**Rating:** 4.3/5 (HIGH) — but **UNFINISHED**

Deductions:
- 86 days stale
- No live public URL
- Scope suggests it got ambitious then stalled

Strengths:
- Strong technical design decisions
- Real API integration (Alpaca)
- AI + trading + state management complexity
- Mobile-first responsive thinking

This is a **3-week away from being 4.8/5** — needs:
1. Deploy to Vercel (public URL)
2. Polish one view (Portfolio or Dashboard) to production quality
3. Document the Trai AI interaction

## Portfolio Signal

**Strong for:** Fintech roles, trading platforms, state management expertise, real API integration  
**Good for:** AI + market data integration interviews  
**Less useful for:** Consumer/B2B SaaS (different problem domain)

## Recommendation

**Action:** Pick one feature (Dashboard or Watchlist), polish to shipping-quality, deploy live. The architecture is solid — just needs a public face.

**Status:** High-potential, needs closure.
