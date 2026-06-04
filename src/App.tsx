import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { SlideWrapper } from './ui/SlideWrapper'
import { ProgressBar } from './ui/ProgressBar'
import { SlideNav } from './ui/SlideNav'

import { Capa } from './slides/01-Capa'
import { EvolucaoIA } from './slides/02-EvolucaoIA'
import { Tokens } from './slides/03-Tokens'
import { LLMs } from './slides/04-LLMs'
import { IlusaoPensamento } from './slides/05-IlusaoPensamento'
import { Embeddings } from './slides/05-Embeddings'
import { ContextWindow } from './slides/06-ContextWindow'
import { SpecDriven } from './slides/07-SpecDriven'
import { IntroKiro } from './slides/08-IntroKiro'
import { Steerings } from './slides/08-Steerings'
import { Skills } from './slides/09-Skills'
import { AgentHooks } from './slides/10-AgentHooks'
import { Encerramento } from './slides/11-Encerramento'
import { Recursos } from './slides/12-Recursos'

const slides = [
  Capa,            // 1. Abertura
  EvolucaoIA,      // 2. 70 anos de IA em 3 momentos
  Tokens,          // 3. Unidade fundamental + billing
  LLMs,            // 4. O que são, modelos conhecidos
  IlusaoPensamento,// 5. Desmitificar: não pensam, reconhecem padrões
  Embeddings,      // 6. Como "entendem" significado
  ContextWindow,   // 7. Limites e por que Steerings são eficientes
  SpecDriven,      // 8. Requirements → Design → Tasks
  IntroKiro,       // 9. Kiro & Seus Superpoderes
  Steerings,       // 10. Os 8 steerings reais do N3
  Skills,          // 11. 4 skills vantajosas
  AgentHooks,      // 12. 10 hooks categorizados
  Encerramento,    // 13. CTA + prática
  Recursos,        // 14. Links de estudo
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
