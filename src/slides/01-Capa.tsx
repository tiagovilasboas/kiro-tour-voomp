import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Capa() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center relative px-8">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-4xl">
        {/* Logo */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="mb-10 flex justify-center">
          <motion.img
            src="/kiro-icon.svg"
            alt="Kiro"
            className="h-36 md:h-48"
            animate={{
              y: [0, -14, 0],
              rotate: [0, 3, -3, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
        >
          <span className="text-text">Kiro: </span>
          <span className="text-text/50">a maioria usa.</span>
          <br />
          <span className="gradient-text">Poucos entendem.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-xl text-text-muted font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Do fundamento dos LLMs ao sistema completo,
          Specs, Steerings, Skills e Hooks com intenção, não por instinto.
        </motion.p>

        {/* Brand bar */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-4 text-text-muted"
        >
          <span className="text-base font-semibold text-text">Cogna</span>
          <span className="text-white/20">·</span>
          <span className="text-base font-semibold text-primary-light">Voomp</span>
          <span className="text-white/20">·</span>
          <span className="text-sm">Time de Sustentação</span>
        </motion.div>
      </div>
    </div>
  )
}
