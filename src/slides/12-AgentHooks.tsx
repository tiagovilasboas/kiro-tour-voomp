import { motion } from 'framer-motion'
import { Webhook, Terminal, Shield, FileText, Search, GitPullRequest, Radio, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const eventTypes = [
  { name: 'fileEdited',       desc: 'arquivo salvo' },
  { name: 'preToolUse',       desc: 'antes de agir' },
  { name: 'postToolUse',      desc: 'após agir' },
  { name: 'preTaskExecution', desc: 'antes de task' },
  { name: 'userTriggered',    desc: 'manual' },
]

const hookGroups = [
  {
    category: 'Disparam ao salvar arquivo',
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/20',
    hooks: [
      {
        icon: Terminal,
        name: 'php-lint-on-save',
        trigger: 'fileEdited · *.php',
        desc: 'Roda php -l ao salvar. Erro de sintaxe antes do commit, não depois do push.',
      },
      {
        icon: Shield,
        name: 'payment-code-review',
        trigger: 'fileEdited · *Payment*.php',
        desc: 'Detecta exception engolida, Http::post sem timeout, Sale::create sem DB::transaction.',
      },
    ],
  },
  {
    category: 'Disparam por evento de task',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
    hooks: [
      {
        icon: FileText,
        name: 'jira-task-start',
        trigger: 'preTaskExecution',
        desc: 'Ao iniciar uma task: checa se tem subtask de análise, valida descrição, cria subtask de horas.',
      },
      {
        icon: Search,
        name: 'post-execution-review',
        trigger: 'postTaskExecution',
        desc: 'Ao finalizar: revisa o código gerado contra as boas práticas do time antes de commitar.',
      },
    ],
  },
  {
    category: 'Invocados manualmente',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/20',
    hooks: [
      {
        icon: Shield,
        name: 'jira-close-task',
        trigger: 'userTriggered',
        desc: 'Causa Raiz + Resolução no formato N3, horas na subtask certa, move status.',
      },
      {
        icon: GitPullRequest,
        name: 'generate-pr-description',
        trigger: 'userTriggered',
        desc: 'Gera descrição de PR no padrão do time: resumo, arquivos, link VSUS, testes.',
      },
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
        Automações que disparam <span className="text-primary font-semibold">sem você pedir</span>, baseadas em eventos do IDE.
        O agente age no momento certo, com o contexto certo.
      </motion.p>

      {/* Event types */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="flex flex-wrap justify-center gap-2">
        {eventTypes.map(e => (
          <span key={e.name}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/20">
            <Radio size={10} />
            {e.name}
            <span className="text-primary/50">· {e.desc}</span>
          </span>
        ))}
      </motion.div>

      {/* Hook groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-6xl">
        {hookGroups.map((group, gi) => (
          <motion.div key={group.category} custom={gi + 3} variants={fadeUp} initial="hidden" animate="visible"
            className={`glass border p-5 flex flex-col gap-4 ${group.border}`}>
            <span className={`text-xs font-bold uppercase tracking-wider ${group.color}`}>
              {group.category}
            </span>
            <div className="space-y-4">
              {group.hooks.map(h => {
                const Icon = h.icon
                return (
                  <div key={h.name} className="flex items-start gap-3">
                    <div className={`rounded-lg p-2 flex-shrink-0 mt-0.5 ${group.bg} ${group.color}`}>
                      <Icon size={14} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <code className={`text-sm font-mono font-bold ${group.color}`}>{h.name}</code>
                      <span className="text-xs text-text-muted/50 font-mono">{h.trigger}</span>
                      <p className="text-sm text-text-muted leading-snug mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p custom={7} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm text-text-muted/50 text-center flex items-center gap-1.5">
        <Zap size={13} className="text-primary/40" />
        Hooks são JSON em <code className="font-mono text-primary/60 text-xs">~/.kiro/hooks/</code>
        {' '}· globais em todos os projetos · o prompt do hands-on pode criar os seus
      </motion.p>
    </div>
  )
}
