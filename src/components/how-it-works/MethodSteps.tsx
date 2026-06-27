import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'

const steps = [
  {
    n: '01',
    title: 'A free call to find where you are starting',
    body: 'We spend time understanding your level, your goals, your preferred language (English, Hindi, or Urdu), and your schedule. We also set pricing here, tailored fairly to your region. No surprises.',
  },
  {
    n: '02',
    title: 'A plan built around you, not a generic syllabus',
    body: 'We match you with a vetted, gender-appropriate teacher and build a curriculum that starts exactly where you are, whether that is the very first letter or refining an existing recitation.',
  },
  {
    n: '03',
    title: 'Live classes with a teacher who adapts to your pace',
    body: 'One-on-one or small group, on a simple video platform that works on any device. Your teacher recites with you, corrects gently, explains clearly, and adapts to your pace.',
  },
  {
    n: '04',
    title: 'A small, specific thing to practice before next time',
    body: 'Each class ends with a small, specific thing to practice before the next session. Light reinforcement, not homework. The kind of repetition that makes recitation stick.',
  },
  {
    n: '05',
    title: 'Progress updates before problems have time to grow',
    body: 'Parents receive updates after sessions. Adults can track their own progress. If the plan needs adjusting, your teacher flags it early rather than waiting for a problem to grow.',
  },
  {
    n: '06',
    title: 'Milestones that make the progress visible',
    body: 'Completing Qaaidah, finishing a surah, reaching a Tajweed standard: each milestone is marked. Visible proof that progress is real and the effort is working.',
  },
]

export function MethodSteps() {
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[620px] mb-12">
          <Eyebrow>The AlYusr method</Eyebrow>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Six steps from your first call to confident recitation.
          </h2>
        </div>

        <div className="flex flex-col gap-0">
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
                <span
                  className="font-display text-[30px] text-wine leading-none select-none"
                  style={{ fontWeight: 430 }}
                >
                  {step.n}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className="w-[2px] mt-3 flex-1 min-h-[40px] rounded-full"
                    style={{ background: 'var(--line-soft)' }}
                  />
                )}
              </div>
              <div className="pt-1 pb-2">
                <h3 className="font-display text-[20px] mb-2" style={{ fontWeight: 430 }}>
                  {step.title}
                </h3>
                <p className="text-[16px] text-ink-soft leading-relaxed max-w-[580px]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
