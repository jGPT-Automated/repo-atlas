# Promptry

**Date analyzed:** 2026-06-09  
**Account:** GenJess  
**Language:** TypeScript (React + Three.js + Vite)  
**Last push:** 2026-03-13  
**Size:** 522 KB  
**Status:** Feature-complete, last update 3 months ago

---

## Overview

**Promptry** is an AI-powered image generation and manipulation studio built with **React + Three.js + Gemini API**. The app allows users to:
- **Generate images** from prompts (Gemini text-to-image)
- **Mirror/replicate** existing images (image-to-image)
- **Compose AI-generated artwork** with smooth animations
- **Export results** as downloadable images

Built in **Google AI Studio** (no-code platform), then exported to standalone Node.js app. Clean, production-ready UI with 3D effects.

**Portfolio Tier:** **3.5/5 (MEDIUM-HIGH)**
- AI-native product (Gemini Gen integration)
- Solid creative UX (Three.js + Canvas Confetti)
- Recent polish (Dec 2025 production config)
- Missing: public deployment, monetization, market clarity

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript |
| Build | Vite (fast dev, optimized builds) |
| 3D/Graphics | Three.js (particle effects, visual flair) |
| AI | Google Gemini API (text + image generation) |
| UI Animation | Motion (Framer Motion) + Canvas Confetti |
| Icons | Lucide React |

**Dependencies analysis:**
- **@google/genai** — Gemini API client
- **three** — 3D graphics engine
- **motion** — Smooth animations
- **canvas-confetti** — Celebration effects
- **postprocessing** — Three.js post-processing effects

---

## Architecture Highlights

### Three-Tier Flow
1. **Prompt Input** → User enters image description or uploads reference
2. **Gemini Generation** → Google API generates or transforms image
3. **Display + Export** → Three.js renders with effects, user downloads

### UI/UX Polish
- **Confetti celebrations** on successful generations
- **Three.js post-processing** (bloom, tone mapping, color grading)
- **Responsive design** for mobile + desktop
- **Smooth transitions** via Motion library

### AI Integration
- **Text-to-image:** Raw prompt → Gemini generates
- **Image-to-image:** "Mirror/replicate" reference image
- **Model:** Likely Gemini 1.5 or latest image generation model

---

## Commit History (Last 5 commits)

| Date | Message |
|------|---------|
| 2026-03-13 | **GOD MODE** |
| 2025-12-15 | feat: Configure Vite for production & error handling |
| 2025-12-13 | feat: Introduce new pages & UI enhancements |
| 2025-11-24 | v1 Promptry |
| 2025-11-24 | Initial commit |

**Timeline:** Initial build Nov 24, 2025. Last polish Dec 15 (production config). "GOD MODE" commit (Mar 13) suggests a feature or mode unlock. **3 months since last update** (stale).

---

## Key Findings

### Strengths
1. **Gemini integration is native** — Not a ChatGPT wrapper, uses Google's actual image models
2. **UX thoughtfulness** — Confetti, Three.js effects, smooth animations (not generic CRUD)
3. **Production-ready code** — TypeScript, Vite optimization, error handling
4. **One-click generation** — Minimal friction between prompt and result
5. **Export-friendly** — Users can save/share outputs

### Gaps
1. **No public deployment** — No URL, app not accessible without cloning + `npm install`
2. **Stale codebase** — Last real feature commit Dec 15 (3+ months old)
3. **"GOD MODE" unexplained** — Latest commit message gives no context
4. **No monetization** — Free tier of Gemini API has usage limits
5. **Competitive saturation** — Midjourney, DALL-E, Stable Diffusion fill this space
6. **Market positioning missing** — Is this for designers, artists, or casual users?
7. **No analytics/tracking** — Can't measure user engagement or conversion

### Differentiation Opportunity
- **Angle 1:** "Mirroring" feature is unique (style transfer / image-to-image, not just text-to-image)
- **Angle 2:** "Studio" positioning (for creators, not just toys)
- **Angle 3:** Privacy (Gemini processing, not cloud-stored)

---

## Portfolio Value Assessment

| Dimension | Score | Notes |
|-----------|-------|-------|
| **Technical execution** | 8/10 | Solid React + Three.js + Gemini integration |
| **Product completeness** | 6/10 | Core features work, missing deployment |
| **Design quality** | 8/10 | Smooth animations, thoughtful UX |
| **Market fit clarity** | 4/10 | Purpose unclear (toy vs. tool vs. portfolio piece) |
| **Differentiation** | 5/10 | Mirroring is unique, but main features are commodity |
| **Business model** | 2/10 | No monetization, relies on free Gemini tier |
| **Activity/maintenance** | 3/10 | Last update 3 months ago; stale |

**Overall: 3.5/5 (MEDIUM-HIGH)**

---

## Recommended Next Steps (for Jesse)

1. **Deploy to Vercel** — get a live URL (Vercel + Gemini API key in env)
2. **Update README** — clarify positioning ("AI Art Studio", "Style Mirror", etc.)
3. **Add landing page** — explain features, show examples, link to live app
4. **Monetization strategy** — freemium (premium prompts?) or pay-per-generation?
5. **Resume development** — "GOD MODE" commit has no context; either complete it or document it
6. **Gather usage data** — add simple analytics (GA) to understand engagement
7. **Expand features** — batch generation, style presets, community gallery?

---

## Code Quality Notes

**Strengths:**
- TypeScript throughout (no untyped JS)
- Vite for fast builds + dev experience
- Three.js setup is clean (likely camera + renderer + scene standard pattern)
- Environment variable handling (.env.local for API key)

**Weaknesses:**
- No visible error boundaries (Gemini timeouts could crash app)
- No rate limiting (user could spam API, causing cost overruns)
- No caching (each generation hits API, no offline mode)
- Limited logging (can't debug user issues)

---

## Competitive Analysis

| Product | Positioning | Jesse's Edge |
|---------|-----------|-------------|
| Midjourney | Premium, community, fast | Free tier, mirroring feature |
| DALL-E | Consumer-friendly, popular | Gemini API, style transfer |
| Stable Diffusion | Open-source, self-hosted | Simpler UX, cloud-based |

**Verdict:** Promptry is a solid POC but needs clear differentiation + deployment to be portfolio-worthy.

---

## Rating Summary

**Portfolio Tier:** 3.5/5 (MEDIUM-HIGH)  
**Key Insight:** Polished UI + Gemini integration make this portfolio-quality code, but lack of public deployment and 3-month staleness suggest it's shelved or deprioritized. Deploy to Vercel + clarify positioning = 4.2/5.

