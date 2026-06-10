import { motion } from 'framer-motion'
import { AlertTriangle, Shuffle, TrendingDown, Brain, ExternalLink, Quote } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const papers = [
  {
    title: 'GSM-Symbolic',
    year: '2024',
    url: 'https://machinelearning.apple.com/research/gsm-symbolic',
    finding: 'Mudar apenas os nomes/números de um problema matemático sem alterar a lógica reduziu performance em ~10%. Evidência de fragilidade no "raciocínio".',
    icon: Shuffle,
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/25',
  },
  {
    title: 'The Illusion of Thinking',
    year: '2025',
    url: 'https://machinelearning.apple.com/research/illusion-of-thinking',
    finding: 'Modelos de raciocínio aumentam o esforço conforme a dificuldade, até um ponto. Depois colapsam, mesmo com tokens sobrando. Sem evidência de raciocínio formal.',
    icon: TrendingDown,
    color: 'text-danger',
    bg: 'bg-danger/10',
    border: 'border-danger/25',
  },
]

const implications = [
  { icon: Brain, text: 'LLMs não "pensam": reconhecem padrões estatísticos em escala massiva' },
  { icon: Shuffle, text: 'Quanto melhor o contexto (Steerings), mais preciso o matching de padrões' },
  { icon: AlertTriangle, text: 'Alucinações não são bugs: são o modelo completando com o padrão mais provável' },
  { icon: TrendingDown, text: 'Por isso hooks de review e lint existem: o modelo é ferramenta, não oráculo' },
]

export function IlusaoPensamento() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-warning/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-5">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center gap-3 justify-center">
          <AlertTriangle size={22} className="text-warning" />
          <h2 className="text-2xl md:text-4xl font-bold gradient-text">A Ilusão do Pensamento</h2>
        </motion.div>

        {/* Quote */}
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="glass border-warning/20 p-4 flex items-start gap-3">
          <Quote size={14} className="text-warning/60 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-text-muted italic leading-relaxed">
            "Não encontramos evidências de raciocínio formal em modelos de linguagem. O comportamento deles é melhor explicado por{' '}
            <span className="text-warning font-semibold not-italic">correspondência sofisticada de padrões</span>"
          </p>
          <a
            href="https://machinelearning.apple.com/research/gsm-symbolic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-muted/60 flex-shrink-0 self-end font-mono hover:text-text-muted/80 transition-colors underline"
          >
            Apple Research, 2024
          </a>
        </motion.div>

        {/* Papers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {papers.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div key={p.title} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
                className={`glass border p-5 flex flex-col gap-3 ${p.border}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className={`rounded-lg p-2 ${p.bg} ${p.color} flex-shrink-0`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider ${p.color}`}>Apple Research · {p.year}</span>
                      <h3 className={`font-bold text-sm ${p.color}`}>{p.title}</h3>
                    </div>
                  </div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-xs font-mono px-2 py-1 rounded ${p.bg} ${p.color} hover:opacity-80 transition-opacity flex-shrink-0`}>
                    Paper <ExternalLink size={10} />
                  </a>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{p.finding}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Implications */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="glass p-4">
          <p className="text-xs text-text-muted/60 uppercase tracking-wider font-mono mb-3">O que muda pra nós</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {implications.map((imp, i) => {
              const Icon = imp.icon
              return (
                <div key={i} className="flex items-start gap-2">
                  <Icon size={13} className="text-warning/60 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-text-muted leading-relaxed">{imp.text}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Source links */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center justify-center gap-4 flex-wrap">
          {papers.map(p => (
            <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-muted/50 hover:text-text-muted transition-colors font-mono">
              <ExternalLink size={10} />
              machinelearning.apple.com · {p.title} ({p.year})
            </a>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
