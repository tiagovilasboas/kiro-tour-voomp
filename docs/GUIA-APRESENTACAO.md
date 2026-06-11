# Guia de Apresentação: Kiro, do hype ao controle.

> **Tempo total estimado:** 24-30 minutos (com perguntas) + prática ao vivo depois
> **Público:** Time de Sustentação N3 (6 mentorados)
> **Slides:** 17
> **Objetivo:** Construir entendimento sobre IA para que o time use Steerings, Skills e Agent Hooks com intenção.

---

## Nota pessoal

Este material foi feito com carinho. Antes de confeccionar, me fiz uma pergunta:

> *"O que eu queria ter aprendido antes de começar a trabalhar com IDEs de IA?"*

A resposta virou esta apresentação. Cada slide é algo que eu gostaria que alguém tivesse me explicado antes de eu perder tempo usando a ferramenta sem entender o que está por trás.

---

## Tom geral

Não é palestra técnica profunda. É uma ponte. O time já usa o Kiro. O objetivo é que entendam *por que* funciona do jeito que funciona. Fale como quem explica pra um colega, não como quem defende uma tese.

---

## Arco narrativo

```
FASE 1: FUNDAÇÃO (1-6)          FASE 2: REALIDADE (7-8)    FASE 3: POSICIONAMENTO (9-11)
────────────────────────────    ──────────────────────     ───────────────────────────────
1. Capa                         7. O Rollback da IA        9.  IDEs com IA
2. Evolução da IA               8. Ilusão do Pensamento    10. Kiro como Sistema
3. LLMs                                                    11. Kiro Avançado
4. Tokens
5. Embeddings                   FASE 4: PILARES (12-15)    FASE 5: PRÁTICA (16-17)
6. Context Window               ─────────────────────      ─────────────────────
                                12. Spec Driven            16. Hands-on
                                13. Steerings              17. Recursos
                                14. Skills
                                15. Agent Hooks
```

**Fio vermelho (repete em 4 momentos-chave):**
> "O modelo é poderoso mas limitado. Quem entende os limites controla o resultado. Quem não entende, paga caro por loops."

Momentos: Capa (prometido) → Context Window (reforçado) → Ilusão (aprofundado) → Hands-on (resolvido)

**Arco de causalidade:**
Fundação técnica → Problema financeiro real → Causa técnica do problema → Mercado → Kiro como solução → Pilares práticos → Sua vez

---

## Slide 1 — Capa (15s)

**O que dizer:**

> "Vamos falar sobre IA e Kiro. Do hype que todos conhecem ao controle que poucos têm. Antes de mostrar a ferramenta na prática, quero passar um contexto rápido: entender o que está por trás muda muito como a gente usa. Prometo que vai valer os 30 minutos."

**Transição:** "Vamos começar de onde tudo começou."

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

**Transição:** "Então o que está por baixo desses modelos? Começando pelo LLM."

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

**Transição:** "E como esse modelo processa o que você digita? Em pedaços chamados tokens."

---

## Slide 4 — O que é um Token (2min)

**O que dizer:**

> "O modelo não vê palavras — vê pedaços. E cada pedaço custa dinheiro."

- Mostrar o exemplo visual de tokenização
- Explicar billing: input + output, preço por milhão de tokens
- "Um Steering conciso de 200 tokens substitui você repetir contexto toda vez. Menos tokens = mais rápido e mais barato."

**Transição:** "Tokens explicam o custo. Mas como o modelo entende o significado das palavras?"

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

**Transição:** "Ótimo: sabemos que o modelo entende por proximidade semântica. Mas tem um limite nessa memória."

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

**Transição:** "Entendemos os limites técnicos: tokens, vetores, janela. Agora veja o que acontece quando empresas ignoram esses limites em escala."

---

## Slide 8 — A Ilusão do Pensamento (2min)

**O que dizer:**

> "Vimos a fatura. Agora a causa técnica. Dois estudos da Apple, 2024 e 2025, explicam por que isso acontece."

**GSM-Symbolic (2024) — o experimento dos nomes:**
> "Eles pegaram problemas matemáticos que os modelos resolviam bem — e mudaram só os nomes dos personagens e os números, mantendo a lógica idêntica. A performance caiu cerca de 10%. Mesmo problema, mesma lógica, só nomes diferentes. Se o modelo estivesse raciocinando, não importaria o nome. Mas importou — porque ele estava fazendo matching de padrão, não raciocínio."

**The Illusion of Thinking (2025) — o colapso:**
> "O segundo estudo é ainda mais revelador. Conforme aumentavam a complexidade dos problemas, os modelos aumentavam o esforço de 'pensar' — até um certo ponto. Depois disso, colapsavam. Paravam de tentar, mesmo com tokens sobrando na janela. Sem evidência de raciocínio formal em nenhum caso testado."

**A implicação prática:**
> "Agora o loop do Rollback faz sentido. O agente não está sendo burro — ele está fazendo o que sabe fazer: matching de padrão. Sem contexto preciso, os padrões que encontra são genéricos. Ele tenta, gera algo, tenta de novo, gera parecido. Loop infinito, tokens infinitos, conta infinita."

> "Alucinações não são bugs — são o modelo completando com o padrão mais provável. Não é sabotagem, é a natureza do sistema."

> "Contexto preciso vale mais que prompt genial. Um Steering bem escrito que ancora o modelo no domínio certo vai ter resultado melhor do que uma pergunta bem formulada sem contexto."

**Se alguém questionar 'mas o o3/o4 não pensa diferente?':**
> "Os modelos de reasoning adicionam uma etapa de chain-of-thought antes de responder — o que melhora resultados em alguns casos. Mas o Illusion of Thinking foi testado especificamente nesses modelos também, e o padrão de colapso se manteve. A diferença é de grau, não de natureza."

**Transição:** "Agora temos o quadro completo: modelo com limites, custo real, empresas pagando a conta. Qual IDE foi desenhada pra lidar com isso de verdade?"

---

## Slide 9 — IDEs com IA (1min)

---

## Slide 7 — O Rollback da IA (2min)

**O que dizer:**

> "Antes de explicar por que isso acontece, deixa eu mostrar o que está acontecendo agora. Junho de 2026. A fatura do hype chegou."

**Contexto:**
> "Quem tem uns bons anos de trincheira conhece o ciclo: passa a empolgação da 'ferramenta mágica', entra a realidade dos boletos. O subsídio bilionário que maquiava o custo das APIs secou. Deixar um agente autônomo varrendo a codebase em loop assustou até as Big Techs."

Percorrer os 4 cards rapidamente:
- **Microsoft:** "Cancelou licenças do Claude Code internamente. Moveu todos os devs pro Copilot CLI. Motivo? Custo."
- **Uber:** "Cap de $1.500 por dev por mês. Proibiram ferramentas como Claude. 'Too expensive.'"
- **Cloudflare:** "Lançou limites obrigatórios de gasto para qualquer API de IA em produção."
- **Tokenmaxxing:** "O fenômeno dos agentes em loop. O agente tenta, falha, tenta de novo com variação mínima, falha de novo. Milhares de dólares gastos por task sem resultado útil."

**A pergunta que fica no ar:**
> "Mas por que isso acontece com tanta frequência? Por que empresas com engenheiros brilhantes, com os melhores modelos do mundo, ainda assim entram em loop?"

**O takeaway:**
> "Cada token desperdiçado é dinheiro perdido. Steerings e automações não são luxo: são eficiência obrigatória. A resposta técnica pra esse problema vem no próximo slide."

**Transição:** "Vimos a fatura. Por que isso acontece com tanta frequência? Porque o modelo não funciona como intuitivamente imaginamos."

---

## Slide 8 — A Ilusão do Pensamento (2min)

**O que dizer:**

> "Antes de entrar no Kiro, é importante entender o mercado. Existem várias IDEs com IA e nenhuma é bala de prata. Cada uma tem um propósito."

Percorrer brevemente os 5 cards:
- **Cursor:** "The best coding agent. Velocidade pura, autocomplete, multi-file editing. Referência de mercado, $29B de valuation."
- **Windsurf:** "The first agentic IDE. Engine Cascade para tarefas multi-step. Foco em times enterprise com governança."
- **Claude Code:** "Agentic coding tool da Anthropic. Terminal-native com subagents: multi-agent de verdade. Para quem vive no CLI."
- **GitHub Copilot:** "Your AI pair programmer. Extensão, não fork. Domina enterprise pela integração nativa com GitHub. 20M+ usuários."
- **Kiro:** "Engineering rigor for agentic dev. Spec Driven Development. Da vibe coding ao código mantível em produção."

> "O Kiro não compete em velocidade de autocomplete. Compete em rigor de engenharia. É por isso que estamos aqui: usar com intenção, não por instinto."

**Transição:** "O Kiro não competiu em velocidade. Foi projetado pra resolver exatamente o que acabamos de ver: contexto, loops, custo. Vamos ver como."

---

## Slide 10 — Kiro como Sistema (1-2min)

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

## Slide 11 — Kiro Avançado (1min)

**O que dizer:**

> "Essas são as 3 capacidades avançadas. Não vamos cobrir hoje, mas mostro para vocês saberem que existem e o que esperar."

Percorrer brevemente cada card:
- **Integrações** — "MCP para Jira, Grafana, Azure DevOps. Powers para fluxos especializados. O agente agindo fora da IDE."
- **Context Engineering** — "RAG, memória entre sessões, domínio da empresa. O combustível do agente."
- **Governança** — "Evals, guardrails e auditoria. Escalar sem perder o controle."

> "Primeiro o básico bem feito. Quando o time dominar Specs, Steerings, Skills e Hooks, as camadas avançadas se encaixam naturalmente. Cada sessão futura é independente e prática."

**Transição:** "O mapa está na mesa. Agora vamos dominar o que você usa amanhã. Começando pelo Spec."

---

## Slide 12 — Spec Driven Development (1-2min)

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

**Transição:** "O Spec resolve o planejamento. O Steering resolve o contexto. Vamos ver como."

---

## Slide 13 — Steerings (2min)

**O que dizer:**

> "Steerings são a memória do agente. Antes de você digitar a primeira palavra, ele já sabe onde está."

- Mostrar os dois tipos: auto-gerados (Kiro detecta a stack) e customizados (time cria com intenção)
- Destacar **um** exemplo que ilustra o poder — o `jira-workflows`:
  > "Esse arquivo ensina o Kiro que horas nunca vão no incidente pai — vão na subtask. Que a Causa Raiz tem um formato específico. Que o board é o 2477. Você não precisa explicar isso toda vez — ele já sabe."
- Mostrar brevemente o preview na tela

> "O poder não é a lista de arquivos. É que o modelo recebe contexto cirúrgico no momento certo, sem você pedir."

> "Lembra que vimos que o modelo não raciocina — faz matching de padrão? O Steering é exatamente isso trabalhando a seu favor: você coloca os padrões certos — os termos do domínio, as regras do time, o vocabulário da Voomp — antes de qualquer pergunta. O modelo parte do cluster semântico certo. Não é mágica. É geometria, como vimos nos Embeddings."

**Transição:** "E se você quiser automatizar um fluxo inteiro com uma frase? Aí entram as Skills."

---

## Slide 14 — Skills (2min)

**O que dizer:**

> "Skills são fluxos completos que você invoca com uma frase. O agente executa cada passo — com o contexto dos Steerings já carregado."

- Destacar **um** exemplo que ilustra o poder — o `incident-triage`:
  > "Você cola o chamado do Freshdesk e diz 'preciso triar este incidente'. O agente classifica a severidade com os critérios reais da Voomp — P1, P2, P3, P4 — levanta hipóteses ordenadas por probabilidade e te diz o que ainda falta coletar. Tudo antes de você abrir o Grafana."
- Mencionar o `post-mortem` como segundo exemplo:
  > "E quando o incidente fecha, tem a skill de post-mortem — você fornece o contexto, ela estrutura o documento pronto para o Confluence."

> "O poder é esse: você invoca uma vez, o agente executa o fluxo que você executaria manualmente em 20 minutos."

**Transição:** "Spec planeja. Steering contextualiza. Skill executa. E os Hooks? Automatizam sem você pedir."

---

## Slide 15 — Agent Hooks (3min)

**O que dizer:**

> "Hooks disparam sem você pedir. Baseados em eventos do IDE — salvar arquivo, criar arquivo, fechar task."

- Mostrar os três grupos da tela: instalados, opcionais, prompts
- Não precisa entrar no detalhe de cada um — o objetivo é mostrar o padrão

> "O ponto é: existe uma camada de automação que fica em segundo plano e age no momento certo. Você configura uma vez e esquece."

**Transição:** "Temos os 4 pilares. Agora a pergunta: como isso se aplica ao SEU contexto, na Voomp, no VSUS? Aqui está o prompt."

---

## Slide 16 — Hands-on (2min)

**O que dizer:**

> "Uma coisa pra fazer essa semana: copie esse prompt, cole no Kiro com Claude Sonnet 4.6. Responda as 3 perguntas. Deixe ele consultar o Jira e Confluence. Revise o plano. Implemente uma automação."

- Mostrar o bloco de código com o prompt na tela
- Destacar o botão de copiar
- "O prompt vai perguntar seu nome, papel e fluxos. Depois vai consultar o Jira VSUS e o Confluence. E vai propor automações que fazem sentido pro SEU contexto."

> "O resultado vai ser diferente para cada um. É ownership imediata: as automações emergem do seu contexto, não de um template genérico."

> "Na capa eu disse: do hype ao controle. Esse prompt é o controle. Não é instalado de um repo de outra pessoa. São automações que emergem do SEU contexto. Você entende agora por que funciona — tokens, embeddings, janela, loops. E sabe como usar com intenção. Isso é o controle."

**Se alguém perguntar sobre o kiro-playbook:**
> "Está público no GitHub como referência. Mas o hands-on real é esse prompt. O playbook é opcional se quiser ver exemplos prontos."

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
