# PoolPro AI — Billiards Vision Engine

**Account:** GenJess  
**Repo:** GenJess/Pool-Hall  
**Pushed:** 2026-05-02 (59 days stale)  
**Language:** TypeScript (React 19)  
**Status:** MVP (Vision API integration working, framework for scale)  
**Live:** Not yet deployed

---

## What It Is

PoolPro AI is a **smart billiards assistant powered by Google Gemini 2.5 Pro**. 

The flow:
1. Snap a photo of the pool table
2. Tell the app if you're playing solids or stripes
3. Get an AI-generated top-down shot prediction map showing optimal aim trajectory

The idea: real-time AI coaching for competitive pool players.

---

## The Product Vision

**What exists (MVP):**
- React 19 + Vite app
- Google Gemini 2.5 Pro vision API integration
- Image upload → AI analysis → shot prediction rendering
- Responsive UI (Tailwind CSS v4)
- Framer Motion for smooth micro-interactions

**What's planned (roadmap):**

### Phase 1: PWA Transformation
- Installable progressive web app
- Offline-capable shot history
- Home-screen installation

### Phase 2: Authentication & Players
- Secure sign-ups + player profiles
- Session history (persistent)
- Account-scoped data

### Phase 3: Competitive Layer
- **Matchmaking:** Find players at your local pool hall or globally
- **Challenges:** Head-to-head ranked matches
- **Leaderboards:** Elo-based ranking (local + global)
- **Head-to-head stats:** Win/loss records vs specific rivals

### Phase 4: Advanced AI Analysis ("Chess.com for Pool")
- **Play-by-play tracking:** Snap after every shot to log game state sequentially
- **Post-game AI breakdown:** Full statistical analysis
- **Blunder detection:** Highlight missed opportunities, brilliant shots, execution errors
- **Improvement coaching:** AI-driven feedback on shot selection

---

## Technical Stack

- **Frontend:** React 19, TypeScript, Vite (fast bundler)
- **UI/Animation:** Tailwind CSS v4, Framer Motion (micro-animations, loading states)
- **Icons:** Lucide React
- **AI Engine:** Google Gemini 2.5 Pro (`@google/genai` SDK)
- **Vision:** Gemini's advanced vision capabilities (3D → 2D trajectory mapping)

---

## Why This Scores High

1. **Timely Vision API choice:** Gemini 2.5 Pro is cutting-edge for image understanding (pool table geometry is non-trivial)
2. **Roadmap clarity:** Phases 1–4 clearly articulated and achievable
3. **Niche expertise:** Pool/billiards is an underserved vertical in AI tooling
4. **Scalable architecture:** PWA → Auth → Competitive layer → AI analysis is a proven GTM
5. **Framework agnostic:** Could pivot to mobile (Expo, React Native) or remain web-first

---

## Gaps & Risks

1. **Early stage:** 12 files. MVP feature works, but infrastructure for phases 2+ not yet built.
2. **Stale:** Last commit 59 days ago (2026-05-02). Waiting on Gemini API finalization, or deprioritized?
3. **No live URL:** Not deployed publicly (need vercel.app or similar).
4. **Monetization unclear:** Elo leaderboard + head-to-head challenges suggest freemium, but no pricing strategy visible.
5. **Competitive landscape:** Chess.com comparison implies serious ambition — need proof it's differentiated from existing pool apps.

---

## Development Signals

- **Cadence:** Single developer (GenJess), episodic commits
- **Decision-making:** Thoughtful (Gemini choice, phase breakdown, "Chess.com for Pool" positioning)
- **Shipping readiness:** MVP complete (Gemini integration works), needs deployment
- **Maintenance:** 59 days stale suggests lower priority — may be deprioritized for other projects

---

## Hiring Signal

**Tier:** MEDIUM-HIGH — demonstrates AI vision API integration + product roadmap thinking

**Keywords:**
- Generative AI (vision API)
- AI-powered product design
- Game mechanics (Elo, leaderboards)
- Niche vertical expertise (sports/gaming)

**For:** AI product manager, vision API engineer, game mechanics designer.

---

## Score: 3.6 / 5

**Reasoning:**
- ✅ Clear MVP (Gemini integration working)
- ✅ Thoughtful roadmap (PWA → Auth → Competitive → AI analysis)
- ✅ Modern stack (React 19, Vite, Gemini 2.5 Pro)
- ✅ Niche positioning ("Chess.com for Pool")
- ⚠️ Early stage (12 files, minimal infrastructure)
- ⚠️ Stale (59 days, last commit May 2)
- ⚠️ No deployment (not live)
- ⚠️ Incomplete phases (only MVP exists)

**Action:** Deploy to Vercel. Then iterate on phase 2 (auth) to unlock competitive features.

---

## Context

PoolPro AI sits in the portfolio as a **proof of AI vision API integration + product vision**. 

In interviews, the narrative: *"I built an AI-powered pool assistant using Gemini 2.5 Pro for real-time table analysis. Designed a 4-phase roadmap: PWA, Auth, Competitive Leaderboards, and Chess.com-style game analysis. Currently MVP with vision API working; next is productionizing for app stores."*

Lead with the Gemini integration + roadmap clarity. The stale timeline is OK if you explain why (prioritized other projects, waiting for API finalization, etc.).
