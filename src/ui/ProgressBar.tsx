import { motion } from 'framer-motion'

interface Props {
  current: number  // 0-based
  total: number
}

export function ProgressBar({ current, total }: Props) {
  const progress = ((current + 1) / total) * 100

  return (
    <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-accent"
        animate={{ width: `${progress}%` }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </div>
  )
}
