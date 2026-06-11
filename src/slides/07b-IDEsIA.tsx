import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const ides = [
  {
    name: 'Cursor',
    url: 'https://cursor.com',
    maker: 'Anysphere · VS Code fork',
    label: 'The best coding agent',
    purpose: 'Nasceu para ser o editor mais rápido com IA no centro. Multi-file editing, autocomplete preditivo e Composer Mode. Propósito: eliminar o atrito entre ideia e código.',
    focus: 'Velocidade e edição inline',
    bestFor: 'Dev que quer o editor mais rápido com IA nativa',
    segment: 'Startups · Scale-ups · Dev individual',
    color: 'text-sky-400',
    border: 'border-sky-400/25',
    bg: 'bg-sky-400/5',
  },
  {
    name: 'Windsurf',
    url: 'https://windsurf.com',
    maker: 'OpenAI (ex-Codeium) · VS Code fork',
    label: 'The first agentic IDE',
    purpose: 'Nasceu para times enterprise que precisam de Cursor-like com governança. Engine Cascade executa tarefas multi-step em sequência. Propósito: agente com rastreabilidade corporativa.',
    focus: 'Agente multi-step + enterprise',
    bestFor: 'Times com necessidade de controle e governança',
    segment: 'Enterprise · Consultoras · Squads grandes',
    color: 'text-emerald-400',
    border: 'border-emerald-400/25',
    bg: 'bg-emerald-400/5',
  },
  {
    name: 'Claude Code',
    url: 'https://claude.ai/code',
    maker: 'Anthropic · CLI + IDE integration',
    label: 'Agentic coding tool',
    purpose: 'Nasceu para devs que vivem no terminal. Agente CLI com subagents nativos. Propósito: orquestrar ciclos completos de código via linha de comando, sem precisar de IDE.',
    focus: 'Autonomia total + multi-agent',
    bestFor: 'Dev que prefere CLI e quer orquestrar agentes',
    segment: 'DevOps · SRE · Arquitetura · Refactors',
    color: 'text-amber-400',
    border: 'border-amber-400/25',
    bg: 'bg-amber-400/5',
  },
  {
    name: 'GitHub Copilot',
    url: 'https://github.com/features/copilot',
    maker: 'GitHub / Microsoft · extensão VS Code',
    label: 'Your AI pair programmer',
    purpose: 'Nasceu dentro do ecossistema GitHub. Não é um fork: é uma extensão. Propósito: trazer IA para quem não quer trocar de editor nem de workflow. 20M+ usuários, $2B ARR.',
    focus: 'Integração GitHub + enterprise',
    bestFor: 'Times no ecossistema Microsoft sem trocar de editor',
    segment: 'Bancos · Governo · Enterprise regulated',
    color: 'text-white/70',
    border: 'border-white/15',
    bg: 'bg-white/5',
  },
  {
    name: 'Kiro',
    url: 'https://kiro.dev',
    maker: 'Amazon / AWS · VS Code fork',
    label: 'Engineering rigor for agentic dev',
    purpose: 'Nasceu para resolver o problema que vimos: loops, falta de contexto, código que não escala. Spec Driven + Steerings + Skills + Hooks. Propósito: da vibe coding ao código mantível em produção.',
    focus: 'Rigor de engenharia',
    bestFor: 'Dev que quer planejar, contextualizar e automatizar',
    segment: 'Squads de produto · Sustentação · Times com rastreabilidade',
    color: 'text-primary',
    border: 'border-primary/30',
    bg: 'bg-primary/5',
    highlight: true,
  },
]

export function IDEsIA() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        IDEs com IA
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-4xl leading-relaxed">
        Não existe bala de prata. Cada IDE foi desenhada com um propósito:
        entender isso evita comparações erradas e frustração com expectativas desalinhadas.
      </motion.p>

      {/* IDE cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full max-w-6xl">
        {ides.map((ide, i) => (
          <motion.a
            key={ide.name}
            href={ide.url}
            target="_blank"
            rel="noopener noreferrer"
            custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
            className={`glass border p-4 flex flex-col gap-3 ${ide.border} ${ide.highlight ? 'ring-1 ring-primary/30' : ''} hover:opacity-90 transition-opacity cursor-pointer`}>

            {/* Header: nome + maker */}
            <div className="flex flex-col gap-0.5">
              <span className={`text-base font-bold ${ide.color}`}>{ide.name}</span>
              <span className="text-[10px] text-text-muted/40 leading-tight">{ide.maker}</span>
            </div>

            {/* Tagline oficial */}
            <span className={`text-xs font-mono italic ${ide.color} opacity-70`}>"{ide.label}"</span>

            {/* Propósito: o que essa IDE foi desenhada pra resolver */}
            <div className={`rounded-lg px-2.5 py-2 ${ide.bg} border ${ide.border} flex-1`}>
              <p className="text-xs text-text-muted leading-relaxed">{ide.purpose}</p>
            </div>

            {/* Para quem é: a frase mais prática */}
            <div className="flex flex-col gap-1 mt-auto">
              <span className={`text-xs font-mono font-semibold ${ide.color} bg-white/5 px-2 py-0.5 rounded w-fit`}>
                {ide.focus}
              </span>
              <p className={`text-xs font-medium ${ide.color} leading-tight`}>{ide.bestFor}</p>
              <p className="text-[10px] text-text-muted/35 leading-tight pt-1 border-t border-white/5">
                {ide.segment}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  )
}
