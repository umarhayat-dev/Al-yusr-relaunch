import { motion, useReducedMotion } from 'framer-motion'

interface ColonnadeProps {
  heights?: number[]
  className?: string
  barWidth?: number
  gap?: number
  animated?: boolean
  brassIndex?: number
}

export function Colonnade({
  heights = [60, 80, 100, 70, 50, 85, 40],
  className = '',
  barWidth = 18,
  gap = 26,
  animated = true,
  brassIndex = -1,
}: ColonnadeProps) {
  const reduced = useReducedMotion()

  return (
    <div
      className={`flex items-end ${className}`}
      style={{ gap }}
      aria-hidden="true"
    >
      {heights.map((h, i) => (
        <motion.span
          key={i}
          style={{
            width: barWidth,
            height: `${h}%`,
            borderRadius: '9px 9px 0 0',
            background: i === brassIndex ? '#B5894E' : '#4A0218',
            display: 'block',
            flexShrink: 0,
          }}
          initial={animated && !reduced ? { y: 40, opacity: 0 } : { y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: reduced ? 0 : 0.9,
            delay: reduced ? 0 : i * 0.07,
            ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
          }}
        />
      ))}
    </div>
  )
}
