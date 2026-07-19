# OmniVital-v3 — Deep Dive Analysis

**Repo:** omniavital-v3 (agenticjess-star)  
**Status:** MVP BUILT, LIVE ON LOVABLE  
**Live URL:** omnivital.lovable.app  
**Last Major Update:** April 7, 2025 (3+ months old; some hotfixes)

---

## Business Model

**Problem:** Supplement/wellness e-commerce suffers from 70%+ churn. One-off purchases, no personalization, no proof of results.

**Solution:** Subscription-first wellness platform powered by AI voice advisor.

**Revenue Model:**
1. **Voice-guided checkout** — AI recommends personalized routines, drives subscription upsells
2. **Ritual tracking + community** — Retention via progress visibility + peer matching
3. **Subscription tiers** — Monthly/quarterly/annual discount structures
4. **Cross-sell** — Bundled routines with margin optimization

---

## Technical Stack

| Component | Technology |
|-----------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Voice AI | ElevenLabs (@elevenlabs/react v0.14) |
| Backend | Supabase (implied: Auth + DB + RLS) |
| Payments | Stripe (implied) |
| State | React Hook Form + Zod validation |
| Forms | TanStack React Query v5 |
| UI System | 30+ Radix components |
| Testing | Vitest |

---

## Core Routes & Features

| Route | Purpose | Auth? | Features |
|-------|---------|-------|----------|
| `/` | Landing + product grid + science pillars | No | Hero, products, email capture, community validation |
| `/product/:slug` | Product details (bioavailability, sourcing, rituals) | No | Tabs, trust badges, imagery, purchase intent signals |
| `/dashboard` | Post-auth ritual tracker + community | Yes | Check-in tracker, 7-day streaks, ELO leaderboard (implied), peer matching |
| `/auth` | Login/signup with Supabase | No | Email/password or OAuth |

---

## AI Voice Advisor Implementation

**ElevenLabs WebRTC integration** — Real-time voice conversation (not pre-recorded).

**Capability flowchart:**
```
User input (voice)
     ↓
OpenAI/Claude API (system prompt: wellness advisor)
     ↓
ElevenLabs WebRTC (voice synthesis)
     ↓
User hears response (natural, conversational)
```

**Use cases:**
1. **Onboarding:** "What's your biggest health goal? Any allergies?" → AI recommends routine
2. **Checkout:** AI surfaces subscription plans, bulk discounts, cross-sell bundles
3. **Dashboard:** Daily check-ins — "How did you feel on your routine?" → Progress tracking
4. **Community:** AI serves as mediator for peer recommendations

---

## Community Privacy Layer

**Color-gradient matching (novel):**
- Each supplement maps to a color
- User's routine = unique color gradient
- Community board shows peers with similar color gradients
- Matches indicate aligned routines *without exposing stacks*
- **Privacy preserved; discovery enabled**

---

## Code Quality & Architecture

✅ **Full auth context** — RequireAuth wrapper, session state management  
✅ **Protected routes** — `/dashboard` requires login (guard pattern)  
✅ **Validation pipeline** — React Hook Form + Zod (type-safe forms)  
✅ **Query integration** — TanStack React Query for server state  
✅ **Test setup** — Vitest configured for unit/integration testing  
✅ **Accessibility** — Radix component library (WCAG)  

⚠️ **Maintenance:** April 7 hotfixes, then quiet. 3+ months without updates suggests:
  - Either stable MVP (no active development)
  - Or stalled (waiting on monetization/launch decision)

---

## Product-Market Fit Signals

**Strong:**
- Solves real problem (supplement churn)
- Novel community mechanic (privacy-first color matching)
- AI voice is natural, non-gimmicky (ElevenLabs WebRTC)
- Subscription mechanics designed (multi-tier, bulk discounts)
- Quantified progress (7-day streaks, check-ins)

**Uncertain:**
- No live revenue yet (MVP only)
- Community feature unproven at scale
- Regulatory landscape (health claims, supplements)
- LTV sensitivity to voice AI quality
- Competitive positioning (vs. other wellness apps)

---

## Launch Readiness Assessment

| Gate | Status | Notes |
|------|--------|-------|
| **Product** | ✅ READY | Core flows built, no obvious gaps |
| **Auth** | ✅ READY | Supabase integration clean |
| **Payments** | ⚠️ SETUP | Stripe config likely ready, not tested live |
| **Content** | ⚠️ PARTIAL | Product grid + landing exists; community seeding TBD |
| **Testing** | ⚠️ SETUP | Vitest config but no test files visible |
| **Monetization** | ❓ UNCLEAR | No pricing page; tiers defined but not exposed |
| **Marketing** | ❓ NOT READY | Email capture exists but funnel incomplete |

---

## Score: 3.9 / 5.0

| Criterion | Score | Reasoning |
|-----------|-------|-----------|
| **Code Quality** | 4/5 | Clean auth, validation, components. Testable. |
| **Product Design** | 5/5 | Solves real problem, novel mechanic, AI well-integrated |
| **Business Model** | 4/5 | Subscription + voice-guided checkout smart. No live revenue yet. |
| **Launch Readiness** | 3/5 | MVP complete. Payments/marketing/pricing not live. |
| **Momentum** | 3/5 | Last update April. Stalled or stable unclear. |

**Overall:** Strong MVP with novel features. Business model is sound. Blocked on launch readiness — pricing exposure, community seeding, payment testing. Code is production-ready; go/no-go decision pending.

---

## Blockers to Launch

1. **Pricing page** — No visible pricing/tier selection
2. **Payment testing** — Stripe config exists but unverified in live env
3. **Community seed** — No initial user base to demo color-matching
4. **Content gap** — Product descriptions, supplement sourcing stories needed
5. **Regulatory review** — Health claims should be audited

---

## Recommendations

1. **Publish pricing** — Add `/pricing` with clear tier comparisons
2. **Stripe sandbox test** — Verify checkout flow end-to-end
3. **Seed community** — Populate with 50-100 seeded user profiles for demo
4. **Launch beta** — Open to 500 users on TestFlight/web beta
5. **Monitor conversion** — Track: signup → voice advisor → subscription
6. **Iterate voice prompts** — A/B test advisor tonality, upsell messaging

---

**Classification:** 🏥 WELLNESS + MONETIZATION PLAY — High upside, launch-blocked.
