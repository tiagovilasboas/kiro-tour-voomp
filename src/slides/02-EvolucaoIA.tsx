import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const eras = [
  {
    period: '1950–1990s',
    title: 'O Começo',
    badges: ['IA Simbólica'],
    description: 'Turing pergunta em 1950: "pode uma máquina pensar?" O campo nasce. Pesquisadores programam regras à mão para tudo. Funcionou para xadrez. Para linguagem real, colapsou duas vezes. Não existem regras suficientes para o caos do mundo.',
    sub: 'Lição: regras não escalam',
    ref: { label: 'Turing Test (1950)', url: 'https://en.wikipedia.org/wiki/Turing_test' },
    dot: 'bg-white/20 border-white/20',
    highlight: false,
    color: 'text-text-muted',
    border: 'border-white/10',
    badgeColor: 'text-text-muted/60 border-white/15 bg-white/5',
  },
  {
    period: '2000–2012',
    title: 'Aprender com Dados',
    badges: ['Machine Learning', 'Deep Learning'],
    description: 'Em vez de programar o que saber, expõe o modelo a dados e deixa aprender. GPUs baratas aceleraram redes neurais profundas com múltiplas camadas.',
    sub: 'Lição: padrões de dados superam regras à mão',
    ref: { label: 'ImageNet (2012)', url: 'https://en.wikipedia.org/wiki/ImageNet' },
    dot: 'bg-white/40 border-white/30',
    highlight: false,
    color: 'text-text',
    border: 'border-white/10',
    badgeColor: 'text-sky-400/80 border-sky-400/20 bg-sky-400/5',
  },
  {
    period: '2012–2021',
    title: 'IA Generativa',
    badges: ['IA Generativa', 'Transformers'],
    description: 'Modelos que criam: texto, código, imagens. Em 2017: "Attention is All You Need". O mecanismo de atenção conecta qualquer palavra a qualquer outra. Fundação do GPT e do Claude.',
    sub: 'Lição: explica por que Steerings com vocabulário do domínio funcionam',
    ref: { label: 'Attention is All You Need', url: 'https://arxiv.org/abs/1706.03762' },
    dot: 'bg-white/60 border-white/40',
    highlight: false,
    color: 'text-text',
    border: 'border-white/10',
    badgeColor: 'text-violet-400/80 border-violet-400/20 bg-violet-400/5',
  },
  {
    period: '2022–Hoje',
    title: 'Era dos Agentes',
    badges: ['Agentes'],
    description: 'Modelos que não só respondem, mas agem. Editam arquivos. Executam comandos. Integram com o IDE. A diferença entre chatbot e agente é agir no ambiente.',
    sub: '← É aqui que o Kiro vive',
    ref: { label: 'OpenAI: ChatGPT (2022)', url: 'https://openai.com/blog/chatgpt' },
    dot: 'bg-primary border-primary/60',
    highlight: true,
    color: 'text-primary',
    border: 'border-primary/30',
    badgeColor: 'text-primary border-primary/40 bg-primary/10',
  },
]

export function EvolucaoIA() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 py-4 gap-4">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-2xl md:text-4xl font-bold gradient-text text-center">
        Evolução da Inteligência Artificial
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm md:text-base text-text-muted text-center max-w-3xl mb-4">
        70 anos condensados em 4 momentos. O padrão se repete: hype, inverno, avanço real.
      </motion.p>

      {/* Timeline */}
      <div className="w-full max-w-6xl relative">

        {/* Linha horizontal — alinhada com os dots */}
        <div className="absolute left-8 right-8 h-px bg-white/10" style={{ top: '52px' }} />

        {/* 4 eras */}
        <div className="grid grid-cols-4 gap-4">
          {eras.map((era, i) => (
            <motion.div key={era.title} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-col items-center gap-3">

              {/* Badges acima do dot */}
              <div className="flex items-center gap-1 flex-wrap justify-center min-h-[28px]">
                {era.badges.map((badge, bi) => (
                  <div key={badge} className="flex items-center gap-1">
                    <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${era.badgeColor}`}>
                      {badge}
                    </span>
                    {bi < era.badges.length - 1 && (
                      <span className="text-text-muted/20 text-xs">→</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Dot */}
              <div className="relative z-10 flex flex-col items-center gap-1.5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 300, damping: 18 }}
                  className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${era.dot} ${era.highlight ? 'shadow-[0_0_16px_rgba(144,70,255,0.7)]' : ''}`}
                />
                <span className={`text-xs font-mono font-semibold ${era.highlight ? 'text-primary' : 'text-text-muted/60'}`}>
                  {era.period}
                </span>
              </div>

              {/* Card */}
              <div className={`glass border w-full p-4 flex flex-col gap-2.5 ${era.border}`}>
                <h3 className={`font-bold text-sm leading-tight ${era.color}`}>{era.title}</h3>
                <p className="text-xs text-text-muted leading-relaxed flex-1">{era.description}</p>
                <div className={`flex flex-col gap-1 pt-2 border-t ${era.highlight ? 'border-primary/20' : 'border-white/5'}`}>
                  <p className={`text-xs font-medium ${era.highlight ? 'text-primary' : 'text-text-muted/50'}`}>
                    {era.sub}
                  </p>
                  <a
                    href={era.ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-text-muted/40 hover:text-text-muted/70 transition-colors font-mono"
                  >
                    <ExternalLink size={10} />
                    {era.ref.label}
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      <motion.p custom={7} variants={fadeUp} initial="hidden" animate="visible"
        className="text-xs text-text-muted/40 text-center">
        Cada inverno foi seguido por um avanço maior. O ciclo de hype é real, mas o progresso também é.
      </motion.p>
    </div>
  )
}
