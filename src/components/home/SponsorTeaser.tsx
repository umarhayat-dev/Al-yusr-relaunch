import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function SponsorTeaser() {
  return (
    <section style={{ background: '#4A0218' }}>
      <div className="max-w-[1080px] mx-auto px-7 py-16">
        <Eyebrow className="text-brass [&>span]:bg-brass">
          Sponsor a student
        </Eyebrow>
        <h2
          className="font-display mt-4 mb-5"
          style={{
            fontSize: 'clamp(26px, 3.6vw, 38px)',
            fontWeight: 430,
            color: 'var(--wine-callout-text)',
          }}
        >
          Give a child the gift of the Quran.
        </h2>
        <p className="text-[17px] max-w-[560px] mb-8" style={{ color: 'var(--wine-bg-muted)' }}>
          Our Sponsor-a-Student programme funds free places for families who cannot afford classes. Accessible, accountable, and transparent. Your giving lands on a real student.
        </p>
        <Button
          href="/sponsor"
          as="a"
          variant="ghost"
          className="border-[var(--wine-bg-border)] text-[var(--wine-bg-text)] hover:border-[var(--wine-bg-text)] hover:bg-[var(--wine-bg-subtle)] focus-visible:outline-[var(--wine-bg-text)]"
        >
          Find out how to give
        </Button>
      </div>
    </section>
  )
}
