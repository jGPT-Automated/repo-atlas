# OmniVital-vision — The Wellness Operating System (Editorial Layer)

**Account:** GenJess  
**Last push:** 2026-04-18  
**Files:** 111  
**Status:** Editorial/investor-facing site — brand narrative + strategy deck

## What It Is

OmniVital is **not a supplement app**. It's the software layer the wellness industry forgot to build. This particular repo is the **editorial public face**: a deliberately restrained brand site that tells the story (homepage) plus an investor-facing strategy deck gated behind a PIN.

Three-layer operating system:
1. **The Ritual** — Six precision formulas (morning/midday/evening) as daily practice
2. **The Advisor** — GPT-4.1 voice agent (ElevenLabs) that learns your stack, mood, streak
3. **The Collective** — Privacy-first community (color tags, not real names, realtime threads)

No competitor combines all three. Thesis has personalization + zero community or persistent advisor.

## Brand & Design

Deliberately anti-supplement aesthetic:
- Inspiration: Aesop, Equinox, editorial print — not bottle shots or discount banners
- Typography: Cormorant Garamond (display) + Inter 300 (body prose)
- Color: warm charcoal bg + bone text + brass accents (HSL tokens in code)
- Texture: fine-grain noise overlay, hairline rules, generous negative space
- Logo: serif **OV** monogram (favicon + lockup)

The site *feels printed*. That's intentional.

## Architecture

React 18 (Lovable) + full Radix UI component library (20+ components: accordion, dialog, dropdown, hover-card, etc.). Static editorial pages + gated `/strategy` deck. Interactive 5-step ritual walkthrough. Probably ~50KB gzipped.

## Why This Matters

1. **Brand as product strategy**: Most founders mix website and app. This separates cleanly. The *site* sells the vision. The *app* solves the problem. Rare.

2. **Category positioning**: Supplement space is commoditized (AG1 $600M/yr on one SKU + podcasts). This inverts it: ritual + advisor + community as the moat. Not a feature — a business model redesign.

3. **Design discipline**: Aesthetic is polarizing on purpose. Attracts founders, VCs, design-forward users. Repels discount-seekers. Shows intentional taste.

## Gaps

- No live URL found (probably lovable.app domain)
- Strategy deck gated (can't assess investor narrative without PIN)
- No app/transaction layer in this repo — editorial only

## Score

**Rating:** 4.2/5 (HIGH)

Deduction for editorial-only and 50+ days stale. But positioning clarity and design taste push higher. This is *category thinking*, not feature iteration.

## Portfolio Signal

Brand/positioning roles, founder trajectory, design leadership. Shows deep thesis — not just execution.
