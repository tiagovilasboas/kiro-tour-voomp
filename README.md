# Kiro com Intenção

O que está por baixo dos modelos — e por que isso muda tudo na hora de usar o Kiro.

Apresentação para o time de Sustentação N3 da Cogna/Voomp.

> "Quem entende o que está por trás usa melhor a ferramenta."

---

## 🎯 O ponto central desta apresentação

O Kiro não é um chatbot glorificado. Ele é um **agente** — um modelo de linguagem com acesso a ferramentas, contexto persistente e capacidade de agir no seu ambiente de desenvolvimento.

Para usar Kiro bem, o time precisa entender três coisas fundamentais:

1. **Como LLMs funcionam** — tokens, contexto, probabilidade. Isso explica por que um Steering bem escrito importa mais que um prompt genérico.
2. **O que LLMs NÃO fazem** — não pensam, não raciocinam. Reconhecem padrões em escala massiva. Entender isso evita frustração e melhora a forma como damos contexto.
3. **Steerings, Skills e Agent Hooks** — as três camadas que transformam um modelo genérico num agente especializado no contexto da Voomp.

---

## 📊 Os 14 Slides

| # | Slide | Objetivo | Tempo |
|---|-------|----------|-------|
| 1 | **Capa** | Abrir a jornada | 15s |
| 2 | **Evolução da IA** | 70 anos em 3 momentos — onde estamos | 1min |
| 3 | **O que é um Token** | A unidade fundamental + billing | 2min |
| 4 | **Large Language Models** | Como funciona por dentro + modelos conhecidos | 2min |
| 5 | **Embeddings** | Como o modelo "entende" significado — por geometria | 1min |
| 6 | **Context Window** | Limites + por que Steerings são mais eficientes que chat | 1-2min |
| 7 | **A Ilusão do Pensamento** | Desmitificar: pattern matching, não raciocínio (Apple Research) | 2min |
| 8 | **Kiro & Seus Superpoderes** | O que é, os três pilares — por que foram desenhados assim | 1-2min |
| 9 | **Spec Driven Development** | Requirements → Design → Tasks (quando usar no dia a dia) | 1-2min |
| 10 | **Steerings** | Auto-gerados + os 7 steerings reais do time | 2min |
| 11 | **Skills** | 4 skills vantajosas com fluxo detalhado | 2min |
| 12 | **Agent Hooks** | Hooks reais categorizados (Jira/Código/War Room) | 3min |
| 13 | **E agora?** | CTA com 3 ações concretas + "vamos pra prática" | 1min |
| 14 | **Hands-on: Kiro Playbook** | 3 comandos para instalar o ponto de partida do time | 2min |
| 15 | **Recursos** | Links de estudo curados (Rocketseat, DeepLearning.AI, Kiro docs) | 30s |

**Tempo total estimado:** 22–27 minutos (com perguntas) + prática ao vivo depois

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
| [Guia de Apresentação](docs/GUIA-APRESENTACAO.md) | Script completo dos 14 slides — o que dizer em cada um |
| [Checklist do Dia](docs/CHECKLIST.md) | O que fazer 30 minutos antes de apresentar |

---

## Stack

React 19 · TypeScript 6 · Vite 8 · Tailwind CSS v4 · Framer Motion · Lucide React

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
