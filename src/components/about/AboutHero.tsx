import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function AboutHero() {
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  const fadeUp = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay, ease },
  })

  return (
    <section
      className="bg-bone-2 border-b relative overflow-hidden"
      style={{ borderColor: 'var(--line-soft)', padding: '72px 0 80px' }}
    >
      <div
        className="absolute inset-0 flex items-end justify-end pr-[6%] pointer-events-none"
        style={{ opacity: 0.07 }}
        aria-hidden="true"
      >
        <Colonnade heights={[35, 55, 80, 50, 100, 65, 45]} barWidth={16} gap={22} animated />
      </div>
      <div className="max-w-[1080px] mx-auto px-7 relative">
        <div className="max-w-[680px]">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>About AlYusr</Eyebrow>
          </motion.div>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display mt-4"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 430 }}
          >
            Authentic Islamic learning, made easy.
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[19px] text-ink-soft mt-5 max-w-[580px]"
          >
            AlYusr means ease. That is not just a name. It is the reason every decision we make
            starts with the question: how do we make this simpler, more accessible, and less
            intimidating for the student in front of us?
          </motion.p>
        </div>
      </div>
    </section>
  )
}
