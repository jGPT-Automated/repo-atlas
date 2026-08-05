# Repo Atlas Deep Dive — jGPT-Automated/vox-director

Date: 2026-08-05
Branch: main
Latest observed commit: `922b87f` (2026-07-30)

## Scope
Read-only review of the repository tree, README/SKILL documentation, and the core Atlas Cloud/provider/ffmpeg scripts. No files were changed in the target repo.

## Findings

### P1 — add pipeline preflight and an executable smoke test
Evidence: `scripts/assemble.py` and `scripts/aroll_assemble.py` invoke `ffmpeg` and `ffprobe` directly through `subprocess.run(..., check=True)`. Caption/watermark paths depend on Pillow. The repository tree contains no test directory or CI workflow, so a missing binary, malformed fixture, or incompatible media output is discovered only during a full run.

Impact: failures are late and opaque for an agent skill intended to run end-to-end on Atlas Cloud. A small preflight plus fixture-based smoke test would catch environment and packaging regressions before expensive generation jobs.

Recommended implementation: add a lightweight `doctor`/preflight command that checks Python, Pillow, ffmpeg, ffprobe, and required environment variables without making network calls; add a fixture smoke test that assembles a minimal project and verifies the output exists, is probeable, and has non-zero duration. Keep the test independent of Atlas Cloud generation by using checked-in or generated local fixtures.

## Positive signals
- `scripts/atlas_cloud.py` already retries transient GET polling and has explicit timeouts for long-running media jobs.
- The repository has a clear packaged skill plus English/Chinese docs and checked-in example beat specs.
