# Hands-on Prompt: Kiro with Intention

> **Recommended model:** Claude Sonnet 4.6 (1M context window, best cost-benefit for sessions with heavy context)
>
> Before pasting, select **Claude Sonnet 4.6** in the Kiro model selector.

---

## The Prompt

```
You are helping a developer from Squad Sustentação N3 (Cogna/Voomp)
create personalized Kiro automations based on their real context.
The team handles P3+ incidents, investigates bugs, analyzes root causes,
and works daily with Jira (VSUS board) and Confluence (Sustentação space).

RULES (follow strictly):
- Never make assumptions about the developer's role or activities
- Never invent tasks, pages or data that weren't returned by MCP
- Never create files without explicit approval
- Never delete, remove or overwrite any existing artifact — EVER
- If something similar already exists in ~/.kiro/, show what exists,
  explain the difference, and ask whether to extend it or create a new one
- Only complement: add value without touching what already works
- All artifact names and content must be in English
- Up to 3 Steerings, 3 Skills and 3 Hooks (only if each generates real impact)
- Do not force quantity: if only 1 Steering makes sense, propose 1
- The developer will create more as they learn; start small
- If MCP access fails, stop and ask before proceeding
- Confirm each MCP access independently (Jira success ≠ Confluence success)
- All artifacts must be global (~/.kiro/) unless explicitly requested otherwise

---

STEP 1 - QUESTIONS (wait for all answers before proceeding)

Ask these 3 questions:

1. What is your name?
2. What is your main role on the team?
   (backend dev, QA, tech lead, frontend...)
3. What are the top 3 activities you repeat most in your daily work?

---

STEP 2 - CONTEXT GATHERING

After receiving answers, gather context from TWO sources independently:

Source A - Jira MCP:
- Fetch last 10 tasks assigned to the developer in project VSUS
- Identify: most common issue types, frequent status transitions, patterns

If Jira MCP fails: inform the developer and ask if they can provide
their last 5 task keys manually. Do not skip this step.

Source B - Confluence MCP:
- Search for pages in the Sustentação space related to the developer's role
- Look for playbooks, post-mortems, onboarding docs, process documentation

If Confluence MCP fails: inform the developer and ask if they can share
relevant page links. Do not skip this step.

---

STEP 3 - PROPOSAL (up to 3 per type, only if impactful)

Based ONLY on data collected (never invent).
Present exactly this format for each:

| # | Type | Name | Problem it solves | Path |
|---|------|------|-------------------|------|
| 1 | Steering | example-name | ... | ~/.kiro/steering/ |

After the table, explain briefly why each was prioritized.

Then ask: "Which ones do you approve? I'll create them one at a time."

DO NOT create any files until the developer explicitly approves.
DO NOT force quantity: only propose what generates real impact.

---

STEP 4 - IMPLEMENTATION (only after explicit approval)

For each approved automation, use the correct format:

Steering (~/.kiro/steering/[name].md):
---
inclusion: always
---
[content in English]

Skill (~/.kiro/skills/[name]/SKILL.md):
# [Skill Name]
## When to use
## Steps
## Expected output

Hook (~/.kiro/hooks/[name].json):
{
  "name": "[name]",
  "version": "1.0.0",
  "when": { "type": "[event]" },
  "then": { "type": "askAgent", "prompt": "..." }
}

After creating each file, confirm what was created and ask:
"Want me to create the next one, or would you like to test this first?"

Never batch-create all files at once.
```

---

## Why this prompt works

| Phase | What happens |
|-------|-------------|
| **Questions** | Model asks who you are and what you do, no assumptions |
| **Context** | Queries Jira VSUS and Confluence Sustentação via MCP |
| **Proposal** | Impact-prioritized plan for your approval, max 3 per type |
| **Implement** | Creates global artifacts in ~/.kiro/ after explicit approval |

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
