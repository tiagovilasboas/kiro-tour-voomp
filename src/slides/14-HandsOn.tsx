import { motion } from 'framer-motion'
import { useState } from 'react'
import { Zap, Copy, Check, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const PROMPT = `You are helping a developer from Squad Sustentação N3 (Cogna/Voomp)
create personalized Kiro automations based on their real context.
The team handles P3+ incidents, investigates bugs, analyzes root causes,
and works daily with Jira (VSUS board) and Confluence (Sustentação space).

RULES (follow strictly):
- Never make assumptions about the developer's role or activities
- Never invent tasks, pages or data that weren't returned by MCP
- Never create files without explicit approval
- Never delete, remove or overwrite any existing artifact — EVER
- If something similar already exists in ~/.kiro/, show what exists,
  explain the difference, and ask whether to extend it or create a new one
- Only complement: add value without touching what already works
- All artifact names and content must be in English
- Up to 3 Steerings, 3 Skills and 3 Hooks (only if each generates real impact)
- Do not force quantity: if only 1 Steering makes sense, propose 1
- The developer will create more as they learn; start small
- If MCP access fails, stop and ask before proceeding
- Confirm each MCP access independently (Jira success ≠ Confluence success)
- All artifacts must be global (~/.kiro/) unless explicitly requested otherwise

---

STEP 1 - QUESTIONS (wait for all answers before proceeding)

Ask these 3 questions:

1. What is your name?
2. What is your main role on the team?
   (backend dev, QA, tech lead, frontend...)
3. What are the top 3 activities you repeat most in your daily work?

---

STEP 2 - CONTEXT GATHERING

After receiving answers, gather context from TWO sources independently:

Source A - Jira MCP:
- Fetch last 10 tasks assigned to the developer in project VSUS
- Identify: most common issue types, frequent status transitions, patterns

If Jira MCP fails: inform the developer and ask if they can provide
their last 5 task keys manually. Do not skip this step.

Source B - Confluence MCP:
- Search for pages in the Sustentação space related to the developer's role
- Look for playbooks, post-mortems, onboarding docs, process documentation

If Confluence MCP fails: inform the developer and ask if they can share
relevant page links. Do not skip this step.

---

STEP 3 - PROPOSAL (up to 3 per type, only if impactful)

Based ONLY on data collected (never invent).
Present exactly this format for each:

| # | Type | Name | Problem it solves | Path |
|---|------|------|-------------------|------|
| 1 | Steering | example-name | ... | ~/.kiro/steering/ |

After the table, explain briefly why each was prioritized.

Then ask: "Which ones do you approve? I'll create them one at a time."

DO NOT create any files until the developer explicitly approves.
DO NOT force quantity: only propose what generates real impact.

---

STEP 4 - IMPLEMENTATION (only after explicit approval)

For each approved automation, use the correct format:

Steering (~/.kiro/steering/[name].md):
---
inclusion: always
---
[content in English]

Skill (~/.kiro/skills/[name]/SKILL.md):
# [Skill Name]
## When to use
## Steps
## Expected output

Hook (~/.kiro/hooks/[name].json):
{
  "name": "[name]",
  "version": "1.0.0",
  "when": { "type": "[event]" },
  "then": { "type": "askAgent", "prompt": "..." }
}

After creating each file, confirm what was created and ask:
"Want me to create the next one, or would you like to test this first?"

Never batch-create all files at once.`

const phases = [
  { label: 'Questions', desc: 'Modelo pergunta quem você é, sem suposições', color: 'text-primary' },
  { label: 'Context', desc: 'Consulta Jira VSUS e Confluence Sustentação via MCP', color: 'text-accent' },
  { label: 'Proposal', desc: 'Propõe plano priorizado para aprovação', color: 'text-success' },
  { label: 'Implement', desc: 'Cria artefatos globais em ~/.kiro/', color: 'text-warning' },
]

export function HandsOn() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMPT)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col gap-4">
        {/* Header */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center gap-2">
            <Zap size={22} className="text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Hands-on</h2>
          </div>
          <p className="text-sm text-text-muted max-w-2xl">
            Cole esse prompt no Kiro usando <span className="text-primary font-medium">Claude Sonnet 4.6</span>.
            Todos nós estamos no mesmo time, mas cada um vai sair com automações diferentes:
            o Kiro adapta ao seu papel e às suas tasks reais no VSUS.
          </p>
        </motion.div>

        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Code block */}
          <div className="md:col-span-2 flex flex-col">
            <div className="glass border border-accent/25 flex flex-col overflow-hidden rounded-2xl">
              {/* Header bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-text-muted/50 font-mono">prompt · Claude Sonnet 4.6</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
              {/* Code content */}
              <div className="overflow-y-auto" style={{ maxHeight: '340px' }}>
                <pre className="p-4 text-xs font-mono text-text-muted/80 leading-relaxed whitespace-pre-wrap">
                  {PROMPT.split('\n').map((line, i) => {
                    if (line.startsWith('STEP') || line.startsWith('RULES')) return <span key={i} className="text-accent font-semibold block">{line}{'\n'}</span>
                    if (/^\d\./.test(line.trim())) return <span key={i} className="text-primary block">{line}{'\n'}</span>
                    if (line.includes('DO NOT') || line.includes('Never') || line.startsWith('- Never')) return <span key={i} className="text-warning font-semibold block">{line}{'\n'}</span>
                    if (line.startsWith('---')) return <span key={i} className="text-white/10 block">{line}{'\n'}</span>
                    if (line.startsWith('- ') || line.startsWith('| ')) return <span key={i} className="text-text-muted/60 block">{line}{'\n'}</span>
                    if (line.startsWith('Source') || line.startsWith('If ')) return <span key={i} className="text-sky-400/80 block">{line}{'\n'}</span>
                    return <span key={i} className="block">{line}{'\n'}</span>
                  })}
                </pre>
              </div>
            </div>
          </div>

          {/* Right: phases + why */}
          <div className="flex flex-col gap-3">
            <div className="glass p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Sparkles size={13} className="text-primary" />
                <p className="text-xs text-text-muted/60 uppercase tracking-wider font-mono">Spec Driven</p>
              </div>
              <div className="space-y-2.5">
                {phases.map((p, i) => (
                  <div key={p.label} className="flex items-start gap-2.5">
                    <span className={`text-xs font-bold font-mono px-1.5 py-0.5 rounded bg-white/5 flex-shrink-0 ${p.color}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className={`text-sm font-semibold ${p.color}`}>{p.label}</span>
                      <p className="text-xs text-text-muted leading-tight">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-accent p-4 flex flex-col gap-2">
              <p className="text-sm font-semibold text-text">Por que isso e não um repo pronto</p>
              <p className="text-xs text-text-muted leading-relaxed">
                Instalar superpoderes de outra pessoa é passivo. Esse prompt é ativo:
                as automações emergem do <span className="text-primary font-medium">seu</span> contexto,
                dos seus fluxos, dos seus problemas. É <span className="text-text font-medium">ownership imediata</span>.
              </p>
              <p className="text-xs text-text-muted/50 mt-1 italic">
                "A primeira versão sempre funciona só pra você. Está tudo bem."
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  )
}
