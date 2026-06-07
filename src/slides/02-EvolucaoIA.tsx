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
    title: 'O Começo (e os dois colapsos)',
    description: 'Turing pergunta: "pode uma máquina pensar?" e o campo nasce empolgado. Pesquisadores tentam programar inteligência à mão: regras para tudo, casos para tudo. Funcionou para xadrez e problemas fechados. Para o mundo real, colapsou. Duas vezes. O financiamento foi cortado, o campo virou piada acadêmica. Não por falta de talento: a abordagem estava fundamentalmente errada. Não dá para escrever regras suficientes para o caos do mundo.',
    sub: 'Lição: regras programadas não escalam para o mundo real',
    dot: 'bg-white/30 border-white/20',
    dotSize: 'w-5 h-5',
    highlight: false,
    color: 'text-text-muted',
    border: 'border-white/10',
  },
  {
    period: '2000–2021',
    title: 'A Virada: deixa o modelo aprender',
    description: 'A mudança foi de filosofia: em vez de programar o que o modelo deve saber, expõe ele a dados e deixa aprender os padrões. GPUs de games ficaram baratas, a internet encheu de texto, redes neurais profundas ressurgiram. Em 2017 veio o paper que muda tudo: "Attention is All You Need". O mecanismo de atenção permite que qualquer palavra se relacione com qualquer outra na sequência, sem perder contexto. É a fundação do GPT, do Claude, do Gemini.',
    sub: 'Lição: padrões extraídos de dados superam regras escritas à mão',
    dot: 'bg-white/60 border-white/40',
    dotSize: 'w-5 h-5',
    highlight: false,
    color: 'text-text',
    border: 'border-white/10',
  },
  {
    period: '2022–Hoje',
    title: 'Era dos Agentes',
    description: 'Novembro de 2022: ChatGPT. Um milhão de usuários em 5 dias. Pela primeira vez, IA útil para qualquer pessoa, não só pesquisadores. O que veio depois foi mais radical ainda: modelos que não só respondem, mas agem. Editam arquivos. Executam comandos. Usam ferramentas. Integram com o IDE. A diferença entre "chatbot" e "agente" é exatamente essa capacidade de agir no ambiente.',
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
        70 anos condensados em 3 momentos: o padrão se repete: hype, inverno, avanço real.
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
        Cada inverno foi seguido por um avanço maior. O ciclo de hype é real, mas o progresso também é
      </motion.p>
    </div>
  )
}
