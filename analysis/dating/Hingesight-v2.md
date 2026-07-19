# DatingData / Hingesight — Dating Data Analytics & Coaching

**Account:** agenticjess-star
**Pushed:** 2026-05-24
**Status:** Full-stack app, live MVP
**Score:** 4.3/5 — CONSUMER PRODUCT

## What It Is

A full-stack, privacy-first dating analytics app that parses Hinge data exports and surfaces:

- **Conversion analytics** — match-to-conversation rates
- **AI-powered coaching** — personalized tips across 6 dimensions (openers, photos, prompts, mindset, timing, conversion)
- **Gamified achievements** — XP, badges, leveling
- **Conversation analytics** — duration patterns, who initiates, etc.

Users upload `matches.json` from their Hinge data export → instant insights. All data stays in their account (privacy-first model).

## Stack

Express (Node.js) + TypeScript + Drizzle ORM. 70+ dependencies (full modern stack). Database (likely Supabase or similar).

## Product Strategy

**Smart positioning:** Works on top of existing dating apps. Doesn't compete with Hinge — complements it. Insights layer that Hinge itself doesn't provide.

**Business model:** Freemium (basic analytics free, premium coaching + insights paid).

**Market opportunity:** $9B+ dating app industry. Users want feedback, not just engagement. Hingesight fills that gap.

## Why It Scores 4.3/5

| Aspect | Rating | Notes |
|--------|--------|-------|
| **Product clarity** | 9/10 | Clear problem + solution. Strong positioning. |
| **Technical depth** | 7/10 | Full-stack, but fairly standard web app. |
| **Business model** | 8/10 | Freemium makes sense. Analytics moat is real. |
| **Deployment** | 7/10 | Needs public live URL (currently private/self-host only) |
| **Hiring signal** | 7/10 | Shows product thinking + full-stack ability. |
| **Differentiation** | 8/10 | Unique angle (data layer vs. platform) |

**Final: 4.3/5** — Strong consumer product. Needs production deployment to hit 4.6+.

## What's Blocking 4.6+

1. **No live URL.** Deploy to Vercel or equivalent. Public landing page + working app.
2. **Updated README** — external-facing narrative (currently internal-focused)
3. **Marketing copy** — "Why dating app analytics?" for users who don't know they need this

## Next: Action Plan (3-4 weeks)

1. Deploy to Vercel + set up custom domain (hingesight.ai or similar)
2. Create marketing landing page (problem-solution-pricing)
3. Add auth flow (GitHub OAuth or email)
4. Open beta (collect waitlist + feedback)

Once live: **4.6/5** — This becomes a real product narrative for hiring.
