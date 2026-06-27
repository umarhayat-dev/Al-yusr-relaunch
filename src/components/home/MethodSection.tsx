import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'

const steps = [
  {
    n: '01',
    title: 'A free call to find your starting point',
    body: 'We understand your level, goals, language, and schedule, then set fair pricing for your region.',
  },
  {
    n: '02',
    title: 'Your personalized plan',
    body: 'A vetted, gender-appropriate teacher matched to your child (or to you). A curriculum that starts where you are.',
  },
  {
    n: '03',
    title: 'Live classes, visible progress, and real milestones',
    body: 'Regular one-on-one or group classes, feedback for parents, and visible proof of progress along the way.',
  },
]

export function MethodSection() {
  const reduced = useReducedMotion()

  return (
    <section className="bg-bone-2 py-16 border-t" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[620px] mb-10">
          <Eyebrow>How it works</Eyebrow>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            From first class to lasting progress, step by step.
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={reduced ? {} : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
              className="flex gap-6 items-start"
            >
              {/* Step number with connecting line */}
              <div className="flex flex-col items-center shrink-0 pt-1">
                <span
                  className="font-display text-[28px] text-wine leading-none"
                  style={{ fontWeight: 430 }}
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                {i < steps.length - 1 && (
                  <div className="w-[2px] mt-2 h-12 rounded-full" style={{ background: 'var(--line)' }} aria-hidden="true" />
                )}
              </div>

              <div className="pb-2">
                <h3
                  className="font-display text-[20px] mb-2"
                  style={{ fontWeight: 430 }}
                >
                  {step.title}
                </h3>
                <p className="text-[16px] text-ink-soft leading-relaxed max-w-[540px]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 font-body font-semibold text-[15px] rounded-[999px] px-[22px] py-[12px] border-[1.5px] border-[var(--line)] text-wine hover:border-wine hover:bg-[rgba(74,2,24,0.03)] no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
          >
            See the full method
          </Link>
        </div>
      </div>
    </section>
  )
}
