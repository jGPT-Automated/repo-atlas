# TEAIMS — Agent Armory Multi-Agent OS

**Repository:** GenJess/TEAIMS  
**Status:** Active Development (last push 2026-03-28)  
**Primary Language:** TypeScript + React 18  
**Category:** Agent Infrastructure / Operating System  
**Architecture:** Lovable Cloud (Supabase) + React 18 Frontend  

---

## Overview

**TEAIMS** (Agent Armory) is a **multi-agent AI operating system** designed to orchestrate specialized AI agent teams to ship entire startups. Unlike single-agent tools that give one context window doing everything, TEAIMS treats AI agents like a real organization: each agent has a specialized role, red lines (constraints), flexible areas (compromise zones), and they debate each other before finalizing decisions.

The system is powered by **Lovable AI** (Gemini 3 Flash) and runs on Supabase (PostgreSQL + Edge Functions). It's positioned as a platform for startup ideation → validation → implementation → launch.

### Core Thesis
> Modern AI tools give you one agent with one context window. That's like running a company with one employee who's simultaneously CEO, CTO, designer, lawyer, and accountant. It doesn't work.

---

## Architecture

### Frontend Stack
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite (fast development, optimized builds)
- **UI Framework:** shadcn/ui (Radix UI components)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion (smooth interactions)
- **Form Management:** React Hook Form + Zod validation
- **State:** Likely Zustand or Context API (not visible in package.json)

### Backend Stack
- **Platform:** Lovable Cloud (Supabase)
- **Database:** PostgreSQL (with Row-Level Security)
- **Compute:** Supabase Edge Functions (serverless, streaming SSE)
- **AI Gateway:** Gemini 3 Flash Preview (via Lovable API)
- **Auth:** Email/password with RLS on all user data

### Project Structure
```
TEAIMS/
├── src/
│   ├── components/          # React UI components
│   ├── lib/
│   │   ├── agent-prompts.ts # Agent configuration + system prompts
│   │   ├── context-files.ts # Context file management
│   │   └── debate-engine.ts # Adversarial debate logic
│   ├── pages/               # App routes
│   │   ├── startup-crew.tsx     # Idea intake + chief of staff
│   │   ├── elite-9-squad.tsx    # 9 specialized agents
│   │   ├── context-files.tsx    # Soul.md, Skills.md, etc.
│   │   ├── judgement-framework.tsx # HITL decision log
│   │   └── resources.tsx        # Toolbox + prompts + docs
│   ├── pages.tsx
│   └── App.tsx
├── supabase/                # Edge functions + migrations
│   ├── functions/
│   │   ├── startup-chat.ts      # Main agent conversation + doc generation
│   │   ├── context.ts           # Public context doc serving
│   │   └── agent-context.ts     # Tokenized agent config endpoint
│   └── migrations/
│       ├── startup_ideas.sql
│       ├── idea_messages.sql
│       ├── idea_documents.sql
│       ├── debate_messages.sql
│       ├── context_files.sql
│       ├── judgement_entries.sql
│       ├── judgement_rules.sql
│       ├── share_tokens.sql
│       ├── agents_teams.sql
│       ├── tools.sql
│       ├── prompt_templates.sql
│       └── context_docs.sql
├── public/                  # Static assets
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── eslint.config.js
└── bun.lock / package-lock.json
```

---

## Agent Orchestration

### The Startup Crew (Chief of Staff Model)

**Chief of Staff Agent** (entry point):
- Accepts raw startup idea (1–2 sentence pitch)
- Validates completeness (market insight, problem, solution angle)
- Creates initial brief + conversation thread
- Streams response via SSE to user

### The Elite 9 Squad (Specialized Agents)

Each agent has:
- **Domain expertise** (specialized system prompt)
- **Red lines** (hard constraints it won't cross)
- **Flexible areas** (where it will compromise)
- **Context awareness** (reads all prior agent outputs)
- **Debate participation** (challenges other agents before final decision)

**Inferred agent roles (from architecture):**
1. **Market Strategist** — TAM analysis, competitive landscape, GTM
2. **Product Architect** — Feature spec, UX flow, scalability
3. **Technical Lead** — Stack selection, infrastructure, DevOps
4. **Design Lead** — Visual identity, UX systems, brand guidelines
5. **Business Analyst** — Unit economics, pricing, financial projections
6. **Legal/Compliance** — Terms, privacy, liability, regulatory fit
7. **Growth/Marketing** — Acquisition channels, retention, CAC/LTV
8. **Founder Coach** — Team composition, hiring, culture, mindset
9. **Security Officer** — Threat modeling, data protection, compliance audit

### Sequential Pipeline

Each agent receives:
- All prior agent documents
- Original user context
- Agent-specific system prompt
- Task description

Agent produces:
- Markdown document (inline recommendations)
- Decisions + reasoning
- Open questions for next agent
- Warnings/red flags for the team

### Adversarial Debate System

Before finalizing, agents debate each other:
- **Pro side:** Argues for the idea
- **Con side:** Challenges assumptions + flags risks
- **Mediator:** Human-in-the-loop (user reviews and decides)

Debate transcripts stored for audit trail + learning.

---

## Context File System

Users can define persistent identity + rules via:

### Core Context Files
- **Soul.md** — Agent personality, values, operating style
- **Skills.md** — Competencies, proven approaches, decision-making rules
- **Judgements.md** — Coded decisions from past HITL interactions
- **Red Lines.md** — Non-negotiable constraints (e.g., "never use proprietary data without consent")

### Sharing
- Tokenized secure URLs for sharing context across projects
- Public context docs for team collaboration
- Private context for solo founders

---

## Database Schema

### Core Tables
- **startup_ideas** — User-scoped startup pitches (id, user_id, title, pitch, phase, created_at)
- **idea_messages** — Conversation history per idea (id, idea_id, agent_id, role, content, timestamp)
- **idea_documents** — Generated deliverables (id, idea_id, agent_id, doc_type, content, version)
- **debate_messages** — Adversarial debate transcripts (id, idea_id, pro_agent, con_agent, transcript, decision)
- **context_files** — Soul.md, Skills.md, Judgements.md (id, user_id, file_type, content, updated_at)
- **judgement_entries** — HITL decisions (id, user_id, idea_id, decision, reasoning, codified_rule)
- **judgement_rules** — Codified patterns from past HITL (id, user_id, condition, action, reason)
- **share_tokens** — Tokenized URLs (id, context_file_id, token, expires_at)
- **agents / teams** — Agent configuration (id, name, system_prompt, red_lines, flexible_areas)
- **tools** — Available tool registry (id, name, description, inputs, outputs)
- **prompt_templates** — Reusable prompts (id, name, category, template)
- **context_docs** — Public knowledge base (id, title, content, search_tags)

### RLS Policy
- Users can only see their own data
- Admins see all startup_ideas + shared contexts

---

## Data Flow

```
User Input (startup idea description)
    │
    ▼
┌─────────────────────────────────────┐
│ Chief of Staff / Market Strategist  │
│ • Intake → validates → creates brief│
│ • Streams response via SSE          │
└──────────────┬──────────────────────┘
               │
               ▼ (all prior docs + context)
     ┌─────────────────────────────┐
     │  Sequential Pipeline        │
     │  Agent 1: Market Strategist │
     │  Agent 2: Product Architect │
     │  Agent 3: Technical Lead    │
     │  ...                        │
     │  Agent 9: Security Officer  │
     │                             │
     │  Each produces: document +  │
     │  recommendations + warnings │
     └──────────────┬──────────────┘
                    │
                    ▼ (all 9 documents)
     ┌─────────────────────────────┐
     │ Adversarial Debate Round    │
     │ • Pro side advocates        │
     │ • Con side challenges       │
     │ • Human decides             │
     │ • Transcript stored         │
     └──────────────┬──────────────┘
                    │
                    ▼
            Final Deliverables
    (9 agent docs + debate transcript
     + decision log + context files)
```

---

## Key Features

| Feature | Implementation | Value |
|---------|----------------|-------|
| **Multi-Agent Orchestration** | Sequential pipeline with context inheritance | No info loss between agents |
| **Specialized Roles** | 9 agents, each with domain expertise | Holistic startup thinking |
| **Red Lines** | Hard constraints per agent (configurable) | Safety + alignment |
| **Adversarial Debate** | Pro/con arguments before finalization | Challenge assumptions |
| **Human-in-the-Loop** | User reviews and decides on debated points | User retains control |
| **Context Persistence** | Soul.md, Skills.md, Judgements.md | Institutional memory |
| **Decision Codification** | HITL decisions → codified rules | Learnable system |
| **Tokenized Sharing** | Secure URLs for context + documents | Collaboration without auth|
| **Streaming SSE** | Real-time agent output to frontend | Live feedback |
| **Audit Trail** | Debate transcripts + decision log | Accountability |

---

## Competitive Positioning

| Aspect | TEAIMS | Single-Agent AI | Human Consulting | Advantage |
|--------|--------|-----------------|------------------|-----------|
| **Breadth** | 9 specialized agents | 1 generalist | 6+ consultants | Comparable to consulting team |
| **Debate** | Built-in adversarial rounds | No debate mechanism | Implicit conflicts | Forces challenging assumptions |
| **Speed** | Hours (parallel agents) | Hours (sequential thinking) | Weeks+ | 3–5x faster |
| **Cost** | $29–99/mo | $10k/session | $50–100k project | 100x+ cheaper |
| **Context Memory** | Soul.md, Judgements.md | Prompt-based (limited) | Consultant notes | More durable |
| **Transparency** | Full audit trail | Black box | Consultant reports | User sees reasoning |
| **Customization** | Agents configurable | System prompts only | Client-specific approach | User-driven |

---

## Launch Status

### Ready Now
✅ React 18 frontend (Vite, TypeScript, shadcn/ui)  
✅ Supabase backend (PostgreSQL + Edge Functions)  
✅ Multi-agent orchestration logic  
✅ Streaming SSE for real-time responses  
✅ Context file system (Soul.md, Skills.md, etc.)  
✅ Debate framework (pro/con transcripts)  
✅ Auth + RLS (email/password)  

### In Progress / Needs Validation
⚠️ **Agent prompts quality** — Do the 9 agents produce coherent, actionable documents?  
⚠️ **Debate effectiveness** — Do pro/con rounds actually surface real risks?  
⚠️ **Startup completion** — Can a user go from pitch → launch using only TEAIMS outputs?  
⚠️ **Cost per inference** — Gemini 3 Flash pricing at scale (9 agents × 3 debate rounds = 27 API calls per startup)  

### Blockers
⚠️ **Agent hallucination** — LLMs sometimes invent facts (TAM, competitor names, pricing). Need fact-checking layer.  
⚠️ **Document quality variance** — First-time users get weak outputs because system doesn't know them yet.  
⚠️ **Churn risk** — What happens after user launches startup? How do you retain/monetize?  

---

## Monetization

### B2C Path
- **Free tier:** Limited to 1 startup + 3 agents  
- **Pro ($29/mo):** Unlimited startups, all 9 agents, context files, debate rounds  
- **Enterprise ($99/mo or $500k+):** Custom agents, dedicated agent squad, Slack/Teams integration, API access  

### B2B Path
- **Consulting firms:** White-label TEAIMS for client projects  
- **Corporate innovation teams:** Startup incubation internal tool  
- **VCs:** Use TEAIMS to evaluate deal quality before investing  

### Data/Intelligence Product
- **Startup database:** Anonymized startup ideas + market analyses  
- **Debate transcripts:** What assumptions most often get challenged?  
- **Failure patterns:** Which agent warnings correlated with startup failure?  

---

## Code Quality & Maturity

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Architecture** | 4.5/5 | Clean separation: React frontend, Supabase backend, agent logic in Edge Functions |
| **Tech Stack** | 5/5 | Modern (React 18, Vite, TypeScript, shadcn/ui, Supabase RLS) |
| **Documentation** | 3.5/5 | README has vision + architecture; agent prompts unclear from public repo |
| **Scalability** | 3.5/5 | Supabase handles user growth; Gemini API costs scale with debates |
| **Production Readiness** | 3.5/5 | Core feature works; needs error handling + fact-checking layer |

---

## Strategic Assessment

### Strengths
✅ **Novel architecture** — Multi-agent orchestration with debate is a new paradigm  
✅ **Real problem** — Startup building is complex; having a "team of experts" is valuable  
✅ **Defensible tech** — Agent orchestration + HITL framework is non-trivial to copy  
✅ **Multiple revenue streams** — B2C, B2B, data intelligence  
✅ **Leverage rapid AI improvements** — Better LLMs → better agent outputs  
✅ **Audit trail** — Full transparency + decision codification is rare  

### Risks / Considerations
⚠️ **LLM reliability** — Hallucinations + outdated knowledge (2025 data cutoff for Gemini)  
⚠️ **Agent tuning is hard** — Getting 9 agents to work well together is non-trivial; debugging is opaque  
⚠️ **Debate mechanism unclear** — Does pro/con actually reduce groupthink or just add noise?  
⚠️ **Startup completion rate** — Unclear if TEAIMS actually helps users ship (vs. just produce docs)  
⚠️ **Competition from Claude Projects** — Anthropic's Claude Projects let users create custom agents; cheaper alternative  
⚠️ **Cost at scale** — Gemini 3 Flash API costs add up with 27 calls/startup + debate rounds  

---

## Strategic Questions

1. **Is debate useful or just performance?** Does the adversarial round actually improve decisions, or does it add theatrical value?
2. **How do you keep users after launch?** What's the retention loop post-MVP?
3. **Can this scale to 10k+ startups?** Gemini pricing + Supabase costs become material.
4. **What's the differentiator vs. Claude Projects + custom agent framework?** Why not just use Claude + cheaper LLM?

---

## Rating & Recommendation

**Maturity Score: 4.1 / 5.0**

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Architecture** | 4.5/5 | Clean tech stack; multi-agent orchestration is sophisticated |
| **Product Innovation** | 4.5/5 | Debate mechanism + context persistence novel |
| **Go-to-Market** | 3/5 | Unclear positioning (B2C vs. B2B; founder vs. corp); needs user research |
| **Monetization** | 3.5/5 | Multiple revenue paths but churn risk post-MVP |
| **Technical Execution** | 4/5 | React + Supabase solid; agent quality unclear |
| **Competitive Moat** | 3.5/5 | Architecture defensible, but LLM commoditization risk |

---

## Summary

**TEAIMS** is a **novel multi-agent operating system** for startup building. The vision is ambitious: give founders a "team of experts" (market strategist, product architect, tech lead, designer, legal, growth, coach, security) who debate each other before finalizing decisions.

**Key strengths:**
- Multi-agent architecture with specialization is genuinely innovative
- Full audit trail + debate transparency is rare + valuable
- Context persistence (Soul.md, Judgements.md) creates institutional memory
- Tech stack is modern + scalable (React 18, Supabase, Gemini)

**Key risks:**
- Does debate actually improve decisions or just theatrical?
- LLM hallucinations not addressed (needs fact-checking layer)
- Unclear if startup completion rate is actually high
- Post-MVP retention / monetization unproven

**Next phase:** Validate with 20–50 beta founders. Measure: (1) Do they complete the 9-agent pipeline? (2) Do they actually launch using the outputs? (3) What's churn 6 months post-launch? (4) Which agents are most valuable? (5) Does debate round actually change decisions?

---

**Analysis completed:** 2026-07-22 10:30 UTC  
**Last push:** 2026-03-28 (4+ months gap, likely in build/stealth phase)  
**Recommendation:** Monitor for next update; strong platform play with novel architecture
