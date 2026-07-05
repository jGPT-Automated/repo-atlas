# HingeDatAI — Dating Analytics + AI Coaching

**Account:** agenticjess-star  
**Pushed:** 2026-05-20 (45 days stale)  
**Rating:** 4.4/5 — HIGH  
**Status:** Full-stack MVP, undeployed  
**Build:** React 18 + Vite + Replit (serverless Node) + Stripe

---

## What It Is

A privacy-first mobile web app for dating analytics. Users upload their Hinge data export (matches.json), get:
- Visual analytics (match rate, conversation stats, who-liked-first patterns)
- Conversation browser (sortable, filterable)
- AI Dating Coach (Gemini 2.5 Pro chatbot trained on their specific patterns)
- All processing happens in-browser — zero dating data leaves the device

Freemium model: Basic stats free, premium ($9.99/mo) unlocks full conversation history + AI coach.

---

## Architecture

**Frontend:** React 18 + TypeScript + Vite + Tailwind + Shadcn/Radix  
**Backend:** Replit (Node.js + Express) + PostgreSQL + Drizzle ORM  
**Auth:** Replit Auth (OpenID Connect)  
**Payments:** Stripe (subscriptions, $9.99/mo)  
**AI:** Google Gemini 2.5 Flash (coaching conversational AI)  
**Routing:** Wouter (lightweight client-side)  
**Animations:** Framer Motion + custom CSS  

**Data Flow:**
1. User uploads matches.json
2. Frontend processes locally (HingeDataProcessor) — never sent to server
3. Server stores: auth sessions + subscription status only
4. AI coach gets stats summary (anonymized), not raw dating data
5. Premium users unlock full conversation browser

---

## Product Quality

✅ **Privacy architecture** — Browser-first processing. Dating data never leaves device. Rare.  
✅ **Premium positioning** — Freemium model is fair (basic insight free, coach + history gated).  
✅ **Full stack** — Frontend + backend + Stripe. Not a half-baked prototype.  
✅ **Brand taste** — Design system clearly articulated ("Free People warmth × Apple precision"). Polished UI.  
✅ **Documentation** — Full PRD, brand guide, competitor research in `/docs`.  
✅ **Founder use case** — Solves a real problem (understanding your dating patterns without judgment).  

⚠️ **Not deployed** — No live URL found. Built but invisible.  
⚠️ **45 days stale** — Last commit 2026-05-20. No recent work.  
⚠️ **Uncertain GTM** — Dating apps don't have in-app distribution. How do users discover this? Reddit? Twitter?  
⚠️ **Hinge data export friction** — Users must manually request their data from Hinge (takes 30 days). Adoption blocker.  

---

## Why 4.4/5 (Not Higher)

The gaps are all about distribution, not product quality. The app itself is solid.

To reach 4.6+:
1. Deploy to Vercel (frontend) + Replit (backend)
2. Build landing page with use-case stories (reddit dating subs will upvote)
3. Release on ProductHunt
4. Ship v2 with Hinge API integration (if possible) to avoid the 30-day data export friction

---

## Hiring Signal

**Strong for:** Full-stack JavaScript, Stripe integration, privacy-first architecture, dating/social tech, freemium monetization.

**Narrative:** "Built a full-stack SaaS product solving a real dating problem. Handled authentication, subscriptions, AI integration, and privacy architecture. Designed for users who value their data."

---

## Next Steps to Ship

1. **Deploy frontend** — `npm run build && vercel deploy` (5 min)
2. **Deploy backend** — Already on Replit, just set env vars (STRIPE_SECRET, REPLIT_DOMAINS, GEMINI_API_KEY)
3. **Domain** — Point hingedatai.com or dating-ai.app to live URL
4. **Landing page** — 2-3 use-case stories + testimonials (borrow from reddit dating communities)
5. **Stripe setup** — Price ID needs to be set in env (currently hardcoded probably)
6. **ProductHunt** — Ship with a compelling narrative ("Privacy-first dating analytics built by an engineer tired of swiping blind")

---

## Verdict

**This is ready to ship.** The only gap is making it visible. Deploy + promote on ProductHunt and dating subreddits. 2 weeks to market, 4-6 weeks to product-market signals.

