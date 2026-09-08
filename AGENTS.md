# Agents

This repository is an interactive **Kiro tour / presentation**: a React + Vite
slide deck that explains Kiro Agentic IDE concepts — steerings, skills, and
agent hooks.

It is a teaching deck, not a production playbook. Historically framed for a
Cogna/Voomp N3 audience; leave existing slide narratives alone unless a change
is explicitly requested.

Humans: see [CONTRIBUTING.md](CONTRIBUTING.md).

## Layout

```
src/              Vite app (slides, chrome, entry)
src/slides/       One component per slide
src/ui/           Presentational chrome (nav, wrapper, progress)
docs/             Presenter notes, checklists, hands-on prompts
public/           Static assets (logos)
index.html        Vite HTML entry
vite.config.ts    Dev server on port 3002
```

## Commands

```bash
npm install
npm run dev      # http://localhost:3002
npm run build    # tsc -b && vite build
npm run preview  # local preview of dist/
```

There is no lint or test script in `package.json`. Prefer `npm run build`
before opening a PR.

## Do

- Open a pull request; do not commit to `main`.
- Keep PRs small and focused (one hygiene, one slide fix, or one doc fix).
- Preserve factual accuracy of the tour (tokens, context, steerings / skills / hooks).
- Write new repo hygiene, issue forms, and PR text in English.
- Treat `docs/` as presenter support for this deck, not a universal squad process.

## Don't

- Do not invent production secrets, tokens, or private company process.
- Do not treat these slides as a universal playbook for every team or host.
- Do not rewrite Cogna/Voomp branding or slide narratives unless that is the task.
- Do not add vendor lock-in or dump client IP into the public deck.
