import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'

const steps = [
  {
    n: '01',
    title: 'You reach out to give',
    body: 'Contact us to sponsor a student. We confirm the details, including what a full term costs, so you know exactly where your money goes before you commit.',
  },
  {
    n: '02',
    title: 'We match a student to your sponsorship',
    body: 'We identify a family on our waiting list who cannot afford classes. We match based on readiness and need, and we keep you informed about who you are helping.',
  },
  {
    n: '03',
    title: 'The student starts learning',
    body: 'The sponsored student joins a class exactly as a paying student would. Same vetted teachers, same curriculum, same care. Your sponsorship removes the financial barrier, nothing else.',
  },
  {
    n: '04',
    title: 'You receive progress updates',
    body: 'We report back on how the student is doing. Your giving is not a one-time transaction. You can see the difference it is making.',
  },
]

export function HowSponsorshipWorks() {
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[620px] mb-12">
          <Eyebrow>How it works</Eyebrow>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Simple, transparent, and accountable.
          </h2>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={reduced ? {} : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : i * 0.08, ease }}
              className="flex gap-6 items-start pb-10"
            >
              <div className="flex flex-col items-center shrink-0 pt-1" aria-hidden="true">
                <span className="font-display text-[30px] text-wine leading-none select-none" style={{ fontWeight: 430 }}>
                  {step.n}
                </span>
                {i < steps.length - 1 && (
                  <div className="w-[2px] mt-3 flex-1 min-h-[40px] rounded-full" style={{ background: 'var(--line-soft)' }} />
                )}
              </div>
              <div className="pt-1 pb-2">
                <h3 className="font-display text-[20px] mb-2" style={{ fontWeight: 430 }}>{step.title}</h3>
                <p className="text-[16px] text-ink-soft leading-relaxed max-w-[580px]">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
