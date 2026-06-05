import { motion } from 'framer-motion'
import { Compass, Sparkles, User } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const autoFiles = [
  { file: 'project.md',   desc: 'Stack, estrutura de pastas, dependências — detectado ao abrir.' },
  { file: 'structure.md', desc: 'Padrões de arquitetura identificados ao navegar no código.' },
]

const customFiles = [
  { file: 'project-context',    trigger: 'auto',          desc: 'Stack, repos, frentes de atuação, fluxo operacional — sempre carregado.' },
  { file: 'jira-workflows',     trigger: 'auto',          desc: 'Board VSUS, campos obrigatórios, formato de Causa Raiz — sempre carregado.' },
  { file: 'payment-resilience', trigger: '*Payment*.php', desc: '6 regras para código financeiro — carrega só ao abrir arquivo de pagamento.' },
]

const previewLines = [
  { type: 'meta',    content: 'inclusion: auto' },
  { type: 'blank',   content: '' },
  { type: 'heading', content: '# Jira — Sustentação N3' },
  { type: 'section', content: '## Contexto' },
  { type: 'item',    content: '- Projeto: VSUS | Board: 2477' },
  { type: 'item',    content: '- Fix Version: [VSUS] PI 2/26' },
  { type: 'blank',   content: '' },
  { type: 'section', content: '## Campos obrigatórios' },
  { type: 'item',    content: '- Causa Raiz (customfield_10169)' },
  { type: 'item',    content: '- Resolução (customfield_10168)' },
  { type: 'item',    content: '- Horas SEMPRE na subtask' },
]

export function Steerings() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-4">
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-3">
        <Compass size={26} className="text-primary" />
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">Steerings</h2>
      </motion.div>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-base md:text-lg text-text-muted text-center max-w-3xl">
        Arquivos Markdown em{' '}
        <code className="px-1.5 py-0.5 rounded bg-white/10 text-primary font-mono text-sm">.kiro/steering/</code>
        {' '}— <span className="text-text font-semibold">contexto que o agente carrega antes de você digitar a primeira palavra.</span>
        {' '}Steering não executa nada. Ele só sabe. É a memória do agente sobre o seu projeto.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">

        {/* Auto-gerados */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="glass border-accent/30 p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2.5 bg-accent/20 text-accent flex-shrink-0"><Sparkles size={18} /></div>
            <div>
              <p className="text-xs text-accent/60 uppercase tracking-wider font-mono">Kiro gera</p>
              <h3 className="font-bold text-accent text-base">Auto-gerados</h3>
            </div>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            O Kiro observa o projeto ao abrir e cria automaticamente — stack, pastas, padrões detectados no código.
          </p>
          <div className="space-y-3 mt-1">
            {autoFiles.map(f => (
              <div key={f.file} className="flex items-start gap-2.5">
                <code className="text-xs text-accent font-mono bg-accent/10 px-2 py-0.5 rounded flex-shrink-0 mt-0.5">{f.file}</code>
                <p className="text-sm text-text-muted leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customizados */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="glass border-primary/30 p-5 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2.5 bg-primary/20 text-primary flex-shrink-0"><User size={18} /></div>
            <div>
              <p className="text-xs text-primary/60 uppercase tracking-wider font-mono">Time cria</p>
              <h3 className="font-bold text-primary text-base">Customizados do N3</h3>
            </div>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            Você cria com intenção. Cada arquivo ensina o agente algo sobre o contexto — sem repetir no chat toda vez.
          </p>
          <div className="space-y-3 mt-auto">
            {customFiles.map(f => (
              <div key={f.file} className="flex items-start gap-2.5">
                <div className="flex flex-col flex-shrink-0 gap-0.5 min-w-0">
                  <code className="text-xs text-primary font-mono bg-primary/10 px-2 py-0.5 rounded whitespace-nowrap">{f.file}</code>
                  <span className="text-xs text-text-muted/50 font-mono pl-0.5">{f.trigger}</span>
                </div>
                <p className="text-sm text-text-muted leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* File preview */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="glass p-5 flex flex-col gap-3">
          <div className="flex items-center gap-2 pb-2.5 border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-xs text-text-muted font-mono ml-1">jira-workflows.md</span>
          </div>
          <div className="font-mono space-y-1 flex-1">
            {previewLines.map((line, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className={
                  line.type === 'meta'    ? 'text-text-muted/30 text-xs' :
                  line.type === 'blank'   ? 'h-2' :
                  line.type === 'heading' ? 'text-primary font-bold text-sm' :
                  line.type === 'section' ? 'text-accent/80 text-xs font-semibold mt-1' :
                  'text-text-muted text-xs pl-2'
                }
              >
                {line.content}
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-text-muted/50 text-center border-t border-white/5 pt-2.5">
            O Kiro lê isso antes de qualquer interação com Jira
          </p>
        </motion.div>
      </div>

      <motion.p custom={5} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm text-text-muted/60 text-center">
        Steering <span className="text-text-muted font-medium">não executa nada</span> — só contextualiza.
        {' '}Ao injetar vocabulário do domínio, ancora o modelo no cluster semântico certo <span className="text-primary/70">antes</span> de você perguntar.
        {' '}Quer executar um fluxo? Isso é uma <span className="text-primary font-semibold">Skill</span>.
      </motion.p>
    </div>
  )
}
