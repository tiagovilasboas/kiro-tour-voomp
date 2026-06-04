# Guia de Apresentação — Da IA aos Agentes: Como chegamos até aqui

> **Tempo total estimado:** 20–25 minutos (com perguntas) + prática ao vivo depois
> **Público:** Time de Sustentação N3
> **Slides:** 14
> **Objetivo:** Construir entendimento sobre IA para que o time use Steerings, Skills e Agent Hooks com intenção.

---

## Tom geral

Não é palestra técnica profunda. É uma ponte. O time já usa o Kiro — o objetivo é que entendam *por que* funciona do jeito que funciona. Fale como quem explica pra um colega, não como quem defende uma tese.

---

## Slide 1 — Capa (15s)

**O que dizer:**

> "Vamos falar sobre IA e Kiro. Antes de mostrar a ferramenta na prática, quero passar um contexto — porque entender o que está por trás muda muito como a gente usa. Prometo que vai valer os 20 minutos."

**Transição:** "Vamos começar lá atrás."

---

## Slide 2 — Evolução da IA (1min)

**O que dizer:**

> "70 anos condensados em 3 momentos. O importante não é decorar — é entender o padrão."

- **O Começo (1950–90s):** "Regras escritas à mão. Funcionou pra problemas simples, colapsou duas vezes por excesso de hype."
- **A Virada (2000–2021):** "Dados + GPUs. O modelo aprende padrões em vez de seguir regras. Em 2017, os Transformers mudam tudo."
- **Era dos Agentes (2022–hoje):** "É aqui que o Kiro vive. Modelos que raciocinam, usam ferramentas, editam arquivos."

**Transição:** "Mas como esse modelo processa texto? Começa com o token."

---

## Slide 3 — O que é um Token (2min)

**O que dizer:**

> "O modelo não vê palavras — vê pedaços. E cada pedaço custa dinheiro."

- Mostrar o exemplo visual de tokenização
- Explicar billing: input + output, preço por milhão de tokens
- Conectar: "Um Steering conciso de 200 tokens substitui você repetir contexto toda vez. Menos tokens = mais rápido e mais barato."

**Transição:** "Agora que sabemos o que é um token, vamos entender o LLM."

---

## Slide 4 — Large Language Models (2min)

**O que dizer:**

> "LLM — grande modelo de linguagem. É o que está por baixo do Kiro, do ChatGPT, do Gemini."

- Percorrer o diagrama: Texto → Tokens → Modelo → Resposta
- Mostrar os 5 modelos: GPT-4o, Claude Sonnet (Kiro), Gemini, Llama 3, DeepSeek
- "O Claude Sonnet 4.6 é o que responde quando vocês digitam no Kiro."

**Transição:** "Mas esses modelos realmente pensam? Spoiler: não."

---

## Slide 5 — A Ilusão do Pensamento (2min)

**O que dizer:**

> "Dois estudos da Apple mostram que LLMs não raciocinam de verdade. Isso importa porque muda como a gente interage com eles."

- **Fragilidade:** "Mudar só os nomes num problema fez a performance cair 10%."
- **Colapso:** "Modelos param de tentar depois de certa complexidade — mesmo com tokens sobrando."
- **Pattern matching:** "Não encontraram evidência de raciocínio formal. É reconhecimento de padrões sofisticado."

> "O que muda pra nós? Quanto melhor o contexto que damos (Steerings), mais preciso o matching. Alucinações não são bugs — são o modelo completando com o padrão mais provável."

**Transição:** "E como o modelo 'entende' significado se não pensa? Embeddings."

---

## Slide 6 — Embeddings (1min)

**O que dizer:**

> "Cada palavra vira um vetor numérico. Palavras com significado próximo ficam próximas no espaço."

- Mostrar a visualização com clusters
- "Por isso um Steering com palavras do domínio Voomp (sale, PIX, subscription) funciona — o modelo conecta por proximidade semântica, não por busca exata."

**Transição:** "Mas tem um limite pra quanto contexto cabe."

---

## Slide 7 — Context Window (1-2min)

**O que dizer:**

> "A janela de contexto é o limite. O que sai dela, o modelo esquece."

- Mostrar o comparativo: Claude Sonnet = 1M tokens, GPT-4o/Llama = 128k
- "Em vez de repetir contexto no chat toda vez, o Steering injeta uma vez de forma eficiente e permanente."

**Transição:** "Agora que entendemos a fundação, vamos pro Kiro."

---

## Slide 8 — Spec Driven Development (1-2min)

**O que dizer:**

> "Antes de codar, o Kiro ajuda a pensar. Requirements → Design → Tasks."

- Percorrer as 3 fases rapidamente
- **Quando usar no N3?**
  - Bug complexo com múltiplos fluxos (como o VSUS-701)
  - Melhoria que toca vários arquivos (como adicionar idempotência)
  - Fix onde QA precisa saber exatamente o que testar

> "O agente já carrega os Steerings do projeto — ele sabe a stack, as tabelas, o formato de Causa Raiz. Qualquer dev do time pode continuar de onde outro parou."

**Transição:** "E agora os três superpoderes do Kiro."

---

## Slide 9 — Kiro & Seus Superpoderes (1-2min)

**O que dizer:**

> "Não é um chatbot. Edita arquivos, executa comandos, integra com o IDE."

- **Steerings** — sempre ativos (contexto persistente)
- **Skills** — você invoca (fluxos sob demanda)
- **Agent Hooks** — automáticos (disparam por eventos)

> "Vamos ver cada um em detalhe."

---

## Slide 10 — Steerings (2min)

**O que dizer:**

> "Existem dois tipos: os que o Kiro gera automaticamente e os que nós criamos com intenção."

- Auto-gerados: project.md, structure.md
- Customizados do N3: listar os 8 por nome com descrição curta
- Mostrar o preview do `jira-sustentacao.md`

> "Tudo isso está carregado antes de você digitar a primeira palavra."

---

## Slide 11 — Skills (2min)

**O que dizer:**

> "Skills são fluxos completos que você invoca com um comando."

- **Entregar História:** "PR + Jira + status + horas — ~30 seg vs ~15 min manual"
- **Grill Me:** "Questiona sua hipótese antes de commitar código de pagamento"
- **Investigar Bug:** "Workflow estruturado do zero: Jira → Grafana → hipóteses"
- **Post-Mortem:** "Consolida timeline e cria página no Confluence na estrutura N3"

---

## Slide 12 — Agent Hooks (3min)

**O que dizer:**

> "Hooks disparam sem você pedir. 15 hooks ativos globalmente."

Percorrer por categoria:

- **Jira:** jira-task-start, jira-close-task, description-pattern, causa-raiz-pattern
- **PHP:** lint, code-review nos gateways, scaffold
- **War Room:** bug-investigation, health-check, war-room-status

> "O jira-close-task sozinho economiza 10-15 minutos por task."

---

## Slide 13 — E agora? (1min)

**O que dizer:**

> "Três coisas pra fazer essa semana:"

1. Explorar os Steerings em `.kiro/steering/`
2. Usar o `jira-close-task` na próxima task e medir o tempo
3. Criar um Steering próprio com algo que repete no chat

> "E agora — vamos pra prática ao vivo."

**[Transição para demo ao vivo com Kiro aberto]**

---

## Slide 14 — Recursos (30s)

> "Pra quem quiser ir além dos slides — esses links estão no repo, podem acessar depois."

Mencionar brevemente: Rocketseat Masterclass IA (PT-BR), Andrew Ng (Agentic AI), Kiro docs.

---

## Perguntas frequentes

**"Isso substitui pensar?"**
> "Não. O Kiro é tão bom quanto o contexto que você dá. Steerings ruins geram respostas ruins."

**"E se alucinar?"**
> "Acontece — é pattern matching. Por isso existem hooks de review e lint. Sempre revise antes de commitar."

**"Posso criar meus próprios Steerings e Hooks?"**
> "Sim. Steering = arquivo Markdown. Hook = JSON com evento + ação. Qualquer um do time pode."

**"Quando usar Spec vs chat normal?"**
> "Chat: pergunta rápida, dúvida pontual. Spec: mudança que toca múltiplos arquivos, precisa de clareza pra QA, ou tem complexidade que justifica pensar antes de codar."

---

## Checklist rápido pré-apresentação

- [ ] `npm run dev` rodando em http://localhost:3002
- [ ] Kiro aberto com seller-greenn-back
- [ ] Hooks carregados — verificar aba "Agent Hooks" no Explorer
- [ ] `.kiro/steering/` aberto no Explorer para mostrar ao vivo
- [ ] Uma task VSUS recente pronta para demo do `jira-close-task`
- [ ] MCP Jira conectado (testar: perguntar a task mais recente no VSUS)
