# Contributing

This repository is a public **Kiro tour** — an interactive slide deck
(React + Vite) about steerings, skills, and agent hooks.

Contributing language for this file, issue forms, and pull requests is
**English**. Keep presentation content factually accurate. Commands and
paths stay in English fences.

Agent map: [AGENTS.md](AGENTS.md).

## How to propose a change

1. Open an issue with the **Improve tour** form
   (`.github/ISSUE_TEMPLATE/improve-tour.yml`).
2. Say what is wrong (slide, presenter doc, or repo hygiene) and why it
   matters.
3. Open a pull request against `main`. Use
   `.github/PULL_REQUEST_TEMPLATE.md`.

```bash
git checkout -b docs/fix-token-slide
```

Do not push directly to `main`.

## Quality bar

- Small, focused PRs — one concern per change.
- Do not dump private company process, secrets, or client IP into this
  public deck.
- New hygiene files, PR text, and issues stay in English. Existing
  slide/doc language may stay as-is unless the PR is explicitly about
  that text.
- Prefer `npm run build` before you ask for review.

## Scope

In scope: factual slide/doc fixes, presenter-doc clarity, and Stage-0
repo hygiene (`AGENTS.md`, license, templates).

Out of scope: inventing a universal playbook, rewriting branding without
an explicit request, or adding production credentials.
