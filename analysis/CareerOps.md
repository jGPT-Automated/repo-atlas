# Career-Ops — AI-Powered Job Search Pipeline

**Repository:** GenJess/career-ops  
**Status:** Production MVP (last push 2026-04-06)  
**Primary Language:** Node.js + Go  
**Category:** Agentic / Career Tools  

---

## Overview

**Career-Ops** is an AI-powered job search system built on Claude Code that transforms job hunting from manual tracking into an intelligent pipeline. Instead of a spreadsheet-based approach, users describe job opportunities and the system evaluates them, generates ATS-optimized CVs, and tracks all candidates in a single source of truth.

### Core Philosophy
> **Not a spray-and-pray tool.** Career-ops is a filter. The system strongly recommends against applying to anything scoring below 4.0/5. Your time is valuable, and so is the recruiter's.

---

## Key Features

| Feature | Description | Value |
|---------|-------------|-------|
| **Offer Evaluation** | Structured A-F scoring (10 weighted dimensions) | 10x faster than manual review |
| **CV Generation** | ATS-optimized PDFs tailored per job description | Personalized at scale |
| **Portal Scanning** | Auto-scan 45+ pre-configured companies (Anthropic, OpenAI, ElevenLabs, Retool, n8n) | Passive lead generation |
| **Batch Processing** | Parallel evaluation of 10+ offers with sub-agents | 100+ CVs generated in one run |
| **Evaluation Engine** | 6-block assessment: role summary, CV match, level strategy, comp research, personalization, STAR+R interview prep | Holistic fit scoring |
| **Interview Story Bank** | Accumulates STAR+Reflection stories across evaluations | Answers any behavioral question |
| **Negotiation Scripts** | Salary negotiation frameworks + competing offer leverage | Data-backed asking price |
| **Human-in-the-Loop** | AI evaluates and recommends, user decides and acts. System never auto-submits. | User always has control |
| **Pipeline Integrity** | Automated merge, dedup, status normalization, health checks | Single source of truth |

---

## Architecture

### Tech Stack
- **Runtime:** Node.js (primary scripting)
- **Browser Automation:** Playwright (web scraping + PDF generation)
- **AI Backend:** Claude Code (reasoning + decision-making)
- **Optional Dashboard:** Go TUI (terminal user interface for browsing pipeline)
- **Configuration:** YAML (profile.yml, portals.yml)
- **Version Control:** Git + rollback system

### Project Structure
```
career-ops/
├── config/
│   ├── profile.example.yml    # User profile template
│   └── portals.example.yml    # Pre-configured job board list
├── templates/
│   └── portals.yml            # 45+ companies + custom queries
├── cv.md                       # User's CV in markdown (input)
├── evaluate-pipeline.mjs       # Main evaluation loop
├── generate-pdf.mjs            # Playwright PDF generation
├── dedup-tracker.mjs          # Remove duplicate entries
├── merge-tracker.mjs          # Consolidate job records
├── normalize-statuses.mjs     # Status standardization
├── verify-pipeline.mjs        # Health check script
├── cv-sync-check.mjs          # Verify CV consistency
├── update-system.mjs          # Check/apply/rollback system updates
└── README.md
```

### Data Model
- **Tracker file:** JSON array of job opportunities + metadata
  - Job URL
  - Company name + department
  - Role level + title
  - A-F score + weighted dimensions
  - Evaluation timestamp
  - Generated CV (PDF reference)
  - Application status (pipe, applied, offer, rejected, withdrawn)

---

## Design Philosophy

### 1. Agentic Self-Configuration
The system is **designed to be customized by Claude itself**. Users don't edit code or configs manually — they ask Claude (via Claude Code interface) to:
- "Change the archetypes to backend engineering roles"
- "Translate the modes to Spanish"
- "Add these 5 companies to portals.yml"
- "Update my profile with this CV"

Claude reads and edits the same files it uses, so it knows exactly what to modify.

### 2. Learning Curve
The first evaluations won't be great because **the system doesn't know the user yet**. It requires onboarding:
- Feed it context: CV, career story, proof points, preferences
- Define what to avoid
- Think of it as onboarding a new recruiter: week 1 they need context, then they become invaluable

### 3. Human in the Loop (HITL)
- AI recommends scoring + evaluation
- **User always decides** whether to apply
- System never auto-submits applications
- Every decision can be overridden or explained

---

## Evaluation System (6-Block)

### 1. **Role Summary**
Brief snapshot of the opportunity — company, team, title, level.

### 2. **CV Match**
How well does your background fit the job description? Not keyword matching — reasoning about actual fit.

### 3. **Level Strategy**
Is this a lateral move, promotion, or step down? What's the trajectory?

### 4. **Compensation Research**
Market rate for the role + geography + level. How does the offer compare?

### 5. **Personalization**
Does the role align with your stated preferences? Industry, tech stack, company stage, culture signals?

### 6. **Interview Prep**
STAR+Reflection stories mapped to the role's likely interview questions. Uses the accumulated Interview Story Bank.

---

## Portal Scanner Targets

**Pre-configured companies (45+):**
- Big Tech: OpenAI, Anthropic, Google, Microsoft, Amazon, Meta, Apple
- AI/ML: Retool, n8n, ElevenLabs, Hugging Face, Replicate
- Fintech: Stripe, Notion, Linear
- Startups: Early-stage company job boards (Wellfound)

**Scan methods:**
- Ashby API (modern ATS)
- Greenhouse API (popular ATS)
- Lever API (preferred by startups)
- Company career pages (direct HTML scraping)

---

## Competitive Positioning

| Aspect | Career-Ops | Traditional Approach | Advantage |
|--------|-----------|---------------------|-----------|
| **Offer Evaluation** | AI-scored (A-F) | Manual spreadsheet | 5x faster, less bias |
| **CV Customization** | Auto-generated per job | Generic single CV | Higher response rate |
| **Portal Coverage** | 45+ companies auto-scanned | Manual browsing | Passive lead generation |
| **Negotiation** | Data-backed scripts | Intuitive guessing | +$10-50k upside |
| **Decision Tracking** | Automated + auditable | Ad-hoc notes | Single source of truth |
| **Interview Prep** | Story bank + STAR formulas | Prepare ad-hoc | Consistent performance |

---

## Monetization Opportunities

1. **Professional Tier** ($29/mo)
   - Unlimited evaluations + CV generation
   - Portal scanning for 100+ companies
   - Negotiation playbooks + compensation intel
   - Interview coaching (STAR story bank)

2. **Enterprise Tier** ($99/mo or $500k+/year)
   - For recruiters / HR teams
   - Batch evaluation of candidates
   - Custom portal integrations (internal HRIS)
   - API access for automation

3. **Data Product**
   - Anonymized compensation intel database
   - Market-rate reports by role + geography + level
   - Interview question patterns (ML-extracted from evaluations)

---

## Launch Status & Blockers

### Ready Now
✅ Core evaluation engine (Claude Code)  
✅ CV generation (Playwright PDF)  
✅ Portal scanner (45+ companies pre-configured)  
✅ Batch processing (sub-agent workers)  
✅ YAML configuration system  

### Needs Validation
⚠️ **Portal reliability** — Does the ATS/company page scanning work at scale?  
⚠️ **Evaluation quality** — Do the A-F scores actually predict offer fit?  
⚠️ **Churn** — What's the retention after a user lands a job?  

### GTM Considerations
- **Initial audience:** Mid-level engineers + managers actively job hunting
- **Acquisition:** Content (job search automation blog), Product Hunt, Hacker News
- **Retention:** Offer evaluation library + negotiation scripts + community (shared offers database)

---

## Code Quality & Maturity

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Architecture** | 4/5 | Node.js scripts + Claude Code is straightforward but not microservices-ready |
| **Automation** | 5/5 | Playwright pipeline solid; batch processing works |
| **Documentation** | 4.5/5 | Excellent README + clear config templates |
| **Customization** | 5/5 | Claude-first design means user can ask the system to modify itself |
| **Production Readiness** | 4/5 | MVP works; needs error handling + retry logic for portal scanning |

---

## Strategic Assessment

### Strengths
✅ **Solves real problem** — Job hunting is universally painful and time-consuming  
✅ **Leverage Claude Code** — Built on a platform (Anthropic Claude) that's rapidly improving  
✅ **Network effects potential** — Shared offer database + salary intel creates stickiness  
✅ **B2B play available** — Recruiters + HR teams as secondary market  
✅ **Data moat possible** — Compensation intel + interview patterns = proprietary  
✅ **Proven use case** — Creator used it to evaluate 740+ offers + generate 100+ CVs + land Head of Applied AI role  

### Risks / Considerations
⚠️ **ATS/Portal fragmentation** — Keeping 45+ integrations up-to-date is expensive  
⚠️ **Evaluation quality tied to Claude** — If Claude scores poorly, the whole system fails  
⚠️ **Churn pattern** — High churn when user lands job (need retention loop)  
⚠️ **Incumbent competition** — Workday, Greenhouse, Lever have recruiting data  
⚠️ **Privacy sensitivity** — Storing user CVs + job application data has liability  

---

## Financial Modeling (Rough)

### Unit Economics
- **CAC:** $10–20 (organic, Product Hunt, Hacker News)
- **Pricing:** $29/mo (pro tier)
- **Payback period:** ~1–2 months
- **Churn:** Unknown (job hunting is cyclical — high churn post-offer)
- **Upsell:** Negotiation coaching, interview prep coaching ($50–100/month)

### TAM
- **Initial:** 50M+ white-collar workers globally
- **Addressable:** 5M+ actively job hunting at any time
- **Capture opportunity:** 1% = 50k users; $29/mo × 50k = $1.45M ARR

---

## Next Steps

### Immediate (Next Sprint)
1. **Reliability audit** — Test portal scanning across 45 companies; measure success rate
2. **Evaluation validation** — Do A-F scores correlate with user happiness post-hiring?
3. **Error handling** — Add retry logic + fallbacks for failed portal scans
4. **Analytics** — Track: evaluations/day, CVs generated, conversion to application

### Medium Term (2-3 Months)
1. **User research** — Talk to 20+ job hunters; refine evaluation scoring
2. **Recruitment tactics** — Beta list + early access cohort (target 100 users)
3. **Data product** — Build anonymized compensation intel report (LLM + aggregation)
4. **B2B pilot** — Approach 1–2 recruiters with API access

### Long Term (6+ Months)
1. **SaaS launch** — Move from CLI/Claude Code to web UI
2. **Mobile app** — iOS/Android for job alerts + evaluation push notifications
3. **Integration layer** — Direct integrations with LinkedIn, Indeed, Workday
4. **Marketplace** — Offer coaches, negotiators, career advisors (rev-share)

---

## Rating & Recommendation

**Maturity Score: 4.2 / 5.0**

| Criterion | Score | Notes |
|-----------|-------|-------|
| **Product-Market Fit** | 4/5 | Solves genuine pain; creator validation strong |
| **Technical Execution** | 4/5 | Solid Node.js + Playwright pipeline; needs scaling |
| **Architecture** | 4/5 | Claude-first is innovative; may need refactoring for SaaS |
| **Monetization Clarity** | 4/5 | Clear pricing path; data moat potential |
| **Go-to-Market** | 3/5 | MVP-stage GTM; needs customer research first |
| **Scalability** | 3.5/5 | Portal scanning fragile at 10k+ users; needs abstraction |

---

## Summary

**Career-Ops** is a **design-first agentic tool** built by someone who solved their own problem. The creator used it to evaluate 740+ offers and land a Head of Applied AI role — proof of concept is strong. The system is clever: letting Claude customize itself (vs. hard-coded config) reduces friction and increases retention.

**Key insight:** Success depends on:
1. **Portal reliability** — Can the 45 integrations scale to 10k+ monthly users?
2. **Churn resolution** — How to keep users engaged between job hunts?
3. **Data moat** — Building compensation intel database + interview patterns could define competitive advantage

The product works. The market is real. The next phase is **founder → startup team** (sales, ops, data science).

---

**Analysis completed:** 2026-07-22 10:15 UTC  
**Last push:** 2026-04-06 (3+ months stalled)  
**Recommendation:** Monitor for future activity; strong candidate for seed funding / acquisition
