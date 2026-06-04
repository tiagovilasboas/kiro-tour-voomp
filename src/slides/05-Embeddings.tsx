import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

interface WordPoint {
  word: string
  x: number
  y: number
  color: string
  group: string
}

const words: WordPoint[] = [
  { word: 'rei', x: 18, y: 22, color: '#6366f1', group: 'realeza' },
  { word: 'rainha', x: 26, y: 16, color: '#6366f1', group: 'realeza' },
  { word: 'príncipe', x: 22, y: 33, color: '#818cf8', group: 'realeza' },
  { word: 'gato', x: 68, y: 63, color: '#a78bfa', group: 'animais' },
  { word: 'cachorro', x: 76, y: 57, color: '#a78bfa', group: 'animais' },
  { word: 'pássaro', x: 63, y: 70, color: '#c4b5fd', group: 'animais' },
  { word: 'carro', x: 54, y: 18, color: '#34d399', group: 'veículos' },
  { word: 'moto', x: 61, y: 23, color: '#34d399', group: 'veículos' },
  { word: 'feliz', x: 30, y: 68, color: '#fbbf24', group: 'emoções' },
  { word: 'alegre', x: 37, y: 73, color: '#fbbf24', group: 'emoções' },
]

const groups = [
  { name: 'realeza', color: '#6366f1' },
  { name: 'animais', color: '#a78bfa' },
  { name: 'veículos', color: '#34d399' },
  { name: 'emoções', color: '#fbbf24' },
]

const insights = [
  {
    title: 'O que são embeddings?',
    body: 'Cada palavra, frase ou trecho de código é convertido em um vetor — uma lista de números (ex: [0.23, -0.87, 0.41, ...]). Esse vetor captura o significado semântico, não apenas a grafia da palavra.',
  },
  {
    title: 'Por que isso importa?',
    body: 'O modelo não faz busca por palavra exata. Ele encontra conceitos próximos no espaço vetorial. Por isso um Steering sobre "pagamento" também influencia respostas sobre "checkout" e "transação" — são semanticamente próximos.',
  },
  {
    title: 'Na prática com o Kiro',
    body: 'Quando você escreve um Steering com palavras do domínio da Voomp (sale, PIX, subscription, VSUS), o modelo entende o contexto completo — mesmo que você não mencione todos os termos numa pergunta.',
  },
]

export function Embeddings() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Embeddings
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl leading-relaxed">
        Antes de processar texto, o modelo converte cada palavra em um{' '}
        <span className="text-primary font-semibold">vetor numérico</span> que representa seu significado.
        Palavras semanticamente próximas ficam próximas nesse espaço multidimensional.
        É assim que o modelo <span className="text-accent font-semibold">"entende"</span> — não por regras, por geometria.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {/* Visualization */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="glass p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-text-muted/60">Espaço vetorial 2D (simplificado)</p>
            <div className="flex items-center gap-3">
              {groups.map(g => (
                <div key={g.name} className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: g.color }} />
                  <span className="text-[10px] text-text-muted">{g.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full h-48 rounded-xl bg-surface/50 border border-white/5 overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.05]">
              {[1, 2, 3].map(n => (
                <div key={`h${n}`} className="absolute left-0 right-0 h-px bg-white" style={{ top: `${n * 25}%` }} />
              ))}
              {[1, 2, 3].map(n => (
                <div key={`v${n}`} className="absolute top-0 bottom-0 w-px bg-white" style={{ left: `${n * 25}%` }} />
              ))}
            </div>

            {/* Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <line x1="18%" y1="22%" x2="26%" y2="16%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="18%" y1="22%" x2="22%" y2="33%" stroke="#6366f1" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="68%" y1="63%" x2="76%" y2="57%" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="68%" y1="63%" x2="63%" y2="70%" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="54%" y1="18%" x2="61%" y2="23%" stroke="#34d399" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="30%" y1="68%" x2="37%" y2="73%" stroke="#fbbf24" strokeWidth="1" strokeDasharray="3 2" />
            </svg>

            {/* Dots */}
            {words.map((p, i) => (
              <motion.div key={p.word}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.07, type: 'spring', stiffness: 200, damping: 15 }}
                className="absolute flex flex-col items-center gap-0.5"
                style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color, boxShadow: `0 0 6px ${p.color}` }} />
                <span className="text-[9px] font-medium whitespace-nowrap" style={{ color: p.color }}>{p.word}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Insights */}
        <div className="flex flex-col gap-3">
          {insights.map((ins, i) => (
            <motion.div key={ins.title} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="glass p-4 flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-text">{ins.title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{ins.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
