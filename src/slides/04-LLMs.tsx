import { motion } from 'framer-motion'
import { MessageSquare, ArrowRight, Cpu, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const flow = [
  { icon: MessageSquare, label: 'Texto' },
  { arrow: true },
  { label: 'Tokens', isText: true },
  { arrow: true },
  { icon: Cpu, label: 'Atenção + Predição' },
  { arrow: true },
  { icon: Sparkles, label: 'Resposta' },
]

const models = [
  {
    name: 'GPT-4o',
    maker: 'OpenAI',
    note: 'Base do ChatGPT. Multimodal, rápido, amplamente usado.',
    color: 'border-emerald-500/30 bg-emerald-500/5',
    dot: 'bg-emerald-400',
  },
  {
    name: 'Claude Sonnet',
    maker: 'Anthropic',
    note: 'Modelo padrão do Kiro. Excelente em código e raciocínio.',
    color: 'border-primary/30 bg-primary/5',
    dot: 'bg-primary',
    kiro: true,
  },
  {
    name: 'Gemini 2.0',
    maker: 'Google',
    note: 'Contexto de 1M tokens. Integrado ao ecossistema Google.',
    color: 'border-sky-500/30 bg-sky-500/5',
    dot: 'bg-sky-400',
  },
  {
    name: 'Llama 3',
    maker: 'Meta',
    note: 'Open source. Pode rodar localmente sem custo de API.',
    color: 'border-violet-500/30 bg-violet-500/5',
    dot: 'bg-violet-400',
  },
  {
    name: 'DeepSeek R1',
    maker: 'DeepSeek',
    note: 'Open source chinês. Performance próxima ao GPT-4 por fração do custo.',
    color: 'border-amber-500/30 bg-amber-500/5',
    dot: 'bg-amber-400',
  },
]

export function LLMs() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Large Language Models
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Redes neurais treinadas em bilhões de textos que aprendem os padrões da linguagem humana —
        e geram respostas que parecem entendimento.
      </motion.p>

      {/* Flow diagram */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="flex flex-wrap items-center justify-center gap-2">
        {flow.map((step, i) => {
          if ('arrow' in step) return <ArrowRight key={i} size={18} className="text-text-muted/30" />
          const Icon = step.icon
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="flex items-center justify-center h-10 w-10 rounded-xl glass text-primary">
                {Icon ? <Icon size={18} /> : <span className="text-sm font-bold">Aa</span>}
              </div>
              <span className="text-xs text-text-muted">{step.label}</span>
            </div>
          )
        })}
      </motion.div>

      {/* Models grid */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-6xl">
        <p className="text-xs text-text-muted/60 uppercase tracking-wider mb-3">Modelos conhecidos</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {models.map((m) => (
            <div key={m.name}
              className={`glass border p-4 flex flex-col gap-2 relative ${m.color}`}>
              {m.kiro && (
                <span className="absolute -top-2 right-3 text-[10px] font-bold bg-primary text-white px-2 py-0.5 rounded-full">
                  Kiro
                </span>
              )}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${m.dot}`} />
                <span className="font-bold text-sm text-text">{m.name}</span>
              </div>
              <span className="text-xs text-text-muted/60">{m.maker}</span>
              <p className="text-xs text-text-muted leading-relaxed">{m.note}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key insight */}
      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
        className="glass p-4 w-full max-w-6xl">
        <p className="text-sm text-text-muted text-center">
          <span className="text-text font-semibold">Como funcionam:</span>{' '}
          recebem texto → tokenizam → processam com bilhões de parâmetros → geram resposta token a token.
          Não "sabem" — <span className="text-primary font-medium">predizem o próximo token mais provável</span> com base em tudo que foi treinado.
          {' '}O <span className="text-accent font-medium">mecanismo de atenção</span> é o que permite relacionar "gateway" com "PIX" numa mesma frase — independente da distância entre elas.
        </p>
      </motion.div>
    </div>
  )
}
