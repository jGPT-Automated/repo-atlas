# schwab-countdown — Trading Utility Microsite

**Repo:** GenJess/schwab-countdown  
**Pushed:** 2026-06-13  
**Rating:** 1.9/5 — UTILITY / LOW SIGNAL  
**Category:** Trading / Finance / Utility

## What It Is

A **single-purpose countdown timer** that shows time until Charles Schwab Monday 4AM clearing window opens — when ACH transfers settle and buying power becomes available.

**Use case:** Day traders need to know when they can deploy capital on Monday morning. This widget answers that question in 12 bytes of HTML.

## Architecture

| File | Size | Purpose |
|------|------|---------|
| index.html | ~2KB | Main page |
| schwab-countdown.html | ~2KB | Alternate view |
| README.md | ~40 bytes | "Countdown timer to Charles Schwab Monday 4AM clearing" |
| .github/workflows/pages.yml | ~1KB | GitHub Pages CI |

**Tech:** Vanilla HTML/CSS/JS. No framework. No build step. Pure frontend.

## Portfolio Value Assessment

**Hiring signal: VERY LOW.**

This is a utility — useful if you trade on Schwab, useless to 99% of hiring managers. It shows:
- ✅ Understanding of Schwab's clearing mechanics
- ✅ Ability to ship something fast (10 minutes of work)

**But:**
- ❌ No engineering depth (vanilla HTML, no algorithm, no complexity)
- ❌ Not a product (solves a 1-person problem)
- ❌ Not a business (zero monetization)
- ❌ Trivial code (not portfolio-worthy)

## Why It's On GitHub

Probably because:
1. It was a quick Friday afternoon hack
2. You wanted a shareable link for yourself
3. It lives on GitHub Pages (free hosting)

**That's fine.** Not every repo needs to be portfolio gold. But don't spend time on this.

## What to Do

**Delete or hide.** It adds nothing to your hiring narrative and distracts from stronger projects.

If you want to keep it:
1. Rebrand it as a **SaaS template** for building trading utilities (not just Schwab)
2. Add support for other brokers (Interactive Brokers, Webull, etc.)
3. Make it **multiplayer** — show clearing times across 5 brokers with a comparison table
4. Add browser notifications or Slack alerts

Then it becomes a **product**, not a utility.

## Final Score: 1.9/5

**Why 1.9?**
- Works as intended (+1.0)
- Solves a real problem (for one person) (+0.5)
- Shows understanding of Schwab clearing (+0.4)

**Minuses:**
- Trivial engineering (-0.5)
- Single-user utility (-0.5)
- No portfolio signal (-1.8)

**Confidence:** 10/10. This is definitely not a hiring artifact.

## Recommendation

Move on. Spend time on things like LocalCheck, JAW, TEAIMS, and ProPersona instead.
