import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface Props {
  current: number  // 0-based
  total: number
  onPrev: () => void
  onNext: () => void
  onGoTo: (index: number) => void
}

export function SlideNav({ current, total, onPrev, onNext, onGoTo }: Props) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="p-2 rounded-full glass text-text-muted hover:text-text disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
      >
        <ChevronLeft size={20} />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className="relative p-1"
          >
            <motion.div
              className={`w-2 h-2 rounded-full transition-colors ${
                i === current ? 'bg-primary' : 'bg-white/20 hover:bg-white/40'
              }`}
              animate={i === current ? { scale: 1.4 } : { scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            />
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="p-2 rounded-full glass text-text-muted hover:text-text disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110"
      >
        <ChevronRight size={20} />
      </button>

      <span className="ml-3 text-xs text-text-muted font-mono">
        {current + 1}/{total}
      </span>
    </div>
  )
}
