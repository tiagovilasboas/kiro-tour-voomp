import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SlideWrapper } from './ui/SlideWrapper'
import { ProgressBar } from './ui/ProgressBar'
import { SlideNav } from './ui/SlideNav'

import { Capa } from './slides/01-Capa'
import { EvolucaoIA } from './slides/02-EvolucaoIA'
import { Tokens } from './slides/03-Tokens'
import { LLMs } from './slides/04-LLMs'
import { Embeddings } from './slides/05-Embeddings'
import { ContextWindow } from './slides/06-ContextWindow'
import { IlusaoPensamento } from './slides/07-IlusaoPensamento'
import { Rollback } from './slides/07c-Rollback'
import { IDEsIA } from './slides/07b-IDEsIA'
import { IntroKiro } from './slides/08-IntroKiro'
import { KiroAvancado } from './slides/08b-KiroAvancado'
import { SpecDriven } from './slides/09-SpecDriven'
import { Steerings } from './slides/10-Steerings'
import { Skills } from './slides/11-Skills'
import { AgentHooks } from './slides/12-AgentHooks'
import { HandsOn } from './slides/14-HandsOn'
import { Recursos } from './slides/15-Recursos'

const slides = [
  Capa,            // 1.  Abertura
  EvolucaoIA,      // 2.  70 anos de IA em 4 momentos
  LLMs,            // 3.  O que são, modelos disponíveis no Kiro
  Tokens,          // 4.  Unidade fundamental + billing
  Embeddings,      // 5.  Como "entendem" significado
  ContextWindow,   // 6.  Limites e como o Kiro monta a janela
  Rollback,        // 7.  O Rollback da IA: problema (custo real)
  IlusaoPensamento,// 8.  Pattern matching, não raciocínio (causa técnica)
  IDEsIA,          // 9.  IDEs com IA: cada uma com um propósito
  IntroKiro,       // 10. Kiro como Sistema: 4 pilares + 4 avançados
  KiroAvancado,    // 11. Kiro Avançado: mapeamento futuro
  SpecDriven,      // 12. Spec Driven: Requirements → Design → Tasks
  Steerings,       // 13. Steerings: contexto persistente
  Skills,          // 14. Skills: fluxos completos invocáveis
  AgentHooks,      // 15. Hooks: automação por eventos
  HandsOn,         // 16. Hands-on: prompt interativo + CTA
  Recursos,        // 17. Recursos de estudo
]

function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  const CurrentSlide = slides[current]

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-surface">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[100px]" />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <SlideWrapper key={current} direction={direction}>
          <CurrentSlide />
        </SlideWrapper>
      </AnimatePresence>

      <ProgressBar current={current} total={slides.length} />
      <SlideNav current={current} total={slides.length} onPrev={prev} onNext={next} onGoTo={goTo} />
    </div>
  )
}

export default App
