# Kiro: do hype ao controle.

Onboarding deck for Cogna/Voomp Sustentação N3.

## Start

- **View:** [kiro-tour-voomp.vercel.app](https://kiro-tour-voomp.vercel.app/)
- **Run:**

```bash
npm install
npm run dev
```

Open **http://localhost:3002**. Navigate with `←` `→` or `Espaço`.

---

## 📊 Os 17 Slides

| # | Slide | Objetivo | Tempo |
|---|-------|----------|-------|
| 1 | **Capa** | Abrir a jornada | 15s |
| 2 | **Evolução da IA** | 70 anos em 4 momentos | 1min |
| 3 | **Large Language Models** | Como funciona + modelos do Kiro | 2min |
| 4 | **O que é um Token** | Unidade fundamental + billing | 2min |
| 5 | **Embeddings** | Vetores numéricos + clusters semânticos | 1min |
| 6 | **Context Window** | Limites + como o Kiro monta a janela | 1-2min |
| 7 | **A Ilusão do Pensamento** | Pattern matching, não raciocínio (Apple Research) | 2min |
| 8 | **O Rollback da IA** | Fatura do hype: Microsoft, Uber, Cloudflare, Tokenmaxxing | 2min |
| 9 | **IDEs com IA** | Cursor, Windsurf, Claude Code, Copilot, Kiro: cada uma com um propósito | 1min |
| 10 | **Kiro como Sistema** | 4 pilares básicos + fluxo Spec → Steering → Skill → Hook → Resultado | 1-2min |
| 11 | **Kiro Avançado** | 4 pilares futuros (Integrações, Powers, Context Engineering, Governança) | 1min |
| 12 | **Spec Driven** | Requirements → Design → Tasks | 1-2min |
| 13 | **Steerings** | Contexto persistente + exemplos reais do time N3 | 2min |
| 14 | **Skills** | 2 skills reais (incident-triage e post-mortem) | 2min |
| 15 | **Agent Hooks** | Hooks contextuais: save, task, manual triggers | 2min |
| 16 | **Hands-on** | CTA + Prompt interativo com botão de copiar | 2min |
| 17 | **Recursos** | Links diversificados (Rocketseat, Anthropic, Simon Willison, Kiro docs) | 30s |

**Tempo total estimado:** 24-30 minutos (com perguntas) + prática ao vivo depois

---

## 📖 Documentação

| Doc | O que tem |
|-----|-----------|
| [Guia de Apresentação](docs/GUIA-APRESENTACAO.md) | Script completo dos 17 slides |
| [Prompt Hands-on](docs/PROMPT-HANDS-ON.md) | Prompt em inglês com guardrails para criar automações |
| [MCP Setup](docs/MCP-SETUP.md) | Configuração Jira + Confluence + Azure DevOps para o hands-on |
| [Checklist do Dia](docs/CHECKLIST.md) | O que fazer 30 minutos antes de apresentar |

---

## Stack

React 19 · TypeScript 5 · Vite 6 · Tailwind CSS v4 · Framer Motion · Lucide React

---

## Hooks do time (globais)

Os 15 Agent Hooks do time estão em `~/.kiro/hooks/` e funcionam em qualquer workspace:

| Categoria | Hooks |
|-----------|-------|
| **Jira** | `jira-task-start`, `jira-close-task`, `jira-description-pattern`, `jira-causa-raiz-pattern` |
| **PHP** | `php-lint-save`, `php-code-review-on-save`, `php-scaffold-new-file`, `test-scaffold`, `run-tests-post-task` |
| **Investigação** | `bug-investigation`, `health-check-platform`, `war-room-status` |
| **PR/Deploy** | `generate-pr-description`, `post-execution-review` |
| **Frontend** | `eslint-frontend-save` |

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

## License

[MIT](LICENSE)
