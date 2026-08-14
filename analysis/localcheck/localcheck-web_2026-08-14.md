# LocalCheck_WEB — 2026-08-14 deep dive

Repo: `jGPT-Automated/LocalCheck_WEB`
Commit/activity: pushed 2026-08-13; current tree has 85 files.

## Snapshot

This is a substantially more credible web companion than a static landing page: Next/Vite/vinext + Cloudflare tooling, Mapbox explorer, 56 source-backed launch courts across seven metros, Supabase REST loading, a public `courts_with_stats` view, RLS migration, court detail routes, check-in/local-court UI, weekly heatmap, seed generation, artifact validation, and rendered-HTML tests.

## Verified strengths

- The data layer has a bounded 1.8-second Supabase timeout and a deterministic curated-catalog fallback, so the explorer remains usable during backend failure.
- `normalizeCourt()` defensively handles multiple coordinate shapes, aliases common field names, validates lat/lng ranges, and maps live/local counters without fabricating values.
- Court pages resolve both UUID and slug, surface verification status/source data, and default empty counters to honest `0`/“No public check-ins yet” copy.
- README and scripts show reproducible seed, build, lint, test, and artifact-validation paths.

## Verified risks

- `/courts` server-rendering always passes `launchCourts` and `source="curated"`; the client later fetches `/api/courts`. This creates an intentional-but-real first-render mismatch: live Supabase data is not server-rendered, metadata/crawlers get the curated set, and users can briefly see a stale catalog before refresh.
- `app/page.tsx` is a separate hardcoded marketing/home experience with an embedded court array, while `/courts` uses `data/launch-courts.json` and Supabase. This creates two sources of truth for court identity and counts.
- The public API route returns the entire normalized catalog and sets a public cache header. This is acceptable only if `courts_with_stats` exposes aggregate/public counters; it should be verified against the deployed view/RLS rather than assumed from source.
- The project has good source-level tests, but the highest-risk behavior—live API response, fallback source labeling, and no stale homepage catalog—needs an end-to-end contract test.

## Recommended next move

Make the explorer the single source of truth. Server-load `loadExplorerCourts()` in `/courts`, pass its actual source, and reduce the root page to links/summary data derived from the same catalog or clearly label it as a static marketing page. Then add a test that proves the API/view exposes only intended public aggregate fields and that the UI labels curated fallback vs Supabase live data correctly.
