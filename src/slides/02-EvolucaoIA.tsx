import { motion } from 'framer-motion'
import { Brain, BarChart3, Sparkles } from 'lucide-react'

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
    icon: Brain,
    period: '1950–1990s',
    title: 'O Começo (e os invernos)',
    description: 'Turing e o teste de inteligência. Primeiras tentativas com regras escritas à mão. Seguidas de dois "invernos da IA" — promessas não cumpridas, financiamento cortado. A área quase morreu duas vezes por excesso de hype.',
    sub: 'Regras programadas → resultados limitados',
    highlight: false,
    color: 'text-text-muted',
    iconBg: 'bg-white/5 text-text-muted',
    border: '',
  },
  {
    icon: BarChart3,
    period: '2000–2021',
    title: 'A Virada: dados + GPUs',
    description: 'Big data e GPUs baratas viabilizam redes neurais profundas. ImageNet, Word2Vec, AlexNet. Em 2017, "Attention is All You Need" introduce os Transformers — a arquitetura que está na base de 99% dos modelos modernos.',
    sub: 'Padrões extraídos dos dados, não programados',
    highlight: false,
    color: 'text-text',
    iconBg: 'bg-white/5 text-text-muted',
    border: '',
  },
  {
    icon: Sparkles,
    period: '2022–Hoje',
    title: 'Era dos Agentes',
    description: 'ChatGPT, Claude, Gemini. LLMs que raciocinam, escrevem código, usam ferramentas e se integram ao IDE. Não são apenas chatbots — são agentes que agem no seu ambiente de desenvolvimento.',
    sub: '← É aqui que o Kiro vive',
    highlight: true,
    color: 'text-primary',
    iconBg: 'bg-primary/20 text-primary',
    border: 'border-primary/30 glow',
  },
]

export function EvolucaoIA() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-6">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Evolução da Inteligência Artificial
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        70 anos condensados em 3 momentos — o padrão se repete: hype, inverno, avanço real.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-6xl">
        {eras.map((era, i) => {
          const Icon = era.icon
          return (
            <motion.div key={era.title} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className={`glass p-6 flex flex-col gap-4 ${era.border}`}>
              <div className="flex items-center gap-3">
                <div className={`rounded-xl p-2.5 flex-shrink-0 ${era.iconBg}`}>
                  <Icon size={22} />
                </div>
                <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${era.highlight ? 'text-primary' : 'text-text-muted/60'}`}>
                  {era.period}
                </span>
              </div>

              <h3 className={`font-bold text-lg leading-tight ${era.color}`}>
                {era.title}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed flex-1">
                {era.description}
              </p>

              <p className={`text-xs font-medium pt-3 border-t ${era.highlight ? 'text-primary border-primary/20' : 'text-text-muted/40 border-white/5'}`}>
                {era.sub}
              </p>
            </motion.div>
          )
        })}
      </div>

      <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
        className="text-xs text-text-muted/40 text-center">
        Cada inverno foi seguido por um avanço maior — o ciclo de hype é real, mas o progresso também é
      </motion.p>
    </div>
  )
}
