import { motion } from 'framer-motion'
import { Zap, GitPullRequest, CheckCircle, Search, FileText, BookOpen, Compass, Clock } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const skills = [
  {
    name: 'voomp-entregar-historia',
    label: 'Entregar História',
    icon: CheckCircle,
    time: '~30 seg vs ~15 min',
    color: 'text-primary',
    bg: 'bg-primary/15',
    border: 'border-primary/30',
    steps: [
      'Analisa o git diff e histórico da branch',
      'Cria PR com descrição no padrão N3',
      'Vincula PR à task VSUS no Jira',
      'Transiciona status para Pendente de Produção',
      'Cria subtask de QA e registra horas',
    ],
  },
  {
    name: 'grill-me',
    label: 'Grill Me — Revisar Hipótese',
    icon: Search,
    time: 'Antes de commitar um fix',
    color: 'text-accent',
    bg: 'bg-accent/15',
    border: 'border-accent/30',
    steps: [
      'Questiona sua hipótese de causa raiz',
      'Aponta cenários que você pode não ter considerado',
      'Valida se o fix cobre todos os casos de borda',
      'Útil antes de abrir PR em código crítico de pagamento',
    ],
  },
  {
    name: 'voomp-investigar-bug',
    label: 'Investigar Bug',
    icon: FileText,
    time: 'Estrutura a investigação',
    color: 'text-success',
    bg: 'bg-success/15',
    border: 'border-success/30',
    steps: [
      'Busca contexto da task no Jira (VSUS-XXX)',
      'Verifica Grafana: 5xx, Vendas Perdidas, latência',
      'Mapeia arquivos relevantes pelo sintoma',
      'Propõe 2–3 hipóteses de causa raiz ordenadas',
      'Sugere queries MySQL para validar hipóteses',
    ],
  },
  {
    name: 'post-mortem',
    label: 'Gerar Post-Mortem',
    icon: BookOpen,
    time: 'Após incidente crítico',
    color: 'text-warning',
    bg: 'bg-warning/15',
    border: 'border-warning/30',
    steps: [
      'Consolida timeline do incidente a partir de logs',
      'Preenche causa raiz e impacto (sellers, TPV)',
      'Lista ações corretivas e preventivas',
      'Cria página no Confluence na estrutura padrão N3',
    ],
  },
]

export function Skills() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Skills
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Fluxos de trabalho completos ativados com um comando.
        Você invoca — o agente executa cada passo com o contexto do projeto já carregado pelos Steerings.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        {skills.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.name} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className={`glass border p-5 flex flex-col gap-3 ${s.border}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl p-2.5 flex-shrink-0 ${s.bg} ${s.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${s.color}`}>{s.label}</h3>
                    <code className="text-[10px] text-text-muted/60 font-mono">{s.name}</code>
                  </div>
                </div>
                <div className={`flex items-center gap-1 flex-shrink-0 text-[10px] font-mono px-2 py-1 rounded-full ${s.bg} ${s.color}`}>
                  <Clock size={9} />
                  {s.time}
                </div>
              </div>

              <ul className="space-y-1">
                {s.steps.map((step, si) => (
                  <li key={si} className="flex items-start gap-2 text-xs text-text-muted">
                    <span className={`font-bold flex-shrink-0 text-[10px] mt-0.5 ${s.color}`}>{si + 1}.</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-6 text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <Zap size={12} className="text-primary" />
          <span><span className="text-primary font-semibold">Skills</span> — você invoca</span>
        </div>
        <span className="text-text-muted/30">·</span>
        <div className="flex items-center gap-2">
          <Compass size={12} className="text-accent" />
          <span><span className="text-accent font-semibold">Steerings</span> — sempre ativos</span>
        </div>
        <span className="text-text-muted/30">·</span>
        <div className="flex items-center gap-2">
          <GitPullRequest size={12} className="text-success" />
          <span><span className="text-success font-semibold">Hooks</span> — disparam sozinhos</span>
        </div>
      </motion.div>
    </div>
  )
}
