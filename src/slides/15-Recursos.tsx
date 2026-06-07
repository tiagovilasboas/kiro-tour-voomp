import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Rocket, GraduationCap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const resources = [
  {
    category: 'Para começar',
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/25',
    items: [
      {
        name: 'Masterclass IA — Rocketseat',
        desc: 'Trilha em português: aplicar IA no dia a dia de dev. Melhor ponto de entrada em PT-BR.',
        url: 'https://app.rocketseat.com.br/jornada/masterclass-ia',
      },
      {
        name: 'Prompt Engineering Guide',
        desc: 'Guia técnico completo sobre prompting, RAG, agentes e fine-tuning. Referência da comunidade, sempre atualizado.',
        url: 'https://www.promptingguide.ai/pt',
      },
    ],
  },
  {
    category: 'LLMs, Agentes e Kiro',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/25',
    items: [
      {
        name: 'Anthropic Engineering Blog',
        desc: 'Como a Anthropic constrói agentes, multi-agent systems e o Claude Code. Fonte primária de como o Kiro funciona internamente.',
        url: 'https://www.anthropic.com/engineering',
      },
      {
        name: 'Simon Willison\'s Weblog',
        desc: 'Análises técnicas profundas sobre LLMs, ferramentas e casos reais. Um dos melhores pensadores independentes da área.',
        url: 'https://simonwillison.net',
      },
    ],
  },
  {
    category: 'Documentação e Papers',
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/25',
    items: [
      {
        name: 'Documentação oficial do Kiro',
        desc: 'Steerings, Skills, Hooks, Specs: referência completa de tudo que vimos hoje.',
        url: 'https://kiro.dev/docs',
      },
      {
        name: 'Apple Research — Illusion of Thinking',
        desc: 'Paper original citado na apresentação. Leitura obrigatória para entender os limites reais dos LLMs.',
        url: 'https://machinelearning.apple.com/research/illusion-of-thinking',
      },
    ],
  },
]

export function Recursos() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-5">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center gap-3 justify-center">
          <GraduationCap size={26} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Recomendações de Estudo</h2>
        </motion.div>

        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-base text-text-muted text-center max-w-2xl mx-auto">
          Para ir além dos slides: recursos curados para quem quer entender IA de verdade e usar melhor as ferramentas.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {resources.map((group, gi) => (
            <motion.div key={group.category} custom={gi + 2} variants={fadeUp} initial="hidden" animate="visible"
              className={`glass border p-5 flex flex-col gap-4 ${group.border}`}>
              <div className="flex items-center gap-2">
                <Rocket size={15} className={group.color} />
                <span className={`text-xs font-bold uppercase tracking-wider ${group.color}`}>{group.category}</span>
              </div>
              <div className="space-y-4 flex-1">
                {group.items.map(item => (
                  <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col gap-1.5 group">
                    <div className="flex items-start justify-between gap-2">
                      <span className={`text-base font-semibold ${group.color} group-hover:underline leading-tight`}>
                        {item.name}
                      </span>
                      <ExternalLink size={13} className="text-text-muted/40 flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="flex justify-center">
          <a href="https://kiro.dev/docs" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass px-5 py-2.5 text-sm text-primary hover:text-primary-light transition-colors">
            <BookOpen size={16} />
            kiro.dev/docs
            <ExternalLink size={11} className="text-text-muted" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
