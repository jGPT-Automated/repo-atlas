# Repo Atlas Deep Dive — jGPT-Automated/LocalCheck_WEB — 2026-08-17

## Scope
Read-only review of the latest `main` commit (`7e0768a`, 2026-08-13): the homepage, court explorer, server route, Supabase adapter, and public court catalog migration.

## Findings

### LCW-003 — Homepage check-in is a local UI toggle, not a product action (P1)

Evidence:
- `app/page.tsx:40-68` defines a second, hardcoded two-court catalog separate from `app/courts/supabase-courts.ts` and the Supabase-backed explorer.
- `app/page.tsx:144-161` implements check-in as `setCheckedIn((value) => !value)` inside the card. It does not call an API, authenticate the user, write Supabase, or handle expiry/errors.
- The homepage renders `Live now` by adding `1` to a static count, so the displayed presence can contradict the actual app state.
- The same page's Log in action only sets a toast: `Login opens in the LocalCheck app.`

Impact: the primary marketing CTA implies that a visitor can check in, but the action is non-persistent and can create false live presence. This undermines the core product promise and creates an avoidable trust failure.

Acceptance criteria:
1. Replace the homepage's duplicate `Court` constant with one shared catalog/adapter or link directly to the explorer source.
2. Make the homepage CTA either deep-link into the authenticated app/check-in flow or clearly label it as a preview; do not mutate a fake live count.
3. If web check-in is intended, require auth and call one server-side check-in endpoint with idempotency, expiry, and visible error states.
4. Add a regression test proving the homepage does not report a persistent check-in without a successful backend response.

### LCW-002 follow-up — projection remains incomplete (P1)

The prior backlog task correctly identifies the public projection problem. The migration still defines `courts_with_stats` as `select c.*` (`supabase/migrations/202607210001_create_launch_court_catalog.sql:78-88`) and the adapter requests `select=*` (`app/courts/supabase-courts.ts:249-254`, `265-271`). The public view should expose only fields required by the explorer, excluding raw source, geocoding, detection, audit, and ownership metadata.

## Positive signals

- Explorer has a bounded 1.8s server fetch timeout and a 2.6s client refresh timeout.
- It has an intentional curated fallback, normalized court shape, launch-priority ordering, and source labeling.
- The latest commit activity is focused on launch polish and privacy pages.

## Recommended order
1. Fix LCW-002 projection before expanding public catalog exposure.
2. Execute LCW-003 before driving traffic: the current homepage CTA is not connected to the product loop.
3. Keep the curated fallback, but make it generated from the same source used for the homepage and explorer.
