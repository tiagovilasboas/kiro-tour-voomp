import { motion } from 'framer-motion'
import { Webhook, Terminal, Shield, FileText, Search, GitPullRequest, Radio, Zap, BookOpen } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const eventTypes = [
  { name: 'fileEdited', desc: 'arquivo salvo' },
  { name: 'preToolUse', desc: 'antes de agir' },
  { name: 'postToolUse', desc: 'após agir' },
  { name: 'preTaskExecution', desc: 'antes de task' },
  { name: 'postTaskExecution', desc: 'após task' },
  { name: 'agentStop', desc: 'agente parou' },
  { name: 'userTriggered', desc: 'manual' },
]

const hookGroups = [
  {
    category: 'Jira Automations',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    hooks: [
      { icon: FileText, name: 'jira-task-start', trigger: 'preTaskExecution', desc: 'Antes de codar: checa se task está em "Em desenvolvimento", cria subtask de horas, valida descrição.' },
      { icon: FileText, name: 'jira-close-task', trigger: 'userTriggered', desc: 'Preenche Causa Raiz e Resolução no formato padrão, registra horas em subtask, move para Pendente de Produção.' },
      { icon: Shield, name: 'jira-description-pattern', trigger: 'preToolUse', desc: 'Valida que todo bug criado tem tabela de sellers, Impacto e Comportamento Esperado antes de salvar.' },
      { icon: Shield, name: 'jira-causa-raiz-pattern', trigger: 'preToolUse', desc: 'Garante formato correto ao atualizar Causa Raiz (customfield_10169) ou Resolução (customfield_10168).' },
    ],
  },
  {
    category: 'Qualidade de Código',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    hooks: [
      { icon: Terminal, name: 'php-lint-save', trigger: 'fileEdited', desc: 'Roda php -l ao salvar .php. Erro de sintaxe aparece antes do commit — não depois do push.' },
      { icon: Shield, name: 'php-code-review-on-save', trigger: 'fileEdited', desc: 'Detecta exception engolida, Http::post sem timeout, Sale::create sem DB::transaction nos arquivos de gateway.' },
      { icon: GitPullRequest, name: 'generate-pr-description', trigger: 'userTriggered', desc: 'Gera descrição de PR no padrão N3: resumo, arquivos, link VSUS, tipo de mudança, testes.' },
    ],
  },
  {
    category: 'Investigação & War Room',
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/20',
    hooks: [
      { icon: Search, name: 'bug-investigation', trigger: 'userTriggered', desc: 'Workflow completo: Jira → Grafana → Logs → Código → Banco → Hipóteses. Tudo estruturado num prompt.' },
      { icon: Webhook, name: 'health-check-platform', trigger: 'userTriggered', desc: '5xx rate, Vendas Perdidas, latência P95, pods saudáveis — resumo em 5 linhas com 🟢/🟡/🔴.' },
      { icon: BookOpen, name: 'war-room-status', trigger: 'userTriggered', desc: 'Tasks pendentes de produção, PRs no Azure DevOps, status de pipeline — relatório montado em segundos.' },
    ],
  },
]

export function AgentHooks() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-4">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-3">
        <Webhook size={26} className="text-primary" />
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">Agent Hooks</h2>
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Automações que disparam <span className="text-primary font-semibold">sem você pedir</span> — baseadas em eventos do IDE.
        O agente age no momento certo, com o contexto certo.
      </motion.p>

      {/* Event types */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="flex flex-wrap justify-center gap-2">
        {eventTypes.map(e => (
          <span key={e.name}
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <Radio size={9} />
            {e.name}
            <span className="text-primary/50">· {e.desc}</span>
          </span>
        ))}
      </motion.div>

      {/* Hook groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-6xl">
        {hookGroups.map((group, gi) => (
          <motion.div key={group.category} custom={gi + 3} variants={fadeUp} initial="hidden" animate="visible"
            className={`glass border p-4 flex flex-col gap-3 ${group.border}`}>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${group.color}`}>{group.category}</span>
            </div>
            <div className="space-y-3">
              {group.hooks.map(h => {
                const Icon = h.icon
                return (
                  <div key={h.name} className="flex items-start gap-2">
                    <div className={`rounded-lg p-1.5 flex-shrink-0 mt-0.5 ${group.bg} ${group.color}`}>
                      <Icon size={12} />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <code className={`text-[10px] font-mono font-bold ${group.color}`}>{h.name}</code>
                        <span className="text-[10px] text-text-muted/50 font-mono">· {h.trigger}</span>
                      </div>
                      <p className="text-[11px] text-text-muted leading-relaxed mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p custom={7} variants={fadeUp} initial="hidden" animate="visible"
        className="text-xs text-text-muted/50 text-center flex items-center gap-1.5">
        <Zap size={12} className="text-primary/40" />
        15 hooks ativos em <code className="font-mono text-primary/60">~/.kiro/hooks/</code> — globais em todos os projetos do time
      </motion.p>
    </div>
  )
}
