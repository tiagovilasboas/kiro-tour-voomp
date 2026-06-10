import { motion } from 'framer-motion'
import { TrendingDown, ExternalLink, DollarSign, Ban, Gauge, Flame } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const events = [
  {
    icon: Ban,
    company: 'Microsoft',
    what: 'Cancelou licenças do Claude Code internamente. Moveu devs para o Copilot CLI.',
    color: 'text-danger',
    bg: 'bg-danger/10',
    border: 'border-danger/25',
    url: 'https://www.windowscentral.com/microsoft/microsoft-cancels-claude-code-licenses-shifting-developers-to-github-copilot-cli-a-move-likely-driven-by-financial-motives',
  },
  {
    icon: DollarSign,
    company: 'Uber',
    what: 'Cap de $1.500/dev por mês em ferramentas de IA. "Too expensive."',
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/25',
    url: 'https://www.indiatoday.in/technology/news/story/ai-too-expensive-uber-restricts-employees-from-using-tools-like-claude-puts-hard-limit-of-1500-2921144-2026-06-03',
  },
  {
    icon: Gauge,
    company: 'Cloudflare',
    what: 'Limites de gasto obrigatórios para APIs de IA em produção.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25',
    url: 'https://developers.cloudflare.com/changelog/post/2026-06-05-spend-limits/',
  },
  {
    icon: Flame,
    company: 'Tokenmaxxing',
    what: 'Agentes em loop consumindo milhares de dólares por task sem resultado útil.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/25',
    url: 'https://www.truefoundry.com/blog/tokenmaxxing-ai-cost-governance',
  },
]

export function Rollback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-danger/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-5">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="text-center">
          <div className="flex items-center gap-3 justify-center mb-2">
            <TrendingDown size={24} className="text-danger" />
            <h2 className="text-2xl md:text-4xl font-bold gradient-text">O Rollback da IA</h2>
          </div>
          <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto">
            O subsídio bilionário que maquiava o custo secou.
            <span className="text-danger font-medium"> A fatura do hype chegou. Junho de 2026.</span>
          </p>
        </motion.div>

        {/* Event cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {events.map((e, i) => {
            const Icon = e.icon
            return (
              <motion.a
                key={e.company}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`glass border p-4 flex flex-col gap-3 ${e.border} hover:opacity-80 transition-opacity cursor-pointer`}
              >
                <div className="flex items-center gap-2">
                  <div className={`rounded-lg p-2 ${e.bg} ${e.color}`}>
                    <Icon size={16} />
                  </div>
                  <span className={`text-sm font-bold ${e.color}`}>{e.company}</span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed flex-1">{e.what}</p>
                <div className="flex items-center gap-1 mt-auto">
                  <ExternalLink size={10} className="text-text-muted/30" />
                  <span className="text-[10px] text-text-muted/30 font-mono">fonte</span>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Takeaway */}
        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="glass-accent p-5 text-center">
          <p className="text-sm text-text-muted leading-relaxed max-w-3xl mx-auto">
            <span className="text-text font-semibold">Cada token desperdiçado é dinheiro perdido.</span>{' '}
            Steerings e automações não são luxo: são{' '}
            <span className="text-primary font-medium">eficiência obrigatória</span>.
            Quem usa sem intenção gasta tokens em loop. Quem usa com intenção, gasta menos e tem resultado melhor.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
