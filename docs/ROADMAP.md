# Roadmap — Próximos conteúdos para a apresentação

> Mapeamento do que ainda não está coberto nos slides mas faz parte do sistema completo do Kiro.
> Baseado em feedback de audiência técnica sobre como apresentar o Kiro como sistema, não como coleção de features.

---

## O framework das 5 perguntas

| Pergunta | Conceito | Status nos slides |
|----------|----------|-------------------|
| O que fazer? | **Specs** (Requirements → Design → Tasks) | ✅ Slide 9 |
| Como fazer? | **Automação** (Steering + Skills + Hooks trabalhando juntos) | ⚠️ Slides 10–12 mostram features isoladas, não o fluxo integrado |
| Onde agir? | **MCP / Powers** (agir fora da IDE — Jira, Grafana, Azure DevOps) | ❌ Não existe slide dedicado |
| Com qual conhecimento? | **Context Engineering** (RAG, memória, conhecimento da empresa) | ⚠️ Parcialmente coberto em Embeddings e Context Window, mas não conecta com o conceito de Context Engineering |
| Como controlar? | **Governança** (Evals, Guardrails, Auditoria, Qualidade) | ❌ Não existe slide dedicado |

---

## O que está coberto hoje (v1)

```
Fundação técnica (slides 2–7)
├── Evolução da IA
├── LLMs + mecanismo de atenção
├── Tokens + billing
├── Embeddings + ancoragem semântica
├── Context Window
└── Ilusão do Pensamento (Apple Research)

Kiro — features (slides 8–12)
├── Kiro & Superpoderes (3 pilares)
├── Spec Driven Development
├── Steerings (memória do agente)
├── Skills (fluxos completos)
└── Agent Hooks (automação por evento)

Prática (slides 13–15)
├── CTA (close-task)
├── Hands-on (kiro-playbook)
└── Recursos de estudo
```

---

## O que falta para v2 — "Kiro como sistema"

### 1. Fluxo integrado (substituir slides 10–12 por um único slide de fluxo)

Mostrar o encadeamento real:
```
Spec  →  Steering  →  Skill  →  Hook  →  Resultado
(o que)  (contexto)  (execução) (automação) (impacto)
```

**Por que:** Steering isolado parece "arquivo de configuração". O valor real aparece quando combinado com automação. Mostrar o fluxo inteiro muda a percepção de "3 features" para "1 sistema".

**Frase âncora:** "Um agente sem contexto é apenas autocomplete caro."

---

### 2. MCP / Powers — "Onde agir fora da IDE"

Slide dedicado mostrando:
- MCP Jira — buscar tasks, atualizar status, registrar horas
- MCP Grafana — consultar dashboards e métricas
- MCP Azure DevOps — PRs, pipelines, branches
- Powers — fluxos especializados com contexto específico

**Por que:** O time já usa MCP no dia a dia (close-task depende dele). Não ter um slide explica por que o prompt funciona "sem MCP" — mas não mostra o poder real de quando *tem* MCP.

---

### 3. Context Engineering — "O combustível do agente"

Slide que conecta:
- Embeddings (já vimos) → como o modelo entende
- Steerings → como injetamos contexto
- RAG → como buscar conhecimento dinâmico
- Memória → como manter estado entre sessões
- Conhecimento da empresa → por que o kiro-playbook existe

**Frase âncora:** "Context Engineering é o novo prompt engineering."

---

### 4. Governança — "Como escalar sem caos"

Slide futuro para quando o time crescer:
- Evals — como medir se o agente está acertando
- Guardrails — limites do que o agente pode fazer
- Auditoria — rastreabilidade de decisões
- Qualidade — hooks de review, lint, testes automáticos

**Por que:** Hoje são 6 pessoas — governança é leve. Quando escalar, precisará existir.

---

### 5. Futuro — "Para onde estamos indo"

Slide de encerramento para uma v3:
- Agentic Development — o IDE se torna par do dev
- Multi-Agent Systems — agentes especializados colaborando
- AI Native Engineering — engenharia projetada para trabalhar com agentes
- Spec Driven Organizations — specs como contrato entre humanos e agentes

---

## Prioridade de implementação

| # | O que | Impacto | Esforço | Quando |
|---|-------|---------|---------|--------|
| 1 | Fluxo integrado (Spec→Steering→Skill→Hook) | Alto | Médio | v2 — próxima apresentação |
| 2 | MCP / Powers | Alto | Baixo | v2 |
| 3 | Context Engineering | Médio | Médio | v2 |
| 4 | Governança | Baixo (time pequeno) | Baixo | v3 |
| 5 | Futuro | Baixo | Baixo | v3 |

---

## Notas

- A v1 atual está correta para o objetivo (capacitar 6 devs que já usam Kiro)
- A v2 faria sentido para apresentar para liderança ou times maiores
- A frase "Um agente sem contexto é apenas autocomplete caro" pode entrar já no slide de Embeddings ou Context Window sem precisar de slide novo
