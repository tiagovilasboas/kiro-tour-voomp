# Guia de Apresentação — Da IA aos Agentes: Como chegamos até aqui

> **Tempo total estimado:** 18–25 minutos (com perguntas)
> **Público:** Time de Sustentação N3
> **Slides:** 11
> **Objetivo:** Construir entendimento real sobre IA para que o time use Steerings, Skills e Agent Hooks com intenção — não por acidente.

---

## Antes de começar

**Setup (5 minutos antes):**
- Servidor rodando: `npm run dev` → http://localhost:3002
- Slides no primeiro slide (Capa)
- Slack/Teams fechado para não interromper com notificações

**Tom geral:**
Não é uma palestra técnica profunda. É uma ponte. O time já usa o Kiro — o objetivo é que eles entendam *por que* funciona do jeito que funciona, para usarem melhor. Fale como quem está explicando pra um colega, não como quem está defendendo uma tese.

---

## Slide 1 — Capa (15s)

**O que dizer:**

> "Vamos falar sobre Inteligência Artificial e Kiro. Mas antes de mostrar a ferramenta, quero passar um contexto — porque entender o que está por trás muda muito como a gente usa. Prometo que vai valer os 20 minutos."

**Transição:** "Vamos começar lá atrás — nos anos 50."

---

## Slide 2 — Evolução da IA (1–2min)

**O que dizer:**

> "70 anos de história condensados em 5 momentos. O importante aqui não é decorar as datas — é entender o padrão."

Percorra os 5 eras:

1. **Origens (1950s):** "Turing perguntou: pode uma máquina pensar? As primeiras tentativas eram baseadas em regras escritas à mão. Funcionava bem pra problemas simples, quebrava em tudo que era complexo."

2. **Inverno da IA (1970–90s):** "A área quase morreu duas vezes. Promessas demais, entrega de menos. Financiamento cortado. O que aprendemos: hype sem base técnica real sempre colapsa."

3. **Machine Learning (2000–2015):** "A virada: em vez de escrever regras, a gente dá dados e o modelo aprende os padrões. GPUs baratas + internet = dados em escala. É o que viabilizou o reconhecimento de imagem, spam filter, recomendação de produto."

4. **Transformers (2017–2022):** "O paper 'Attention is All You Need' mudou tudo. A arquitetura que permite que o modelo processe texto inteiro em paralelo, não palavra por palavra. Base de praticamente tudo que existe hoje."

5. **Era dos Agentes (2022–Hoje):** *Aponte pro card destacado.* "É aqui que o Kiro vive. LLMs que não só geram texto — eles raciocinam, usam ferramentas, editam arquivos, executam comandos. O Claude Sonnet 4.6 que responde quando vocês digitam no Kiro está nessa era."

**Transição:** "Mas como esse modelo realmente processa texto? Começa com algo chamado token."

---

## Slide 3 — O que é um Token (2min)

**O que dizer:**

> "Antes de entender o modelo, precisa entender a unidade dele: o token."

*Aponte pra frase 'Inteligência Artificial transforma o mundo' sendo dividida.*

> "O modelo não vê palavras. Ele vê pedaços. Às vezes são palavras completas, às vezes partes de palavra — especialmente em português, que tem sufixos e acentos que o vocabulário não cobre perfeitamente."

> "Por que isso importa pra nós? Dois motivos concretos:"

1. **Custo e velocidade:** "Cada token tem um custo de processamento. Um Steering mal escrito, verboso, com texto desnecessário, consome mais tokens sem entregar mais contexto. Steering conciso e direto é mais eficiente — o modelo entende igualmente e o agente responde mais rápido."

2. **Limite do modelo:** "O modelo tem um limite de tokens que consegue processar de uma vez. Isso vai aparecer no próximo conceito."

**Transição:** "Agora que sabemos o que é um token, vamos entender o que é um LLM."

---

## Slide 4 — Large Language Models (2min)

**O que dizer:**

> "LLM — Large Language Model. Grande modelo de linguagem. Isso é o que está por baixo do Kiro, do ChatGPT, do Gemini."

*Aponte pro diagrama de fluxo: Texto → Tokens → Modelo → Resposta.*

> "O processo é simples na superfície: você manda texto, ele vira tokens, o modelo processa, gera tokens de resposta, e a resposta volta como texto."

> "Mas o que o modelo faz internamente? Ele aprendeu, em bilhões de exemplos de texto humano, quais tokens geralmente vêm depois de quais. É estatística em escala absurda — mas quando a escala é grande o suficiente, emerge algo que parece entendimento."

**Modelos que usamos no Kiro** *(mencionar os três cards)*:

- **Claude Sonnet 4.6 (Anthropic):** "É o modelo padrão do Kiro agora. Excelente pra código, raciocínio e contexto longo."
- **Claude Haiku:** "Mais rápido e barato. Bom pra tarefas simples, respostas rápidas."
- **Outros modelos disponíveis:** "O Kiro suporta diferentes modelos. A escolha certa depende do que você está fazendo."

> "O ponto importante: quando vocês escrevem um Steering, estão essencialmente explicando o contexto pra esse modelo. Quanto melhor a explicação, melhor a resposta."

**Transição:** "Mas como o modelo 'entende' significado? É aí que entram os embeddings."

---

## Slide 5 — Embeddings (1min)

**O que dizer:**

> "Esse conceito parece abstrato, mas é elegante. Embeddings são a forma como o modelo representa significado numericamente."

*Aponte pra visualização com pontos.*

> "Cada palavra, cada conceito, é mapeado pra um ponto num espaço multidimensional. Palavras com significados próximos ficam próximas nesse espaço. 'Rei' e 'rainha' estão perto. 'Gato' e 'cachorro' estão perto. 'Carro' e 'moto' estão perto."

> "Por que isso importa? Porque quando o Kiro lê o seu Steering e depois lê o código, ele está fazendo conexões semânticas — não busca por palavras exatas. É por isso que um Steering sobre 'padrões de código' também influencia como o agente escreve testes, mesmo sem mencionar testes explicitamente."

**Transição:** "Mas tem um limite pra quanto contexto o modelo consegue processar de uma vez."

---

## Slide 6 — Context Window (1–2min)

**O que dizer:**

> "Context window — janela de contexto. É o limite de tokens que o modelo consegue 'enxergar' ao mesmo tempo para gerar uma resposta."

*Aponte pra visualização com tokens visíveis vs. ocultos.*

> "O modelo só processa o que está dentro dessa janela. O que está fora não existe pra ele — é como se nunca tivesse sido dito."

**Conectar diretamente com Steerings:**

> "Isso tem uma implicação prática direta pra nós. Quando vocês abre uma conversa longa com o Kiro, colam código enorme, repetem contexto toda hora — estão consumindo janela de contexto. O modelo começa a 'esquecer' coisas que foram ditas lá atrás."

> "Um Steering resolve isso. Em vez de jogar contexto no chat toda vez, você define uma vez em `.kiro/steering/` e ele está sempre disponível, de forma eficiente, sem consumir sua janela de conversa."

> "Modelo do Kiro hoje: Claude Sonnet 4.6 com 1 milhão de tokens de contexto. Parece absurdo, mas um repositório grande com histórico de conversa preenche rápido."

**Transição:** "Agora que entendemos as fundações, vamos pro Kiro de verdade."

---

## Slide 7 — Conheça o Kiro (1–2min)

**O que dizer:**

> "O Kiro não é mais um chatbot. Essa distinção é importante."

*Aponte pros três diferenciadores.*

> "Um chatbot de IA responde texto. O Kiro edita arquivos no seu projeto, executa comandos no terminal, navega no seu IDE, lê e escreve código — e faz tudo isso com o contexto do seu repositório específico."

> "A diferença prática: quando você pede pra um chatbot corrigir um bug, ele te mostra código. Quando você pede pro Kiro, ele corrige o arquivo diretamente."

**Os três pilares** *(aponte pra cada card)*:

- **Steerings:** "Contexto persistente. O que o agente sabe sobre o projeto antes mesmo de você digitar a primeira palavra."
- **Skills:** "Capacidades especializadas. Você ativa quando precisa — criar PR, entregar história, revisão de código."
- **Agent Hooks:** "Automações. O agente age por conta própria quando um evento acontece — você salva um arquivo, ele roda o lint. Você inicia uma task, ele checa o Jira."

**Transição:** "Vamos ver cada um de perto, começando pelos Steerings."

---

## Slide 8 — Steerings (2–3min)

**O que dizer:**

> "Steerings são arquivos Markdown em `.kiro/steering/`. Simples assim — mas o impacto é enorme."

> "Tudo que o Kiro sabe sobre o nosso projeto antes de você fazer a primeira pergunta vem dos Steerings. São as instruções persistentes."

*Aponte pro exemplo de arquivo no slide.*

**Conectar com os Steerings reais do time:**

> "Mas não é teórico. Olhando os Steerings que temos hoje:"

- **`jira-sustentacao.md`** — "O Kiro sabe o projeto VSUS, o board 2477, o formato exato da Causa Raiz, da Resolução, como registrar horas em subtask. Ele nunca vai registrar worklog no bug pai porque esse Steering deixa explícito."

- **`completude-tasks-jira.md`** — "O checklist completo de quando uma task está realmente pronta. O agente verifica isso antes de dizer que terminou."

- **`code-review-sustentacao.md`** — "Os padrões do N3. PHP 7.4, sem features do 8+, composer.lock não commitar. O Kiro não vai sugerir `match` expression porque esse Steering está lá."

- **`confluence-sustentacao-estrutura.md`** — "A estrutura completa do Confluence. Quando o Kiro cria documentação, ele coloca na pasta certa porque sabe onde cada tipo de documento deve ficar."

> "Isso é o poder dos Steerings. Em vez de repetir contexto toda vez no chat, você define uma vez e o agente carrega esse conhecimento em todas as interações."

**Transição:** "Os Steerings são sempre ativos. As Skills são diferentes — você as ativa quando precisa."

---

## Slide 9 — Skills (1–2min)

**O que dizer:**

> "Skills são capacidades especializadas que você invoca explicitamente. Elas não ficam rodando sempre — você chama quando precisa."

*Aponte pros exemplos.*

> "A diferença com Steerings: Steerings são o contexto permanente do projeto. Skills são fluxos de trabalho sob demanda."

**Exemplos concretos do time:**

- **Entregar História (`voomp-entregar-historia`):** "Você acabou a task. Em vez de manualmente criar o PR, linkar no Jira, transicionar o status, registrar as horas, comentar no QA — você invoca essa Skill e o agente faz tudo em sequência. É o fluxo completo de entrega automatizado."

- **Criar PR:** "Gera a descrição no formato padrão do N3, com resumo, arquivos alterados, link da task, tipo de mudança. Consistência sem esforço manual."

> "Como invocar? Você digita `#voomp-entregar-historia` ou menciona a Skill no chat do Kiro. O agente carrega o fluxo completo e executa."

**Transição:** "E quando você nem precisa invocar — o agente age sozinho — são os Agent Hooks."

---

## Slide 10 — Agent Hooks (3–4min)

**O que dizer:**

> "Agent Hooks são automações que disparam ações do Kiro baseadas em eventos. Você não precisa fazer nada — acontece sozinho."

*Aponte pros tipos de eventos.*

> "Cinco tipos de evento que podemos observar: edição de arquivo, submissão de prompt, antes de usar uma ferramenta, depois de usar uma ferramenta, e quando o agente para."

**Os 15 hooks do time — percorra por categoria:**

**Jira automations** *(os mais impactantes)*:

> "Esses são os que mais economizam tempo no dia a dia."

- **`jira-task-start` (preTaskExecution):** "Antes de começar qualquer task de spec, o agente automaticamente checa no Jira: a task está em 'Em desenvolvimento'? Tem subtask pra registro de horas? A descrição está completa? Você começa a codar com tudo certo."

- **`jira-close-task` (userTriggered):** "Quando você termina, dispara esse hook. Ele pede a task e as horas, busca no Jira, analisa o git log, preenche Causa Raiz e Resolução no formato padrão, cria a subtask se não existir, registra as horas lá, move pra Pendente de Produção. O que levaria 10-15 minutos vira 30 segundos."

- **`jira-description-pattern` (preToolUse):** "Antes de criar ou atualizar qualquer issue no Jira via Kiro, valida que tem tabela de sellers, impacto, comportamento esperado. Nenhum bug criado sem contexto."

- **`jira-causa-raiz-pattern` (preToolUse):** "Antes de atualizar Causa Raiz ou Resolução, valida o formato padrão N3. Consistência sem precisar lembrar do template."

**PHP quality** *(automações de código)*:

- **`php-lint-save`:** "Você salva um `.php`, roda `php -l` na hora. Erro de sintaxe aparece antes de você ir pro próximo arquivo — não depois de fazer push."

- **`php-code-review-on-save`:** "Nos arquivos de gateway de pagamento — PaymentController, PagarMe, GreennGateway — ao salvar, o agente verifica se tem exception engolida, chamada HTTP sem timeout, Sale::create sem transação. Os padrões problemáticos que já causaram bugs em produção."

**Investigação e war room:**

- **`bug-investigation` (userTriggered):** "Workflow estruturado de investigação: Jira → Grafana → Logs → Código → Banco → Hipóteses. Você dispara com o número da task e ele percorre tudo."

- **`health-check-platform` (userTriggered):** "Health check rápido: 5xx rate, Vendas Perdidas no Apagão, latência do checkout P95, pods saudáveis. Resumo em 5 linhas com status 🟢/🟡/🔴."

- **`war-room-status` (userTriggered):** "Relatório de war room: tasks pendentes de produção no Jira, PRs no Azure DevOps, status de pipeline. O relatório que levava 10 minutos pra montar."

> "Esses hooks estão em `~/.kiro/hooks/` — globais, funcionam em qualquer workspace que vocês abrirem no Kiro."

**Transição:** "E agora — o que fazemos com tudo isso?"

---

## Slide 11 — E agora? (1min)

**O que dizer:**

> "Não é pra vocês saírem daqui sabendo tudo. É pra saírem entendendo o suficiente pra usar melhor o que já temos."

**Três coisas pra fazer essa semana:**

1. **Explorar os Steerings existentes** — "Abra `.kiro/steering/` no seller-greenn-back. Leia o `jira-sustentacao.md`. Perceba o quanto o Kiro já sabe sobre o nosso processo."

2. **Testar os hooks** — "Na próxima task que abrir, deixa o `jira-task-start` rodar. Na próxima que fechar, usa o `jira-close-task`. Mede quanto tempo economizou."

3. **Criar um Steering próprio** — "Tem algum contexto que você repete toda vez no chat? Alguma regra do projeto que o Kiro deveria sempre saber? Coloca num Steering. É um arquivo Markdown, não tem mistério."

> "O objetivo final: que o time de N3 entregue com mais qualidade e menos fricção. Os hooks de Jira garantem que nenhuma task vai sem Causa Raiz. O lint automático pega erros de sintaxe antes do commit. O bug-investigation estrutura a investigação."

> "E agora — vamos pra prática."

**[Abrir o Kiro e demonstrar ao vivo]**

> "Vou mostrar o `jira-close-task` rodando numa task real. Vocês vão ver o hook preenchendo Causa Raiz e Resolução ao vivo."

---

## Perguntas frequentes

**"Isso substitui pensar?"**
> "Não. O Kiro é tão bom quanto o contexto que você dá pra ele. Steerings ruins geram sugestões ruins. O agente amplifica o que você já sabe — não substitui o julgamento."

**"E se o modelo alucinar?"**
> "Acontece. É por isso que hooks como o `php-code-review-on-save` e o `jira-description-pattern` validam antes de executar — o agente tem um checklist antes de agir. E sempre revise o que o Kiro gera antes de commitar."

**"Posso criar meus próprios Steerings e Hooks?"**
> "Sim. Um Steering é um arquivo Markdown em `.kiro/steering/`. Um Hook é um JSON com um evento e uma ação. Qualquer um do time pode criar — e se for útil pro time inteiro, a gente coloca global em `~/.kiro/hooks/`."

**"O que é o Claude Sonnet 4.6?"**
> "É o modelo da Anthropic que está rodando por baixo do Kiro agora. 1 milhão de tokens de contexto. Treinado pra ser especialmente bom em código e raciocínio. Quando você digita no Kiro, é ele que responde."

---

## Checklist rápido pré-apresentação

- [ ] `npm run dev` rodando em http://localhost:3002
- [ ] Kiro aberto com um projeto real (seller-greenn-back de preferência)
- [ ] Hooks carregados — verificar na aba "Agent Hooks" do Explorer
- [ ] `.kiro/steering/` aberto no Explorer para mostrar ao vivo
- [ ] Uma task VSUS recente pronta para demonstrar o `jira-close-task`
