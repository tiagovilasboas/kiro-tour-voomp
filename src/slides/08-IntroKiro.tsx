import { motion } from 'framer-motion'
import { FileText, Cog, Globe, Brain, Shield, FileEdit, Terminal, Code2, ArrowRight, Compass, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const diffs = [
  { icon: FileEdit, text: 'Edita arquivos diretamente no projeto' },
  { icon: Terminal, text: 'Executa comandos no terminal integrado' },
  { icon: Code2, text: 'Integração nativa com VS Code' },
]

const framework = [
  {
    question: 'O que fazer?',
    answer: 'Specs',
    desc: 'Planejar antes de codar: Requirements → Design → Tasks.',
    icon: FileText,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/25',
    active: true,
  },
  {
    question: 'Como contextualizar?',
    answer: 'Steerings',
    desc: 'Contexto persistente: o agente já sabe onde está antes de você perguntar.',
    icon: Compass,
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/25',
    active: true,
  },
  {
    question: 'Como executar?',
    answer: 'Skills',
    desc: 'Fluxos completos invocados com uma frase: o agente faz, você revisa.',
    icon: Zap,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    border: 'border-sky-400/25',
    active: true,
  },
  {
    question: 'Como automatizar?',
    answer: 'Hooks',
    desc: 'Disparam por evento: salvar, criar arquivo, fechar task. Sem você pedir.',
    icon: Cog,
    color: 'text-success',
    bg: 'bg-success/10',
    border: 'border-success/25',
    active: true,
  },
  {
    question: 'Onde agir?',
    answer: 'Integrações',
    desc: 'MCP para Jira, Grafana, Azure DevOps. Powers para fluxos especializados.',
    icon: Globe,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
    active: false,
  },
  {
    question: 'Com que contexto?',
    answer: 'Context Engineering',
    desc: 'RAG, memória entre sessões e domínio da empresa.',
    icon: Brain,
    color: 'text-warning',
    bg: 'bg-warning/10',
    border: 'border-warning/20',
    active: false,
  },
  {
    question: 'Como controlar?',
    answer: 'Governança',
    desc: 'Evals, guardrails e auditoria para escalar sem caos.',
    icon: Shield,
    color: 'text-danger',
    bg: 'bg-danger/10',
    border: 'border-danger/20',
    active: false,
  },
]

export function IntroKiro() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-4">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center justify-center gap-4">
        <motion.img
          src="/kiro-icon.svg"
          alt="Kiro"
          className="h-14 md:h-16"
          animate={{ y: [0, -5, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">
          Kiro como Sistema
        </h2>
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-4xl leading-relaxed">
        Vocês já usam. Agora vamos entender <span className="text-text font-semibold">o sistema por trás</span>.
        {' '}O Kiro se organiza em <span className="text-text font-medium">7 capacidades</span>, mas
        {' '}<span className="text-primary font-semibold">4 delas resolvem 90% do dia a dia</span>.
        {' '}O básico bem feito é o que diferencia quem usa de quem depende.
      </motion.p>

      {/* Beyond chat: compact */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="glass p-4 w-full max-w-6xl">
        <div className="flex items-center gap-6 justify-center">
          {diffs.map(d => {
            const Icon = d.icon
            return (
              <div key={d.text} className="flex items-center gap-2">
                <div className="rounded-lg p-1.5 bg-primary/15 text-primary flex-shrink-0">
                  <Icon size={14} />
                </div>
                <span className="text-sm text-text">{d.text}</span>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* 5 questions: two rows: active on top, inactive below */}
      <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-6xl flex flex-col gap-3">

        {/* Active: larger cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {framework.filter(f => f.active).map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div key={f.question} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
                className={`glass border p-5 flex flex-col gap-3 ${f.border}`}>
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl p-2.5 ${f.bg} ${f.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider ${f.color}`}>{f.question}</p>
                    <p className="text-lg font-bold text-text">{f.answer}</p>
                  </div>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Flow */}
        <div className="flex items-center justify-center gap-3 px-4">
          <div className="flex items-center gap-2 text-xs text-text-muted/50">
            <span className="text-primary font-mono">Spec</span>
            <ArrowRight size={12} className="text-text-muted/30" />
            <span className="text-accent font-mono">Steering</span>
            <ArrowRight size={12} className="text-text-muted/30" />
            <span className="text-sky-400 font-mono">Skill</span>
            <ArrowRight size={12} className="text-text-muted/30" />
            <span className="text-success font-mono">Hook</span>
            <ArrowRight size={12} className="text-text-muted/30" />
            <span className="text-emerald-400 font-mono">Resultado</span>
          </div>
        </div>
      </motion.div>

      {/* Callout */}
      <motion.p custom={10} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm text-text-muted/60 text-center max-w-3xl">
        Esses 4 são o Kiro no dia a dia: <span className="text-text font-medium">o básico bem feito</span>.
        {' '}Dominar isso é o que separa usar a ferramenta de usar com intenção.
      </motion.p>
    </div>
  )
}
