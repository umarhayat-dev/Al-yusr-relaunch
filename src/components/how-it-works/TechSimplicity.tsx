import { Eyebrow } from '@/components/ui/Eyebrow'

const points = [
  {
    label: 'No app to download',
    body: 'Classes run in your browser. Any device with a camera and microphone works: phone, tablet, or laptop.',
  },
  {
    label: 'One link per class',
    body: 'Your teacher sends a link before each session. Click it. That is the whole setup.',
  },
  {
    label: 'Works everywhere',
    body: 'Families in India, the UK, the US, and anywhere else all use the same platform with no configuration differences.',
  },
  {
    label: 'Stable on a normal connection',
    body: 'You do not need fast broadband. A standard home or mobile data connection is enough for a clear, uninterrupted class.',
  },
]

export function TechSimplicity() {
  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <Eyebrow>The technology</Eyebrow>
            <h2
              className="font-display mt-3 mb-4"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              Technology that stays out of the way so learning can happen.
            </h2>
            <p className="text-[17px] text-ink-soft leading-relaxed">
              We deliberately chose a platform that gets out of the way. Your child should be
              thinking about their recitation, not troubleshooting a video call.
            </p>
          </div>

          <ul className="list-none p-0 m-0 flex flex-col gap-5">
            {points.map((p) => (
              <li key={p.label} className="flex gap-4 items-start">
                <span
                  aria-hidden="true"
                  className="shrink-0 w-[5px] h-[18px] rounded-[3px] bg-wine mt-[4px]"
                />
                <div>
                  <p className="font-semibold text-[15px] text-ink mb-1">{p.label}</p>
                  <p className="text-[14.5px] text-ink-soft leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
