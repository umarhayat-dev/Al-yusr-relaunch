import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'

const steps = [
  { n: '01', title: 'Fill in the form', body: 'Tell us who is learning, which course interests you, and a few times that work for your schedule.' },
  { n: '02', title: 'We reach out within one working day', body: 'A member of our team contacts you to confirm your free trial and answer any questions before the class.' },
  { n: '03', title: 'Your free trial class', body: 'Meet your teacher, try the platform, and see whether AlYusr feels right. No pressure, no commitment.' },
  { n: '04', title: 'If you want to continue', body: 'We set up your personalized plan and fair pricing for your region. You start when you are ready.' },
]

const fields = [
  { id: 'learner', label: 'Who is learning?', type: 'select', opts: ['My child', 'Myself (adult learner)'] },
  { id: 'course', label: 'Which course interests you?', type: 'select', opts: ['Not sure yet (we will help)', 'Qaaidah', 'Recitation with Tajweed', 'Hifz', 'Arabic Conversation'] },
  { id: 'name', label: 'Your name', type: 'text' },
  { id: 'email', label: 'Email address', type: 'email' },
  { id: 'timezone', label: 'Your country or timezone', type: 'text' },
]

export function Apply() {
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  return (
    <main id="main-content">
      <section
        className="bg-bone-2 border-b relative overflow-hidden"
        style={{ borderColor: 'var(--line-soft)', padding: '72px 0 80px' }}
      >
        <div className="absolute inset-0 flex items-end justify-end pr-[6%] pointer-events-none" style={{ opacity: 0.07 }} aria-hidden="true">
          <Colonnade heights={[45, 68, 100, 58, 82, 42, 72]} barWidth={16} gap={22} animated />
        </div>
        <div className="max-w-[1080px] mx-auto px-7 relative">
          <div className="max-w-[640px]">
            <motion.div initial={reduced ? {} : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.55, ease }}>
              <Eyebrow>Book a free trial class</Eyebrow>
            </motion.div>
            <motion.h1
              initial={reduced ? {} : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.1, ease }}
              className="font-display mt-4"
              style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 430 }}
            >
              Start with a free class. No commitment.
            </motion.h1>
            <motion.p
              initial={reduced ? {} : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.2, ease }}
              className="text-[19px] text-ink-soft mt-5"
            >
              Tell us a little about who is learning and when works for you. We will handle the rest.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1080px] mx-auto px-7">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(22px, 2.8vw, 28px)', fontWeight: 430 }}>
                Tell us about your learner
              </h2>
              <div className="rounded-[var(--radius)] bg-white p-8" style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}>
                <div className="flex flex-col gap-5">
                  {fields.map(({ id, label, type, opts }) => (
                    <div key={id} className="flex flex-col gap-1">
                      <label htmlFor={id} className="text-[14px] font-semibold text-ink">{label}</label>
                      {type === 'select' ? (
                        <select id={id} className="rounded-[10px] border px-3 py-[10px] text-[15px] text-ink bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2" style={{ borderColor: 'var(--line)' }}>
                          <option value="">Select one</option>
                          {opts?.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      ) : (
                        <input id={id} type={type} className="rounded-[10px] border px-3 py-[10px] text-[15px] text-ink bg-white placeholder:text-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2" style={{ borderColor: 'var(--line)' }} />
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="mt-2 w-full rounded-[var(--radius-pill)] px-6 py-[13px] text-[15px] font-semibold bg-wine text-[var(--wine-bg-text)] border-0 cursor-pointer hover:bg-wine-deep transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                  >
                    Book my free trial class
                  </button>
                </div>
              </div>
              <p className="text-[13px] text-ink-soft mt-4">We respond within one working day. No spam.</p>
            </div>

            <div>
              <h2 className="font-display mb-6" style={{ fontSize: 'clamp(22px, 2.8vw, 28px)', fontWeight: 430 }}>
                What happens next
              </h2>
              <div className="flex flex-col">
                {steps.map((step, i) => (
                  <div key={step.n} className="flex gap-5 pb-8">
                    <div className="flex flex-col items-center shrink-0 pt-1" aria-hidden="true">
                      <span className="font-display text-[24px] text-wine leading-none" style={{ fontWeight: 430 }}>{step.n}</span>
                      {i < steps.length - 1 && <div className="w-[2px] mt-2 flex-1 min-h-[28px] rounded-full" style={{ background: 'var(--line-soft)' }} />}
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold text-[15px] text-ink mb-1">{step.title}</p>
                      <p className="text-[14.5px] text-ink-soft leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
