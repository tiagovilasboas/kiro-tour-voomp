import { motion } from 'framer-motion'
import { Compass, Zap, Webhook, FileEdit, Terminal, Code2 } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const features = [
  {
    name: 'Steerings',
    icon: Compass,
    definition: 'Arquivos de instrução persistentes que guiam o comportamento do agente em todo o projeto.',
  },
  {
    name: 'Skills',
    icon: Zap,
    definition: 'Capacidades especializadas ativadas sob demanda para fluxos de trabalho específicos.',
  },
  {
    name: 'Agent Hooks',
    icon: Webhook,
    definition: 'Automações que disparam ações do agente em resposta a eventos do IDE.',
  },
]

const diffs = [
  { icon: FileEdit, text: 'Edita arquivos diretamente no projeto' },
  { icon: Terminal, text: 'Executa comandos no terminal integrado' },
  { icon: Code2, text: 'Integração nativa com VS Code' },
]

export function IntroKiro() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <motion.h2
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center mb-4"
      >
        Conheça o Kiro
      </motion.h2>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-5xl mb-8"
      >
        Um ambiente de desenvolvimento assistido por IA — não apenas um chat como o ChatGPT.
      </motion.p>

      {/* Differentiators */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="glass p-5 w-full max-w-6xl mb-6"
      >
        <p className="text-xs text-text-muted uppercase tracking-wider mb-4">Além do chat</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {diffs.map(d => {
            const Icon = d.icon
            return (
              <div key={d.text} className="flex items-center gap-3">
                <div className="rounded-lg p-2 bg-primary/15 text-primary flex-shrink-0">
                  <Icon size={18} />
                </div>
                <span className="text-sm text-text">{d.text}</span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <motion.div
              key={f.name}
              custom={i + 3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass p-5 flex flex-col items-center text-center gap-3"
            >
              <div className="rounded-xl p-3 bg-primary/20 text-primary">
                <Icon size={26} />
              </div>
              <h3 className="font-bold text-text text-base">{f.name}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{f.definition}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
