import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'

const pillars = [
  {
    ar: 'يُسر',
    name: 'Ease (Yusr)',
    body: 'We meet you at your level. No prerequisites, no judgment, no shame in starting from zero. AlYusr means ease. That is the whole point.',
  },
  {
    ar: 'أصالة',
    name: 'Authenticity',
    body: 'Mainstream, sound teaching rooted in Quran and Sunnah. Respectful of all students. Not sectarian. Not a shortcut.',
  },
  {
    ar: 'تخصيص',
    name: 'Personalization',
    body: 'One path does not fit all. Your level, your pace, your goals, and your schedule are built into every plan from day one.',
  },
  {
    ar: 'رعاية',
    name: 'Care and safe matching',
    body: 'Vetted teachers. Female teachers for girls and sisters, male for boys and brothers. A safe environment for every student.',
  },
  {
    ar: 'ثبات',
    name: 'Consistency over intensity',
    body: 'Small, steady, supported steps that survive a busy life. A class you can keep is worth more than an intensive you cannot.',
  },
]

export function EasePillars() {
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  return (
    <section className="bg-bone-2 py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[620px] mb-12">
          <Eyebrow>Our principles</Eyebrow>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Five principles that shape every class we teach.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-32px' }}
              transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : i * 0.07, ease }}
              className="rounded-[var(--radius)] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <div
                className="font-ar text-[28px] text-wine mb-3 leading-none"
                lang="ar"
                dir="rtl"
                aria-hidden="true"
              >
                {p.ar}
              </div>
              <h3 className="font-display text-[18px] mb-2" style={{ fontWeight: 430 }}>
                {p.name}
              </h3>
              <p className="text-[14.5px] text-ink-soft leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
