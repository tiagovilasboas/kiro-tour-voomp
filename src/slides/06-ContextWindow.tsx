import { motion } from 'framer-motion'
import { Eye, AlertTriangle, Lightbulb, Layers } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const models = [
  // Kiro — com destaque
  { name: 'Claude Sonnet 4.6', tokens: '1M tokens', bar: 100, kiro: true, note: 'Padrão do Kiro. Sessões longas, war room, múltiplos arquivos.' },
  { name: 'Claude Opus 4.6', tokens: '200k tokens', bar: 20, kiro: true, note: 'Mais capaz. Debugging complexo, arquitetura.' },
  { name: 'Claude Opus 4.5', tokens: '200k tokens', bar: 20, kiro: true, note: 'Opus anterior. Bom raciocínio, mesmo custo do 4.6.' },
  // Mercado — referência
  { name: 'GPT-4o', tokens: '128k tokens', bar: 13, note: 'Base do ChatGPT. Multimodal.' },
  { name: 'Gemini 2.0 Flash', tokens: '1M tokens', bar: 100, note: 'Google. 1M tokens, foco em velocidade.' },
  { name: 'Llama 3 (local)', tokens: '128k tokens', bar: 13, note: 'Open source. Roda offline, sem custo de API.' },
]

// Como o Kiro monta a janela
const contextStack = [
  { label: 'Steerings', tokens: '~2–5k', color: 'bg-accent', desc: 'Injetados automaticamente antes de tudo' },
  { label: 'Arquivos abertos', tokens: '~10–50k', color: 'bg-primary', desc: 'Código relevante do projeto' },
  { label: 'Histórico da conversa', tokens: 'variável', color: 'bg-sky-400', desc: 'Suas perguntas e respostas anteriores' },
  { label: 'Sua mensagem', tokens: '~0.1–1k', color: 'bg-success', desc: 'O que você acabou de digitar' },
]

const insights = [
  {
    icon: Eye,
    color: 'text-primary bg-primary/15',
    title: 'O que o modelo enxerga',
    body: 'Tudo dentro da janela é contexto ativo. O modelo conecta informações de qualquer ponto para gerar a resposta.',
  },
  {
    icon: AlertTriangle,
    color: 'text-warning bg-warning/15',
    title: 'Quando a janela enche',
    body: 'O conteúdo mais antigo é descartado silenciosamente. O modelo esquece decisões tomadas lá atrás como se nunca tivessem existido.',
  },
  {
    icon: Lightbulb,
    color: 'text-success bg-success/15',
    title: 'Steerings são contexto permanente barato',
    body: 'Poucos tokens, injetados sempre. Em vez de repetir o contexto do projeto em cada mensagem, o Steering faz isso uma vez.',
  },
]

export function ContextWindow() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-4">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-3xl md:text-5xl font-bold gradient-text text-center">
        Context Window
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm md:text-base text-text-muted text-center max-w-3xl leading-relaxed">
        A <span className="text-primary font-semibold">janela de contexto</span> é o limite de tokens que o modelo processa de uma vez.
        {' '}<span className="text-warning font-medium">Um agente sem contexto é apenas autocomplete caro.</span>
      </motion.p>

      {/* Model comparison + Kiro stack side by side */}
      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">

        {/* Model comparison */}
        <div className="glass p-4 flex flex-col gap-3 self-start">
          <p className="text-xs text-text-muted/60 uppercase tracking-wider pb-1 border-b border-white/5">Janela por modelo</p>
          <div className="space-y-3">
            {models.map((m, i) => (
              <>
                {i === 3 && (
                  <div key="sep" className="flex items-center gap-2 py-1">
                    <div className="h-px flex-1 bg-white/5" />
                    <span className="text-[10px] text-text-muted/30 font-mono uppercase tracking-wider">mercado</span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                )}
                <div key={m.name} className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 w-36 flex-shrink-0">
                      <span className={`text-xs font-semibold leading-tight ${m.kiro ? 'text-primary' : 'text-text'}`}>{m.name}</span>
                      {m.kiro && <span className="text-[9px] bg-primary text-white px-1.5 py-0.5 rounded-full font-bold">Kiro</span>}
                    </div>
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${m.bar}%` }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className={`h-full rounded-full ${m.kiro ? 'bg-primary' : 'bg-white/20'}`}
                      />
                    </div>
                    <span className={`text-xs font-mono w-20 text-right flex-shrink-0 ${m.kiro ? 'text-primary font-bold' : 'text-text-muted'}`}>
                      {m.tokens}
                    </span>
                  </div>
                  <p className="text-xs text-text-muted/50 leading-tight pl-1">{m.note}</p>
                </div>
              </>
            ))}
          </div>
        </div>

        {/* Right column: stack + insights compactos */}
        <div className="flex flex-col gap-3">
          {/* How Kiro fills the window */}
          <div className="glass p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <Layers size={13} className="text-accent" />
              <p className="text-xs text-text-muted/60 uppercase tracking-wider">Como o Kiro monta a janela</p>
            </div>
            <div className="space-y-1.5">
              {contextStack.map((layer, i) => (
                <motion.div key={layer.label}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2.5">
                  <div className={`w-1.5 h-6 rounded-full flex-shrink-0 ${layer.color} opacity-80`} />
                  <div className="flex-1 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-sm font-semibold text-text">{layer.label}</span>
                      <p className="text-xs text-text-muted/60 leading-tight">{layer.desc}</p>
                    </div>
                    <span className="text-xs font-mono text-text-muted/40 flex-shrink-0">{layer.tokens}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Insights compactos — lista, sem cards separados */}
          <div className="glass p-4 flex flex-col gap-2">
            {insights.map((ins, i) => {
              const Icon = ins.icon
              return (
                <div key={ins.title} className="flex items-start gap-2.5">
                  <div className={`rounded-md p-1.5 flex-shrink-0 mt-0.5 ${ins.color}`}>
                    <Icon size={12} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-text">{ins.title}: </span>
                    <span className="text-sm text-text-muted">{ins.body}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </motion.div>
    </div>
  )
}
