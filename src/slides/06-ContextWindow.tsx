import { motion } from 'framer-motion'
import { Layers, AlertTriangle, Lightbulb } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

// Como o Kiro monta a janela
const contextStack = [
  { label: 'Steerings', tokens: '~2-5k', color: 'bg-accent', desc: 'Injetados automaticamente antes de tudo' },
  { label: 'Arquivos abertos', tokens: '~10-50k', color: 'bg-primary', desc: 'Código relevante do projeto' },
  { label: 'Histórico da conversa', tokens: 'variável', color: 'bg-sky-400', desc: 'Suas perguntas e respostas anteriores' },
  { label: 'Sua mensagem', tokens: '~0.1-1k', color: 'bg-success', desc: 'O que você acabou de digitar' },
]

const models = [
  { name: 'Claude Sonnet 4.6', tokens: '200k', bar: 100, kiro: true },
  { name: 'Claude Opus 4.6', tokens: '200k', bar: 100, kiro: true },
  { name: 'GPT-4o', tokens: '128k', bar: 64, kiro: false },
  { name: 'Gemini 2.0 Flash', tokens: '1M', bar: 500, kiro: false },
]

export function ContextWindow() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 py-4 gap-5">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-2xl md:text-4xl font-bold gradient-text text-center">
        Context Window
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm md:text-base text-text-muted text-center max-w-3xl leading-relaxed">
        Pense numa <span className="text-primary font-semibold">mesa de trabalho</span>: o modelo só "vê" o que está na mesa.
        {' '}Quando a mesa enche, o que estava na borda cai no chão.{' '}
        O tamanho da mesa é definido pelo <span className="text-text font-medium">modelo</span>.
        {' '}O que você coloca nela primeiro é definido pelo <span className="text-primary font-medium">Kiro</span>.
      </motion.p>

      {/* N3 context */}
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="glass-accent px-5 py-3 max-w-4xl text-center">
        <p className="text-sm text-text-muted leading-relaxed">
          <span className="text-text font-semibold">Ex:</span>{' '}
          Jira (evidência) + código (análise) + Confluence (post-mortems anteriores) + Steerings + causa raiz + resolução.
          {' '}Tudo na mesma sessão. Com 128k (Auto), na 8a mensagem o modelo esquece o início. Com Claude Sonnet 4.6 (200k), cabe muito mais contexto simultâneo.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Left: How Kiro fills the window */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="glass p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 mb-1">
            <Layers size={16} className="text-accent" />
            <p className="text-sm font-semibold text-text">Como o Kiro monta a janela</p>
          </div>
          <div className="space-y-3">
            {contextStack.map((layer, i) => (
              <motion.div key={layer.label}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-3">
                <div className={`w-2 h-10 rounded-full flex-shrink-0 ${layer.color} opacity-80`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-text">{layer.label}</span>
                    <span className="text-xs font-mono text-text-muted/50">{layer.tokens}</span>
                  </div>
                  <p className="text-xs text-text-muted/70 leading-tight">{layer.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Models + Key takeaways */}
        <div className="flex flex-col gap-4">
          {/* Compact model comparison */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="glass p-5 flex flex-col gap-2.5">
            <p className="text-sm font-semibold text-text mb-1">Janela por modelo</p>
            {models.map((m) => (
              <div key={m.name} className="flex items-center gap-2">
                <span className={`text-xs font-semibold w-36 flex-shrink-0 ${m.kiro ? 'text-primary' : 'text-text-muted'}`}>
                  {m.name}
                  {m.kiro && <span className="ml-1 text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded-full font-bold">Kiro</span>}
                </span>
                <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${m.bar}%` }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className={`h-full rounded-full ${m.kiro ? 'bg-primary' : 'bg-white/20'}`}
                  />
                </div>
                <span className={`text-xs font-mono w-12 text-right flex-shrink-0 ${m.kiro ? 'text-primary font-bold' : 'text-text-muted/50'}`}>
                  {m.tokens}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Key insights */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="glass p-5 flex flex-col gap-3">
            <div className="flex items-start gap-2.5">
              <AlertTriangle size={14} className="text-warning mt-0.5 flex-shrink-0" />
              <p className="text-sm text-text-muted leading-relaxed">
                <span className="text-text font-semibold">Quando a janela enche:</span> o conteúdo mais antigo cai fora silenciosamente. O modelo continua respondendo normalmente, sem avisar que esqueceu. Você só percebe quando ele contradiz algo que disse lá atrás.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <Lightbulb size={14} className="text-success mt-0.5 flex-shrink-0" />
              <p className="text-sm text-text-muted leading-relaxed">
                <span className="text-text font-semibold">Steerings são contexto permanente barato:</span> 2-5k tokens injetados sempre, antes de tudo. Evitam que você repita "estou no projeto seller-greenn-back, usamos PHP, board VSUS..." em toda sessão.
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Thread anchor */}
      <p className="text-xs text-text-muted/25 text-center italic">
        Quem entende os limites controla o resultado.
      </p>
    </div>
  )
}
