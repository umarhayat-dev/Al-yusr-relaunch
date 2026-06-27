import { Eyebrow } from '@/components/ui/Eyebrow'
import { Colonnade } from '@/components/ui/Colonnade'

export function PathwaySection() {
  return (
    <section className="bg-bone-2 py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[580px] mb-12">
          <Eyebrow>The learning path</Eyebrow>
          <h2
            className="font-display mt-3 mb-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Where you start and how far you can go.
          </h2>
          <p className="text-[17px] text-ink-soft">
            The first three courses form a single path. Arabic Conversation runs alongside at any
            stage. Start at Step 1. If you already read Arabic, we place you further along.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          <div className="flex flex-col items-center gap-4 shrink-0" aria-hidden="true">
            <div className="flex items-end gap-6 h-28">
              <Colonnade heights={[38, 62, 100]} barWidth={36} gap={18} animated />
              <div
                className="rounded-t-[8px] shrink-0"
                style={{ width: 36, height: '48%', background: 'var(--color-brass)', alignSelf: 'flex-end' }}
              />
            </div>
            <div className="flex gap-6 text-[12.5px] text-ink-soft font-semibold text-center">
              <span className="w-[36px]">Qaaidah</span>
              <span className="w-[36px]">Tajweed</span>
              <span className="w-[36px]">Hifz</span>
              <span className="w-[36px] text-brass">Arabic</span>
            </div>
            <p className="text-[12px] text-ink-soft">Your path grows with you</p>
          </div>

          <div className="flex flex-col gap-5 flex-1">
            {[
              { step: '01', label: 'Qaaidah', desc: 'Every letter, every sound. The foundation everything else is built on.', brass: false },
              { step: '02', label: 'Recitation with Tajweed', desc: 'Rules of recitation applied to what you can now read. Fluency and beauty.', brass: false },
              { step: '03', label: 'Hifz', desc: 'Structured memorization once the foundation is solid. A lifelong achievement.', brass: false },
              { step: '+', label: 'Arabic Conversation', desc: 'Runs in parallel at any stage, alongside Quran study or on its own.', brass: true },
            ].map(({ step, label, desc, brass }) => (
              <div key={label} className="flex gap-4 items-start">
                <span
                  className="font-display text-[16px] leading-none shrink-0 mt-[3px] w-7 text-center"
                  style={{ fontWeight: 430, color: brass ? 'var(--color-brass)' : 'var(--color-wine)' }}
                >
                  {step}
                </span>
                <div>
                  <p className="font-semibold text-[15px] text-ink mb-[2px]">{label}</p>
                  <p className="text-[14px] text-ink-soft">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
