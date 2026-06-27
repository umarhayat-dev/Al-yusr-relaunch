import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function SponsorCTA() {
  return (
    <section className="py-20">
      <div className="max-w-[1080px] mx-auto px-7">
        <div
          className="rounded-[var(--radius)] p-10 md:p-14 text-center"
          style={{ background: '#4A0218' }}
        >
          <Eyebrow className="text-brass [&>span]:bg-brass justify-center">
            Give with confidence
          </Eyebrow>
          <h2
            className="font-display mt-4 mb-4"
            style={{ fontSize: 'clamp(26px, 3.6vw, 40px)', fontWeight: 430, color: 'var(--wine-callout-text)' }}
          >
            Sponsor a child's Quran education today.
          </h2>
          <p
            className="text-[17px] max-w-[520px] mx-auto mb-8"
            style={{ color: 'var(--wine-bg-muted)' }}
          >
            Reach out and we will walk you through the details: who benefits, what it costs, and
            how you will know your giving is landing on a real student.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/apply?sponsor=true" as="a" variant="primary">
              Sponsor a student
            </Button>
            <Button
              href="/about#contact"
              as="a"
              variant="ghost"
              className="border-[var(--wine-bg-border)] text-[var(--wine-bg-text)] hover:border-[var(--wine-bg-text)] hover:bg-[var(--wine-bg-subtle)]"
            >
              Ask us a question first
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
