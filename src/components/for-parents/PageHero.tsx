import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function PageHero() {
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
      <div className="absolute inset-0 flex items-end justify-end pr-[6%] pointer-events-none" style={{ opacity: 0.07 }}>
        <Colonnade heights={[40, 60, 85, 55, 75, 45, 30]} barWidth={16} gap={22} animated />
      </div>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[680px]">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>For parents</Eyebrow>
          </motion.div>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display mt-4"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 430 }}
          >
            Everything you need to know before you trust us with your child.
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[19px] text-ink-soft mt-5 mb-8 max-w-[560px]"
          >
            We know you are trusting a stranger with your child. This page answers the questions you
            have not asked yet, starting with the ones that matter most.
          </motion.p>
          <motion.div {...fadeUp(0.28)} className="flex gap-3 flex-wrap">
            <Button href="/apply" as="a" variant="primary">
              Book your free trial class
            </Button>
            <Button href="/how-it-works" as="a" variant="ghost">
              See how classes work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
