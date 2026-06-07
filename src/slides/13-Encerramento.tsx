import { motion } from 'framer-motion'
import { CheckCircle, Rocket } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const topics = [
  'Evolução da IA: 70 anos em 3 momentos',
  'LLMs: como funcionam por dentro (tokens, atenção, predição)',
  'Embeddings: distância semântica e por que Steerings ancoram o modelo',
  'Context Window: memória limitada e injeção eficiente de contexto',
  'A Ilusão do Pensamento: pattern matching, não raciocínio (Apple Research)',
  'Spec Driven Development: Requirements → Design → Tasks',
  'Steerings: contexto persistente que âncora o modelo no seu domínio',
  'Skills: incident-triage e post-mortem, fluxos completos num comando',
  'Agent Hooks: automações por evento: instalados, opcionais e prompts',
]

export function Encerramento() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <motion.h2
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl font-bold gradient-text text-center mb-10"
        >
          O que vimos hoje
        </motion.h2>

        {/* Topics */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="glass p-6 mb-6"
        >
          <ul className="space-y-3">
            {topics.map(t => (
              <li key={t} className="flex items-center gap-3 text-sm md:text-base text-text">
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="glass-accent p-6 mb-5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Rocket size={18} className="text-primary" />
            <p className="font-semibold text-text text-sm">Uma coisa pra fazer essa semana</p>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            Cole o prompt do próximo slide no Kiro com{' '}
            <code className="text-primary font-mono text-xs">Claude Sonnet 4.6</code>.
            Responda as 3 perguntas. Deixe ele consultar o Jira e Confluence.
            Revise o plano. Implemente <span className="text-text font-medium">uma</span> automação.
          </p>
          <p className="text-xs text-text-muted/50 mt-3 italic">
            Não é um repo pra instalar. São automações que emergem do seu contexto. Ownership imediata.
          </p>
        </motion.div>

        {/* Docs link */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex justify-center">
          <p className="text-sm text-text-muted/60 text-center">
            A seguir: copie o prompt e descubra seus próprios superpoderes →
          </p>
        </motion.div>
      </div>
    </div>
  )
}
