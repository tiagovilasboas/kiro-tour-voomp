import { motion } from 'framer-motion'
import { AlertTriangle, Brain, Shuffle, TrendingDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const findings = [
  {
    icon: Shuffle,
    color: 'text-warning',
    bg: 'bg-warning/15',
    title: 'Fragilidade a mudanças triviais',
    body: 'Mudar apenas os nomes ou números de um problema matemático — sem alterar a lógica — fez a performance cair ~10%. Se raciocinasse de verdade, a forma não importaria.',
  },
  {
    icon: TrendingDown,
    color: 'text-danger',
    bg: 'bg-danger/15',
    title: 'Colapso com complexidade',
    body: 'Modelos de raciocínio (o1, Claude) pensam mais conforme a dificuldade aumenta — até um ponto. Depois, param de tentar. Mesmo com budget de tokens sobrando.',
  },
  {
    icon: Brain,
    color: 'text-accent',
    bg: 'bg-accent/15',
    title: 'Pattern matching sofisticado',
    body: '"Não encontramos evidência de raciocínio formal. O comportamento é melhor explicado por pattern matching sofisticado" — pesquisadores da Apple.',
  },
]

const implications = [
  'LLMs não "pensam" — reconhecem padrões estatísticos em escala massiva',
  'Quanto melhor o contexto que você dá (Steerings), mais preciso o matching de padrão',
  'Alucinações não são bugs — são o modelo "completando" com o padrão mais provável',
  'Por isso validação humana e hooks de review existem — o modelo é ferramenta, não oráculo',
]

export function IlusaoPensamento() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-3">
        <AlertTriangle size={26} className="text-warning" />
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">A Ilusão do Pensamento</h2>
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Dois estudos da Apple (GSM-Symbolic, 2024 + "The Illusion of Thinking", 2025)
        mostram que LLMs <span className="text-warning font-semibold">não raciocinam de verdade</span> —
        mesmo os modelos mais avançados fazem pattern matching sofisticado, não lógica.
      </motion.p>

      {/* Findings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {findings.map((f, i) => {
          const Icon = f.icon
          return (
            <motion.div key={f.title} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="glass p-5 flex flex-col gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${f.bg} ${f.color}`}>
                <Icon size={18} />
              </div>
              <h3 className={`font-bold text-sm ${f.color}`}>{f.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{f.body}</p>
            </motion.div>
          )
        })}
      </div>

      {/* What this means for us */}
      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
        className="glass-accent p-5 w-full max-w-6xl">
        <p className="text-xs text-warning/70 uppercase tracking-wider font-mono mb-3">O que isso muda pra nós</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {implications.map((imp, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-warning font-bold text-xs mt-0.5 flex-shrink-0">→</span>
              <p className="text-sm text-text-muted leading-relaxed">{imp}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p custom={7} variants={fadeUp} initial="hidden" animate="visible"
        className="text-xs text-text-muted/40 text-center">
        Fontes: Apple ML Research — GSM-Symbolic (2024) · The Illusion of Thinking (2025)
      </motion.p>
    </div>
  )
}
