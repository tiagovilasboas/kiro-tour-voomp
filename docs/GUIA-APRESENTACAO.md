# Guia de Apresentação — Da IA aos Agentes: Como chegamos até aqui

> **Tempo total estimado:** 22–27 minutos (com perguntas) + prática ao vivo depois
> **Público:** Time de Sustentação N3
> **Slides:** 15
> **Objetivo:** Construir entendimento sobre IA para que o time use Steerings, Skills e Agent Hooks com intenção.

---

## Tom geral

Não é palestra técnica profunda. É uma ponte. O time já usa o Kiro — o objetivo é que entendam *por que* funciona do jeito que funciona. Fale como quem explica pra um colega, não como quem defende uma tese.

---

## Arco narrativo

```
Fundação técnica                Kiro                      Prática
────────────────────────────    ──────────────────────    ──────────────────
1. Capa                         8.  Kiro & Superpoderes   13. Encerramento / CTA
2. Evolução da IA               9.  Spec Driven           14. Hands-on: kiro-playbook
3. Tokens                       10. Steerings             15. Recursos
4. LLMs                         11. Skills
5. Embeddings                   12. Agent Hooks
6. Context Window
7. Ilusão do Pensamento
```

A lógica: primeiro o time entende *como o modelo funciona* (3–6), depois *o que ele não faz* (7), então faz sentido mostrar *por que Steerings, Specs, Hooks foram desenhados assim* (8–12).

---

## Slide 1 — Capa (15s)

**O que dizer:**

> "Vamos falar sobre IA e Kiro. Antes de mostrar a ferramenta na prática, quero passar um contexto rápido — porque entender o que está por trás muda muito como a gente usa. Prometo que vai valer os 20 minutos."

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

## Slide 3 — Large Language Models (2min)

**O que dizer:**

> "Chegamos na era dos agentes. O que está por baixo desses modelos? Um LLM — Large Language Model."

- Percorrer o diagrama: Texto → Tokens → Atenção + Predição → Resposta
- Mostrar os 5 modelos: GPT-4o, Claude Sonnet (Kiro), Gemini, Llama 3, DeepSeek
- "O Claude Sonnet 4.6 é o que responde quando vocês digitam no Kiro."
- Terminar com: "O mecanismo de atenção é o que permite relacionar 'gateway' com 'PIX' numa mesma frase — independente da distância entre elas."

**Transição:** "E como esse modelo processa o texto que você escreve? Em pedaços chamados tokens."

---

## Slide 4 — O que é um Token (2min)

**O que dizer:**

> "O modelo não vê palavras — vê pedaços. E cada pedaço custa dinheiro."

- Mostrar o exemplo visual de tokenização
- Explicar billing: input + output, preço por milhão de tokens
- "Um Steering conciso de 200 tokens substitui você repetir contexto toda vez. Menos tokens = mais rápido e mais barato."

**Transição:** "Mas como esse modelo 'entende' o significado das palavras?"

---

## Slide 5 — Embeddings (1min)

**O que dizer:**

> "Antes de processar, o modelo converte cada palavra num vetor numérico. Palavras com significado próximo ficam próximas nesse espaço — é geometria, não gramática."

- Mostrar os dois clusters: saudações cotidianas e vocabulário do N3
- "Repara que 'payment', 'checkout' e 'gateway' estão no mesmo cluster. O modelo os vê como vizinhos no espaço semântico."
- "É por isso que quando você escreve 'payment' num Steering, o modelo já ativa 'checkout' e 'gateway' — sem você precisar listar tudo."

> "E isso explica por que Steerings funcionam tão bem: ao injetar vocabulário do domínio — VSUS, PIX, sale, subscription — você ancora o modelo no cluster semântico certo antes de fazer qualquer pergunta. A resposta é mais precisa porque o modelo já está no espaço vetorial certo."

**Transição:** "Mas tem um limite pra quanto contexto o modelo consegue carregar — e é aí que os Steerings se tornam ainda mais importantes."

---

## Slide 6 — Context Window (1-2min)

**O que dizer:**

> "A janela de contexto é a memória de trabalho do modelo. O que sai dela, o modelo esquece — sem aviso."

- Mostrar o comparativo: Claude Sonnet = 1M tokens, GPT-4o/Llama = 128k
- "Em vez de repetir contexto do projeto em cada mensagem, o Steering injeta uma vez de forma compacta e permanente."

**Transição:** "Agora que entendemos como funciona — tokens, vetores, janela — uma pergunta: o modelo realmente pensa?"

---

## Slide 7 — A Ilusão do Pensamento (2min)

**O que dizer:**

> "Dois estudos da Apple, 2024 e 2025, mostram que LLMs não raciocinam de verdade. Isso muda como a gente interage com eles."

- **GSM-Symbolic (2024):** "Mudar só os nomes num problema matemático fez a performance cair 10%. Mesmo problema, lógica igual — só nomes diferentes."
- **The Illusion of Thinking (2025):** "Modelos colapsam depois de certa complexidade — mesmo com tokens sobrando. Sem evidência de raciocínio formal."
- **O que muda pra nós:** "Alucinações não são bugs — são o modelo completando com o padrão mais provável. Por isso contexto preciso (Steerings) importa mais que prompt genial."

> "Não é mágica, é matemática sofisticada. E isso explica por que cada ferramenta do Kiro foi desenhada do jeito que foi."

**Nota de fala — referência verbal (não precisa colocar no slide):**

> "O Akita tem vários vídeos e artigos testando LLMs na prática — a conclusão dele é parecida com a dos papers da Apple: funciona, tem valor real, mas tem limites claros. Não é mágica, é ferramenta. Se alguém quiser se aprofundar, vale pesquisar no canal dele."

**Transição:** "Agora faz sentido apresentar o Kiro."

---

## Slide 8 — Kiro & Seus Superpoderes (1-2min)

**O que dizer:**

> "Não é um chatbot. É um agente — edita arquivos, executa comandos, integra com o IDE."

- **Steerings** — sempre ativos: "contexto persistente, o modelo sempre sabe onde está"
- **Skills** — sob demanda: "fluxos completos que você invoca com um comando"
- **Agent Hooks** — automáticos: "disparam por eventos, sem você pedir"

> "Esses três pilares existem por causa do que acabamos de ver: o modelo tem memória limitada, não raciocina, precisa de contexto preciso. Cada peça resolve um desses problemas."

**Transição:** "Antes de detalhar os três, uma ferramenta que atravessa tudo isso."

---

## Slide 9 — Spec Driven Development (1-2min)

**O que dizer:**

> "Spec é o modo estruturado do Kiro: Requirements → Design → Tasks. Você pensa com o agente antes de codar."

- Percorrer as 3 fases rapidamente
- **Quando usar no N3?**
  - Bug complexo com múltiplos fluxos (como o VSUS-701)
  - Melhoria que toca vários arquivos (como adicionar idempotência)
  - Fix onde QA precisa saber exatamente o que testar

> "O agente já carrega os Steerings do projeto antes de começar a Spec. Qualquer dev do time pode continuar de onde outro parou."

> "Spec não substitui os três pilares — ela usa eles. Quando você abre uma Spec, os Steerings já estão carregados, os Hooks continuam disparando, e você pode invocar Skills no meio do fluxo."

**Transição:** "Agora os três pilares em detalhe. Começando pelos Steerings."

---

## Slide 10 — Steerings (2min)

**O que dizer:**

> "Steerings são a memória do agente. Antes de você digitar a primeira palavra, ele já sabe onde está."

- Mostrar os dois tipos: auto-gerados (Kiro detecta a stack) e customizados (time cria com intenção)
- Destacar **um** exemplo que ilustra o poder — o `jira-workflows`:
  > "Esse arquivo ensina o Kiro que horas nunca vão no incidente pai — vão na subtask. Que a Causa Raiz tem um formato específico. Que o board é o 2477. Você não precisa explicar isso toda vez — ele já sabe."
- Mostrar brevemente o preview na tela

> "O poder não é a lista de arquivos. É que o modelo recebe contexto cirúrgico no momento certo, sem você pedir."

**Transição:** "Steerings são passivos — sempre ativos. Skills são ativos — você invoca."

---

## Slide 11 — Skills (2min)

**O que dizer:**

> "Skills são fluxos completos que você invoca com uma frase. O agente executa cada passo — com o contexto dos Steerings já carregado."

- Destacar **um** exemplo que ilustra o poder — o `incident-triage`:
  > "Você cola o chamado do Freshdesk e diz 'preciso triar este incidente'. O agente classifica a severidade com os critérios reais da Voomp — P1, P2, P3, P4 — levanta hipóteses ordenadas por probabilidade e te diz o que ainda falta coletar. Tudo antes de você abrir o Grafana."
- Mencionar o `post-mortem` como segundo exemplo:
  > "E quando o incidente fecha, tem a skill de post-mortem — você fornece o contexto, ela estrutura o documento pronto para o Confluence."

> "O poder é esse: você invoca uma vez, o agente executa o fluxo que você executaria manualmente em 20 minutos."

**Transição:** "E os Hooks — o que dispara sem você pedir."

---

## Slide 12 — Agent Hooks (3min)

**O que dizer:**

> "Hooks disparam sem você pedir. Baseados em eventos do IDE — salvar arquivo, criar arquivo, fechar task."

- Mostrar os três grupos da tela: instalados, opcionais, prompts
- Não precisa entrar no detalhe de cada um — o objetivo é mostrar o padrão

> "O ponto é: existe uma camada de automação que fica em segundo plano e age no momento certo. Você configura uma vez e esquece."

**Transição:** "Vamos ver o que fazer com isso essa semana."

---

## Slide 13 — E agora? (1min)

**O que dizer:**

> "Uma coisa pra fazer essa semana:"

> "Na próxima task VSUS, use o prompt `close-task` do playbook para fechar. Cole no chat, veja o que o Kiro gera — Causa Raiz, Resolução, horas — e meça quanto tempo você gastaria fazendo isso na mão."

> "Se funcionou, você já entendeu o valor. Se não funcionou, você tem um steering pra melhorar."

**Transição:** "E agora — 3 comandos e você está configurado."

---

## Slide 14 — Hands-on: Kiro Playbook (2min)

**O que dizer:**

> "Tudo que vimos — os steerings, as skills, os hooks, os prompts — está nesse repositório. 3 comandos e está instalado."

- Mostrar o `git clone` e o `node bin/install.mjs` na tela
- "O script preserva o que você já tem. `--dry-run` mostra o que faria sem tocar em nada."
- Rodar ao vivo ou mostrar já instalado — o ponto é que é simples

> "A partir daqui é aprofundamento. O CONTRIBUTING.md tem o passo a passo para criar os seus próprios artefatos."

**Transição:** "Recursos pra quem quiser ir mais fundo."

---

## Slide 15 — Recursos (30s)

> "Pra quem quiser ir além dos slides — esses links estão no repo, podem acessar depois."

Mencionar brevemente:
- Rocketseat Masterclass IA — PT-BR, grátis, melhor ponto de entrada
- Andrew Ng (Agentic AI) — como sistemas agentic funcionam internamente, exatamente o que o Kiro faz
- kiro.dev/docs — referência completa de Steerings, Skills, Hooks, Specs

---

## Perguntas frequentes

**"Isso substitui pensar?"**
> "Não. O Kiro é tão bom quanto o contexto que você dá. Steering ruim gera resposta ruim. A ferramenta amplifica o que você traz — não substitui."

**"E se alucinar?"**
> "Acontece — é pattern matching. Por isso existem o hook `php-lint-on-save` e a revisão manual antes de commitar. O modelo é ferramenta, não oráculo."

**"Posso criar meus próprios Steerings e Hooks?"**
> "Sim. Steering = arquivo Markdown em `.kiro/steering/`. Hook = JSON com evento + ação. O `CONTRIBUTING.md` do kiro-playbook tem exemplos reais com passo a passo para cada tipo de artefato."

**"Quando usar Spec vs chat normal?"**
> "Chat: pergunta rápida, dúvida pontual. Spec: mudança que toca múltiplos arquivos, precisa de clareza pra QA, ou tem complexidade que justifica pensar antes de codar."

**"Os Steerings e Hooks do playbook são definitivos?"**
> "Não. São o que o time validou até agora. Você vai criar os seus próprios — os mais valiosos vão ser os que só você conhece. Abre um PR quando tiver algo que faz sentido pro time."

---

## Checklist rápido pré-apresentação

- [ ] `npm run dev` rodando em http://localhost:3002
- [ ] Kiro aberto com seller-greenn-back
- [ ] Hooks carregados — verificar aba "Agent Hooks" no Explorer
- [ ] `.kiro/steering/` aberto no Explorer para mostrar ao vivo
- [ ] Uma task VSUS recente pronta para demo do `jira-close-task`
- [ ] MCP Jira conectado (testar: perguntar a task mais recente no VSUS)
- [ ] Terminal aberto na pasta do kiro-playbook (ou pronto para clonar ao vivo)
