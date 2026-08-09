# Repo Atlas analysis — 2026-08-09

Repository: `jGPT-Automated/vox-director`
Scope: read-only inspection of the latest default-branch snapshot (`922b87f2`, 2026-07-30).

## Verified findings

1. `SKILL.md` documents `command -v ffmpeg ffprobe` and `python3 -c "import PIL"` as prerequisites, but there is no executable preflight module or fixture-based smoke-test suite in the repository.
2. `scripts/atlas_cloud.py::upload` invokes curl with `-s`, `-X POST`, and multipart form data, but no connect timeout, overall timeout, `--fail-with-body`, or explicit response-size guard. `check=True` only checks curl's process exit code; HTTP error bodies can still be parsed as if they were successful until the missing URL check.
3. `scripts/atlas_cloud.py::download` uses `curl -s --retry 3 -o dest url` with no `--fail-with-body`, connect/overall timeout, or retry delay. It checks only whether the destination exists and is non-empty, so an HTTP error body can be mistaken for a downloaded asset.
4. Existing API GET/POST wrappers do have urllib timeouts and distinguish billable POSTs from retryable GET polls; the transfer helpers do not share that bounded/fail-fast contract.

## Backlog mapping

- VD-001: add dependency preflight and offline fixtures for the local media pipeline.
- VD-002: centralize bounded curl options, fail on HTTP status, validate downloaded content, and mock subprocess behavior in tests.

No task was approved or rejected this cycle; no `in_review` items were present.
