# HingeAnalytics — Daily Deep Dive (2026-08-01)

## Status
**ARCHIVED PROTOTYPE / SUPERSEDED** — confidence 4.7/5. This is a tiny Expo React Native app with one initial commit on 2025-08-25 and no subsequent development.

## Evidence
- Default branch is `master`; last push was 2025-08-25.
- Repository size is only 132 KB, with 20 tracked files and zero open issues.
- It contains basic screens: Home, Analytics, Settings, loading/error states, cards, and a `HingeDataProcessor.js`.
- The processor expects an array of match entries and computes totals, conversations, messages, initiators, activity windows, sentiment counters, response times, photo/prompt likes, and conversation durations.
- Dependencies are Expo 53 / React Native 0.79, React Native Paper, chart-kit, document picker, and file system.

## Relationship to HingeDatAI
This is not the active dating product. `agenticjess-star/HingeDatAI` is the later, substantially larger React/Vite/Express implementation with browser-local processing, Gemini coaching, auth, PostgreSQL, and Stripe. HingeAnalytics should be treated as an early mobile prototype or archived reference, not a competing queue item.

## Recommendation
Archive or label this repo explicitly as superseded by HingeDatAI. Preserve the data-processing logic only if there are metrics not already carried forward. No additional feature work is justified.
