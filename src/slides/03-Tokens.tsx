import { motion } from 'framer-motion'
import { DollarSign, ArrowDownUp, Lightbulb } from 'lucide-react'

const TOKENS = [
  { text: 'Intelig', color: 'bg-primary/80 border-primary/50' },
  { text: 'ência', color: 'bg-violet-500/80 border-violet-400/50' },
  { text: ' Artif', color: 'bg-fuchsia-500/80 border-fuchsia-400/50' },
  { text: 'icial', color: 'bg-sky-500/80 border-sky-400/50' },
  { text: ' transform', color: 'bg-emerald-500/80 border-emerald-400/50' },
  { text: 'a', color: 'bg-amber-500/80 border-amber-400/50' },
  { text: ' o', color: 'bg-rose-500/80 border-rose-400/50' },
  { text: ' mundo', color: 'bg-primary/80 border-primary/50' },
]

const billing = [
  {
    icon: ArrowDownUp,
    label: 'Input + Output',
    desc: 'Você paga pelos tokens enviados (seu texto + contexto) e pelos tokens gerados (resposta). Ambos contam.',
    color: 'text-primary',
    bg: 'bg-primary/15',
  },
  {
    icon: DollarSign,
    label: 'Preço por milhão',
    desc: 'Claude Sonnet 4.6: ~$3 / 1M tokens de entrada · ~$15 / 1M de saída. Uma conversa longa com código = ~100k tokens.',
    color: 'text-success',
    bg: 'bg-success/15',
  },
  {
    icon: Lightbulb,
    label: 'Por que Steerings importam',
    desc: 'Um Steering conciso de 200 tokens substitui você repetir contexto em cada mensagem. Menos tokens = resposta mais rápida e mais barata.',
    color: 'text-warning',
    bg: 'bg-warning/15',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const tokenPop = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5 + i * 0.07, type: 'spring' as const, stiffness: 400, damping: 20 },
  }),
}

export function Tokens() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-6">
      <motion.h2
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center"
      >
        O que é um Token?
      </motion.h2>

      <motion.p
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-5xl leading-relaxed"
      >
        O modelo divide texto em pedaços menores chamados{' '}
        <span className="text-primary font-semibold">tokens</span> antes de processar.
        Tokens são também a <span className="text-warning font-semibold">unidade de cobrança</span> de todos os LLMs.
      </motion.p>

      {/* Tokenization example */}
      <motion.div
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="glass p-5 w-full max-w-5xl"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-text-muted font-mono">"Inteligência Artificial transforma o mundo"</p>
          <span className="text-xs text-text-muted/50">→ {TOKENS.length} tokens</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {TOKENS.map((token, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={tokenPop}
              initial="hidden"
              animate="visible"
              className={`px-3 py-1.5 rounded-full border text-sm font-mono font-medium text-white ${token.color}`}
            >
              {token.text.replace(/ /g, '␣')}
            </motion.span>
          ))}
        </div>
        <p className="text-[10px] text-text-muted/40 text-center mt-3">
          ␣ = espaço · ~¾ de palavra por token em inglês · menos eficiente em português
        </p>
      </motion.div>

      {/* Billing disclaimer */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl"
      >
        <p className="text-xs text-text-muted/60 uppercase tracking-wider mb-3 text-center">
          Como funciona o billing dos modelos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {billing.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="glass p-4 flex flex-col gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.bg} ${item.color}`}>
                  <Icon size={16} />
                </div>
                <p className={`text-sm font-semibold ${item.color}`}>{item.label}</p>
                <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Protocol disclaimer */}
      <motion.p
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-xs text-text-muted/40 text-center max-w-3xl font-mono"
      >
        Protocolo: texto → tokens → JSON via HTTPS para a API · resposta chega como stream (Server-Sent Events) · é por isso que a resposta aparece palavra a palavra
      </motion.p>
    </div>
  )
}
