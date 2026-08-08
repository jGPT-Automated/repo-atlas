# Repo Atlas analysis — 2026-08-08

## Scope
Reviewed `jGPT-Automated/vox-director` at `main` (latest commit `922b87f`, 2026-07-30). LocalCheck was not accessed. The repository was read-only.

## Backlog review
VD-001 remains `pending_review`; no `in_review` tasks were present.

## Verified findings
- `scripts/assemble.py` and `scripts/aroll_assemble.py` invoke `ffmpeg` and `ffprobe` directly through `subprocess.run(..., check=True)` and use Pillow-based image generation, with no test directory or CI workflow visible in the tree. VD-001 remains valid.
- `scripts/atlas_cloud.py:download()` calls `/usr/bin/curl -s --retry 3 -o dest url`, but does not set `--fail`, `--connect-timeout`, or `--max-time`. A 4xx/5xx response can be saved as a non-empty error body and a stalled/slow remote can hang indefinitely. This is a distinct reliability task from the local assembly preflight.
- `scripts/atlas_cloud.py:upload()` also uses curl without an explicit timeout or `--fail`, so failures may surface as JSON parse errors or long hangs rather than actionable provider errors.

## Recommended new task
Add VD-002 for bounded, fail-fast Atlas Cloud asset transfers, scoped to curl flags, error messages, and tests using mocked subprocess calls. Do not alter billable POST retry behavior.
