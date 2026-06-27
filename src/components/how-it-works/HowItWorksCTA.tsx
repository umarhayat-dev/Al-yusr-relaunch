import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function HowItWorksCTA() {
  return (
    <section className="py-20">
      <div className="max-w-[1080px] mx-auto px-7">
        <div
          className="rounded-[var(--radius)] p-10 md:p-14 text-center"
          style={{ background: '#4A0218' }}
        >
          <Eyebrow className="text-brass [&>span]:bg-brass justify-center">
            Ready when you are
          </Eyebrow>
          <h2
            className="font-display mt-4 mb-4"
            style={{
              fontSize: 'clamp(26px, 3.6vw, 40px)',
              fontWeight: 430,
              color: 'var(--wine-callout-text)',
            }}
          >
            Start with a free conversation. No obligation.
          </h2>
          <p
            className="text-[17px] max-w-[520px] mx-auto mb-8"
            style={{ color: 'var(--wine-bg-muted)' }}
          >
            Book a free trial class. We will find out where you or your child are starting from,
            match you with the right teacher, and set fair pricing for your region. No obligation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/apply" as="a" variant="primary">
              Book a free trial class
            </Button>
            <Button
              href="/for-parents"
              as="a"
              variant="ghost"
              className="border-[var(--wine-bg-border)] text-[var(--wine-bg-text)] hover:border-[var(--wine-bg-text)] hover:bg-[var(--wine-bg-subtle)]"
            >
              Read the parents' guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
