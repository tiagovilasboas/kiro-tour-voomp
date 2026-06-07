# Guia de Apresentação: Kiro, a maioria usa. Poucos entendem.

> **Tempo total estimado:** 24-30 minutos (com perguntas) + prática ao vivo depois
> **Público:** Time de Sustentação N3
> **Slides:** 17
> **Objetivo:** Construir entendimento sobre IA para que o time use Steerings, Skills e Agent Hooks com intenção.

---

## Tom geral

Não é palestra técnica profunda. É uma ponte. O time já usa o Kiro. O objetivo é que entendam *por que* funciona do jeito que funciona. Fale como quem explica pra um colega, não como quem defende uma tese.

---

## Arco narrativo

```
Fundação técnica            Posicionamento         Kiro                    Prática
────────────────────────    ───────────────────    ─────────────────────   ─────────────────
1. Capa                     8.  IDEs com IA        11. Spec Driven         15. Encerramento
2. Evolução da IA           9.  Kiro como Sistema  12. Steerings           16. Hands-on
3. LLMs                     10. Kiro Avançado      13. Skills              17. Recursos
4. Tokens                                          14. Agent Hooks
5. Embeddings
6. Context Window
7. Ilusão do Pensamento
```

A lógica: fundação (3-6) → desmitificar (7) → posicionar no mercado (8) → Kiro como sistema (9-10) → pilares em detalhe (11-14) → prática (15-17).

---

## Slide 1 — Capa (15s)

**O que dizer:**

> "Vamos falar sobre IA e Kiro. Antes de mostrar a ferramenta na prática, quero passar um contexto rápido — porque entender o que está por trás muda muito como a gente usa. Prometo que vai valer os 20 minutos."

**Transição:** "Vamos começar lá atrás."

---

## Slide 2 — Evolução da IA (1min)

**O que dizer:**

> "Antes de falar do Kiro, preciso passar um contexto rápido. Não vou decorar datas — quero que vocês entendam o padrão que se repete."

**Era 1 — O Começo (1950–1990s):**
> "Turing faz a pergunta que funda o campo: 'pode uma máquina pensar?' E pesquisadores passam décadas tentando programar inteligência à mão. Regras para tudo. 'Se o usuário disser X, responda Y.' Funcionou para xadrez, onde o mundo é fechado e previsível. Para o mundo real — linguagem, imagem, contexto — colapsou. O financiamento foi cortado duas vezes. O campo virou piada acadêmica. Não por falta de talento — a *abordagem* estava fundamentalmente errada."

**Era 2 — A Virada (2000–2021):**
> "A mudança foi de filosofia. Em vez de programar o que o modelo deve saber, você expõe ele a dados e deixa aprender os padrões sozinho. GPUs de games ficaram baratas o suficiente para treinar redes profundas. A internet encheu de texto para aprender. Em 2017, um paper muda tudo: 'Attention is All You Need'. O mecanismo de atenção — que vamos ver mais tarde — é o que permite que o modelo conecte qualquer palavra com qualquer outra numa sequência, sem perder contexto. É a fundação técnica do GPT, do Claude, do Gemini."

**Era 3 — Era dos Agentes (2022–hoje):**
> "Novembro de 2022. ChatGPT. Um milhão de usuários em 5 dias. Isso nunca tinha acontecido na história da tecnologia. E o que veio depois foi mais radical ainda: modelos que não só respondem, mas *agem*. Editam arquivos. Executam comandos. Usam ferramentas. Integram com o IDE. A diferença entre chatbot e agente é exatamente essa capacidade de agir no ambiente — e é aqui que o Kiro vive."

**O padrão que vale notar:**
> "Repara no ciclo: hype excessivo, colapso, avanço real baseado em fundamento técnico sólido. Estamos vivendo o terceiro ciclo. Desta vez com fundamento — mas o hype ainda é real. Entender isso ajuda a usar a ferramenta com expectativas corretas."

**Transição:** "Então o que está por baixo desses modelos? Começa com o LLM."

---

## Slide 3 — Large Language Models (2min)

**O que dizer:**

> "Chegamos na era dos agentes. O que está por baixo desses modelos? Um LLM — Large Language Model."

Percorrer o diagrama pausadamente:
- **Texto** → "O que você digita no chat"
- **Tokens** → "O modelo não vê palavras, vê pedaços — já vamos falar disso"
- **Atenção + Predição** → "Aqui acontece a mágica — e o porquê desse nome vai fazer sentido em breve"
- **Resposta** → "Token a token, o modelo monta a resposta"

Apresentar os 5 modelos:
> "Esses são os modelos que vocês vão encontrar por aí. O Claude Sonnet 4.6 é o que responde quando vocês digitam no Kiro — é o modelo padrão da Anthropic, excelente em código e raciocínio estruturado."

Fechar com o mecanismo de atenção:
> "O mecanismo de atenção é o que torna os Transformers diferentes de tudo que veio antes. Antes dele, o modelo lia o texto como uma sequência linear — palavra por palavra. Com atenção, qualquer palavra pode 'prestar atenção' em qualquer outra da frase, independente da distância. É por isso que o modelo consegue relacionar 'gateway' com 'PIX' numa frase longa sem perder o contexto."

> "Isso importa pra vocês porque explica por que um Steering com vocabulário do domínio funciona — o modelo faz conexões semânticas que um sistema mais antigo não faria."

**Se alguém perguntar sobre o o3 ou modelos de reasoning:**
> "Modelos de reasoning como o o3 adicionam uma etapa de 'pensar antes de responder' — mas como vamos ver daqui a pouco, mesmo esses modelos têm limites formais. A atenção continua sendo o núcleo."

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

Apontar para o cluster de saudações:
> "Olha o cluster verde — 'bom dia', 'oi', 'olá', 'hey', 'boa tarde'. O modelo não sabe gramática. Ele sabe que essas palavras aparecem nos mesmos contextos, com os mesmos vizinhos em bilhões de textos. Então elas ficam próximas no espaço vetorial."

Apontar para o cluster de pagamentos:
> "Agora olha o roxo — 'payment', 'checkout', 'gateway', 'PIX', 'transaction'. Mesmo padrão. Essas palavras gravitam juntas porque aparecem juntas."

A conexão com Steerings:
> "E isso explica por que Steerings funcionam tão bem. Quando você escreve um Steering com as palavras do domínio da Voomp — 'sale', 'PIX', 'subscription', 'VSUS' — você ancora o modelo no cluster semântico certo *antes* de fazer qualquer pergunta. Ele já está no espaço vetorial certo. A resposta vem mais precisa não por mágica, mas porque o modelo está partindo do cluster certo."

> "É como dar contexto por geometria, não por instrução explícita."

**Se alguém perguntar 'mas os vetores são 2D como no slide?':**
> "Não — na prática são centenas ou milhares de dimensões. O slide é uma simplificação visual para mostrar o conceito de proximidade. A matemática é a mesma, só em muito mais dimensões."

**Transição:** "Mas tem um limite pra quanto contexto o modelo consegue carregar — e é aí que os Steerings se tornam ainda mais importantes."

---

## Slide 6 — Context Window (1-2min)

**O que dizer:**

> "A janela de contexto é a memória de trabalho do modelo. O que sai dela, o modelo esquece sem aviso."

Mostrar o comparativo de janelas:
> "Claude Sonnet 4.6 tem 1M tokens. Isso equivale a 2.500 páginas de texto. GPT-4o tem 128k — muito menos espaço para trabalhar."

Mostrar a pilha do Kiro:
> "Mas o que preenche essa janela no Kiro? Toda vez que você abre uma conversa, o Kiro monta uma pilha: primeiro os Steerings — automaticamente, antes de tudo. Depois os arquivos abertos do projeto. Depois o histórico da conversa. E por último a sua mensagem."

> "Tudo isso soma. Steerings bem escritos consomem poucos tokens — 2 a 5 mil. Deixam espaço para o que importa: código e contexto real do problema. Repetir contexto no chat toda vez é desperdiçar janela."

A conexão com Spec Driven:
> "É por isso que o Claude Sonnet 4.6 funciona melhor para Specs: o modelo precisa carregar requirements, design e código ao mesmo tempo. Com 128k você escolhe o que cabe. Com 1M, tudo cabe."

**Transição:** "Agora que entendemos como funciona: tokens, vetores, janela. Uma pergunta: o modelo realmente pensa?"

---

## Slide 7 — A Ilusão do Pensamento (2min)

**O que dizer:**

> "Dois estudos da Apple, 2024 e 2025, mostram que LLMs não raciocinam de verdade. Isso muda como a gente interage com eles."

**GSM-Symbolic (2024) — o experimento dos nomes:**
> "Eles pegaram problemas matemáticos que os modelos resolviam bem — e mudaram só os nomes dos personagens e os números, mantendo a lógica idêntica. A performance caiu cerca de 10%. Mesmo problema, mesma lógica, só nomes diferentes. Se o modelo estivesse raciocinando, não importaria o nome. Mas importou — porque ele estava fazendo matching de padrão, não raciocínio."

**The Illusion of Thinking (2025) — o colapso:**
> "O segundo estudo é ainda mais revelador. Conforme aumentavam a complexidade dos problemas, os modelos aumentavam o esforço de 'pensar' — até um certo ponto. Depois disso, colapsavam. Paravam de tentar, mesmo com tokens sobrando na janela. Sem evidência de raciocínio formal em nenhum caso testado."

**A implicação prática:**
> "O que isso muda pra vocês? Alucinações não são bugs — são o modelo completando com o padrão mais provável, como um autocomplete muito sofisticado. Não é sabotagem, é a natureza do sistema."

> "E a conclusão mais importante: contexto preciso vale mais que prompt genial. Um Steering bem escrito que ancora o modelo no domínio certo vai ter resultado melhor do que uma pergunta bem formulada sem contexto. É por isso que investimos tempo nos Steerings."

**Nota de fala — referência verbal (não precisa colocar no slide):**
> "O Akita tem vários vídeos e artigos testando LLMs na prática — a conclusão dele é parecida com a dos papers da Apple: funciona, tem valor real, mas tem limites claros. Não é mágica, é ferramenta. Se alguém quiser se aprofundar, vale pesquisar no canal dele."

**Se alguém questionar 'mas o o3/o4 não pensa diferente?':**
> "Os modelos de reasoning adicionam uma etapa de chain-of-thought antes de responder — o que melhora resultados em alguns casos. Mas o Illusion of Thinking foi testado especificamente nesses modelos também, e o padrão de colapso se manteve. A diferença é de grau, não de natureza."

**Transição:** "Agora que entendemos o que o modelo é — e o que ele não é — faz todo sentido apresentar o Kiro."

---

## Slide 8 — IDEs com IA (1min)

**O que dizer:**

> "Antes de entrar no Kiro, é importante entender o mercado. Existem várias IDEs com IA e nenhuma é bala de prata. Cada uma tem um propósito."

Percorrer brevemente os 5 cards:
- **Cursor:** "The best coding agent. Velocidade pura, autocomplete, multi-file editing. Referência de mercado, $29B de valuation."
- **Windsurf:** "The first agentic IDE. Engine Cascade para tarefas multi-step. Foco em times enterprise com governança."
- **Claude Code:** "Agentic coding tool da Anthropic. Terminal-native com subagents: multi-agent de verdade. Para quem vive no CLI."
- **GitHub Copilot:** "Your AI pair programmer. Extensão, não fork. Domina enterprise pela integração nativa com GitHub. 20M+ usuários."
- **Kiro:** "Engineering rigor for agentic dev. Spec Driven Development. Da vibe coding ao código mantível em produção."

> "O Kiro não compete em velocidade de autocomplete. Compete em rigor de engenharia. É por isso que estamos aqui: usar com intenção, não por instinto."

**Transição:** "Agora vamos ver o Kiro como sistema."

---

## Slide 9 — Kiro como Sistema (1-2min)

**O que dizer:**

> "Agora que entendemos a fundação técnica e o posicionamento no mercado, vamos ver o Kiro como um sistema."

Primeiro, os diferenciais:
> "Diferente do ChatGPT, o Kiro não é um chat isolado. Ele edita arquivos diretamente no projeto, executa comandos no terminal, e integra com o VS Code. É um agente que age no ambiente."

Depois, os 4 pilares:
> "O Kiro se organiza em 7 capacidades, mas 4 delas resolvem 90% do dia a dia."

Apresentar cada card ativo:
- **Specs** — "O que fazer: planejar antes de codar"
- **Steerings** — "Como contextualizar: contexto persistente, o modelo já sabe onde está"
- **Skills** — "Como executar: fluxos completos invocados com uma frase"
- **Hooks** — "Como automatizar: disparam por evento, sem pedir"

Mostrar o fluxo:
> "Repara que eles trabalham juntos: Spec → Steering → Skill → Hook → Resultado. Não são features isoladas."

> "O básico bem feito é o que diferencia quem usa de quem depende."

**Transição:** "Mas existem mais 3 camadas no sistema. Vou mostrar o mapa, mas não vamos entrar nelas hoje."

---

## Slide 10 — Kiro Avançado (1min)

**O que dizer:**

> "Essas são as 3 capacidades avançadas. Não vamos cobrir hoje, mas mostro para vocês saberem que existem e o que esperar."

Percorrer brevemente cada card:
- **Integrações** — "MCP para Jira, Grafana, Azure DevOps. Powers para fluxos especializados. O agente agindo fora da IDE."
- **Context Engineering** — "RAG, memória entre sessões, domínio da empresa. O combustível do agente."
- **Governança** — "Evals, guardrails e auditoria. Escalar sem perder o controle."

> "Primeiro o básico bem feito. Quando o time dominar Specs, Steerings, Skills e Hooks, as camadas avançadas se encaixam naturalmente. Cada sessão futura é independente e prática."

**Transição:** "Voltando pro básico. Começando pelo Spec Driven."

---

## Slide 11 — Spec Driven Development (1-2min)

**O que dizer:**

> "Antes de ver os três pilares em detalhe, tem uma ferramenta que atravessa todos eles: o modo Spec."

Explicar o fluxo:
> "Spec é o modo estruturado do Kiro. Em vez de ir direto para o chat e codar, você passa por três fases: Requirements, Design e Tasks. Você pensa com o agente antes de escrever uma linha de código."

Percorrer as fases:
- **Requirements:** "Você descreve o problema. O Kiro faz perguntas para clarificar — o que pode acontecer, o que não pode, quem é afetado. Você sai com critérios de aceite claros antes de propor solução."
- **Design:** "Com os requisitos claros, o agente propõe a arquitetura. Decisões técnicas documentadas — arquivos a alterar, abordagem, trade-offs. Você pode mudar antes de escrever uma linha."
- **Tasks:** "O design vira uma lista de tarefas executáveis com contexto completo. Cada task tem o suficiente para qualquer dev do time pegar e continuar — sem depender de você explicar."

Quando usar no N3:
> "No dia a dia do N3, Spec faz sentido quando o problema toca múltiplos arquivos — como a idempotência do VSUS-679, que afetou middleware, controller e testes. Ou quando QA precisa de clareza exata do que foi alterado para planejar os cenários."

A conexão com os pilares:
> "Spec não substitui os três pilares — ela usa eles. Quando você abre uma Spec, os Steerings já estão carregados. Os Hooks continuam disparando. Você pode invocar uma Skill no meio do fluxo. É o modo de trabalho mais completo do Kiro."

**Transição:** "Agora os três pilares em detalhe. Começando pelos Steerings."

---

## Slide 12 — Steerings (2min)

**O que dizer:**

> "Steerings são a memória do agente. Antes de você digitar a primeira palavra, ele já sabe onde está."

- Mostrar os dois tipos: auto-gerados (Kiro detecta a stack) e customizados (time cria com intenção)
- Destacar **um** exemplo que ilustra o poder — o `jira-workflows`:
  > "Esse arquivo ensina o Kiro que horas nunca vão no incidente pai — vão na subtask. Que a Causa Raiz tem um formato específico. Que o board é o 2477. Você não precisa explicar isso toda vez — ele já sabe."
- Mostrar brevemente o preview na tela

> "O poder não é a lista de arquivos. É que o modelo recebe contexto cirúrgico no momento certo, sem você pedir."

**Transição:** "Steerings são passivos — sempre ativos. Skills são ativos — você invoca."

---

## Slide 13 — Skills (2min)

**O que dizer:**

> "Skills são fluxos completos que você invoca com uma frase. O agente executa cada passo — com o contexto dos Steerings já carregado."

- Destacar **um** exemplo que ilustra o poder — o `incident-triage`:
  > "Você cola o chamado do Freshdesk e diz 'preciso triar este incidente'. O agente classifica a severidade com os critérios reais da Voomp — P1, P2, P3, P4 — levanta hipóteses ordenadas por probabilidade e te diz o que ainda falta coletar. Tudo antes de você abrir o Grafana."
- Mencionar o `post-mortem` como segundo exemplo:
  > "E quando o incidente fecha, tem a skill de post-mortem — você fornece o contexto, ela estrutura o documento pronto para o Confluence."

> "O poder é esse: você invoca uma vez, o agente executa o fluxo que você executaria manualmente em 20 minutos."

**Transição:** "E os Hooks — o que dispara sem você pedir."

---

## Slide 14 — Agent Hooks (3min)

**O que dizer:**

> "Hooks disparam sem você pedir. Baseados em eventos do IDE — salvar arquivo, criar arquivo, fechar task."

- Mostrar os três grupos da tela: instalados, opcionais, prompts
- Não precisa entrar no detalhe de cada um — o objetivo é mostrar o padrão

> "O ponto é: existe uma camada de automação que fica em segundo plano e age no momento certo. Você configura uma vez e esquece."

**Transição:** "Vamos ver o que fazer com isso essa semana."

---

## Slide 15 — E agora? (1min)

**O que dizer:**

> "Uma coisa pra fazer essa semana:"

> "Cole o prompt do hands-on no Kiro com Claude Sonnet 4.6. Responda as 3 perguntas. Deixe ele consultar o Jira e Confluence. Revise o plano. Implemente uma automação."

> "Não é um repo pra instalar. São automações que emergem do SEU contexto. É ownership imediata. O que o Kiro propor vai ser diferente pra cada um de vocês, porque o papel e os fluxos são diferentes."

> "Se quiserem referência de implementação, o kiro-playbook está público no GitHub. Mas a prática real é o prompt."

**Transição:** "Vamos copiar o prompt agora."

---

## Slide 16 — Hands-on (2min)

**O que dizer:**

> "Tudo que vimos — os steerings, as skills, os hooks, os prompts — está nesse repositório. 3 comandos e está instalado."

- Mostrar o `git clone` e o `node bin/install.mjs` na tela
- "O script preserva o que você já tem. `--dry-run` mostra o que faria sem tocar em nada."
- Rodar ao vivo ou mostrar já instalado — o ponto é que é simples

> "A partir daqui é aprofundamento. O CONTRIBUTING.md tem o passo a passo para criar os seus próprios artefatos."

**Transição:** "Recursos pra quem quiser ir mais fundo."

---

## Slide 17 — Recursos (30s)

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
