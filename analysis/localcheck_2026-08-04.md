# LocalCheck Web — 2026-08-04 Deep Dive

## Snapshot
- **Owner:** agenticjess-star
- **Last push:** 2026-07-16
- **Stage:** mature MVP / shipping companion to LocalCheck_Expo
- **Stack:** React 18, Vite, TypeScript, Supabase, Mapbox, React Query, React Hook Form/Zod, Radix/shadcn-style UI
- **Repository:** https://github.com/agenticjess-star/localcheck

## Product
LocalCheck is a real-time pickup-basketball utility: active court check-ins, scheduled runs, ELO competition, match logging, court discovery, profiles, and notifications. The README’s organizing idea is “Court After Dark,” with a dark editorial interface and court-scoped data model.

The source tree has a route-driven React app, `CourtMap`, `NotificationsPanel`, `AppShell`, error boundary, auth context, a database adapter (`src/lib/db.ts`), and a substantial UI component library. The package includes Supabase JS, Mapbox-related UI integration, React Query, Zod, Framer Motion, and Vitest.

## Architecture read
The database adapter pattern is the right seam for a product that may need to evolve from Supabase-backed development into a more controlled service layer. Court-scoped everything is also a strong domain constraint: availability, runs, rankings, and notifications should all resolve against a court or local geography rather than a generic social feed.

The web/mobile split makes sense if web owns discovery and planning while native owns repeat check-ins, location, and push/haptics. The risk is not feature completeness; it is whether the two clients use the same event semantics for presence, check-in expiry, match completion, and ranking updates.

## Risks / verification gates
1. **Realtime correctness:** test two browsers joining/leaving a court, stale presence, reconnects, and duplicate events.
2. **Ranking integrity:** verify match submission authorization, idempotency, and protection against self-reported or repeated results.
3. **Map cost/performance:** confirm Mapbox tokens are restricted, map loading is lazy, and court data is cached rather than refetched on every route transition.
4. **Web/native parity:** compare schema, auth claims, court IDs, and check-in TTL behavior with LocalCheck_Expo before app-store launch.
5. **Production evidence:** the repo has not moved since July 16; current production deployment and user traction are not proven by source inspection.

## Score
**4.4/5.** Strong product thesis and credible implementation. The next score increase comes from live acceptance evidence, not more screens.

## Next move
Run a two-device acceptance pass against one real court: sign-in, check-in, second-user visibility, notification, match log, ELO update, disconnect/reconnect, and cleanup after expiry. Capture web/native parity in the Atlas log.
