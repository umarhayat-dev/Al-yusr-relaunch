import { Eyebrow } from '@/components/ui/Eyebrow'

const items = [
  'After each class, your teacher logs what was covered and what to practice next.',
  'You receive a progress summary at regular intervals so you can see how far your child has come.',
  'Milestone certificates mark meaningful achievements: completing Qaaidah, finishing a surah, reaching Tajweed proficiency.',
  'If your child is struggling, we tell you before it becomes a problem and adjust the plan.',
  "For group classes, your child's individual progress is still tracked and reported to you separately.",
]

export function ProgressReviews() {
  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <Eyebrow>Progress and accountability</Eyebrow>
            <h2
              className="font-display mt-3 mb-5"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              You never have to guess how your child is progressing.
            </h2>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[16px] text-ink-soft">
                  <span aria-hidden="true" className="mt-[5px] shrink-0 w-[5px] h-[18px] rounded-[3px] bg-wine" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative milestone ladder */}
          <div aria-hidden="true" className="hidden md:flex flex-col gap-3">
            {[
              { label: 'First letter', pct: 20 },
              { label: 'Qaaidah complete', pct: 42 },
              { label: 'Reciting with Tajweed', pct: 64 },
              { label: 'First surah memorized', pct: 82 },
              { label: 'Hifz milestone', pct: 100 },
            ].map(({ label, pct }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex-1 h-[6px] rounded-full bg-blush overflow-hidden">
                  <div
                    className="h-full rounded-full bg-wine"
                    style={{ width: `${pct}%`, opacity: 0.25 + pct * 0.0055 }}
                  />
                </div>
                <span className="text-[13px] text-ink-soft font-semibold w-44 shrink-0">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
