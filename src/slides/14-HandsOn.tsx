import { motion } from 'framer-motion'
import { Terminal, GitFork, ExternalLink, Zap, BookOpen, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const steps = [
  {
    cmd: 'git clone https://github.com/tiagovilasboas/kiro-playbook.git',
    label: 'Clone o repositório',
  },
  {
    cmd: 'cd kiro-playbook',
    label: 'Entre no diretório',
  },
  {
    cmd: 'node bin/install.mjs',
    label: 'Instale — o que já existe na sua máquina é preservado',
  },
]

const includes = [
  { icon: '📄', label: '7 steerings', desc: 'Contexto do time N3 — stack, Jira, ambientes, pagamentos' },
  { icon: '⚡', label: '2 skills', desc: 'incident-triage (P1–P4) e post-mortem — prontos para usar no Confluence' },
  { icon: '🔁', label: '2 hooks', desc: 'php-lint-on-save + scaffold-teste — disparam sem configuração extra' },
  { icon: '💬', label: '7 prompts', desc: 'close-task, deliver-story, generate-pr, war-room-status e mais — cole no chat' },
]

export function HandsOn() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-5">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <Zap size={26} className="text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Hands-on</h2>
          </div>
          <p className="text-text-muted text-base max-w-xl">
            Um repositório com os artefatos reais do time N3 — ponto de partida para você criar os seus próprios superpoderes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Install steps */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="glass border border-accent/25 p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Terminal size={15} className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">3 comandos para começar</span>
            </div>
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-xs text-text-muted">{s.label}</span>
                  <code className="text-xs font-mono bg-surface-2 text-primary px-3 py-2 rounded break-all leading-relaxed">
                    {s.cmd}
                  </code>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-text-muted border-t border-border pt-3 mt-auto">
              <ArrowRight size={12} className="text-accent flex-shrink-0" />
              <span>Flags disponíveis: <code className="text-accent font-mono">--update</code> · <code className="text-accent font-mono">--dry-run</code> · <code className="text-accent font-mono">--target=workspace</code></span>
            </div>
          </motion.div>

          {/* What's included */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="glass border border-primary/20 p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <BookOpen size={15} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">O que vem dentro</span>
            </div>
            <div className="space-y-3">
              {includes.map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <span className="text-sm font-semibold text-text">{item.label}</span>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Repo link */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-3">
          <a
            href="https://github.com/tiagovilasboas/kiro-playbook"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-accent px-6 py-3 text-sm font-semibold text-primary hover:text-primary-light transition-colors"
          >
            <GitFork size={16} />
            github.com/tiagovilasboas/kiro-playbook
            <ExternalLink size={12} className="text-text-muted" />
          </a>
          <p className="text-xs text-text-muted text-center max-w-md">
            Não é uma receita pronta — é um ponto de partida. Os artefatos mais valiosos são os que você vai criar a partir daqui.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
