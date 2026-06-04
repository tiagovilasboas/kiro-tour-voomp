# Implementation Plan: Kiro Presentation

## Overview

Aplicação web single-page de slides interativos sobre IA e Kiro para o time de sustentação da Cogna/Voomp. Implementação em React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion e Lucide React. A implementação segue uma abordagem incremental: setup de projeto → componentes de UI → lógica de navegação → slides individuais → integração final.

## Tasks

- [x] 1. Setup do projeto e configuração base
  - [x] 1.1 Criar `package.json` com dependências do projeto
    - Declarar React 19, react-dom, framer-motion, lucide-react, tailwindcss v4 como dependencies
    - Declarar vite, @vitejs/plugin-react, typescript, @types/react, @types/react-dom como devDependencies
    - Declarar vitest, fast-check, @testing-library/react, @testing-library/jest-dom, jsdom como devDependencies de teste
    - Adicionar scripts: dev, build, preview, test
    - _Requirements: 12.1_

  - [x] 1.2 Criar `vite.config.ts` com porta 3002
    - Configurar plugin React e `server.port: 3002`
    - _Requirements: 12.5_

  - [x] 1.3 Criar `tsconfig.json` e `tsconfig.node.json`
    - Configurar strict mode, JSX react-jsx, paths e module resolution
    - _Requirements: 12.1_

  - [x] 1.4 Criar `index.html` com Google Fonts e metadados
    - Definir `lang="pt-BR"` na tag `<html>`
    - Adicionar tag `<link>` do Google Fonts para Inter (pesos 300–800, display=swap)
    - Definir `<title>` com "Kiro — Time de Sustentação"
    - Referenciar `src/main.tsx` como script module
    - _Requirements: 3.7, 3.8, 12.7_

  - [x] 1.5 Criar `src/index.css` com tokens de tema via `@theme`
    - Importar tailwindcss
    - Declarar tokens: `--color-primary: #6366f1`, `--color-accent: #a78bfa`, `--color-surface: #1a1a2e`, `--color-text: #e8e8f0`, `--color-background: #09090f`
    - Declarar `--font-sans: 'Inter', system-ui, sans-serif`
    - _Requirements: 3.1, 3.2, 12.4_

  - [x] 1.6 Criar `src/main.tsx` como entry point
    - Importar React, ReactDOM, App e index.css
    - Montar App em `#root` com createRoot
    - _Requirements: 12.1_

- [x] 2. Componentes de UI reutilizáveis
  - [x] 2.1 Implementar `src/ui/SlideWrapper.tsx`
    - Criar componente com Framer Motion `motion.div`
    - Definir variants: enter (x: ±100%), center (x: 0%), exit (x: ∓100%) baseado em direction
    - Manter opacidade em 1 durante toda a transição
    - Aplicar transition spring com stiffness: 300, damping: 30
    - Aceitar prop `direction: 'next' | 'prev'` e `children`
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [ ]* 2.2 Escrever property test para SlideWrapper (Property 1: Bounded Navigation)
    - **Property 1: Bounded Navigation Increment/Decrement**
    - Testar que next() incrementa dentro dos bounds para qualquer estado válido
    - Testar que prev() decrementa dentro dos bounds para qualquer estado válido
    - Testar no-op nos limites (primeiro e último slide)
    - **Validates: Requirements 1.2, 1.3, 1.4, 1.5, 1.7, 1.8**

  - [x] 2.3 Implementar `src/ui/ProgressBar.tsx`
    - Criar barra fixa no topo com z-50
    - Calcular largura como `(current / total) * 100%`
    - Usar cor `--color-primary` para preenchimento
    - Props: `current: number` (1-based), `total: number`
    - _Requirements: 1.9_

  - [ ]* 2.4 Escrever property test para ProgressBar (Property 4: Progress Calculation)
    - **Property 4: Progress Calculation**
    - Gerar current/total aleatórios válidos e verificar cálculo de porcentagem
    - Verificar mínimo (1/N × 100%) e máximo (100%)
    - **Validates: Requirements 1.9**

  - [x] 2.5 Implementar `src/ui/SlideNav.tsx`
    - Criar nav fixa no bottom center com backdrop-blur e border glassmorphism
    - Botão anterior com ChevronLeft, disabled no primeiro slide, aria-label "Slide anterior"
    - Botão próximo com ChevronRight, disabled no último slide, aria-label "Próximo slide"
    - Indicadores de posição clicáveis (dots) com aria-label "Ir para slide N"
    - Display de contagem no formato `current/total`
    - Focus outline ≥ 2px em todos os buttons
    - Props: current, total, onNext, onPrev, onGoTo
    - _Requirements: 1.4, 1.5, 1.6, 1.7, 1.8, 1.10, 13.3, 13.4_

- [x] 3. App.tsx com lógica de navegação
  - [x] 3.1 Implementar `src/App.tsx` com Navigator e composição de slides
    - Gerenciar state: currentIndex (0-based) e direction ('next' | 'prev')
    - Implementar goTo(index) com bounds checking e tracking de direction
    - Implementar next() e prev() como wrappers de goTo
    - Registrar useEffect com keydown listener para ArrowRight, ArrowLeft, Space
    - Usar AnimatePresence mode="wait" para transições
    - Compor ProgressBar, SlideWrapper e SlideNav
    - Importar e registrar todos os 11 slides no array `slides` ordenado
    - _Requirements: 1.1, 1.2, 1.3, 1.7, 1.8, 2.7, 12.6_

  - [ ]* 3.2 Escrever property test para Navigation (Property 2: Direct Navigation)
    - **Property 2: Direct Navigation (goTo)**
    - Gerar índice target aleatório e verificar que goTo(k) define currentIndex como k
    - Verificar que goTo fora de bounds não altera o state
    - **Validates: Requirements 1.6**

  - [ ]* 3.3 Escrever property test para Direction Tracking (Property 3)
    - **Property 3: Direction Tracking**
    - Gerar pares (from, to) distintos e verificar direction correta
    - Se to > from → direction === 'next'; se to < from → direction === 'prev'
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

- [x] 4. Checkpoint — Verificar build e navegação base
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Slides do módulo de IA (01–06)
  - [x] 5.1 Implementar `src/slides/01-Capa.tsx`
    - Logo Kiro centralizado com `<img alt="Kiro">` e largura mínima 80px
    - Título principal ≥ 2rem, font-weight ≥ 700, gradiente text com --color-primary e --color-accent
    - Subtítulo com font-size menor que o título
    - Texto "Cogna · Voomp"
    - Animações staggered com delay 150ms entre elementos (max 1000ms total)
    - Classes responsivas (text-4xl md:text-6xl)
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 3.3, 3.5, 13.1, 13.2_

  - [x] 5.2 Implementar `src/slides/02-EvolucaoIA.tsx`
    - Timeline com marcos: (a) origens 1950s, (b) inverno da IA, (c) era do ML, (d) era dos transformers/LLMs
    - Destaque visual no item transformers/LLMs com --color-primary ou --color-accent
    - Animação sequencial de entrada (delay 100-300ms entre itens)
    - Cards com glassmorphism (backdrop-blur ≥ 8px, border 10-30% opacidade)
    - _Requirements: 5.1, 5.2, 5.3, 5.5, 3.4_

  - [x] 5.3 Implementar `src/slides/03-Tokens.tsx`
    - Explicar conceito de token como unidade fundamental dos LLMs
    - Exibir exemplo visual de tokenização com texto segmentado em tokens
    - Delimitação visual clara entre tokens (cores, bordas ou espaçamento)
    - _Requirements: 5.4, 6.2_

  - [x] 5.4 Implementar `src/slides/04-LLMs.tsx`
    - Explicar o que são LLMs, como processam linguagem (entrada → tokens → saída)
    - Explicar para que servem
    - Sem fórmulas matemáticas, sem jargão não explicado
    - _Requirements: 6.1, 6.5_

  - [x] 5.5 Implementar `src/slides/05-Embeddings.tsx`
    - Apresentar embeddings como representação vetorial de significado
    - Sem fórmulas matemáticas
    - Visualização intuitiva do conceito
    - _Requirements: 6.3, 6.5_

  - [x] 5.6 Implementar `src/slides/06-ContextWindow.tsx`
    - Explicar context window e limitação prática (máximo de tokens)
    - Indicar influência na geração de texto
    - _Requirements: 6.4, 6.5_

- [x] 6. Slides do módulo Kiro (07–11)
  - [x] 6.1 Implementar `src/slides/07-IntroKiro.tsx`
    - Posicionar Kiro como ambiente de desenvolvimento assistido por IA
    - Diferenciação explícita entre Kiro e assistentes genéricos (ChatGPT)
    - Mencionar pelo menos uma característica além do chat (edição de arquivos, execução de comandos, integração IDE)
    - Exibir "Steerings", "Skills" e "Agent Hooks" com definição de uma sentença cada
    - _Requirements: 7.1, 7.2, 7.3_

  - [x] 6.2 Implementar `src/slides/08-Steerings.tsx`
    - Explicar steerings como arquivos Markdown em `.kiro/steering/`
    - Apresentar ≥ 2 exemplos de casos de uso (padrões de código, contexto do projeto, etc.)
    - Exibir exemplo visual de arquivo steering com heading e bloco de instrução
    - Cards com glassmorphism
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 3.4_

  - [x] 6.3 Implementar `src/slides/09-Skills.tsx`
    - Explicar skills como capacidades ativadas explicitamente sob demanda
    - Apresentar ≥ 2 exemplos de skills relevantes para Voomp (criação de PRs, entrega de histórias)
    - Diferenciação visual/textual entre Skills (ativadas pelo usuário) e Steerings (sempre ativas)
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

  - [x] 6.4 Implementar `src/slides/10-AgentHooks.tsx`
    - Explicar hooks como automações em resposta a eventos do IDE
    - Apresentar ≥ 2 exemplos práticos (lint ao salvar, revisar operações de escrita)
    - Listar explicitamente os 5 tipos de eventos: fileEdited, promptSubmit, preToolUse, postToolUse, agentStop
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

  - [x] 6.5 Implementar `src/slides/11-Encerramento.tsx`
    - Mencionar ≥ 3 tópicos abordados (LLMs, Steerings, Skills, Agent Hooks)
    - Apresentar ≥ 1 chamada para ação concreta ("Instale o Kiro", "Crie seu primeiro steering")
    - Exibir ≥ 1 link/URL de referência para documentação oficial do Kiro
    - _Requirements: 11.1, 11.2, 11.3_

- [x] 7. Checkpoint — Verificar todos os slides renderizam
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Integração final e assets
  - [x] 8.1 Adicionar logo Kiro em `public/kiro-logo.svg`
    - Criar ou adicionar SVG do logo Kiro
    - Garantir que é servido como asset estático de /public/
    - _Requirements: 3.3, 4.1_

  - [ ]* 8.2 Escrever property test de acessibilidade (Property 5: Accessibility Attributes)
    - **Property 5: Accessibility Attributes**
    - Renderizar cada slide e verificar que todas as `<img>` têm alt não vazio
    - Verificar que todos os `<button>` de navegação têm aria-label ou texto visível
    - **Validates: Requirements 13.2, 13.3**

  - [ ]* 8.3 Escrever property test de contraste (Property 6: Color Contrast Compliance)
    - **Property 6: Color Contrast Compliance**
    - Computar contrast ratio entre --color-text e --color-background
    - Verificar ratio ≥ 4.5:1 (WCAG AA)
    - **Validates: Requirements 13.5**

  - [ ]* 8.4 Escrever unit tests para conteúdo dos slides
    - Testar slide Capa: logo alt="Kiro", título, subtítulo, "Cogna · Voomp"
    - Testar slide EvolucaoIA: marcos históricos em ordem
    - Testar slide AgentHooks: 5 tipos de eventos listados
    - Testar slide Encerramento: ≥ 3 tópicos, CTA, link documentação
    - **Validates: Requirements 4.1–4.4, 5.2, 10.4, 11.1–11.3**

- [x] 9. Checkpoint final — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific content and examples
- The design uses TypeScript throughout — all implementations are in `.tsx` files
- Tailwind CSS v4 uses `@theme` in CSS instead of `tailwind.config.ts` for token definitions
- All slides follow the glassmorphism pattern with `backdrop-blur` and semi-transparent borders

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["1.4", "1.5", "1.6"] },
    { "id": 2, "tasks": ["2.1", "2.3", "2.5"] },
    { "id": 3, "tasks": ["2.2", "2.4", "3.1"] },
    { "id": 4, "tasks": ["3.2", "3.3"] },
    { "id": 5, "tasks": ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"] },
    { "id": 6, "tasks": ["6.1", "6.2", "6.3", "6.4", "6.5"] },
    { "id": 7, "tasks": ["8.1"] },
    { "id": 8, "tasks": ["8.2", "8.3", "8.4"] }
  ]
}
```
