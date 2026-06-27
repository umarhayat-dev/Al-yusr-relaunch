import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'

const policies = [
  {
    title: 'Girls and sisters always get a female teacher. Boys and brothers always get a male teacher.',
    body: 'Every student is matched to a gender-appropriate teacher as standard. This is not an option you have to request.',
  },
  {
    title: 'You can sit in on any class, at any time, without giving notice.',
    body: 'You are always welcome to observe. Classes take place on a shared platform, and there is no private space your child enters without you having access.',
  },
  {
    title: 'Teachers and students never exchange personal contact details.',
    body: 'All communication goes through AlYusr. If a teacher ever asks your child for a personal number, email, or social account, report it to us immediately.',
  },
  {
    title: 'Every teacher is vetted and tested before they step into a single class.',
    body: 'We assess Quranic recitation, teaching ability, and conduct before any teacher takes a class. No one teaches until they pass.',
  },
  {
    title: 'We keep you in the loop after every session.',
    body: 'After each class, teachers log session notes. You receive regular progress updates so you always know how your child is doing and what comes next.',
  },
]

export function SafeguardingFull() {
  const reduced = useReducedMotion()

  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[640px] mb-10">
          <Eyebrow>Child safety</Eyebrow>
          <h2
            className="font-display mt-3 mb-4"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Your child's safety comes first, not last.
          </h2>
          <p className="text-[17px] text-ink-soft">
            Every safeguarding policy below is in place from the first class. None of them require
            you to ask.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {policies.map((p, i) => (
            <motion.div
              key={i}
              initial={reduced ? {} : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-32px' }}
              transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : i * 0.07, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
              className="flex gap-5 items-start rounded-[14px] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 w-[5px] rounded-[3px] bg-wine"
                style={{ height: 18 }}
              />
              <div>
                <p className="font-semibold text-[16px] text-ink mb-1">{p.title}</p>
                <p className="text-[15px] text-ink-soft leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
