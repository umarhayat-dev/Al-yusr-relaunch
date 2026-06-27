import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

const childContent = {
  h1: (
    <>
      Your child, reciting with{' '}
      <em className="italic text-wine">confidence</em>
    </>
  ),
  sub: 'Every teacher is vetted before they ever meet your child. Start with a free trial class. No commitment, no pressure.',
}

const adultContent = {
  h1: (
    <>
      Start from the very first letter.{' '}
      <em className="italic text-wine">No judgment</em>
    </>
  ),
  sub: "Starting from zero or coming back after years away, your teacher is matched to your level, your goals, and your schedule. No judgment, ever.",
}

export function Hero() {
  const [audience, setAudience] = useState<'child' | 'adult'>('child')
  const reduced = useReducedMotion()
  const content = audience === 'child' ? childContent : adultContent

  const easing = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  const fadeUp = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.6, delay: reduced ? 0 : delay, ease: easing },
  })

  return (
    <section className="relative overflow-hidden" style={{ padding: '78px 0 88px' }}>
      {/* Colonnade background */}
      <div className="absolute inset-0 flex items-end justify-end pr-[6%] pointer-events-none" style={{ opacity: 0.07 }}>
        <Colonnade
          heights={[55, 75, 100, 65, 45, 80, 35]}
          barWidth={18}
          gap={26}
          animated
        />
      </div>

      <div className="max-w-[1080px] mx-auto px-7 relative">
        <div className="max-w-[760px]">
          <motion.div {...fadeUp(0)}>
            <Eyebrow>Authentic Islamic learning, made easy</Eyebrow>
          </motion.div>

          {/* Audience toggle */}
          <motion.div {...fadeUp(0.08)} className="mt-6">
            <div
              className="inline-flex rounded-[999px] p-1 gap-1"
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--line)',
                boxShadow: 'var(--shadow)',
              }}
              role="group"
              aria-label="Choose your learning path"
            >
              <button
                onClick={() => setAudience('child')}
                className={`text-[13.5px] font-semibold rounded-[999px] px-4 py-[7px] border-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine ${
                  audience === 'child'
                    ? 'bg-wine text-[#fdeef0]'
                    : 'bg-transparent text-ink-soft hover:text-ink'
                }`}
                aria-pressed={audience === 'child'}
              >
                For my child
              </button>
              <button
                onClick={() => setAudience('adult')}
                className={`text-[13.5px] font-semibold rounded-[999px] px-4 py-[7px] border-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine ${
                  audience === 'adult'
                    ? 'bg-wine text-[#fdeef0]'
                    : 'bg-transparent text-ink-soft hover:text-ink'
                }`}
                aria-pressed={audience === 'adult'}
              >
                For me
              </button>
            </div>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-display mt-[14px]"
            style={{ fontSize: 'clamp(34px, 5.6vw, 60px)', fontWeight: 430 }}
          >
            {content.h1}
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="text-[19px] text-ink-soft max-w-[560px] mt-[22px] mb-[30px]"
          >
            {content.sub}
          </motion.p>

          <motion.div {...fadeUp(0.33)} className="flex gap-[14px] flex-wrap items-center">
            <Button href="/apply" as="a" variant="primary">
              Book a free trial class
            </Button>
            <Button href="/how-it-works" as="a" variant="ghost">
              See how it works
            </Button>
          </motion.div>

          {/* Language switcher */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex gap-3 mt-8 text-[13px] text-ink-soft"
            aria-label="Language options"
          >
            <button className="font-semibold text-wine hover:text-wine-deep transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine">EN</button>
            <span aria-hidden="true" className="text-[var(--line)]">|</span>
            <button className="hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine" lang="hi">हिन्दी</button>
            <span aria-hidden="true" className="text-[var(--line)]">|</span>
            <button className="hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine" lang="ur" dir="rtl">اردو</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
