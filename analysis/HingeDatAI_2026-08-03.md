# HingeDatAI — 2026-08-03 deep dive

## Verdict
**🟡 Quiet primary dating product — 4.1/5.** The repository remains the likely successor to HingeAnalytics, but it has been quiet since 2026-05-20. It combines browser-local dating analytics, a Gemini coach, authentication/Postgres, and Stripe-oriented product infrastructure. The main question is privacy/data-boundary readiness, not feature breadth.

## Evidence inspected
- 312 tracked files; TypeScript; default branch `main`; last push 2026-05-20.
- README/package/config, auth/data code, database migrations/schema, coach/analytics surfaces, and payment-related code.
- Account inventory still contains both `HingeDatAI` and `DatingData`; `HingeAnalytics` is not the current visible successor name in this scan.

## What is promising
The browser-local analytics direction is a strong trust decision: it can keep sensitive profile/history data out of the backend while still enabling a coach experience. The product has a clearer successor path than the older HingeAnalytics prototype and is closer to a real system than a static concept.

## Risks / gaps
1. **Privacy boundary must be proven:** document exactly what stays local, what reaches Gemini, what reaches Postgres, and what Stripe can observe. Avoid sending raw dating histories by default.
2. **Consent and deletion:** provide export/delete controls and make coach prompts inspectable enough for a user to understand what data was shared.
3. **AI grounding:** recommendations should distinguish user-provided facts from model inference and avoid overconfident psychological or relationship claims.
4. **Billing readiness:** verify webhook idempotency, subscription state reconciliation, and entitlement checks server-side before charging users.
5. **Product ownership:** resolve whether `DatingData` is a data layer, experiment, or competing canonical product.

## Recommended next move
Run a privacy/data-flow audit and write a one-page boundary contract. Then test a full lifecycle: signup → local analysis → explicit coach consent → subscription webhook → entitlement → deletion. Treat HingeAnalytics as superseded unless new evidence contradicts this.
