import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const eras = [
  {
    period: '1950–1990s',
    title: 'O Começo (e os invernos)',
    description: 'Turing propõe máquinas que pensam. Pesquisadores constroem regras à mão — "se X então Y". Funcionou para xadrez, não para o mundo real. Dois invernos: financiamento cortado, promessas não cumpridas. A área quase morreu duas vezes — não por falta de inteligência dos pesquisadores, mas porque a abordagem estava errada.',
    sub: 'Regras programadas → escala impossível',
    dot: 'bg-white/30 border-white/20',
    dotSize: 'w-5 h-5',
    highlight: false,
    color: 'text-text-muted',
    border: 'border-white/10',
  },
  {
    period: '2000–2021',
    title: 'A Virada: dados + GPUs',
    description: 'Em vez de programar regras, deixa o modelo aprender dos dados. GPUs baratas + internet + redes neurais profundas. Em 2017, "Attention is All You Need" inventa os Transformers — a inovação foi a atenção: relacionar qualquer palavra com qualquer outra na sequência, independente da distância. Base do GPT, Claude e Gemini.',
    sub: 'Padrões aprendidos dos dados, não programados',
    dot: 'bg-white/60 border-white/40',
    dotSize: 'w-5 h-5',
    highlight: false,
    color: 'text-text',
    border: 'border-white/10',
  },
  {
    period: '2022–Hoje',
    title: 'Era dos Agentes',
    description: 'ChatGPT — 1 milhão de usuários em 5 dias. Pela primeira vez, IA útil para qualquer pessoa. Depois: modelos que não só respondem, mas agem — editam arquivos, executam comandos, usam ferramentas, se integram ao IDE.',
    sub: '← É aqui que o Kiro vive',
    dot: 'bg-primary border-primary/60',
    dotSize: 'w-6 h-6',
    highlight: true,
    color: 'text-primary',
    border: 'border-primary/30 glow',
  },
]

export function EvolucaoIA() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-8">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Evolução da Inteligência Artificial
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        70 anos condensados em 3 momentos — o padrão se repete: hype, inverno, avanço real.
      </motion.p>

      {/* Timeline */}
      <div className="w-full max-w-5xl relative">

        {/* Linha horizontal */}
        <div className="absolute top-[10px] left-12 right-12 h-px bg-white/10" />

        {/* 3 eras */}
        <div className="grid grid-cols-3 gap-6">
          {eras.map((era, i) => (
            <motion.div key={era.title} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col items-center gap-4">

              {/* Dot na linha */}
              <div className="relative z-10 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.15, type: 'spring', stiffness: 300, damping: 18 }}
                  className={`rounded-full border-2 flex-shrink-0 ${era.dot} ${era.dotSize} ${era.highlight ? 'shadow-[0_0_16px_rgba(144,70,255,0.7)]' : ''}`}
                />
                <span className={`text-xs font-mono font-semibold ${era.highlight ? 'text-primary' : 'text-text-muted/60'}`}>
                  {era.period}
                </span>
              </div>

              {/* Card */}
              <div className={`glass border w-full p-5 flex flex-col gap-3 ${era.border}`}>
                <h3 className={`font-bold text-lg leading-tight ${era.color}`}>{era.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{era.description}</p>
                <p className={`text-xs font-medium pt-3 border-t ${era.highlight ? 'text-primary border-primary/20' : 'text-text-muted/40 border-white/5'}`}>
                  {era.sub}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
        className="text-xs text-text-muted/40 text-center">
        Cada inverno foi seguido por um avanço maior — o ciclo de hype é real, mas o progresso também é
      </motion.p>
    </div>
  )
}
