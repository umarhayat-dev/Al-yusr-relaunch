import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function SponsorHero() {
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
        <Colonnade heights={[30, 50, 70, 45, 90, 60, 100]} barWidth={16} gap={22} animated />
      </div>
      <div className="max-w-[1080px] mx-auto px-7 relative">
        <div className="max-w-[680px]">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Sponsor a student</Eyebrow>
          </motion.div>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display mt-4"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 430 }}
          >
            Give a child the gift of the Quran.
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-[19px] text-ink-soft mt-5 mb-8 max-w-[560px]"
          >
            Our Sponsor-a-Student programme funds free places for families who cannot afford
            classes. Your giving is transparent, accountable, and lands on a real student.
          </motion.p>
          <motion.div {...fadeUp(0.28)} className="flex gap-3 flex-wrap">
            <Button href="/apply?sponsor=true" as="a" variant="primary">
              Sponsor a student
            </Button>
            <Button href="/about#contact" as="a" variant="ghost">
              Ask us a question
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
