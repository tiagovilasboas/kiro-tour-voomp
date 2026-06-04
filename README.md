# Da IA aos Agentes: Como chegamos até aqui

Apresentação interativa para o time de Sustentação N3 da Cogna/Voomp sobre **Inteligência Artificial e Kiro**.

O objetivo não é vender uma ferramenta. É construir entendimento real sobre o que está por trás dos modelos de linguagem — para que o time use Steerings, Skills e Agent Hooks com intenção, não apenas por instinto.

> "Quem entende o que está por trás usa melhor a ferramenta."

---

## 🎯 O ponto central desta apresentação

O Kiro não é um chatbot glorificado. Ele é um **agente** — um modelo de linguagem com acesso a ferramentas, contexto persistente e capacidade de agir no seu ambiente de desenvolvimento.

Para usar Kiro bem, o time precisa entender três coisas fundamentais:

1. **Como LLMs funcionam** — tokens, contexto, probabilidade. Isso explica por que um Steering bem escrito importa mais que um prompt genérico.
2. **O que são Steerings e Skills** — não são "configurações". São a diferença entre um agente que entende o contexto do projeto e um que alucina.
3. **O que são Agent Hooks** — automações reais que já estão rodando para o time: lint no save, checklist Jira ao iniciar task, preenchimento automático de Causa Raiz, war room status em um clique.

---

## 📊 Os 11 Slides

| # | Slide | Objetivo | Tempo |
|---|-------|----------|-------|
| 1 | **Capa** | Abrir a jornada | 15s |
| 2 | **Evolução da IA** | 70 anos em 5 momentos — onde estamos | 1-2min |
| 3 | **O que é um Token** | A unidade fundamental. Por que importa pra nós | 2min |
| 4 | **Large Language Models** | Como funciona por dentro. Quais usamos no Kiro | 2min |
| 5 | **Embeddings** | Como o modelo entende "significado" | 1min |
| 6 | **Context Window** | Por que Steerings são mais eficientes que jogar código no chat | 1-2min |
| 7 | **Conheça o Kiro** | O que é, o que não é, os três pilares | 1-2min |
| 8 | **Steerings** | Contexto persistente. Os steerings reais do time | 2-3min |
| 9 | **Skills** | Capacidades sob demanda. O que já temos | 1-2min |
| 10 | **Agent Hooks** | As 15 automações do time. Casos reais | 3-4min |
| 11 | **E agora?** | Próximos passos. Vamos pra prática | 1min |

**Tempo total estimado:** 18–25 minutos (com perguntas)

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
| [Guia de Apresentação](docs/GUIA-APRESENTACAO.md) | Script completo dos 11 slides — o que dizer em cada um |
| [Checklist do Dia](docs/CHECKLIST.md) | O que fazer 30 minutos antes de apresentar |

---

## Stack

React 19 · TypeScript 6 · Vite 8 · Tailwind CSS v4 · Framer Motion · Lucide React

---

## Hooks do time (globais)

Os 15 Agent Hooks do time estão em `~/.kiro/hooks/` e funcionam em qualquer workspace:

| Hook | Trigger | O que faz |
|------|---------|-----------|
| `jira-task-start` | preTaskExecution | Checa Jira antes de codar |
| `jira-close-task` | userTriggered | Fecha task com Causa Raiz + Resolução + horas |
| `jira-description-pattern` | preToolUse (create/update) | Valida formato do bug |
| `jira-causa-raiz-pattern` | preToolUse (update) | Valida formato causa raiz |
| `php-lint-save` | fileEdited `*.php` | `php -l` no arquivo salvo |
| `php-code-review-on-save` | fileEdited (gateways) | Detecta exception engolida, falta de timeout |
| `php-scaffold-new-file` | fileCreated `*.php` | Sugere namespace + estrutura |
| `test-scaffold` | fileCreated `tests/**` | Sugere estrutura de teste unitário |
| `run-tests-post-task` | postTaskExecution | Roda PHPUnit após task |
| `bug-investigation` | userTriggered | Workflow estruturado: Jira → Grafana → Código |
| `health-check-platform` | userTriggered | Health check rápido da plataforma |
| `war-room-status` | userTriggered | Relatório de status do war room |
| `generate-pr-description` | userTriggered | Gera descrição de PR no padrão N3 |
| `post-execution-review` | agentStop | Resume o que foi feito, sugere próximos passos |
| `eslint-frontend-save` | fileEdited (TS/JS/Vue) | ESLint no arquivo salvo |
