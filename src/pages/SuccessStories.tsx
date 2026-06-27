import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function SuccessStories() {
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  const fadeUp = (delay: number) => ({
    initial: reduced ? {} : { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.55, delay: reduced ? 0 : delay, ease },
  })

  return (
    <main id="main-content">
      <section
        className="bg-bone-2 border-b relative overflow-hidden"
        style={{ borderColor: 'var(--line-soft)', padding: '72px 0 80px' }}
      >
        <div
          className="absolute inset-0 flex items-end justify-end pr-[6%] pointer-events-none"
          style={{ opacity: 0.07 }}
          aria-hidden="true"
        >
          <Colonnade heights={[40, 65, 90, 55, 100, 70, 45]} barWidth={16} gap={22} animated />
        </div>
        <div className="max-w-[1080px] mx-auto px-7 relative">
          <div className="max-w-[680px]">
            <motion.div {...fadeUp(0)}><Eyebrow>Student stories</Eyebrow></motion.div>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display mt-4"
              style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 430 }}
            >
              Real students. Real progress.
            </motion.h1>
            <motion.p
              {...fadeUp(0.2)}
              className="text-[19px] text-ink-soft mt-5 max-w-[560px]"
            >
              We are in our early days. Stories from real students and families will be added here
              as they come. In the meantime, the best way to see what we do is to try a free class.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
        <div className="max-w-[1080px] mx-auto px-7 max-w-[720px]">
          <Eyebrow>Our commitment</Eyebrow>
          <h2
            className="font-display mt-3 mb-8"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            What success means at AlYusr
          </h2>
          <blockquote
            className="rounded-[var(--radius)] bg-white p-8"
            style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
          >
            <div className="w-[5px] h-[36px] rounded-[3px] bg-wine mb-5" aria-hidden="true" />
            <p className="font-display text-[18px] text-ink leading-relaxed mb-4 italic" style={{ fontWeight: 430 }}>
              "We built AlYusr because families everywhere deserve authentic, trusted Islamic
              education online. Every student who learns with us is proof that the gap can be
              closed."
            </p>
            <footer className="text-[14px] text-ink-soft">
              <span className="font-semibold text-ink">AlYusr Institute</span>, founding commitment
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1080px] mx-auto px-7">
          <div
            className="rounded-[var(--radius)] p-10 md:p-14 text-center"
            style={{ background: '#4A0218' }}
          >
            <Eyebrow className="text-brass [&>span]:bg-brass justify-center">
              Be the first
            </Eyebrow>
            <h2
              className="font-display mt-4 mb-4"
              style={{ fontSize: 'clamp(26px, 3.6vw, 40px)', fontWeight: 430, color: 'var(--wine-callout-text)' }}
            >
              Your child's story could be next.
            </h2>
            <p className="text-[17px] max-w-[480px] mx-auto mb-8" style={{ color: 'var(--wine-bg-muted)' }}>
              Start with a free trial class. No commitment, no pressure. Just show up.
            </p>
            <Button href="/apply" as="a" variant="primary">
              Book a free trial class
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
