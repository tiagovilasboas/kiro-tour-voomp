# Kiro: a maioria usa. Poucos entendem.

🔗 **Live:** [kiro-tour-voomp.vercel.app](https://kiro-tour-voomp.vercel.app/)

Apresentação para o time de Sustentação N3 da Cogna/Voomp.

---

## 🎯 O ponto central desta apresentação

O Kiro não é um chatbot glorificado. Ele é um **agente** — um modelo de linguagem com acesso a ferramentas, contexto persistente e capacidade de agir no seu ambiente de desenvolvimento.

Para usar Kiro bem, o time precisa entender três coisas fundamentais:

1. **Como LLMs funcionam** — tokens, contexto, probabilidade. Isso explica por que um Steering bem escrito importa mais que um prompt genérico.
2. **O que LLMs NÃO fazem** — não pensam, não raciocinam. Reconhecem padrões em escala massiva. Entender isso evita frustração e melhora a forma como damos contexto.
3. **Steerings, Skills e Agent Hooks** — as três camadas que transformam um modelo genérico num agente especializado no contexto da Voomp.

---

## 📊 Os 17 Slides

| # | Slide | Objetivo | Tempo |
|---|-------|----------|-------|
| 1 | **Capa** | Abrir a jornada | 15s |
| 2 | **Evolução da IA** | 70 anos em 3 momentos | 1min |
| 3 | **Large Language Models** | Como funciona + modelos do Kiro | 2min |
| 4 | **O que é um Token** | Unidade fundamental + billing | 2min |
| 5 | **Embeddings** | Vetores numéricos + clusters semânticos | 1min |
| 6 | **Context Window** | Limites + como o Kiro monta a janela | 1-2min |
| 7 | **A Ilusão do Pensamento** | Pattern matching, não raciocínio (Apple Research) | 2min |
| 8 | **IDEs com IA** | Cursor, Windsurf, Claude Code, Copilot, Kiro: cada uma com um propósito | 1min |
| 9 | **Kiro como Sistema** | 4 pilares básicos + fluxo Spec → Steering → Skill → Hook → Resultado | 1-2min |
| 10 | **Kiro Avançado** | 3 pilares futuros mapeados (Integrações, Context Engineering, Governança) | 1min |
| 11 | **Spec Driven** | Requirements → Design → Tasks | 1-2min |
| 12 | **Steerings** | Contexto persistente + exemplos reais do playbook N3 | 2min |
| 13 | **Skills** | 2 skills reais (incident-triage e post-mortem) | 2min |
| 14 | **Agent Hooks** | Hooks instalados + opcionais + 7 prompts equivalentes | 2min |
| 15 | **E agora?** | CTA único: usar close-task na próxima task VSUS | 1min |
| 16 | **Hands-on** | Prompt interativo com botão de copiar + Spec Driven em ação | 2min |
| 17 | **Recursos** | Links diversificados (Anthropic, Simon Willison, Kiro docs, Apple Research) | 30s |

**Tempo total estimado:** 24-30 minutos (com perguntas) + prática ao vivo depois

---

## 🚀 Como rodar

```bash
# Instalar dependências (só na primeira vez)
npm install

# Subir o servidor de desenvolvimento (porta 3002)
npm run dev
```

Acesse: **http://localhost:3002**

Navegação: `←` `→` ou `Espaço` para avançar

---

## 📖 Documentação

| Doc | O que tem |
|-----|-----------|
| [Guia de Apresentação](docs/GUIA-APRESENTACAO.md) | Script completo dos 15 slides — o que dizer em cada um |
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
