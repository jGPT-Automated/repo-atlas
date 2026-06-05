# 🗺️ Repo Atlas

**Owner:** Jesse Harrick  
**Managed by:** jGPT-Automated  
**Mission:** Deep inventory, analysis, and synthesis of all repos across all Jesse's GitHub accounts. One truth. No assumptions.

---

## What This Is

A systematic, methodical deep-dive into 130 repos across 3 accounts:

- **[agenticjess-star](https://github.com/agenticjess-star)** — 26 repos
- **[GenJess](https://github.com/GenJess)** — 74 repos  
- **[jGPT-Automated](https://github.com/jGPT-Automated)** — 30 repos

**Total:** ~130 repos | **Pace:** 3–5 per day | **Est. completion:** 4–6 weeks

This repo is the agent's working memory, source of truth, and portfolio distillation surface.

---

## Structure

```
repo-atlas/
├── README.md              ← This file. Status board.
├── meta/
│   ├── master-inventory.md    ← All 130 repos, status, cluster, priority
│   ├── progress-log.md        ← Daily work log. Continuation context.
│   └── synthesis-notes.md     ← Cross-repo patterns, best-of picks, discoveries
├── analysis/
│   ├── localcheck/            ← 8 repos (pickup sports platform)
│   ├── omniavital/            ← 7 repos (AI wellness)
│   ├── portfolio/             ← 8 repos (identity/personal sites)
│   ├── dating/                ← 4 repos (Hinge/dating AI)
│   ├── voice-agents/          ← 6 repos (voice, yep, medical)
│   ├── trading-finance/       ← 8 repos (options, crypto, trading)
│   ├── bnr-client/            ← 7 repos (B&R power washing client)
│   ├── agent-infra/           ← 7 repos (openclaw, JAW, GenJess_OS)
│   ├── context-tools/         ← 5 repos (context-canvas, knowledge tools)
│   ├── phone-mcp/             ← 3 repos (phone lookup + x402)
│   ├── ui-design/             ← 4 repos (design systems)
│   └── other/                 ← 6 repos (misc)
```

---

## Current Status

| Date | Cluster | Repos Analyzed | Agent Notes |
|------|---------|---------------|-------------|
| — | — | 0 / 130 | Inventory complete. Analysis begins Day 1. |

---

## Priority Order (Agent's Working Sequence)

Ordered by: portfolio impact → project complexity → synthesis opportunity

1. **LocalCheck** (8 repos) — most complex, multiple platforms, best synthesis opportunity
2. **OmniaVital** (7 repos) — versioned product, need to find canonical best
3. **Agent Infra** (7 repos) — JAW, GenJess_OS, openclaw — command center potential
4. **Trading/Finance** (8 repos) — alpha-gauge + options-harvester are portfolio-worthy
5. **Portfolio/Identity** (8 repos) — distill the best personal site
6. **Voice Agents** (6 repos) — yep variants + medical agent
7. **B&R Client** (7 repos) — real client work = credibility
8. **Context Tools** (5 repos) — knowledge/PKM tools
9. **Dating AI** (4 repos) — HingeDatAI, DatingData
10. **Phone MCP / x402** (3 repos) — already strong, quick analysis
11. **UI Design** (4 repos) — design skills repos
12. **Other** (6 repos) — misc, assess individually

---

## How to Read the Daily Log

Each day the agent will:
1. Read `meta/progress-log.md` to resume exactly where it left off
2. Deeply analyze 3–5 repos in the current cluster
3. Write structured analysis to `analysis/<cluster>/<repo-name>.md`
4. Update `meta/master-inventory.md` with status
5. Update `meta/synthesis-notes.md` with cross-repo learnings
6. Send Jesse a concise Telegram update with findings + portfolio implications

**The goal is never surface-level.** Every analysis answers:
- What is this actually? (not just what the README says)
- What's the best code/feature/architecture in it?
- Is there a better version of this in another repo?
- Portfolio value: High / Medium / Low / Archive
- What should be done with it?
