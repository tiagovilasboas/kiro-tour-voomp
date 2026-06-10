import { motion } from 'framer-motion'
import { Globe, Brain, Shield, Lock, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const advanced = [
  {
    question: 'Onde agir?',
    answer: 'Integrações',
    icon: Globe,
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/25',
    items: [
      'MCP: Jira, Azure DevOps, Grafana, MySQL',
      'APIs: o agente operando fora do código, no ecossistema',
    ],
  },
  {
    question: 'Com que plugins?',
    answer: 'Powers',
    icon: Zap,
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/25',
    items: [
      'Plugins especializados: Context7, Datadog, docs',
      'Fluxos completos ativados sob demanda',
    ],
  },
  {
    question: 'Com que contexto?',
    answer: 'Context Engineering',
    icon: Brain,
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/25',
    items: [
      'RAG: antes de responder, o agente busca documentos relevantes em tempo real. Perguntou sobre um incidente? Ele já leu os logs.',
      'Memória entre sessões: lembra do que você fez ontem. Não precisa repetir o contexto.',
      'Domínio da empresa: o modelo passa a falar Voomp por padrão, com vocabulário e regras de negócio do time.',
    ],
  },
  {
    question: 'Como controlar?',
    answer: 'Governança',
    icon: Shield,
    color: 'text-danger',
    bg: 'bg-danger/10',
    border: 'border-danger/25',
    items: [
      'Evals: medir se o agente está respondendo bem',
      'Guardrails: hooks que bloqueiam ações inseguras',
      'Auditoria: rastreabilidade de tudo que o agente fez',
    ],
  },
]

export function KiroAvancado() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-3">
        <Lock size={22} className="text-text-muted/40" />
        <h2 className="text-3xl md:text-5xl font-bold text-text-muted/70 text-center">
          Kiro Avançado
        </h2>
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl leading-relaxed">
        Existem mais 3 camadas no sistema: <span className="text-text font-medium">não vamos cobrir hoje</span>.
        {' '}Estão mapeadas para as próximas sessões. Mostro aqui para vocês saberem que existe
        {' '}e o que esperar quando chegarmos lá.
      </motion.p>

      {/* 3 advanced pillars */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full max-w-6xl">
        {advanced.map((a, i) => {
          const Icon = a.icon
          return (
            <motion.div key={a.answer} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className={`glass border p-5 flex flex-col gap-4 ${a.border}`}>
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2.5 ${a.bg} ${a.color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${a.color}`}>{a.question}</p>
                  <p className="text-lg font-bold text-text">{a.answer}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {a.items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed">
                    <span className={`text-xs mt-0.5 flex-shrink-0 ${a.color}`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      {/* Disclaimer */}
      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
        className="glass-accent p-4 w-full max-w-4xl text-center">
        <p className="text-sm text-text-muted leading-relaxed">
          <span className="text-primary font-semibold">Primeiro o básico bem feito</span>: Specs, Steerings, Skills e Hooks.
          {' '}Quando o time dominar isso, as camadas avançadas se encaixam naturalmente.
          {' '}Cada sessão futura é independente e prática.
        </p>
      </motion.div>
    </div>
  )
}
