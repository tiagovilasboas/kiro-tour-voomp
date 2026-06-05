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
        desc: 'Trilha em português focada em aplicar IA no dia a dia de dev. Começo ideal.',
        url: 'https://app.rocketseat.com.br/jornada/masterclass-ia',
      },
      {
        name: 'ChatGPT Prompt Engineering for Developers',
        desc: 'Andrew Ng (DeepLearning.AI) + OpenAI. Direto ao ponto — como escrever prompts que funcionam.',
        url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/',
      },
    ],
  },
  {
    category: 'Aprofundar em LLMs e Agentes',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/25',
    items: [
      {
        name: 'Agentic AI with Andrew Ng',
        desc: 'Como construir sistemas agentic: planeamento multi-step, tool use, reflexão. Exatamente o que o Kiro faz internamente.',
        url: 'https://www.deeplearning.ai/alpha/courses/agentic-ai/',
      },
      {
        name: 'Generative AI with LLMs — Coursera/AWS',
        desc: 'Curso técnico mais completo sobre LLMs: fine-tuning, RLHF, deployment. Para quem quer entender de verdade.',
        url: 'https://www.deeplearning.ai/courses/generative-ai-with-llms/',
      },
    ],
  },
  {
    category: 'Kiro & documentação',
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/25',
    items: [
      {
        name: 'Documentação oficial do Kiro',
        desc: 'Steerings, Skills, Hooks, Specs — referência completa de tudo que vimos hoje.',
        url: 'https://kiro.dev/docs',
      },
      {
        name: 'Agent Skills with Anthropic',
        desc: 'Como empacotar fluxos de trabalho como Skills reutilizáveis. Relevante para criar novas Skills do time.',
        url: 'https://learn.deeplearning.ai/courses/agent-skills-with-anthropic/information',
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
          Para ir além dos slides — recursos curados para quem quer entender IA de verdade e usar melhor as ferramentas.
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
