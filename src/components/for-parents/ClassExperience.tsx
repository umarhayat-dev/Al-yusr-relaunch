import { Eyebrow } from '@/components/ui/Eyebrow'

const details = [
  {
    label: 'Works on any device',
    body: 'Classes run on a video platform your child can join from any device with a browser. No app downloads required.',
  },
  {
    label: 'Right length for their age',
    body: 'Typically 30 minutes for younger children, 45 minutes for older students and adults. Your teacher adjusts to what your child can sustain.',
  },
  {
    label: 'Private or small group',
    body: 'One-on-one classes are private, with only your child and their teacher. Group classes are small, usually 3 to 6 students of a similar level.',
  },
  {
    label: 'A structured session every time',
    body: 'The teacher reviews the previous lesson, introduces new letters or rules, listens to your child recite, corrects gently, and assigns short practice for next time.',
  },
  {
    label: 'You are always welcome to observe',
    body: 'You can sit in any time. For younger children (5 to 8), we encourage you to be nearby for the first few classes so your child feels settled.',
  },
  {
    label: 'Recordings on request',
    body: 'Classes are not recorded by default. If you would like a recording for your child to practice with, let us know when you book.',
  },
]

export function ClassExperience() {
  return (
    <section className="bg-bone-2 py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[640px] mb-10">
          <Eyebrow>The class experience</Eyebrow>
          <h2
            className="font-display mt-3 mb-4"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            What your child walks into on day one.
          </h2>
          <p className="text-[17px] text-ink-soft">
            No surprises. Here is exactly what your child walks into on day one.
          </p>
        </div>

        <dl className="grid sm:grid-cols-2 gap-6">
          {details.map((d) => (
            <div
              key={d.label}
              className="rounded-[14px] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <dt className="font-semibold text-[15px] text-ink mb-2 flex items-center gap-3">
                <span aria-hidden="true" className="inline-block w-[5px] h-[18px] rounded-[3px] bg-wine shrink-0" />
                {d.label}
              </dt>
              <dd className="text-[14.5px] text-ink-soft leading-relaxed ml-[17px]">{d.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
