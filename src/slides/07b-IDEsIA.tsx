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
    purpose: 'Multi-file editing com Composer Mode, autocomplete preditivo e subagents. 200k context window, model routing flexível. $29B valuation, referência de adoção em times de alta performance.',
    focus: 'Velocidade e edição inline',
    bestFor: 'Dev que quer o editor mais rápido com IA no centro',
    segment: 'Startups · Scale-ups · Fintechs · Dev individual',
    color: 'text-sky-400',
    border: 'border-sky-400/25',
    bg: 'bg-sky-400/5',
  },
  {
    name: 'Windsurf',
    url: 'https://windsurf.com',
    maker: 'OpenAI (ex-Codeium) · VS Code fork',
    label: 'The first agentic IDE',
    purpose: 'Engine Cascade executa tarefas multi-step em sequência: criar, refatorar, rodar terminal. Governança enterprise, model routing entre Claude, GPT e Gemini.',
    focus: 'Agente multi-step + enterprise',
    bestFor: 'Times que precisam de Cursor-like com governança e custo menor',
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
    purpose: 'Agente terminal-native com suporte a subagents (multi-agent). Executa ciclos completos via CLI, integra VS Code e JetBrains, GitHub Actions para tarefas em background.',
    focus: 'Autonomia total + multi-agent',
    bestFor: 'Dev que quer ciclos completos e orquestração de agentes',
    segment: 'DevOps · SRE · Arquitetura · Refactors legados',
    color: 'text-amber-400',
    border: 'border-amber-400/25',
    bg: 'bg-amber-400/5',
  },
  {
    name: 'GitHub Copilot',
    url: 'https://github.com/features/copilot',
    maker: 'GitHub / Microsoft · extensão VS Code',
    label: 'Your AI pair programmer',
    purpose: 'Extensão integrada ao ecossistema GitHub. Autocomplete, chat, Agent Mode e code review no PR. 20M+ usuários, $2B ARR. Domina enterprise por integração nativa com Actions, Issues e repos.',
    focus: 'Integração GitHub + enterprise',
    bestFor: 'Times no ecossistema Microsoft que não querem trocar de editor',
    segment: 'Bancos · Seguradoras · Governo · Enterprise regulated',
    color: 'text-white/70',
    border: 'border-white/15',
    bg: 'bg-white/5',
  },
  {
    name: 'Kiro',
    url: 'https://kiro.dev',
    maker: 'Amazon / AWS · VS Code fork',
    label: 'Engineering rigor for agentic dev',
    purpose: 'Spec Driven Development: Requirements → Design → Tasks antes de escrever código. Steerings, Skills e Hooks formam um sistema. Da "vibe coding" ao código que pode ser mantido em produção.',
    focus: 'Rigor de engenharia',
    bestFor: 'Dev que quer planejar antes de codar e automatizar fluxos',
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
            <div className="flex flex-col gap-1">
              <span className={`text-base font-bold ${ide.color}`}>{ide.name}</span>
              <span className="text-xs text-text-muted/50">{ide.maker}</span>
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <span className={`text-sm font-bold ${ide.color}`}>
                Propósito: {ide.label}
              </span>
              <p className="text-xs text-text-muted leading-relaxed">{ide.purpose}</p>
            </div>
            <div className="flex flex-col gap-1.5 mt-auto">
              <span className={`text-xs font-mono font-semibold ${ide.color} ${ide.bg} px-2 py-0.5 rounded w-fit`}>
                {ide.focus}
              </span>
              <p className={`text-sm ${ide.color} opacity-70 leading-tight`}>{ide.bestFor}</p>
              <p className="text-xs text-text-muted/40 leading-tight border-t border-white/5 pt-1.5">
                🏢 {ide.segment}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

    </div>
  )
}
