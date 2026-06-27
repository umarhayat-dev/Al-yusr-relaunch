import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Colonnade } from '@/components/ui/Colonnade'

const courses = [
  {
    step: 'Step 1 (beginners)',
    title: 'Qaaidah',
    sub: 'From the very first letter',
    body: 'Never read a letter before? Start here. Patient, structured, and suited to every age.',
    audience: ['Kids', 'Adults'],
    brass: false,
  },
  {
    step: 'Step 2',
    title: 'Recitation with Tajweed',
    sub: 'Recite with confidence and beauty',
    body: 'Correct, confident recitation taught with patience and real feedback.',
    audience: ['Kids', 'Adults'],
    brass: false,
  },
  {
    step: 'Step 3',
    title: 'Hifz',
    sub: 'Memorize the Quran',
    body: 'Structured memorization with a dedicated teacher who tracks every verse.',
    audience: ['Kids', 'Adults'],
    brass: false,
  },
  {
    step: 'Parallel track',
    title: 'Arabic Conversation',
    sub: 'Speak the language',
    body: 'Spoken Arabic for any level, alongside your other classes or on its own.',
    audience: ['Kids', 'Adults'],
    brass: true,
  },
]

export function CourseCards() {
  const reduced = useReducedMotion()

  return (
    <section className="py-16 border-t" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[620px] mb-9">
          <Eyebrow>Programs</Eyebrow>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Four courses. A clear path from first letter to fluency.
          </h2>
          <p className="text-[17px] text-ink-soft mt-3">
            Every course is available one-on-one or in a small group. Price and format are set at your free consultation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.article
              key={course.title}
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number] }}
              className="relative flex flex-col rounded-[18px] bg-white overflow-hidden"
              style={{
                border: '1px solid var(--line-soft)',
                boxShadow: 'var(--shadow)',
              }}
            >
              {/* Colonnade card-tab */}
              <div
                aria-hidden="true"
                className="w-[46px] h-[5px] shrink-0"
                style={{ background: course.brass ? '#B5894E' : '#4A0218' }}
              />

              <div className="flex flex-col flex-1 p-6 gap-3">
                {/* Step chip */}
                <span
                  className="self-start text-[12.5px] font-semibold rounded-[999px] px-3 py-[5px]"
                  style={{
                    background: course.brass ? 'rgba(181,137,78,0.12)' : '#EFE2DA',
                    color: course.brass ? '#B5894E' : '#4A0218',
                  }}
                >
                  {course.step}
                </span>

                <div>
                  <p className="text-[13px] text-ink-soft mb-1">{course.sub}</p>
                  <h3
                    className="font-display text-[22px]"
                    style={{ fontWeight: 430 }}
                  >
                    {course.title}
                  </h3>
                </div>

                <p className="text-[15px] text-ink-soft leading-relaxed flex-1">{course.body}</p>

                {/* Audience chips */}
                <div className="flex gap-2 flex-wrap">
                  {course.audience.map((a) => (
                    <span
                      key={a}
                      className="text-[12px] font-semibold px-3 py-[4px] rounded-[999px]"
                      style={{ background: 'var(--color-blush)', color: 'var(--color-wine-700)' }}
                    >
                      {a}
                    </span>
                  ))}
                </div>

                <Link
                  to="/programs"
                  className="text-[14px] font-semibold text-wine hover:text-wine-deep no-underline hover:underline mt-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine self-start"
                >
                  See full program &rarr;
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pathway colonnade graphic */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-end gap-6 h-20">
            <Colonnade
              heights={[46, 70, 100]}
              barWidth={28}
              gap={16}
              animated
            />
            <div aria-hidden="true" className="w-[28px] h-[46%] rounded-t-[14px] shrink-0" style={{ background: 'var(--color-brass)', alignSelf: 'flex-end' }} />
          </div>
          <div className="flex gap-6 text-[12.5px] text-ink-soft font-semibold tracking-wide text-center">
            <span className="min-w-[52px] text-center">Qaaidah</span>
            <span className="min-w-[52px] text-center">Tajweed</span>
            <span className="min-w-[52px] text-center">Hifz</span>
            <span className="min-w-[52px] text-center text-brass">Arabic</span>
          </div>
          <p className="text-[13px] text-ink-soft">Your path grows with you</p>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 font-body font-semibold text-[15px] rounded-[999px] px-[22px] py-[12px] border-[1.5px] border-[var(--line)] text-wine hover:border-wine hover:bg-[rgba(74,2,24,0.03)] no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
          >
            See all programs
          </Link>
        </div>
      </div>
    </section>
  )
}
