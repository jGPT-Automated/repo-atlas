# AxonAI Analysis

**Account:** GenJess  
**Repository:** AxonAI  
**Language:** TypeScript + React  
**Created:** (inferred ~2026-04)  
**Last Pushed:** 2026-04-11  
**Updated:** 2026-06-23  
**Size:** 133 KB  
**Stargazers:** 2

---

## Overview

**AxonAI** (also called "TeamAgent Workspace" in the README) is a **white-label team collaboration platform** designed to be the "nervous system" of a multi-person project. It's built on the principle of **Autonomous Teammates** — AI agents that don't just chat, but actively coordinate, manage state, and execute work in parallel with human team members.

The core innovation is **context separation**: Individual chats (private deep work) + Team chats (shared coordination) with a tag-to-trigger activation model.

---

## Architecture

### Dual-Layer Context Model

1. **The Forge** (Individual Chat)
   - Private workspace for the user
   - Full history of personal workflows and goals
   - Agent acts as a direct extension of the user
   - Async storage persistence for continuity

2. **The Nexus** (Team Chat)
   - Shared coordination layer
   - Agent only wakes on explicit mention (`@Agent`)
   - Triages conversations, extracts tasks, updates workspace state
   - Prevents agent noise/spam in shared context

### Core Components

**Execution Dashboard**
- Real-time project health overview
- Active tasks, roadmap milestones, team activity
- Mission Control for the team

**Strategic Roadmap**
- Quarterly organization
- Agent can suggest roadmap items from chat context
- Move items between "Planned" → "In-Progress" → "Completed"

**Kanban Task Board**
- Robust execution pipeline
- Agent auto-triages backlog
- Assigns work based on teammate skills
- Auto-mark complete when work detected in drive/chat

**Unified Team Drive**
- Private drafts stay private (individual chat)
- Team assets auto-routed to shared storage (team chat)
- Single source of truth for all project files

### Tech Stack

```
Frontend:
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS v4
  - shadcn/ui component library

Backend/State:
  - Supabase (PostgreSQL + real-time sync)
  - Model Context Protocol (MCP)
  - Postgres `changes` API for live updates

AI Integration:
  - Agent interface via MCP tools
  - Complex state management via Supabase
  - File uploads to team drive
```

---

## Database Schema

**Core Tables** (as documented in README):

| Table | Purpose |
|-------|---------|
| `tasks` | Execution backlog (status: backlog/active/done) |
| `roadmap` | Strategic vision (quarter + status tracking) |
| `files` | Asset management (team vs private flag) |
| `messages` | Real-time team communication |
| `settings` | Workspace config (Supabase creds, agent name, etc) |

---

## Development Stage

**Status:** Early Production (MVP+)  
**Phase:** Functional prototype with core features  
**Code Maturity:** ~3–4 months of focused development  

**Current Capabilities:**
- ✅ Dual-context chat architecture
- ✅ Task + roadmap management
- ✅ Real-time Supabase sync
- ✅ MCP agent integration framework
- ✅ Team drive with privacy controls

**Not Yet Implemented:**
- ⚠️ Multi-agent delegation (mentioned as future roadmap)
- ⚠️ Advanced auth (currently basic)
- ⚠️ Workflow templates for recurring processes
- ⚠️ Webhook integrations for external tools (Slack, GitHub, etc.)

---

## Strategic Positioning

**What it solves:**
- Agent coordination friction (dual contexts prevent context collisions)
- Team awareness (roadmap + tasks give everyone visibility)
- Accountability (audit trail of who did what)
- Autonomy (agents can execute without constant user input)

**Who this is for:**
- Teams building products with AI agents (2–10 people)
- Agencies running multiple concurrent projects
- R&D teams that need both fast iteration + accountability

**Competitive advantages:**
1. **Tag-to-trigger model** — smarter than "always-on" agents
2. **Context separation** — private + shared layers prevent information silos
3. **Workspace-first design** — not just a chat wrapper
4. **Supabase backend** — real-time sync by default

---

## Estimated Maturity Score

**3.6–3.9 / 5.0**

**Rationale:**
- ✅ Novel architecture (dual-context is a real innovation)
- ✅ Solid tech stack (Vite + shadcn/ui + Supabase)
- ✅ Clear vision (white paper is well-written)
- ⚠️ Early production (last push 4/11, updated 6/23 — may be stalled on feature work)
- ⚠️ Limited deployment examples (no public instance visible)
- ⚠️ Future roadmap relies on unproven multi-agent delegation

---

## Technical Debt & Gaps

1. **Auth is minimal.** Current schema shows no user roles beyond settings. Need:
   - User authentication (OAuth)
   - Per-user row-level security (RLS)
   - Role-based access control (editor, viewer, admin)

2. **MCP integration is framework only.** The schema exists, but actual agent prompt/tool binding is likely incomplete. Need:
   - Concrete example of agent → MCP tool definition
   - Validation framework for task creation
   - Error handling for agent-initiated state changes

3. **No external integrations.** Roadmap mentions Slack/GitHub webhooks but not implemented. This limits discoverability (team won't use it if their existing tools don't feed into it).

4. **File handling is basic.** The schema has `files.url` and `is_team` flag, but:
   - No upload handler visible (likely in backend)
   - No preview/thumbnail generation
   - No file versioning

5. **Agent workflows are implicit.** Should have:
   - Template library for common workflows
   - Workflow state machine (draft → active → completed)
   - Retry/rollback logic for failed agent operations

---

## Observations

1. **This is a platform play, not a product.** AxonAI works best as a foundation for team-based SaaS applications, not a standalone tool.

2. **The "Autonomous Teammate" concept is real, but execution-heavy.** Creating an agent that knows when to act (tag-to-trigger) vs. how to act (MCP tool binding) requires careful engineering. Current code suggests this is still WIP.

3. **Deployment model unclear.** Is this:
   - Self-hosted (via Docker)?
   - SaaS (paid tier)?
   - Open-source framework?
   The README suggests self-hosted, but no deployment guide exists.

4. **Comparison to competitors:** Replit Teams, Linear agent integration, Notion AI — AxonAI's main advantage is the dual-context model. Needs to lean into that more heavily.

---

## Next High-Impact Moves

1. **Ship a complete end-to-end example** — Deploy a live instance with 3–5 people using it for a real project (internal or partner). Capture workflows.

2. **Auth + RBAC layer** — Multi-user support is table-stakes for team software. Add Supabase auth + role-based permissions.

3. **Webhook integrations** — Slack, GitHub, Linear, Figma. Let teams use AxonAI as the coordination hub without context-switching.

4. **Agent prompt library** — Provide 5–10 pre-built agent personalities for different roles (planner, executor, reviewer, etc.). Let teams customize.

---

**Analysis Date:** 2026-07-07  
**Session:** Repo Atlas — Daily Deep Dive
