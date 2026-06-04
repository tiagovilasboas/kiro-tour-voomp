import { motion } from 'framer-motion'
import { Eye, AlertTriangle, Lightbulb } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const models = [
  { name: 'GPT-4o', tokens: '128k', pages: '~300 pág.', bar: 'w-1/4' },
  { name: 'Claude Sonnet 4.6', tokens: '1M', pages: '~2.500 pág.', bar: 'w-full', kiro: true },
  { name: 'Gemini 2.0', tokens: '1M', pages: '~2.500 pág.', bar: 'w-full' },
  { name: 'Llama 3', tokens: '128k', pages: '~300 pág.', bar: 'w-1/4' },
]

const insights = [
  {
    icon: Eye,
    color: 'text-primary bg-primary/15',
    title: 'O que o modelo "enxerga"',
    body: 'Tudo dentro da janela é contexto ativo. O modelo conecta informações de qualquer ponto dessa janela para gerar a resposta.',
  },
  {
    icon: AlertTriangle,
    color: 'text-warning bg-warning/15',
    title: 'O que acontece quando a janela enche',
    body: 'O conteúdo mais antigo é descartado silenciosamente. O modelo "esquece" decisões tomadas lá atrás — como se nunca tivessem existido.',
  },
  {
    icon: Lightbulb,
    color: 'text-success bg-success/15',
    title: 'Por que Steerings são mais eficientes',
    body: 'Em vez de repetir contexto do projeto em cada mensagem (consumindo janela), o Steering injeta esse contexto uma vez de forma compacta e permanente.',
  },
]

export function ContextWindow() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Context Window
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl leading-relaxed">
        A <span className="text-primary font-semibold">janela de contexto</span> é o limite de tokens que o modelo processa
        de uma vez — tudo que ele consegue "ver" para gerar uma resposta.
        Pense como a memória de trabalho humana: finita, e tudo que sai dela some.
      </motion.p>

      {/* Model comparison */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="glass p-5 w-full max-w-6xl">
        <p className="text-xs text-text-muted/60 uppercase tracking-wider mb-4">Comparativo de janelas por modelo</p>
        <div className="space-y-3">
          {models.map((m) => (
            <div key={m.name} className="flex items-center gap-4">
              <div className="w-40 flex-shrink-0 flex items-center gap-2">
                <span className={`text-sm font-semibold ${m.kiro ? 'text-primary' : 'text-text'}`}>{m.name}</span>
                {m.kiro && <span className="text-[10px] bg-primary text-white px-1.5 py-0.5 rounded-full font-bold">Kiro</span>}
              </div>
              <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className={`h-full rounded-full ${m.bar} ${m.kiro ? 'bg-primary' : 'bg-white/20'} max-w-[${m.bar.replace('w-', '')}]`}
                  style={{ width: m.bar === 'w-full' ? '100%' : m.bar === 'w-1/4' ? '25%' : '50%' }}
                />
              </div>
              <span className={`text-sm font-mono w-24 text-right flex-shrink-0 ${m.kiro ? 'text-primary font-bold' : 'text-text-muted'}`}>
                {m.tokens}
              </span>
              <span className="text-xs text-text-muted/50 w-24 text-right flex-shrink-0">{m.pages}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-6xl">
        {insights.map((ins, i) => {
          const Icon = ins.icon
          return (
            <motion.div key={ins.title} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="glass p-4 flex flex-col gap-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${ins.color}`}>
                <Icon size={16} />
              </div>
              <p className="text-sm font-semibold text-text">{ins.title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{ins.body}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
