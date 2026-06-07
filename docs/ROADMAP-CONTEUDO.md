# Roadmap de Conteúdo — Próximas Sessões

> Baseado no framework de 5 perguntas apresentado no slide 8.
> A primeira sessão (esta apresentação) cobre "O que fazer?" e "Como fazer?".
> As próximas sessões expandem para o sistema completo.

---

## O que já cobrimos (Sessão 1 — "Kiro com Intenção")

| Pergunta | Conceito | Status |
|----------|----------|--------|
| O que fazer? | **Specs** — Requirements → Design → Tasks | ✅ Coberto |
| Como fazer? | **Automação** — Steerings + Skills + Hooks | ✅ Coberto |

---

## O que falta (próximas sessões)

### Sessão 2 — Integrações: onde o agente age fora da IDE

| Conceito | O que cobrir |
|----------|-------------|
| **MCP** | Jira, Azure DevOps, Grafana, MySQL — como configurar, como usar, limitações |
| **Powers** | Fluxos especializados, contexto específico, conhecimento de domínio empacotado |
| **Prompts como interface** | Os 7 prompts do playbook como alternativa sem MCP |

**Pergunta-chave:** "Onde o agente age?"
**Demo prática:** usar o MCP Jira ao vivo para buscar uma task, classificar severidade, e propor causa raiz.

---

### Sessão 3 — Context Engineering: o combustível do agente

| Conceito | O que cobrir |
|----------|-------------|
| **RAG** | Retrieval-Augmented Generation — buscar contexto em tempo real vs injetar permanente |
| **Memória** | ai-memory, .kiro profiles, como o agente "lembra" entre sessões |
| **Domínio da empresa** | Como modelar conhecimento da Voomp em formato que o agente entende |
| **Frase-âncora** | "Um agente sem contexto é apenas autocomplete caro" |

**Pergunta-chave:** "Com que conhecimento o agente opera?"
**Demo prática:** criar um Steering do zero que muda visivelmente o output do agente.

---

### Sessão 4 — Governança: como escalar sem caos

| Conceito | O que cobrir |
|----------|-------------|
| **Evals** | Como medir se o agente está respondendo bem — métricas e benchmarks |
| **Guardrails** | preToolUse/postToolUse hooks como portões de segurança |
| **Auditoria** | Logs de ação do agente, rastreabilidade, compliance |
| **Qualidade** | Code review automatizado, lint, testes como barreira antes de commitar |

**Pergunta-chave:** "Como controlar o agente em escala?"
**Demo prática:** um hook preToolUse que bloqueia escrita em arquivos de pagamento sem aprovação.

---

### Sessão 5 (futura) — O Futuro: para onde estamos indo

| Conceito | O que cobrir |
|----------|-------------|
| **Agentic Development** | O que muda no fluxo de trabalho quando o agente é permanente |
| **Multi-Agent Systems** | Múltiplos agentes coordenados — sub-agents, context-gatherer |
| **AI Native Engineering** | Projetos que nascem com IA no centro, não como adição |
| **Spec Driven Organizations** | Specs como documentação viva que guia produto e eng |

**Pergunta-chave:** "Para onde isso vai?"
**Demo prática:** mostrar um sub-agent investigando um bug autonomamente enquanto outro gera o PR.

---

## Resumo em tabela

| Sessão | Pergunta | Conceito | Duração estimada |
|--------|----------|----------|-----------------|
| 1 ✅ | O que fazer? + Como fazer? | Specs + Automação (Steering/Skills/Hooks) | 22 min |
| 2 | Onde agir? | MCP + Powers | 20 min |
| 3 | Com que contexto? | Context Engineering + RAG + Memória | 25 min |
| 4 | Como controlar? | Governança + Evals + Guardrails | 20 min |
| 5 | Para onde? | Agentic Dev + Multi-Agent + AI Native | 15 min |

---

## Fonte

Framework extraído de feedback sobre a estrutura da apresentação:

> "Steering isolado parece arquivo de configuração. O valor real aparece quando combinado com automação."

> "Um agente sem contexto é apenas autocomplete caro."

> "Tudo se reduz a 5 perguntas: O que fazer? Como fazer? Onde agir? Com que contexto? Como controlar?"
