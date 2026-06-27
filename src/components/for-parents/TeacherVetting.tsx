import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'

const standards = [
  {
    label: 'They recite in front of us first',
    body: 'Every applicant recites before us. We listen for correct Tajweed, clear pronunciation, and the ability to identify and correct their own mistakes.',
  },
  {
    label: 'They teach a sample lesson we observe',
    body: 'A knowledgeable teacher who cannot explain simply is not the right fit for a child or a beginner adult. We watch before we hire.',
  },
  {
    label: 'We assess patience, not just knowledge',
    body: 'Recitation is a slow skill. We specifically assess how a teacher handles errors, how they encourage, and whether they can adapt their pace.',
  },
  {
    label: 'Character and reliability are checked',
    body: 'We look at how applicants communicate, whether they are reliable, and how they respond to feedback. Teaching a child is a position of trust.',
  },
  {
    label: 'Vetting continues after they are hired',
    body: 'We review session notes and parent feedback on an ongoing basis. Standards do not slip once a teacher is in the classroom.',
  },
]

export function TeacherVetting() {
  const reduced = useReducedMotion()

  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <Eyebrow>Teacher quality</Eyebrow>
            <h2
              className="font-display mt-3 mb-4"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              What every teacher passes before they teach your child.
            </h2>
            <p className="text-[17px] text-ink-soft leading-relaxed mb-6">
              We do not publish individual teacher profiles yet. What we can tell you is exactly
              what every teacher has passed before they are allowed to teach your child.
            </p>
            <p className="text-[17px] text-ink-soft leading-relaxed">
              When we are ready to introduce teacher profiles with full transparency, we will. Until
              then, our vetting standards are the proof.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {standards.map((s, i) => (
              <motion.div
                key={i}
                initial={reduced ? {} : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-32px' }}
                transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : i * 0.07, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
                className="flex gap-4 items-start"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 w-[5px] rounded-[3px] bg-wine mt-[6px]"
                  style={{ height: 18 }}
                />
                <div>
                  <p className="font-semibold text-[15px] text-ink mb-[3px]">{s.label}</p>
                  <p className="text-[14.5px] text-ink-soft leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
