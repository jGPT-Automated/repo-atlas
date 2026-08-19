# localcheck — 2026-08-03 deep dive

## Verdict
**🟢 Active web product / native-alignment candidate — 4.3/5.** This is the agenticjess-star `localcheck` repository, not a repository named `LocalCheck_WEB` or `LocalCheckLive`. It is a substantial Lovable/Supabase application centered on the check-in → presence → play → results → ranking loop. Current evidence supports a live web product, but not a verified native release alignment.

## Evidence inspected
- 107 tracked files; TypeScript; default branch `main`; last push 2026-07-16.
- README, package/config files, Supabase schema/migrations, route/page components, hooks, and realtime-related source.
- README live URL: `https://localcheck.lovable.app`.

## Product/technical shape
The product differentiates from maps by answering “what’s happening at the court?” Features include real-time check-ins with two-hour expiry, court-scoped presence, schedule planning, court detail, ELO leaderboard/match logging, and community activity. The architecture is a React/Vite frontend with Supabase auth/data/realtime and a focused UI system.

## Risks / gaps
1. **Web/native naming ambiguity:** the expected `LocalCheck_WEB`, `LocalCheckLive`, and a separately visible canonical native repo were not present under the current agenticjess-star inventory. Do not claim release parity until the actual production/native repositories and commit/build identifiers are linked.
2. **Presence correctness:** two-hour expiry is a product-critical invariant. Verify server-side expiry/cleanup and race behavior when a player checks in from two devices; client timers alone are insufficient.
3. **Realtime authorization:** test that court presence subscriptions expose only allowed court/user data and that disconnected clients cannot retain stale presence.
4. **ELO integrity:** match logging needs server-side validation, idempotency, and an audit trail; never allow the client to submit arbitrary rating deltas.
5. **Operational proof:** the README is feature-rich, but this pass did not establish current production health, error rates, or store submission status.

## Recommended next move
Create a release-alignment matrix with web URL, native repo, current app version/build, Supabase project, and last verified production commit. Then run a smoke test for check-in expiry, realtime fanout, match submission, and leaderboard recalculation.
