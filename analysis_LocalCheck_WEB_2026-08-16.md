# Repo Atlas deep dive — jGPT-Automated/LocalCheck_WEB — 2026-08-16

## Scope
Recent activity scan selected this repo (last push 2026-08-13). Read-only source audit of the court explorer, API route, canonical catalog loader, and launch-court migration.

## Findings

### 1. The explorer still has a first-render source mismatch
`app/courts/page.tsx` passes bundled `launchCourts` and `source="curated"` to the client. The client later fetches `/api/courts`, which loads `courts_with_stats` and can switch to Supabase. This makes initial HTML stale relative to live data and leaves source labeling dependent on hydration. Existing LCW-001 remains valid.

### 2. The homepage duplicates court identity data
`app/page.tsx` embeds its own launch court array while `app/courts/supabase-courts.ts` maps `data/launch-courts.json` as the canonical fallback. Names, IDs, counts, and launch claims can drift. Existing LCW-001 correctly targets this.

### 3. Public view exposes the entire base row
The migration grants anon/authenticated SELECT on `courts_with_stats`, and the view is `select c.*` from `public.courts`. That publishes operational/provenance fields such as `added_by`, `geocode_query`, `detection_source_id`, `detection_distance_m`, `source_url`, and internal launch metadata, not merely the fields the explorer renders. It is not an obvious credential leak, but it violates least-privilege and makes future private columns public by default.

## Recommended next task
Replace `c.*` with an explicit public projection and add a contract test that asserts the JSON response contains only approved public fields. Preserve the separate internal/service-role access path for enrichment and administrative provenance.

## Verdict
The web product has a credible source-backed launch catalog and honest curated fallback. Before adding growth pages, eliminate the duplicate catalog and narrow the public database contract; otherwise stale identity and accidental data exposure will compound as the catalog evolves.
