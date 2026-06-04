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

const diffs = [
  { icon: FileEdit, text: 'Edita arquivos diretamente no projeto' },
  { icon: Terminal, text: 'Executa comandos no terminal integrado' },
  { icon: Code2, text: 'Integração nativa com VS Code' },
]

const superpowers = [
  {
    icon: Compass,
    name: 'Steerings',
    tag: 'sempre ativo',
    tagColor: 'text-accent bg-accent/10 border-accent/20',
    definition: 'Arquivos Markdown em .kiro/steering/ que definem contexto persistente. O agente sabe sobre o projeto antes de você digitar a primeira palavra.',
    color: 'text-accent',
    bg: 'bg-accent/15',
    border: 'border-accent/30',
  },
  {
    icon: Zap,
    name: 'Skills',
    tag: 'sob demanda',
    tagColor: 'text-primary bg-primary/10 border-primary/20',
    definition: 'Capacidades especializadas que você invoca explicitamente. Entregar história, criar PR, revisão de código — fluxos completos num comando.',
    color: 'text-primary',
    bg: 'bg-primary/15',
    border: 'border-primary/30',
  },
  {
    icon: Webhook,
    name: 'Agent Hooks',
    tag: 'automático',
    tagColor: 'text-success bg-success/10 border-success/20',
    definition: 'Automações que disparam sem você pedir. Salvar um .php roda o lint. Iniciar uma task checa o Jira. Fechar uma task preenche Causa Raiz.',
    color: 'text-success',
    bg: 'bg-success/15',
    border: 'border-success/30',
  },
]

export function IntroKiro() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Kiro & Seus Superpoderes
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Não é um chatbot. É um agente que age no seu ambiente — e tem três superpoderes
        que mudam completamente como você trabalha.
      </motion.p>

      {/* Beyond chat */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="glass p-4 w-full max-w-6xl">
        <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Além do chat (ChatGPT)</p>
        <div className="grid grid-cols-3 gap-4">
          {diffs.map(d => {
            const Icon = d.icon
            return (
              <div key={d.text} className="flex items-center gap-3">
                <div className="rounded-lg p-2 bg-primary/15 text-primary flex-shrink-0">
                  <Icon size={16} />
                </div>
                <span className="text-sm text-text">{d.text}</span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Superpowers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {superpowers.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.name} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className={`glass ${s.border} p-5 flex flex-col gap-3`}>
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-2.5 ${s.bg} ${s.color}`}>
                  <Icon size={22} />
                </div>
                <span className={`text-xs font-mono px-2 py-1 rounded-full border ${s.tagColor}`}>
                  {s.tag}
                </span>
              </div>
              <h3 className={`font-bold text-lg ${s.color}`}>{s.name}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{s.definition}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
