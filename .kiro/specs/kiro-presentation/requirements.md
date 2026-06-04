# Requirements Document

## Introduction

Apresentação web interativa sobre Inteligência Artificial e Kiro, destinada ao time de sustentação da Cogna/Voomp. A apresentação cobre a evolução histórica da IA até a era dos tokens, conceitos fundamentais de LLMs e a plataforma Kiro com suas funcionalidades de steerings, skills e agent hooks. O projeto segue a mesma stack técnica do repositório `sentry-cogna-voomp` (React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Lucide React) e adota a identidade visual do Kiro.

---

## Glossary

- **Presentation**: A aplicação web single-page de slides interativos
- **Slide**: Componente React individual que representa uma tela da apresentação
- **SlideWrapper**: Componente de layout que aplica animações de entrada/saída nos slides
- **ProgressBar**: Componente que exibe o progresso da apresentação no topo da tela
- **SlideNav**: Componente de navegação com botões anterior/próximo e indicadores de posição
- **App**: Componente raiz que gerencia estado de navegação e composição dos slides
- **Navigator**: Subsistema responsável por gerenciar o slide atual, direção de transição e atalhos de teclado
- **Kiro**: Plataforma de desenvolvimento assistido por IA com funcionalidades de steerings, skills e agent hooks
- **Steering**: Arquivo de instrução persistente que guia o comportamento do agente Kiro em um projeto
- **Skill**: Capacidade especializada ativável no Kiro que fornece fluxos de trabalho e ferramentas adicionais
- **Agent Hook**: Automação que executa ações do agente Kiro com base em eventos do IDE
- **LLM**: Large Language Model — modelo de linguagem de grande escala
- **Token**: Unidade mínima de processamento de texto em modelos de linguagem
- **Embedding**: Representação vetorial de texto usada por modelos de linguagem
- **Tokenização**: Processo de conversão de texto em tokens para processamento por LLMs

---

## Requirements

### Requirement 1: Estrutura de Navegação da Apresentação

**User Story:** Como membro do time de sustentação, quero navegar entre os slides de forma fluida, para que eu possa acompanhar o conteúdo no meu próprio ritmo.

#### Acceptance Criteria

1. THE App SHALL renderizar os slides em sequência ordenada, indexados de 1 (primeiro) a N (último), onde N é o total de slides registrados no array de slides
2. WHEN o usuário pressiona a tecla `ArrowRight` ou `Space` E o slide atual não é o último, THE Navigator SHALL incrementar o índice do slide atual em 1
3. WHEN o usuário pressiona a tecla `ArrowLeft` E o slide atual não é o primeiro, THE Navigator SHALL decrementar o índice do slide atual em 1
4. WHEN o usuário clica no botão de próximo do SlideNav E o slide atual não é o último, THE Navigator SHALL incrementar o índice do slide atual em 1
5. WHEN o usuário clica no botão de anterior do SlideNav E o slide atual não é o primeiro, THE Navigator SHALL decrementar o índice do slide atual em 1
6. WHEN o usuário clica em um indicador de posição de índice K no SlideNav, THE Navigator SHALL definir o índice do slide atual como K
7. IF o slide atual é o primeiro (índice 1), THEN THE SlideNav SHALL renderizar o botão de anterior com atributo `disabled` E o Navigator SHALL ignorar eventos `ArrowLeft` e clique no botão anterior
8. IF o slide atual é o último (índice N), THEN THE SlideNav SHALL renderizar o botão de próximo com atributo `disabled` E o Navigator SHALL ignorar eventos `ArrowRight`, `Space` e clique no botão próximo
9. THE ProgressBar SHALL exibir uma barra preenchida proporcionalmente a `(índice atual / total de slides) × 100%`, com valor mínimo de `(1/N) × 100%` no primeiro slide e 100% no último
10. THE SlideNav SHALL exibir o número do slide atual e o total de slides no formato `N/Total`

---

### Requirement 2: Animações de Transição entre Slides

**User Story:** Como apresentador, quero que as transições entre slides sejam animadas e com direção coerente, para que a navegação pareça natural e profissional.

#### Acceptance Criteria

1. THE SlideWrapper SHALL aceitar uma prop `direction` com valores `"next"` ou `"prev"` que determina a direção da animação de entrada e saída
2. WHEN `direction` é `"next"`, THE SlideWrapper SHALL animar a entrada do novo slide com `x` inicial de `"100%"` indo para `"0%"`
3. WHEN `direction` é `"prev"`, THE SlideWrapper SHALL animar a entrada do novo slide com `x` inicial de `"-100%"` indo para `"0%"`
4. WHEN um slide existente é removido com `direction` `"next"`, THE SlideWrapper SHALL animá-lo com `x` saindo de `"0%"` para `"-100%"`
5. WHEN um slide existente é removido com `direction` `"prev"`, THE SlideWrapper SHALL animá-lo com `x` saindo de `"0%"` para `"100%"`
6. THE SlideWrapper SHALL aplicar transição do tipo `spring` com `stiffness: 300` e `damping: 30` em todas as animações; a opacidade dos slides permanece em `1` durante toda a transição
7. THE App SHALL utilizar `AnimatePresence` com `mode="wait"`, de forma que nenhum slide de saída seja visível ao mesmo tempo que um slide de entrada está sendo animado

---

### Requirement 3: Identidade Visual Kiro

**User Story:** Como membro do time de sustentação, quero que a apresentação reflita a identidade visual do Kiro, para que eu associe visualmente o conteúdo à plataforma.

#### Acceptance Criteria

1. THE Presentation SHALL definir a cor de fundo base do documento como `#09090f` (ou equivalente com luminosidade perceptual ≤ 10%)
2. THE Presentation SHALL declarar no arquivo `src/index.css` via bloco `@theme` os tokens: `--color-primary` (cor principal do Kiro), `--color-surface` (superfície de cards), `--color-text` (texto padrão, mínimo `#e8e8f0`) e `--color-accent` (cor de destaque secundária)
3. THE Presentation SHALL exibir o logotipo do Kiro no slide de capa como elemento `<img>` com `alt="Kiro"` e largura mínima de 80px
4. THE Presentation SHALL aplicar `backdrop-filter: blur(Xpx)` com X ≥ 8 e uma borda com opacidade entre 10% e 30% em todos os componentes de card e painel de conteúdo
5. THE Presentation SHALL aplicar `background-clip: text` com gradiente usando `--color-primary` e `--color-accent` em todos os títulos de destaque marcados com a classe utilitária de gradiente definida no projeto
6. THE Presentation SHALL aplicar `box-shadow` com cor baseada em `--color-primary` e opacidade entre 5% e 20% nos elementos de destaque interativos ou de foco visual
7. THE Presentation SHALL carregar a fonte `Inter` nos pesos 300, 400, 500, 600, 700 e 800 via tag `<link>` do Google Fonts no `index.html`
8. THE Presentation SHALL definir `lang="pt-BR"` na tag `<html>` do `index.html`

---

### Requirement 4: Slide de Capa

**User Story:** Como apresentador, quero um slide de capa impactante que introduza o tema, para que o time de sustentação entenda imediatamente o propósito da apresentação.

#### Acceptance Criteria

1. THE Presentation SHALL exibir o logotipo do Kiro centralizado no slide de capa como elemento `<img>` com `alt="Kiro"` e largura mínima de 80px
2. THE Presentation SHALL exibir um título principal com `font-size` ≥ 2rem e `font-weight` ≥ 700 comunicando o tema central da apresentação (IA e/ou Kiro)
3. THE Presentation SHALL exibir um subtítulo descrevendo o propósito da apresentação para o time de sustentação, com `font-size` menor que o título principal
4. THE Presentation SHALL exibir o texto `Cogna · Voomp` na capa
5. THE Presentation SHALL aplicar animações de entrada em cascata (staggered) em cada elemento da capa, com delay incremental de 100ms a 200ms entre elementos consecutivos, totalizando no máximo 1000ms de duração total da sequência de entrada

---

### Requirement 5: Módulo — Evolução Histórica da IA

**User Story:** Como membro do time de sustentação, quero entender a evolução histórica da IA desde suas origens até a era dos tokens, para que eu tenha contexto sobre como chegamos aos modelos atuais.

#### Acceptance Criteria

1. THE Presentation SHALL dedicar pelo menos um slide à linha do tempo da evolução da IA
2. THE Presentation SHALL apresentar os seguintes marcos históricos em ordem cronológica: (a) origens — anos 1950, (b) inverno da IA, (c) era do machine learning, (d) era dos transformers e LLMs
3. THE Presentation SHALL renderizar o marco da era dos transformers/LLMs com cor de destaque diferente dos demais itens (usando `--color-primary` ou `--color-accent`) E/OU com tamanho de fonte ou ícone aumentado em relação aos outros marcos
4. THE Presentation SHALL exibir o conceito de token como unidade fundamental dos LLMs modernos em pelo menos um dos slides do módulo
5. WHEN os itens da linha do tempo são renderizados, THE Slide SHALL aplicar animação de entrada sequencial com delay de 100ms a 300ms entre cada item da lista

---

### Requirement 6: Módulo — Conceitos Fundamentais de LLMs

**User Story:** Como membro do time de sustentação, quero entender os conceitos fundamentais de LLMs, tokenização e embeddings, para que eu possa compreender como as ferramentas de IA funcionam internamente.

#### Acceptance Criteria

1. THE Presentation SHALL dedicar pelo menos um slide ao conceito de LLM abordando obrigatoriamente: o que são LLMs, como processam linguagem (entrada → tokens → saída) e para que servem
2. THE Presentation SHALL exibir um exemplo visual de tokenização mostrando um texto de entrada sendo segmentado em tokens individuais com delimitação visual clara (cores, bordas ou espaçamento) entre os tokens
3. THE Presentation SHALL apresentar o conceito de embeddings como representação vetorial de significado, sem fórmulas matemáticas
4. THE Presentation SHALL apresentar o conceito de context window indicando sua limitação prática (ex: número máximo de tokens aceitos) e sua influência na geração de texto
5. THE Presentation SHALL apresentar todos os conceitos sem fórmulas matemáticas e sem jargão técnico de ML não explicado previamente na apresentação

---

### Requirement 7: Módulo — Introdução ao Kiro

**User Story:** Como membro do time de sustentação, quero entender o que é o Kiro e como ele se diferencia de outros assistentes de IA, para que eu compreenda o valor da plataforma para o nosso trabalho.

#### Acceptance Criteria

1. THE Presentation SHALL dedicar pelo menos um slide ao posicionamento do Kiro como ambiente de desenvolvimento assistido por IA
2. THE Presentation SHALL apresentar uma diferenciação explícita entre o Kiro e assistentes de chat genéricos (ex: ChatGPT), indicando ao menos uma característica que o Kiro oferece além do chat (ex: edição de arquivos, execução de comandos, integração com IDE)
3. THE Presentation SHALL exibir os nomes "Steerings", "Skills" e "Agent Hooks" com uma frase de definição de uma sentença para cada um no mesmo slide ou em slides adjacentes de introdução

---

### Requirement 8: Módulo — Steerings

**User Story:** Como membro do time de sustentação, quero entender o conceito de Steerings no Kiro, para que eu saiba como configurar o agente para seguir padrões e contextos específicos do projeto.

#### Acceptance Criteria

1. THE Presentation SHALL dedicar pelo menos um slide ao conceito de Steerings
2. THE Presentation SHALL explicar que Steerings são arquivos de instrução persistentes (formato Markdown) localizados em `.kiro/steering/`, que guiam o comportamento do Kiro em todas as interações do projeto
3. THE Presentation SHALL apresentar no mínimo 2 exemplos concretos de casos de uso de Steerings relevantes para o time de sustentação (ex: padrões de código, contexto do projeto, convenções de nomenclatura, instruções de deploy)
4. THE Presentation SHALL exibir um exemplo visual de arquivo de steering contendo ao menos um título (heading Markdown) e um bloco de instrução em texto corrido ou lista

---

### Requirement 9: Módulo — Skills

**User Story:** Como membro do time de sustentação, quero entender o conceito de Skills no Kiro, para que eu saiba como ativar capacidades especializadas para tarefas específicas.

#### Acceptance Criteria

1. THE Presentation SHALL dedicar pelo menos um slide ao conceito de Skills
2. THE Presentation SHALL explicar que Skills são capacidades especializadas que são ativadas explicitamente pelo usuário sob demanda (não estão sempre ativas), diferentemente das Steerings
3. THE Presentation SHALL apresentar no mínimo 2 exemplos de Skills relevantes para o contexto da Voomp (ex: criação de PRs, entrega de histórias, revisão de código, geração de changelogs)
4. THE Presentation SHALL exibir uma diferenciação visual ou textual explícita entre Skills e Steerings, indicando que: Skills = ativadas explicitamente pelo usuário; Steerings = sempre ativas durante o projeto

---

### Requirement 10: Módulo — Agent Hooks

**User Story:** Como membro do time de sustentação, quero entender o conceito de Agent Hooks no Kiro, para que eu saiba como automatizar ações do agente com base em eventos do IDE.

#### Acceptance Criteria

1. THE Presentation SHALL dedicar pelo menos um slide ao conceito de Agent Hooks
2. THE Presentation SHALL explicar que Agent Hooks são automações configuráveis que disparam ações do Kiro automaticamente em resposta a eventos do IDE
3. THE Presentation SHALL apresentar no mínimo 2 exemplos práticos de hooks relevantes para o time de sustentação (ex: executar lint ao salvar arquivo TypeScript, revisar operações de escrita antes de confirmar)
4. THE Presentation SHALL listar explicitamente no slide os 5 tipos de eventos suportados: `fileEdited`, `promptSubmit`, `preToolUse`, `postToolUse`, `agentStop`

---

### Requirement 11: Slide de Encerramento e Próximos Passos

**User Story:** Como apresentador, quero um slide de encerramento com chamada para ação, para que o time de sustentação saiba como dar os próximos passos com o Kiro.

#### Acceptance Criteria

1. THE Presentation SHALL exibir um slide de encerramento que mencione explicitamente no mínimo 3 dos tópicos abordados na apresentação (ex: LLMs, Steerings, Skills, Agent Hooks)
2. THE Presentation SHALL apresentar no mínimo 1 chamada para ação concreta e específica (ex: "Instale o Kiro no VS Code", "Crie seu primeiro steering", "Configure um hook de lint")
3. THE Presentation SHALL exibir no mínimo 1 link ou URL de referência para documentação oficial do Kiro

---

### Requirement 12: Estrutura de Código e Organização do Projeto

**User Story:** Como desenvolvedor do time, quero que o projeto siga a mesma estrutura e convenções do `sentry-cogna-voomp`, para que eu possa manter e evoluir a apresentação com familiaridade.

#### Acceptance Criteria

1. THE Presentation SHALL ser implementada com React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion e Lucide React como dependências declaradas no `package.json`
2. THE Presentation SHALL organizar cada slide como um componente TypeScript individual no diretório `src/slides/`, nomeados com prefixo numérico de dois dígitos ordenado (ex: `01-Capa.tsx`, `02-IntroIA.tsx`)
3. THE Presentation SHALL centralizar os componentes de UI reutilizáveis (`SlideWrapper`, `ProgressBar`, `SlideNav`) no diretório `src/ui/`, cada um em seu próprio arquivo `.tsx`
4. THE Presentation SHALL declarar todos os tokens de cor (`--color-*`), família tipográfica (`--font-sans`) e tamanho de fonte base via bloco `@theme` no arquivo `src/index.css` usando a sintaxe do Tailwind CSS v4
5. THE Presentation SHALL configurar o servidor de desenvolvimento na porta `3002` via propriedade `server.port` no `vite.config.ts`
6. THE App SHALL registrar todos os slides em um array `slides` ordenado em `src/App.tsx`, importando cada componente de slide individualmente
7. THE Presentation SHALL incluir arquivo `index.html` com `lang="pt-BR"`, tag `<link>` do Google Fonts para Inter e `<title>` contendo a palavra "Kiro" e referência ao público-alvo (ex: "Kiro — Time de Sustentação")

---

### Requirement 13: Acessibilidade e Responsividade

**User Story:** Como membro do time de sustentação, quero que a apresentação seja legível e navegável em diferentes tamanhos de tela, para que eu possa acompanhar tanto em monitor quanto em projetor.

#### Acceptance Criteria

1. THE Presentation SHALL aplicar classes responsivas do Tailwind para tamanhos de texto em todos os elementos `h1`, `h2` e `h3` dos slides, usando ao menos dois breakpoints (ex: `text-4xl md:text-6xl`)
2. THE Presentation SHALL incluir atributo `alt` com texto descritivo não vazio em todas as tags `<img>` da apresentação
3. THE Presentation SHALL garantir que todos os elementos `<button>` de navegação possuam atributo `aria-label` descritivo OU texto visível não vazio
4. IF um elemento interativo recebe foco de teclado, THEN THE Presentation SHALL exibir um `outline` visível com largura ≥ 2px no elemento focado
5. THE Presentation SHALL manter razão de contraste de cor ≥ 4.5:1 (WCAG AA para texto normal) entre a cor de texto padrão (`--color-text`) e a cor de fundo base dos slides
