import { Eyebrow } from '@/components/ui/Eyebrow'

const formats = [
  {
    name: 'One-on-one',
    tag: 'Private',
    tagColor: 'var(--color-wine)',
    tagBg: 'var(--color-blush)',
    points: [
      'Your teacher focuses entirely on you or your child',
      'Progress is faster because every correction is immediate',
      'Schedule flexes around your life',
      'Best for shy learners, those with specific goals, or anyone who wants to move at their own pace',
    ],
  },
  {
    name: 'Small group',
    tag: 'Group',
    tagColor: 'var(--color-brass)',
    tagBg: 'rgba(181,137,78,0.12)',
    points: [
      'A small group of 3 to 6 students at the same level',
      'Social learning, shared motivation, and peer recitation',
      'Lower cost than one-on-one while still structured and teacher-led',
      'Best for confident learners who enjoy a group setting',
    ],
  },
]

export function FormatComparison() {
  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[580px] mb-10">
          <Eyebrow>One-on-one or group</Eyebrow>
          <h2
            className="font-display mt-3 mb-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Choose the format that fits how you learn.
          </h2>
          <p className="text-[17px] text-ink-soft">
            Tell us which you prefer at your free consultation. We will help you choose based on
            your child's personality, or your own goals as an adult.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {formats.map((f) => (
            <div
              key={f.name}
              className="rounded-[var(--radius)] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-[12px] font-semibold rounded-[var(--radius-pill)] px-3 py-[4px]"
                  style={{ background: f.tagBg, color: f.tagColor }}
                >
                  {f.tag}
                </span>
                <h3 className="font-display text-[20px]" style={{ fontWeight: 430 }}>
                  {f.name}
                </h3>
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {f.points.map((p) => (
                  <li key={p} className="flex gap-3 items-start text-[14.5px] text-ink-soft">
                    <span aria-hidden="true" className="shrink-0 w-[5px] h-[18px] rounded-[3px] bg-wine mt-[3px]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
