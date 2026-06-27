import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'

type Audience = 'kids' | 'adults'

interface CourseVariant { age?: string; level?: string; outcome: string; body: string }
interface CourseData {
  step: string; title: string; ar: string; brass: boolean
  kids: CourseVariant; adults: CourseVariant
}

const courses: CourseData[] = [
  {
    step: 'Step 1', title: 'Qaaidah', ar: 'القاعدة', brass: false,
    kids: {
      age: 'Ages 5 and up',
      outcome: 'Reads every Arabic letter correctly',
      body: 'The starting point for every child who has never seen an Arabic letter. Patient, structured, and designed to build confidence from the very first session.',
    },
    adults: {
      level: 'Total beginners and returning learners',
      outcome: 'Reads confidently from scratch, no judgment',
      body: 'Whether you are a revert, returning after years away, or simply never learned, Qaaidah is your private, beginner-safe entry point. Start from letter one.',
    },
  },
  {
    step: 'Step 2', title: 'Recitation with Tajweed', ar: 'التجويد', brass: false,
    kids: {
      age: 'Ages 7 and up, after Qaaidah',
      outcome: 'Recites with correct rules and beauty',
      body: 'Once your child can read, Tajweed teaches them to recite the way the Quran is meant to be heard: accurate, fluent, and beautiful.',
    },
    adults: {
      level: 'Reads Arabic and wants to recite better',
      outcome: 'Confident, rule-correct recitation',
      body: 'Improve your recitation with a teacher who listens carefully, corrects specifically, and explains the rules so they actually stick.',
    },
  },
  {
    step: 'Step 3', title: 'Hifz', ar: 'الحفظ', brass: false,
    kids: {
      age: 'Ages 7 and up, with Tajweed foundation',
      outcome: 'Memorizes with accuracy and retention',
      body: 'Structured memorization with a dedicated teacher who tracks every verse, reviews regularly, and keeps progress moving at a pace your child can sustain.',
    },
    adults: {
      level: 'Any age, ready to memorize',
      outcome: 'Steady, supported Quran memorization',
      body: 'Hifz for adults is slower and more deliberate than for children. That is fine. We build a plan that fits your life and keeps you moving forward.',
    },
  },
  {
    step: 'Parallel track', title: 'Arabic Conversation', ar: 'العربية', brass: true,
    kids: {
      age: 'Ages 8 and up',
      outcome: 'Understands and speaks everyday Arabic',
      body: 'Spoken Arabic alongside Quran study. Children build vocabulary, comprehension, and confidence to actually use the language.',
    },
    adults: {
      level: 'Any level',
      outcome: 'Speaks and understands Arabic fluently',
      body: 'Conversational Arabic for any level. Run it alongside your other classes or on its own. No formal grammar required to start.',
    },
  },
]

export function CourseSection() {
  const [audience, setAudience] = useState<Audience>('kids')
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div className="max-w-[480px]">
            <Eyebrow>Courses</Eyebrow>
            <h2
              className="font-display mt-3"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              {audience === 'kids' ? 'For your child.' : 'For you.'}
            </h2>
          </div>
          <div
            className="inline-flex self-start sm:self-auto rounded-[var(--radius-pill)] p-1 gap-1 shrink-0"
            style={{ background: '#fff', border: '1px solid var(--line)', boxShadow: 'var(--shadow)' }}
            role="group"
            aria-label="Choose audience"
          >
            {(['kids', 'adults'] as Audience[]).map((a) => (
              <button
                key={a}
                onClick={() => setAudience(a)}
                aria-pressed={audience === a}
                className={`text-[13.5px] font-semibold rounded-[var(--radius-pill)] px-4 py-[7px] border-0 cursor-pointer transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine ${
                  audience === a
                    ? 'bg-wine text-[var(--wine-bg-text)]'
                    : 'bg-transparent text-ink-soft hover:text-ink'
                }`}
              >
                {a === 'kids' ? 'For kids' : 'For adults'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {courses.map((course, i) => {
            const data = audience === 'kids' ? course.kids : course.adults
            const accentColor = course.brass ? 'var(--color-brass)' : 'var(--color-wine)'
            return (
              <motion.article
                key={course.title}
                initial={reduced ? {} : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.07, ease }}
                className="flex flex-col rounded-[var(--radius)] bg-white overflow-hidden"
                style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
              >
                <div className="h-[5px] w-[46px]" style={{ background: accentColor }} aria-hidden="true" />
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="self-start text-[12px] font-semibold rounded-[var(--radius-pill)] px-3 py-[4px]"
                      style={{
                        background: course.brass ? 'rgba(181,137,78,0.12)' : 'var(--color-blush)',
                        color: accentColor,
                      }}
                    >
                      {course.step}
                    </span>
                    <span className="font-ar text-[22px] text-ink-soft leading-none pt-1" lang="ar" dir="rtl" aria-hidden="true">
                      {course.ar}
                    </span>
                  </div>
                  <div>
                    <p className="text-[13px] text-ink-soft mb-1">
                      {audience === 'kids' ? course.kids.age : course.adults.level}
                    </p>
                    <h3 className="font-display text-[22px]" style={{ fontWeight: 430 }}>
                      {course.title}
                    </h3>
                  </div>
                  <p className="text-[13px] font-semibold flex items-center gap-2" style={{ color: accentColor }}>
                    <span aria-hidden="true" className="inline-block w-[5px] h-[18px] rounded-[3px] bg-current shrink-0" />
                    {data.outcome}
                  </p>
                  <p className="text-[15px] text-ink-soft leading-relaxed flex-1">{data.body}</p>
                  <Link
                    to="/apply"
                    className="self-start text-[14px] font-semibold text-wine hover:text-wine-deep no-underline hover:underline mt-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                  >
                    Book a trial class &rarr;
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
