import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function SafeguardingTeaser() {
  return (
    <section className="py-16 border-t" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div
          className="rounded-[18px] bg-white p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-center"
          style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
        >
          <div className="flex-1">
            <Eyebrow>Child safety</Eyebrow>
            <h2
              className="font-display mt-3 mb-4"
              style={{ fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 430 }}
            >
              Your child's safety is not a footnote.
            </h2>
            <ul className="list-none p-0 m-0 flex flex-col gap-3 text-[16px] text-ink-soft mb-6">
              {[
                'Female teachers for girls and sisters. Male teachers for boys and brothers.',
                'Every teacher is vetted and tested before their first class.',
                'Parents can observe any session at any time.',
                'No off-platform contact between teachers and students.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-[6px] w-[5px] h-[18px] rounded-[3px] bg-wine shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/for-parents"
              className="inline-flex items-center gap-2 font-body font-semibold text-[15px] rounded-[999px] px-[22px] py-[12px] border-[1.5px] border-[var(--line)] text-wine hover:border-wine hover:bg-[rgba(74,2,24,0.03)] no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
            >
              How we keep children safe
            </Link>
          </div>

          {/* Decorative colonnade */}
          <div className="flex items-end h-32 gap-[10px] shrink-0 self-end" aria-hidden="true">
            {[40, 60, 80, 55, 70].map((h, i) => (
              <div
                key={i}
                className="rounded-t-[6px]"
                style={{
                  width: 12,
                  height: `${h}%`,
                  background: '#4A0218',
                  opacity: 0.12 + i * 0.04,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
