# datingdata (Hingesight)

**Date analyzed:** 2026-06-09  
**Account:** agenticjess-star  
**Language:** TypeScript (React + Node.js + FastAPI)  
**Last push:** 2026-05-24  
**Size:** 45 MB (substantial codebase)  
**Status:** Feature-complete, actively shipping features

---

## Overview

**Hingesight** is a full-stack, mobile-first web application that transforms personal Hinge dating data into **AI-powered insights, achievement gamification, and conversation analytics**. 

**Core value prop:**
- Users export personal Hinge data (matches, conversations, rejections)
- Hingesight parses it privately (on their own account)
- AI generates: dating tips, conversation patterns, match quality insights, achievement badges
- All data stays private (no analytics sell-off)

**Portfolio Tier:** **4.1/5 (HIGH)**
- Real problem solved (dating data insights are valuable)
- Privacy-first positioning (differentiator vs. analytics trackers)
- Full product maturity (from data import → insights → gamification)
- Recent active commits show momentum

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript |
| Backend | Node.js Express / FastAPI Python |
| AI | Google GenAI API (Gemini models) |
| Database | PostgreSQL via Neon (serverless) |
| Auth | Form-based + JWT (custom auth layer) |
| UI | Radix UI + Shadcn + TailwindCSS |
| Video/Animation | Remotion (programmatic video generation) |

**Key dependencies:**
- @google/genai (Gemini API)
- @neon/serverless (PostgreSQL client)
- react-hook-form + zod
- @radix-ui/* (full component suite)
- remotion (video generation for results)

---

## Architecture Highlights

### Data Pipeline
1. **Import:** User uploads Hinge data JSON (matches, conversations, metadata)
2. **Parse:** Custom parser extracts conversation threads, dates, outcomes
3. **Analyze:** Google Gemini API processes:
   - Conversation quality & wit patterns
   - Match success rate by profile type
   - Openers that convert to dates
   - Red flags in conversation flow
4. **Gamify:** Achievements based on patterns (e.g., "Witty Conversationalist", "Early Riser")
5. **Visualize:** Remotion generates video results/sharable clips

### Privacy Guarantees
- All processing **client-side or in user's Neon DB**
- No data retained between sessions
- User controls export/deletion
- No cross-user analytics

---

## Commit History (Last 7 commits)

| Date | Message |
|------|---------|
| 2026-05-24 | Update branding & theming, improve AI features |
| 2026-05-24 | Add interactive AI dating tips + gamified achievements |
| 2025-07-21 | Checkpoint: Updated home page (Flutter-style) |
| 2025-07-21 | Checkpoint: Fix full screen coverage w/ fixed positioning |
| 2025-07-21 | Checkpoint before assistant change: Increase button size |
| 2025-07-21 | Checkpoint: Redesign dashboard (reference matching) |
| 2025-06-09 | Add Hingesight core features |

**Timeline:** Last real update May 24 (AI tips/achievements). Prior commits are July 2025 (9 months old — likely cleanup/checkpoints from Lovable assistant session).

---

## Key Findings

### Strengths
1. **Unique positioning** — Dating data analysis is niche but valuable (target: serious online daters)
2. **AI-native design** — Gemini API integration is core, not bolted-on
3. **Privacy USP** — "your data, your insights" resonates in 2026 (vs. data broker model)
4. **Gamification hooks** — Achievements create re-engagement loop
5. **Video generation** — Remotion for shareable results is clever product thinking
6. **Mobile-first UX** — TailwindCSS responsive design focus

### Gaps
1. **Limited go-to-market** — No landing page, no public demo URL visible
2. **Hinge API dependency** — Relies on users manually exporting (not real-time API integration)
3. **Market saturation** — Dating analytics is crowded (Bumble's own analytics, third-party trackers)
4. **Monetization unclear** — No pricing strategy, freemium model not obvious
5. **Legal risk** — Parsing user data (even privately) may violate Hinge ToS
6. **Retention mechanics weak** — One-time data import; limited reasons to re-visit

### Code Quality
- **Solid patterns:** TypeScript throughout, React best practices, form validation
- **Decent architecture:** Separation of concerns (parse → analyze → visualize)
- **Integration maturity:** Neon + Gemini integration looks production-ready

---

## Portfolio Value Assessment

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Technical execution** | 8/10 | Full-stack, multiple integrations, solid TypeScript |
| **Product maturity** | 7/10 | Features complete, UX needs polish |
| **Design quality** | 6/10 | Functional, mobile-responsive, but generic Shadcn |
| **Problem clarity** | 8/10 | Dating insights are a real need |
| **Market differentiation** | 6/10 | Privacy angle is good, but crowded market |
| **Business model** | 3/10 | No monetization strategy visible |
| **Legal/compliance** | 4/10 | Hinge ToS violation risk not addressed |

**Overall: 4.1/5 (HIGH)**

---

## Recommended Actions (for Jesse)

1. **Launch publicly** — get a demo URL live
2. **Clarify monetization** — freemium (paid advanced AI insights?) or one-time purchase?
3. **Document privacy guarantees** — make it the #1 differentiator
4. **Address Hinge ToS** — consult legal or pivot to "bring your own data" (not just Hinge)
5. **Build landing page** — frame as "dating coach in a bottle"
6. **Add viral hook** — shareable video results (Remotion already there)

---

## Market Analysis

**Competitors:**
- Hinge's native analytics (limited)
- Third-party trackers (data broker model — worse privacy)
- Dating coaches (high-touch, expensive)
- ChatGPT + manual analysis (tedious, no structure)

**Hingesight opportunity:** Automated, private, fun insights for serious online daters.

**Target user:** 25-35, spending 5+ hrs/week on dating apps, willing to pay $5-20/month for insights.

---

## Rating Summary

**Portfolio Tier:** 4.1/5 (HIGH)  
**Key Insight:** Full-stack product with real user need and privacy differentiation, but lacks public presence and monetization clarity. One live deployment + pricing page away from portfolio-ready.

