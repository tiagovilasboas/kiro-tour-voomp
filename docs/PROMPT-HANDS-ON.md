# Hands-on Prompt: Kiro with Intention

> **Recommended model:** Claude Sonnet 4.6 (1M context window, required to load Jira and Confluence context)
>
> Before pasting, select **Claude Sonnet 4.6** in the Kiro model selector.

---

## The Prompt

```
Before anything else, please ask me the following questions
and wait for my answers before proceeding:

1. What is your name?
2. What is your main role on the team?
   (e.g. backend dev, QA, tech lead...)
3. What activities do you repeat most in your daily work?

Do not make assumptions. Do not move forward without my answers.

---

STEP 1 - CONTEXT GATHERING
Use the Jira MCP to fetch:
- My last 10 tasks in the VSUS project
- Required fields and board status flow

Use the Confluence MCP to fetch:
- Pages in the Voomp space related to my role
- Playbooks, onboarding docs and technical documentation

If you can't access these systems, let me know before continuing
and ask whether I should provide the context manually.

---

STEP 2 - ANALYSIS
Based on my role and the context gathered:
- Which flows do I repeat most frequently?
- Which ones cause the most friction or risk of error?
- Which already have Confluence docs that could become a Steering?

---

STEP 3 - PROPOSAL
Propose a personalized automation plan, prioritized by impact.
For each automation:
- Type: Steering / Skill / Hook
- Suggested name (in English)
- Problem it solves
- Estimated time saved per occurrence
- Whether it requires MCP or works without
- Where to create: ~/.kiro/ (global) or .kiro/ (local)

DO NOT create any files yet.
Present the plan and wait for my approval.

---

STEP 4 - IMPLEMENTATION (after approval)
- Steerings in ~/.kiro/steering/
- Skills in ~/.kiro/skills/
- Hooks in ~/.kiro/hooks/

All artifacts must be global (~/.kiro/) to work
in every project I open, not just this one.
```

---

## Why this prompt works as Spec Driven

| Phase | What happens |
|-------|-------------|
| **Requirements** | Model asks who you are and what you do, no assumptions |
| **Design** | Queries Jira and Confluence via MCP to understand your real context |
| **Tasks** | Proposes an impact-prioritized plan for your approval |
| **Implement** | Creates global artifacts in ~/.kiro/ after approval |

---

## Why Claude Sonnet 4.6

- **1M context window**: loads Jira history, Confluence pages and still maintains conversation context
- **Long sessions**: this prompt involves multiple rounds of collection and analysis
- **Best cost-benefit** for tasks with heavy context

---

## Why global (~/.kiro/)

Artifacts in `~/.kiro/` work in every project you open in Kiro.
Artifacts in `.kiro/` (without `~`) only work in the current project.

For superpowers tailored to YOUR way of working, global is the right place.

---

## What to do after the plan

1. Choose **one** automation: the highest impact for you this week
2. Approve and ask Kiro to create the file
3. Test on a real task
4. If it worked, expand. If not, adjust and repeat

> "The first version always only works for you. That's fine."
