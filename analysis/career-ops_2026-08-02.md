# career-ops — 2026-08-02 Deep Dive

## Status
🟡 **Mature personal automation system / dormant open-source snapshot** · confidence 4.0/5

Career-Ops is not a conventional web app. It is a Claude Code-centered job-search command center built around markdown modes, profiles, data contracts, Playwright portal scanning, tailored CV generation, interview story banking, and an integrity-checked tracker. The README claims 740+ offers evaluated and 100+ tailored CVs generated, making this one of the most operationally mature systems in the portfolio even though the repo has not been pushed since 2026-04-06.

## Architecture
- Node.js + Go utilities with Playwright for browser automation.
- Agent behavior is encoded in `CLAUDE.md`, `.claude/skills`, mode files, profile templates, and batch prompts.
- Data contracts and tracker outputs are treated as the source of truth rather than a hosted database.
- English and Spanish modes are present, with German offer/application modes.

## Strengths
1. It is a workflow system with explicit quality gates, not a generic “apply everywhere” bot.
2. The evaluation framework, story bank, negotiation scripts, and tailored-CV pipeline compound value over time.
3. The README clearly rejects spray-and-pray applications and recommends a score threshold plus human review.

## Risks
- Job portals change frequently; browser automation and selectors need scheduled smoke tests or they silently degrade.
- Automated job evaluation can encode bias, hallucinate compensation data, or overfit to a stale career profile.
- Resume and application data are highly sensitive; local files, browser sessions, generated PDFs, and logs need explicit retention and secret hygiene.
- The system’s most valuable state may live outside the repo, so a dormant Git history does not prove it is inactive in practice.

## Next action
Treat it as a stable operating manual rather than a new product. Run one end-to-end dry run against a current job listing, verify portal adapters and PDF output, and refresh the profile/data-contract examples. If the system is still used, add a small health-check command that reports adapter freshness, missing secrets, and last successful tracker integrity check.

## Score
**4.0/5** — high demonstrated utility, but maintenance and privacy controls matter more than feature work.
