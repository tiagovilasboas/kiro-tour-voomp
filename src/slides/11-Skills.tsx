import { motion } from 'framer-motion'
import { Zap, GitPullRequest, Search, BookOpen, Compass, Clock, Terminal } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const skills = [
  {
    name: 'incident-triage',
    label: 'Triagem de Incidente',
    icon: Search,
    time: 'Ao receber escalação do N2',
    color: 'text-primary',
    bg: 'bg-primary/15',
    border: 'border-primary/30',
    trigger: '"Preciso triar este incidente: [contexto/logs]"',
    steps: [
      'Classifica severidade P1–P4 com critérios reais da Voomp',
      'Identifica componentes afetados (PaymentController, webhooks, contratos...)',
      'Verifica Grafana voomp-sustentacao-l3 primeiro: antes de qualquer outra fonte',
      'Levanta 2–3 hipóteses de causa raiz ordenadas por probabilidade',
      'Lista o que ainda falta coletar para confirmar a hipótese',
    ],
  },
  {
    name: 'post-mortem',
    label: 'Gerar Post-Mortem',
    icon: BookOpen,
    time: 'Após incidente significativo',
    color: 'text-warning',
    bg: 'bg-warning/15',
    border: 'border-warning/30',
    trigger: '"Preciso documentar o post-mortem do VSUS-XXX"',
    steps: [
      'Guia a coleta de contexto: janela de impacto, chamados, receita em risco',
      'Gera linha do tempo completa a partir dos dados fornecidos',
      'Documenta causa raiz real (não o sintoma) e por que não detectamos antes',
      'Lista ações corretivas e preventivas com responsável e prazo',
      'Gera markdown pronto para o Confluence: página Post-Mortem N3',
    ],
  },
]

export function Skills() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Skills
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        <span className="text-text font-medium">Steerings sabem. Skills fazem.</span>
        {' '}Uma Skill é um fluxo de trabalho completo que você invoca com uma frase: o agente executa cada passo usando o contexto que os Steerings já carregaram.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {skills.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.name} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className={`glass border p-5 flex flex-col gap-3 ${s.border}`}>
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-2.5 flex-shrink-0 ${s.bg} ${s.color}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${s.color}`}>{s.label}</h3>
                      <code className="text-xs text-text-muted/60 font-mono">{s.name}</code>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 flex-shrink-0 text-xs font-mono px-2.5 py-1 rounded-full ${s.bg} ${s.color}`}>
                    <Clock size={10} />
                    {s.time}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <Terminal size={11} className="text-text-muted/40 flex-shrink-0" />
                  <code className="text-xs text-text-muted/60 font-mono italic">{s.trigger}</code>
                </div>
              </div>

              <ul className="space-y-1.5">
                {s.steps.map((step, si) => (
                  <li key={si} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className={`font-bold flex-shrink-0 text-xs mt-0.5 ${s.color}`}>{si + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-6 text-sm text-text-muted">
        <div className="flex items-center gap-2">
          <Zap size={13} className="text-primary" />
          <span><span className="text-primary font-semibold">Skills</span>: você invoca</span>
        </div>
        <span className="text-text-muted/30">·</span>
        <div className="flex items-center gap-2">
          <Compass size={13} className="text-accent" />
          <span><span className="text-accent font-semibold">Steerings</span>: sempre ativos</span>
        </div>
        <span className="text-text-muted/30">·</span>
        <div className="flex items-center gap-2">
          <GitPullRequest size={13} className="text-success" />
          <span><span className="text-success font-semibold">Hooks</span>: disparam sozinhos</span>
        </div>
      </motion.div>
    </div>
  )
}
