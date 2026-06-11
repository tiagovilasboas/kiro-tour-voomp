import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

// Hub-and-spoke nos dois clusters — cada um usa seu próprio SVG com viewBox 0 0 100 100
// Centro sempre em (50, 50) dentro do seu SVG

const words = [
  // Saudações — centro (50,50), pontos em arco vertical
  { word: 'oi',        x: 50, y: 50, color: '#34d399' },
  { word: 'bom dia',   x: 50, y: 14, color: '#6ee7b7' },
  { word: 'olá',       x: 76, y: 30, color: '#6ee7b7' },
  { word: 'boa tarde', x: 76, y: 68, color: '#34d399' },
  { word: 'hey',       x: 24, y: 30, color: '#34d399' },
  { word: 'e aí',      x: 24, y: 68, color: '#a7f3d0' },

  // Pagamentos — centro (50,50), pontos em arco horizontal (levemente diferente)
  { word: 'payment',     x: 50, y: 50, color: '#818cf8' },
  { word: 'checkout',    x: 50, y: 14, color: '#818cf8' },
  { word: 'gateway',     x: 80, y: 28, color: '#6366f1' },
  { word: 'transaction', x: 80, y: 68, color: '#6366f1' },
  { word: 'PIX',         x: 20, y: 40, color: '#a5b4fc' },
  { word: 'cobrança',    x: 20, y: 74, color: '#818cf8' },
]

const connections = [
  // saudações
  { x1: 50, y1: 50, x2: 50, y2: 14, color: '#34d399' },
  { x1: 50, y1: 50, x2: 76, y2: 30, color: '#34d399' },
  { x1: 50, y1: 50, x2: 76, y2: 68, color: '#34d399' },
  { x1: 50, y1: 50, x2: 24, y2: 30, color: '#34d399' },
  { x1: 50, y1: 50, x2: 24, y2: 68, color: '#34d399' },
  // pagamentos
  { x1: 50, y1: 50, x2: 50, y2: 14, color: '#6366f1' },
  { x1: 50, y1: 50, x2: 80, y2: 28, color: '#6366f1' },
  { x1: 50, y1: 50, x2: 80, y2: 68, color: '#6366f1' },
  { x1: 50, y1: 50, x2: 20, y2: 40, color: '#6366f1' },
  { x1: 50, y1: 50, x2: 20, y2: 74, color: '#6366f1' },
]

const insights = [
  {
    title: 'O que é um vetor?',
    body: 'Pense num GPS: cada lugar tem coordenadas (lat, lon). Embeddings fazem o mesmo com palavras: cada uma ganha coordenadas no "espaço do significado". Palavras próximas semanticamente ficam com coordenadas próximas.',
  },
  {
    title: 'Por que importa para o Kiro?',
    body: 'Quando você escreve "payment" num Steering, o modelo também "entende" checkout, gateway e PIX: estão no mesmo cluster. O contexto se propaga sem você listar tudo explicitamente.',
  },
  {
    title: 'Na prática para o N3',
    body: 'Use termos do domínio nos Steerings: VSUS, PIX, sale, subscription, incident. O modelo parte do cluster certo antes da primeira pergunta. Menos contexto repetido, respostas mais precisas.',
  },
]

export function Embeddings() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 gap-2">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="text-2xl md:text-4xl font-bold gradient-text text-center">
        Embeddings
      </motion.h2>

      <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="text-sm md:text-base text-text-muted text-center max-w-3xl lg:max-w-5xl leading-relaxed">
        Antes de processar, o modelo converte cada palavra (token) em coordenadas num espaço matemático.{' '}
        <span className="text-primary font-semibold">Palavras com significado próximo ficam próximas nesse espaço.</span>
        {' '}É como um GPS do significado: proximidade geográfica = proximidade semântica.
      </motion.p>

      <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* LEFT: SVG com 2 quadrantes */}
        <div className="glass p-5 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-muted/70 font-medium">Palavras próximas = significados semelhantes</p>
            <p className="text-xs text-text-muted/40 font-mono whitespace-nowrap">"payment" → [0.23, −0.87, ...]</p>
          </div>

          <div className="relative w-full rounded-xl bg-surface/40 border border-white/5 overflow-hidden"
            style={{ height: '360px' }}>

            {/* Dois SVGs lado a lado, cada um no seu quadrante */}
            <div className="absolute inset-0 flex">

              {/* Quadrante esquerdo: saudações */}
              <div className="flex-1 relative flex flex-col">
                <p className="text-center pt-3 pb-1 text-xs font-bold tracking-widest" style={{ color: '#34d399', opacity: 0.7 }}>SAUDAÇÕES</p>
                <div className="flex-1 relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  {connections.filter((_, i) => i < 5).map((c, i) => (
                    <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                      stroke={c.color} strokeWidth="0.8" strokeDasharray="1.8 1.2" opacity="0.6" />
                  ))}
                  {words.slice(0, 6).map((p, i) => (
                    <motion.g key={p.word}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.07, type: 'spring', stiffness: 220, damping: 18 }}>
                      <circle cx={p.x} cy={p.y - 2.5} r="2.8" fill={p.color} opacity="0.25" />
                      <circle cx={p.x} cy={p.y - 2.5} r="1.8" fill={p.color} />
                      <text x={p.x} y={p.y + 2.5} textAnchor="middle" dominantBaseline="middle"
                        fill={p.color} fontSize="5" fontWeight="700" fontFamily="sans-serif">
                        {p.word}
                      </text>
                    </motion.g>
                  ))}
                </svg>
                </div>
              </div>

              {/* Divisor */}
              <div className="w-px bg-white/[0.08] self-stretch my-3" />

              {/* Quadrante direito: pagamentos */}
              <div className="flex-1 relative flex flex-col">
                <p className="text-center pt-3 pb-1 text-xs font-bold tracking-widest" style={{ color: '#818cf8', opacity: 0.7 }}>PAGAMENTOS</p>
                <div className="flex-1 relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                  {connections.filter((_, i) => i >= 5).map((c, i) => (
                    <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
                      stroke={c.color} strokeWidth="0.8" strokeDasharray="1.8 1.2" opacity="0.6" />
                  ))}
                  {words.slice(6).map((p, i) => (
                    <motion.g key={p.word}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.07, type: 'spring', stiffness: 220, damping: 18 }}>
                      <circle cx={p.x} cy={p.y - 2.5} r="2.8" fill={p.color} opacity="0.25" />
                      <circle cx={p.x} cy={p.y - 2.5} r="1.8" fill={p.color} />
                      <text x={p.x} y={p.y + 2.5} textAnchor="middle" dominantBaseline="middle"
                        fill={p.color} fontSize="5" fontWeight="700" fontFamily="sans-serif">
                        {p.word}
                      </text>
                    </motion.g>
                  ))}
                </svg>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-text-muted/40 text-center">
            Espaço vetorial 2D simplificado. Na prática são centenas de dimensões
          </p>
        </div>

        {/* RIGHT: Insights */}
        <div className="flex flex-col gap-3">
          {insights.map((ins, i) => (
            <motion.div key={ins.title}
              custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="glass p-4 flex flex-col gap-1.5 flex-1">
              <p className="text-sm font-semibold text-text">{ins.title}</p>
              <p className="text-xs text-text-muted leading-relaxed">{ins.body}</p>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Disclaimer: embeddings no modelo vs no Kiro */}
      <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible"
        className="w-full max-w-6xl flex items-start gap-4 px-1">
        <div className="flex-1 text-center">
          <p className="text-xs text-text-muted/50 font-mono leading-relaxed">
            <span className="text-accent/60 font-semibold">No modelo (treinamento):</span>
            {' '}embeddings são a representação interna aprendida em bilhões de textos. Fixos. Você não os muda.
          </p>
        </div>
        <div className="w-px bg-white/5 self-stretch" />
        <div className="flex-1 text-center">
          <p className="text-xs text-text-muted/50 font-mono leading-relaxed">
            <span className="text-primary/60 font-semibold">No Kiro (indexação local):</span>
            {' '}modelo de embedding separado indexa o codebase para encontrar arquivos relevantes antes de chamar o LLM.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
