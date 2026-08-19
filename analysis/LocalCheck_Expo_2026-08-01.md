# LocalCheck_Expo — Daily Deep Dive (2026-08-01)

## Status
**ACTIVE SHIPPING / RELEASE CANDIDATE** — confidence 4.9/5. The repository was pushed at 2026-08-01 03:36 UTC, inside the activity window, although the public user event feed did not expose a new PushEvent. The latest commits are PR #24 merge, a build 9→13 incident checkpoint, and version bump to 1.0.1 for a native rebuild.

## Evidence
- Default branch: `main`; latest commit `81ff0a4` merges Expo/EAS/GitHub-label work.
- `51b8d00` records the build 9→13 incident and refreshes the checkpoint to `v1.0.5/build 13`.
- `4209dd4` bumps the app version to `1.0.1` for a native rebuild.
- README explicitly says the app is live on TestFlight as `LocalCheck: Pickup Sports`.
- Architecture is now a real mobile + API split: Expo routes under `artifacts/mobile`, an Express API server under `artifacts/api-server`, and court routes/health endpoints.
- Product scope remains coherent: local court hub, check-in, schedule/runs, compete/ELO, explore/map, player/court profiles, friends, notifications, and settings.

## What changed since last session
The previous queue asked whether App Store submission had landed. It has not been proven by the repository evidence, but the active native rebuild and build-13 incident documentation show the release process is still moving. This is the strongest active repo in the portfolio.

## Risks / gates
1. A version mismatch is visible in the evidence (`v1.0.5/build 13` checkpoint versus `1.0.1` native rebuild); resolve which version is the submission source of truth.
2. The repo still has one open issue and a large `.agents/skills` footprint; keep release work separated from tooling churn.
3. TestFlight status is documented, but App Store submission status is not independently evidenced.

## Recommendation
Treat this as a launch-control repo, not a feature-development repo. Confirm build 13 on a physical device, lock the release version, complete the remaining acceptance gates, and submit. Do not broaden MVP scope before submission.

## Next check
Verify the current EAS build/submit record and whether App Store Connect has a submitted version. If the repo changes again, compare the checkpoint document against `app.json`/EAS metadata before calling it shippable.
