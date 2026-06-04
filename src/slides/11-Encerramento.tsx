import { motion } from 'framer-motion'
import { CheckCircle, Rocket, ExternalLink, BookOpen } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const topics = [
  'LLMs, Tokens e Context Window',
  'Steerings — instruções persistentes para o agente',
  'Skills — capacidades ativadas sob demanda',
  'Agent Hooks — automações baseadas em eventos do IDE',
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
          className="glass-accent p-5 mb-5"
        >
          <div className="flex items-center gap-2 mb-3">
            <Rocket size={18} className="text-primary" />
            <p className="font-semibold text-text text-sm">Agora é prática — essa semana</p>
          </div>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-primary font-bold flex-shrink-0">1.</span>
              <span>Abra o <code className="text-primary font-mono text-xs">.kiro/steering/</code> do seller-greenn-back e leia os steerings do time — entenda o que o Kiro já sabe sobre o projeto.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-primary font-bold flex-shrink-0">2.</span>
              <span>Na próxima task VSUS, deixe o hook <code className="text-primary font-mono text-xs">jira-close-task</code> preencher a Causa Raiz e registrar as horas — meça quanto tempo economizou.</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <span className="text-primary font-bold flex-shrink-0">3.</span>
              <span>Identifique algo que você repete toda vez no chat e transforme em um Steering. É um arquivo Markdown — não tem mistério.</span>
            </li>
          </ul>
        </motion.div>

        {/* Docs link */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex justify-center">
          <a
            href="https://kiro.dev/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-5 py-2.5 text-sm text-primary hover:text-primary-light transition-colors"
          >
            <BookOpen size={16} />
            Documentação oficial do Kiro
            <ExternalLink size={12} className="text-text-muted" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
