import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function ProgramsHero() {
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
        <Colonnade heights={[46, 70, 100, 60, 80, 40, 55]} barWidth={16} gap={22} animated />
      </div>

      <div className="max-w-[1080px] mx-auto px-7 relative">
        <div className="max-w-[680px]">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Programs</Eyebrow>
          </motion.div>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display mt-4"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 430 }}
          >
            Four courses, one clear path from first letter to fluency.
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[19px] text-ink-soft mt-5 mb-8 max-w-[560px]"
          >
            Every course runs one-on-one or in a small group. Format and pricing are set at your
            free consultation, tailored to your region.
          </motion.p>
          <motion.div {...fadeUp(0.28)}>
            <Button href="/apply" as="a" variant="primary">
              Book a free trial class
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
