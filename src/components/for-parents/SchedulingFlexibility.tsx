import { Eyebrow } from '@/components/ui/Eyebrow'

const points = [
  {
    label: 'You choose the time slot',
    body: 'At your free consultation we match you with a teacher whose schedule fits yours. Classes happen when your family is actually available.',
  },
  {
    label: 'Rescheduling is easy',
    body: 'Life happens. Give us reasonable notice and we will find another slot. We do not penalise parents for rescheduling when things come up.',
  },
  {
    label: 'We cover your timezone',
    body: 'We have teachers across multiple timezones, so families in India, the UK, the US, and elsewhere can all find a time that works.',
  },
  {
    label: 'Set the pace that suits your child',
    body: 'Most families start with two or three classes a week. If your child needs to slow down during exams, we adjust. Progress matters more than a rigid schedule.',
  },
]

export function SchedulingFlexibility() {
  return (
    <section className="bg-bone-2 py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[640px] mb-10">
          <Eyebrow>Scheduling</Eyebrow>
          <h2
            className="font-display mt-3 mb-4"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            A schedule that fits your family, not the other way around.
          </h2>
          <p className="text-[17px] text-ink-soft">
            Consistency matters more than intensity. We build a schedule you can actually keep.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((p) => (
            <div
              key={p.label}
              className="rounded-[14px] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <p className="font-semibold text-[15px] text-ink mb-2 flex items-center gap-3">
                <span aria-hidden="true" className="inline-block w-[5px] h-[18px] rounded-[3px] bg-wine shrink-0" />
                {p.label}
              </p>
              <p className="text-[14.5px] text-ink-soft leading-relaxed ml-[17px]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
