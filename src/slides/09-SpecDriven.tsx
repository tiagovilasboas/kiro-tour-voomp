import { motion } from 'framer-motion'
import { FileText, Paintbrush, ListChecks, ArrowRight, Sparkles, Bug, Wrench, ShieldCheck } from 'lucide-react'

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
    description: 'Levanta requisitos, restrições e critérios de aceite com o agente.',
    color: 'text-primary',
    bg: 'bg-primary/15',
    border: 'border-primary/30',
  },
  {
    icon: Paintbrush,
    step: '02',
    title: 'Design',
    description: 'Arquitetura e fluxo de dados: decisões técnicas antes de codar.',
    color: 'text-accent',
    bg: 'bg-accent/15',
    border: 'border-accent/30',
  },
  {
    icon: ListChecks,
    step: '03',
    title: 'Tasks',
    description: 'Tarefas executáveis com dependências: cada uma com contexto completo.',
    color: 'text-success',
    bg: 'bg-success/15',
    border: 'border-success/30',
  },
]

const whenToUse = [
  {
    icon: Bug,
    scenario: 'Bug complexo com múltiplos fluxos afetados',
    example: 'VSUS-701: push notification falhando silenciosamente em 3 cenários diferentes',
    color: 'text-danger',
  },
  {
    icon: Wrench,
    scenario: 'Melhoria que toca vários arquivos/tabelas',
    example: 'Adicionar idempotência no upsell: afeta middleware, controller, testes',
    color: 'text-warning',
  },
  {
    icon: ShieldCheck,
    scenario: 'Fix que precisa de rastreabilidade e clareza pra QA',
    example: 'Alteração em gateway de pagamento onde QA precisa saber exatamente o que testar',
    color: 'text-success',
  },
]

export function SpecDriven() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-3">
        <Sparkles size={26} className="text-primary" />
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">
          Spec Driven Development
        </h2>
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Antes de codar, o Kiro ajuda a pensar. O fluxo transforma uma task vaga
        em um plano executável, com contexto dos Steerings já carregado.
      </motion.p>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-6xl">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.title} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center gap-3 flex-1 w-full">
              <div className={`glass ${s.border} p-4 flex flex-col gap-2 flex-1`}>
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl p-2 ${s.bg} ${s.color} flex-shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono font-bold ${s.color}`}>FASE {s.step}</span>
                    <h3 className={`font-bold text-base ${s.color}`}>{s.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{s.description}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={18} className="text-text-muted/30 flex-shrink-0 hidden md:block" />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* When to use */}
      <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
        className="glass p-4 w-full max-w-6xl">
        <p className="text-xs text-text-muted/60 uppercase tracking-wider font-mono mb-3">Quando usar no dia a dia do N3?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {whenToUse.map(w => {
            const Icon = w.icon
            return (
              <div key={w.scenario} className="flex items-start gap-2">
                <Icon size={14} className={`${w.color} flex-shrink-0 mt-0.5`} />
                <div>
                  <p className="text-sm font-semibold text-text">{w.scenario}</p>
                  <p className="text-sm text-text-muted mt-0.5 leading-relaxed italic">{w.example}</p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Context insight */}
      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
        className="glass-accent p-3 w-full max-w-6xl flex items-start gap-2">
        <Sparkles size={14} className="text-primary flex-shrink-0 mt-0.5" />
        <p className="text-sm text-text-muted leading-relaxed">
          Durante uma Spec, tudo trabalha junto:{' '}
          <span className="text-text font-medium">Steerings</span> carregados automaticamente (vocabulário do domínio),{' '}
          <span className="text-text font-medium">Skills</span> invocáveis sob demanda no meio do fluxo,{' '}
          <span className="text-text font-medium">Hooks</span> disparando por evento (lint, tests) a cada arquivo gerado.
        </p>
      </motion.div>
    </div>
  )
}
