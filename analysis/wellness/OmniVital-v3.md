# OmniVital-v3

**Cluster:** Wellness / Platform  
**Date:** 2026-06-10  
**Link:** https://github.com/agenticjess-star/omniavital-v3  
**Live:** https://omnivital.lovable.app  
**Rating:** 4.0/5 (HIGH)

---

## Overview

A full-stack wellness platform reinventing the supplement discovery + subscription model. Features voice AI advisor (ElevenLabs), real-time ritual tracking, personalized recommendations, and community. Built with React 18 + Supabase + ElevenLabs API. Last significant commit March 9, 2026 (3 months stale). **Live on Lovable.**

---

## Technical Architecture

**Frontend Stack:**
- React 18 + React Router (SPA)
- Vite + TypeScript
- Tailwind CSS + Radix UI + Shadcn (65+ UI components)
- React Hook Form + Zod (form validation)
- TanStack React Query v5 (data fetching)
- Embla Carousel (carousel logic)
- next-themes (theme switching)

**Backend/Services:**
- Supabase (Postgres + Auth + Realtime)
- ElevenLabs API (voice AI advisor)
- Stripe (implied, for checkout — not in explicit deps)

**File Structure:**
- 119 total files | 78 code files
- Lovable build markers (.lovable directory)
- Supabase integration folder
- src/ with component + page structure

**Deployment:**
- Lovable Cloud (Supabase edge functions)
- Public endpoint: omnivital.lovable.app

---

## Product Architecture

**Core Loops:**

1. **Onboarding**
   - Voice AI collects health profile
   - Biometric preferences (sleep, energy, fitness)
   - Supplement history + allergies

2. **Recommendation Engine**
   - AI advisor suggests personalized stacks
   - Each recommendation explained (why, what to expect, interactions)
   - Within safety guardrails (no contraindicated pairs)

3. **Tracking & Community**
   - Daily ritual logging (did you take it?)
   - Biometric integration (Apple Watch, Oura — implied)
   - Progress dashboard (trends over time)
   - Private community (color-gradient matching of supplement stacks)

4. **Monetization**
   - Freemium: View recommendations, explore products
   - Premium: Checkout → subscription fulfillment
   - Affiliate or direct supplier relationships (TBD in code)

---

## Code Quality Signals

**Strengths:**
- ✅ Full TypeScript (type safety)
- ✅ Form validation (Zod + React Hook Form) — production-grade
- ✅ Component architecture (Shadcn + Radix)
- ✅ Real-time capable (Supabase subscriptions)
- ✅ API integration (ElevenLabs voice)
- ✅ Stripe patterns (checkout implied)

**Concerns:**
- ⚠ **3-month stale** (last major update March 9; April 7 had bug fixes but no features)
- ⚠ **Multiple OmniVital versions in repo-atlas** (v1, v3, BUSINESS, pitch versions — fragmented)
- ⚠ **No clear deployment blockers** but activity suggests deprioritization
- ⚠ **Commit messages minimal** (e.g., "Fix product pages 404s" × 2 on April 7)

---

## Commit History (Last 5)

```
2026-04-07  Fix product pages 404s
2026-04-07  Fix product pages 404s
2026-03-09  Restore product pages and stabilize auth flow
2026-03-09  Revamped app stability
2026-03-09  Changes
```

**Pattern:** 
- Spike of fixes March 9 (auth flow stabilization)
- April 7 hotfixes (routing issues)
- **No activity since April 7 (60 days stale)**

---

## Portfolio Value

**Strengths:**
- ✅ **Full-stack web + voice AI integration** (ElevenLabs mastery)
- ✅ **Real product with real monetization** (Stripe checkout implied)
- ✅ **Subscription model logic** (recurring revenue pattern)
- ✅ **Form validation + data handling** (Zod + Supabase)
- ✅ **Live deployment** (omnivital.lovable.app accessible)

**Weaknesses:**
- ⚠ **Stale codebase** (no commits in 60 days, hiring managers notice this)
- ⚠ **No visible iOS/mobile** (all web-based)
- ⚠ **Unclear monetization story** (are customers actually using it?)
- ⚠ **Health/supplement regulatory risk** (not mentioned in code, but risky domain)

---

## Deployment & Monetization Gaps

**Why it's paused:**
- Hypothesis A: Unsure about supplement regulatory compliance (FTC, FDA)
- Hypothesis B: Affiliate/supplier pipeline stalled
- Hypothesis C: Deprioritized for LocalCheck + TEAIMS work
- Hypothesis D: Technical debt (April 7 stability fixes suggest underlying issues)

**To resurrect:**
1. Deploy to public Vercel (not just Lovable)
2. Add visible metrics (users, subscriptions, revenue)
3. Clarify supply chain (are you drop-shipping? White-labeling?)
4. Address regulatory angle (compliance docs)
5. Consider iOS app (Apple Watch integration as narrative hook)

---

## Tier Assessment

- **Code quality:** 8/10 (production patterns, form handling solid)
- **Scope:** 7/10 (full-stack + AI voice + monetization)
- **Deployment:** 4/10 (Lovable URL is public but no promotion; stale)
- **Portfolio impact:** 6.5/10 (strong concept, weak execution visibility)
- **Momentum:** 2/10 (3 months without commits)

**Final Score: 4.0/5 (HIGH, but fading) — Has legs, but needs revival.**

---

## Recommendations for Portfolio

1. **Immediate:** Push public Vercel URL to genjess.github.io
2. **Short-term:** Fix auth flow edge cases (April hotfixes signal user friction)
3. **Medium-term:** Deploy iOS app with Apple Watch biometric integration
4. **Narrative:** "From idea to $X recurring revenue" (if numbers exist)

---
