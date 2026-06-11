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
  { label: 'Tokens', isText: true },
  { icon: Cpu, label: 'Predição' },
  { icon: Sparkles, label: 'Resposta' },
]

const models = [
  {
    name: 'Auto',
    note: 'Roteia por complexidade automaticamente. Otimiza tokens e custo, pode subestimar perguntas curtas mas complexas. Use com consciência.',
    color: 'border-emerald-500/30 bg-emerald-500/5',
    dot: 'bg-emerald-400',
    credits: '1x',
    frank: 'Custo otimizado, mas sem garantia de modelo ideal',
  },
  {
    name: 'Claude Opus 4.6',
    note: 'O mais capaz. Decisões de arquitetura, debugging cross-layer, post-mortem técnico.',
    color: 'border-primary/30 bg-primary/5',
    dot: 'bg-primary',
    credits: '2.2x',
    frank: 'Use quando o problema exige raciocinar entre múltiplas camadas',
  },
  {
    name: 'Claude Sonnet 4.6',
    note: '200k context window. Sessões longas, war room, múltiplos arquivos simultâneos. Ideal para análise de incidentes.',
    color: 'border-violet-400/50 bg-violet-500/10',
    dot: 'bg-violet-400',
    credits: '1.3x',
    frank: 'Melhor custo-benefício. Recomendado para incidentes N3.',
    recommended: true,
  },
  {
    name: 'Claude Opus 4.5',
    note: 'Opus anterior. Perfil diferente: mais criativo em tarefas ambíguas. Mesmo custo do 4.6.',
    color: 'border-sky-500/30 bg-sky-500/5',
    dot: 'bg-sky-400',
    credits: '2.2x',
    frank: 'Mesmo custo do 4.6. Considere o 4.6 como padrão.',
  },
]

export function LLMs() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-4 gap-3">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-2xl md:text-4xl font-bold gradient-text text-center">
        Large Language Models
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm md:text-base text-text-muted text-center max-w-3xl">
        Redes neurais treinadas em bilhões de textos que aprendem os padrões da linguagem humana
        e geram respostas que parecem entendimento.
      </motion.p>

      {/* Flow diagram — CSS grid: icon row + label row, columns auto-sized */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="inline-grid gap-x-4 gap-y-1.5"
        style={{ gridTemplateColumns: `repeat(${flow.length * 2 - 1}, auto)`, gridTemplateRows: 'auto auto' }}
      >
        {/* Row 1: icons and arrows */}
        {flow.map((step, i) => {
          const Icon = step.icon
          return (
            <>
              {/* Icon cell */}
              <div
                key={`icon-${i}`}
                className="flex items-center justify-center h-14 w-14 rounded-xl glass text-primary"
                style={{ gridRow: 1, gridColumn: i * 2 + 1 }}
              >
                {Icon
                  ? <Icon size={20} />
                  : <span className="text-base font-bold text-primary">Aa</span>
                }
              </div>
              {/* Arrow cell */}
              {i < flow.length - 1 && (
                <div
                  key={`arrow-${i}`}
                  className="flex items-center justify-center"
                  style={{ gridRow: 1, gridColumn: i * 2 + 2 }}
                >
                  <ArrowRight size={28} className="text-text-muted/40" />
                </div>
              )}
              {/* Label cell — same column as icon, row 2 */}
              <div
                key={`label-${i}`}
                className="flex items-start justify-center w-14"
                style={{ gridRow: 2, gridColumn: i * 2 + 1 }}
              >
                <span className="text-xs text-text-muted text-center leading-tight whitespace-nowrap">
                  {step.label}
                </span>
              </div>
            </>
          )
        })}
      </motion.div>

      {/* Models grid */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-6xl">
        <p className="text-xs text-text-muted/60 uppercase tracking-wider mb-2">Modelos disponíveis no Kiro</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {models.map((m) => (
            <div key={m.name}
              className={`glass border p-3 flex flex-col gap-1.5 relative ${m.color} ${'recommended' in m && m.recommended ? 'ring-2 ring-violet-400/50 shadow-[0_0_20px_rgba(139,92,246,0.15)]' : ''}`}>
              <span className={`absolute -top-2 right-3 text-[10px] font-bold text-white px-2 py-0.5 rounded-full ${'recommended' in m && m.recommended ? 'bg-violet-500' : 'bg-primary'}`}>
                {m.credits}
              </span>
              {'recommended' in m && m.recommended && (
                <span className="absolute -top-2 left-3 text-[9px] font-bold text-violet-300 bg-violet-500/20 border border-violet-500/30 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  N3
                </span>
              )}
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${m.dot}`} />
                <span className="font-bold text-sm text-text">{m.name}</span>
              </div>
              <p className="text-sm text-text-muted leading-relaxed flex-1">{m.note}</p>
              <p className="text-xs text-text-muted/70 italic border-t border-white/5 pt-1">{m.frank}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Key insight */}
      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
        className="glass p-3 w-full max-w-6xl">
        <p className="text-xs text-text-muted text-center leading-relaxed">
          <span className="text-text font-semibold">Como funcionam:</span>{' '}
          recebem texto → tokenizam → processam com bilhões de parâmetros → geram resposta token a token.
          Não "sabem": <span className="text-primary font-medium">predizem o próximo token mais provável</span> com base em tudo que foi treinado.
          {' '}O <span className="text-accent font-medium">mecanismo de atenção</span> é o que permite relacionar "gateway" com "PIX" numa mesma frase, independente da distância entre elas.
        </p>
      </motion.div>
    </div>
  )
}
