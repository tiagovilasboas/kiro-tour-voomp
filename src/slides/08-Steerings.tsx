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

// Steerings auto-gerados pelo Kiro
const autoFiles = [
  { file: 'project.md', desc: 'Stack, estrutura de pastas, dependências — detectado ao abrir o projeto.' },
  { file: 'structure.md', desc: 'Padrões de arquitetura identificados ao navegar no código.' },
]

// Steerings reais do time de sustentação
const customFiles = [
  { file: 'contexto-projeto.md', desc: 'PHP 7.4, Lumen, tabelas principais, rotas críticas, equipe do time.' },
  { file: 'jira-sustentacao.md', desc: 'Projeto VSUS, board 2477, formato de Causa Raiz e Resolução, registro de horas em subtask.' },
  { file: 'boas-praticas-codigo.md', desc: 'KISS, YAGNI, DRY, naming conventions — regras do N3.' },
  { file: 'code-review-sustentacao.md', desc: 'Checklist de PR: escopo cirúrgico, PHP 7.4, sem composer.lock, segurança.' },
  { file: 'completude-tasks-jira.md', desc: 'Checklist obrigatório antes de mover task: Causa Raiz, subtask QA, worklog.' },
  { file: 'confluence-sustentacao-estrutura.md', desc: 'Estrutura de pastas do Confluence, critério por seção, quando criar sub-página.' },
  { file: 'investigacao-bugs.md', desc: 'Workflow de investigação: Jira → Grafana → Logs → Código → Hipóteses.' },
  { file: 'war-room.md', desc: 'Protocolo de war room: environments, formato de status, quem acionar.' },
]

// Preview de arquivo real
const previewLines = [
  { type: 'meta', content: 'inclusion: auto' },
  { type: 'blank', content: '' },
  { type: 'heading', content: '# Jira — Sustentação N3' },
  { type: 'section', content: '## Contexto' },
  { type: 'item', content: '- Projeto: VSUS | Board: 2477 (Kanban)' },
  { type: 'item', content: '- Org: cogna.atlassian.net' },
  { type: 'blank', content: '' },
  { type: 'section', content: '## Campos obrigatórios para bugs' },
  { type: 'item', content: '- Causa Raiz (customfield_10169)' },
  { type: 'item', content: '- Descrição da Resolução (customfield_10168)' },
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
        <code className="px-1.5 py-0.5 rounded bg-white/10 text-primary font-mono">.kiro/steering/</code>
        {' '}— contexto e orientações persistentes. Existem dois tipos:
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">

        {/* Auto-gerados */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="glass border-accent/30 p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="rounded-lg p-2 bg-accent/20 text-accent"><Sparkles size={16} /></div>
            <div>
              <p className="text-[10px] text-accent/60 uppercase tracking-wider font-mono">Kiro gera</p>
              <h3 className="font-bold text-accent text-sm">Auto-gerados</h3>
            </div>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            O Kiro observa o projeto e cria automaticamente — detectando stack, estrutura e padrões do código.
          </p>
          <div className="space-y-2 mt-auto">
            {autoFiles.map(f => (
              <div key={f.file} className="flex items-start gap-2">
                <code className="text-[10px] text-accent font-mono bg-accent/10 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">{f.file}</code>
                <p className="text-[11px] text-text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Customizados — steerings reais */}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="glass border-primary/30 p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="rounded-lg p-2 bg-primary/20 text-primary"><User size={16} /></div>
            <div>
              <p className="text-[10px] text-primary/60 uppercase tracking-wider font-mono">Time cria</p>
              <h3 className="font-bold text-primary text-sm">Customizados do N3</h3>
            </div>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Definem contexto com intenção — padrões, processos, regras de negócio que o agente deve sempre respeitar.
          </p>
          <div className="space-y-1.5 mt-auto">
            {customFiles.map(f => (
              <div key={f.file} className="flex items-start gap-2">
                <code className="text-[10px] text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 whitespace-nowrap">{f.file}</code>
                <p className="text-[11px] text-text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* File preview */}
        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="glass p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 pb-2 border-b border-white/5">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500/60" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <span className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <span className="text-[10px] text-text-muted font-mono ml-1 truncate">jira-sustentacao.md</span>
          </div>
          <div className="font-mono space-y-0.5 flex-1">
            {previewLines.map((line, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className={
                  line.type === 'meta' ? 'text-text-muted/30 text-[10px]' :
                  line.type === 'blank' ? 'h-1.5' :
                  line.type === 'heading' ? 'text-primary font-bold text-xs' :
                  line.type === 'section' ? 'text-accent/80 text-[11px] font-semibold mt-1' :
                  'text-text-muted text-[11px] pl-2'
                }
              >
                {line.content}
              </motion.div>
            ))}
          </div>
          <p className="text-[10px] text-text-muted/40 text-center border-t border-white/5 pt-2">
            O Kiro lê isso antes de qualquer interação com Jira
          </p>
        </motion.div>
      </div>
    </div>
  )
}
