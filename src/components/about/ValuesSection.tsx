import { Eyebrow } from '@/components/ui/Eyebrow'

const values = [
  { name: 'Ease (Yusr)', body: 'We meet every student at their level. No judgment, no prerequisites, no shame in starting from zero.' },
  { name: 'Authenticity', body: 'Mainstream, sound teaching rooted in Quran and Sunnah. Respectful of all students. Not sectarian.' },
  { name: 'Personalization', body: 'Every plan is built around the individual. Level, pace, goals, and schedule are all yours to set.' },
  { name: 'Safe teacher matching', body: 'Vetted teachers. Female teachers for girls and sisters. Male teachers for boys and brothers. No exceptions.' },
  { name: 'Consistency over intensity', body: 'Small, steady, supported steps. A class you can keep is worth more than an intensive you cannot.' },
]

export function ValuesSection() {
  return (
    <section className="bg-bone-2 py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[580px] mb-10">
          <Eyebrow>What we stand for</Eyebrow>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Five principles, not a tagline.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.name}
              className="rounded-[var(--radius)] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span aria-hidden="true" className="inline-block w-[5px] h-[18px] rounded-[3px] bg-wine shrink-0" />
                <h3 className="font-display text-[17px]" style={{ fontWeight: 430 }}>{v.name}</h3>
              </div>
              <p className="text-[14.5px] text-ink-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
