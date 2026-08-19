# HingeDatAI — Daily Deep Dive (2026-08-01)

## Status
**QUIET BUT PRIMARY DATING PRODUCT** — confidence 4.2/5. Last push was 2026-05-20, but this is the clear successor to HingeAnalytics and has the strongest product surface in the dating vertical.

## Product
Hinge Insights ingests a user’s `matches.json`, generates match/conversation analytics, exposes conversation threads, and provides an AI Dating Coach. The README states that raw dating data is processed in-browser and never sent to servers, while the backend handles auth and subscription state.

## Evidence
- 312 tracked files and roughly 64 MB; TypeScript/Vite React frontend with Wouter routing, Tailwind/shadcn, Framer Motion, and local storage.
- Routes/pages include landing, auth, overview/upload, conversations, insights/coach, account, and subscribe.
- Backend stack: Node/Express, Replit Auth, PostgreSQL/Drizzle. External services: Gemini 2.5 Flash and Stripe at $9.99/month premium.
- Client navigation has a compact mobile bottom nav: Overview, Convos, Coach, Account.
- Last commit sequence included authentication options, database connection prioritization, blank-screen/session-store fixes, PWA/Gemini/PostgreSQL integration.

## Key tension
The privacy promise is strongest for imported Hinge data, but the AI coaching flow and server-backed auth/subscription architecture need an explicit data-boundary audit. “Processed 100% in the browser” and Gemini coaching cannot both be interpreted literally unless only derived/minimized context is sent to Gemini.

## Recommendation
Keep HingeDatAI as the canonical dating repo and retire HingeAnalytics. Before resuming growth, document the exact payload sent to Gemini, add a user-visible delete/export path, and run a paid-flow smoke test. The next product decision is whether dating analytics is still strategic or merely an archived branch of the broader agent/product portfolio.
