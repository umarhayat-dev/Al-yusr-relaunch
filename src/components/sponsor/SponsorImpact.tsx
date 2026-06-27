import { Eyebrow } from '@/components/ui/Eyebrow'

const commitments = [
  {
    label: 'Your money reaches a real student',
    body: 'Every sponsored place goes to a named family on our waiting list. We do not pool sponsorship funds into a general budget.',
  },
  {
    label: 'You know exactly what you are paying for',
    body: 'Before you give, we tell you the cost of one term per student and what that covers: teacher time, curriculum, and platform.',
  },
  {
    label: 'We report back to you',
    body: "You receive updates on the student's progress. If something changes, we tell you. Accountability is not an afterthought.",
  },
  {
    label: 'No admin fees hidden inside your gift',
    body: "Our operational costs are covered separately. What you give goes to the student's education, not to our overhead.",
  },
]

export function SponsorImpact() {
  return (
    <section className="bg-bone-2 py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <Eyebrow>Transparency</Eyebrow>
            <h2
              className="font-display mt-3 mb-5"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              Where your giving actually goes.
            </h2>
            <p className="text-[17px] text-ink-soft leading-relaxed">
              We know that trust is earned, not assumed. Here is exactly what we commit to every
              sponsor before they give a single pound, dollar, or rupee.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {commitments.map((c) => (
              <div key={c.label} className="flex gap-4 items-start">
                <span aria-hidden="true" className="shrink-0 w-[5px] h-[18px] rounded-[3px] bg-wine mt-[4px]" />
                <div>
                  <p className="font-semibold text-[15px] text-ink mb-1">{c.label}</p>
                  <p className="text-[14.5px] text-ink-soft leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
