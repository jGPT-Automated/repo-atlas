# ShellSync — Multi-Account GitHub Shell Orchestration

**Account:** GenJess
**Pushed:** 2026-06-22
**Status:** Shipped MVP
**Score:** 3.7/5 — TOOLING / UTILITY

## What It Is

A browser-based shell snippet manager for developers (especially AI agents) working across multiple GitHub accounts. Solves the friction of managing PATs, dynamically binding variables into bash commands, and auditing permission changes.

**Use case:** You're pushing code from an AI agent account to multiple repos under different GitHub accounts. ShellSync lets you:

1. Store PATs in a secure vault (separated by account)
2. Create bash templates with `{{TOKEN}}` and `{{REPO}}` placeholders
3. Auto-bind variables from your vault
4. Bulk-add collaborators across repos
5. Track history + audit changes

## Stack

React 18 + Vite + TypeScript + Tailwind. Client-side (no backend required yet). Gemini AI integrated for drafting custom bash.

## Shipped Features

- ✅ Multi-Account Key Vault (PAT isolation)
- ✅ Dynamic Shell Templates (placeholder binding)
- ✅ Repo + Collaborator Manager
- ✅ History + Auditing
- ✅ Gemini AI Copilot (draft bash scripts)

## Roadmap

- 🚧 Firebase Auth + Firestore (persistent cross-session state)
- 🚧 Web-based shell execution (direct API calls from UI)

## Why It's Useful

Eliminates copy-paste friction for agents + developers managing multi-account workflows. The Gemini Copilot layer is a nice touch — lets you describe what you want to do and it generates the bash.

## Portfolio Signal

**Weak.** This is a utility tool. It shows tooling thinking + solid React, but doesn't signal product depth or AI thinking. Good for "I can build tools" — not great for "I understand system design."

## Gaps

- No auth system (client-side only, data not persisted)
- Firebase integration not shipped yet
- No production deployment
- Limited use case (mostly for dev teams + agents)

## Why It's 3.7/5

| Aspect | Rating |
|--------|--------|
| **Code quality** | 8/10 | Clean React, good UX patterns |
| **Completeness** | 5/10 | MVP shipped, roadmap not prioritized |
| **Deployment** | 0/10 | No live URL |
| **Hiring signal** | 3/10 | Shows tooling skills, not differentiation |
| **Market size** | 2/10 | Niche use case |

**Final Score: 3.7/5** — Solid execution on a narrow use case. Shipping + useful, but low portfolio impact.
