import { motion } from 'framer-motion'
import { FileText, Paintbrush, ListChecks, ArrowRight, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Requirements',
    description: 'O agente levanta e documenta os requisitos com você. User stories, critérios de aceite, restrições.',
    color: 'text-primary',
    bg: 'bg-primary/15',
    border: 'border-primary/30',
  },
  {
    icon: Paintbrush,
    step: '02',
    title: 'Design',
    description: 'Arquitetura, componentes, fluxo de dados. O design técnico emerge dos requisitos, não do improviso.',
    color: 'text-accent',
    bg: 'bg-accent/15',
    border: 'border-accent/30',
  },
  {
    icon: ListChecks,
    step: '03',
    title: 'Tasks',
    description: 'Lista de tarefas executáveis com dependências. Cada task tem contexto suficiente pra ser implementada.',
    color: 'text-success',
    bg: 'bg-success/15',
    border: 'border-success/30',
  },
]

export function SpecDriven() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-6">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-3">
        <Sparkles size={28} className="text-primary" />
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">
          Spec Driven Development
        </h2>
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Antes de codar, o Kiro ajuda a pensar. O fluxo de specs transforma uma ideia vaga
        em um plano executável — com rastreabilidade do requisito até a implementação.
      </motion.p>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-6xl">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.title} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center gap-3 flex-1 w-full">
              <div className={`glass ${s.border} p-5 flex flex-col gap-3 flex-1`}>
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl p-2.5 ${s.bg} ${s.color} flex-shrink-0`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className={`text-xs font-mono font-bold ${s.color}`}>FASE {s.step}</span>
                    <h3 className={`font-bold text-lg ${s.color}`}>{s.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={20} className="text-text-muted/30 flex-shrink-0 hidden md:block" />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Bottom insight */}
      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
        className="glass-accent p-4 w-full max-w-6xl flex items-start gap-3">
        <Sparkles size={18} className="text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-text-muted leading-relaxed">
          <span className="text-text font-semibold">No contexto do N3:</span>{' '}
          quando você abre uma task VSUS no Kiro e usa o fluxo de spec, o agente cria requirements, design e tasks
          já com o contexto do <code className="text-primary font-mono text-xs">contexto-projeto.md</code>,{' '}
          <code className="text-primary font-mono text-xs">jira-sustentacao.md</code> e{' '}
          <code className="text-primary font-mono text-xs">boas-praticas-codigo.md</code> carregados —
          sem você precisar explicar a stack, as tabelas ou o formato de Causa Raiz. Qualquer dev do time pode continuar de onde outro parou.
        </p>
      </motion.div>
    </div>
  )
}
