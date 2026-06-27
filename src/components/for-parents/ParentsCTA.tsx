import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'

export function ParentsCTA() {
  return (
    <section className="py-20">
      <div className="max-w-[1080px] mx-auto px-7">
        <div
          className="rounded-[18px] p-10 md:p-14 text-center"
          style={{ background: '#4A0218' }}
        >
          <Eyebrow className="text-brass [&>span]:bg-brass justify-center">
            Take the first step
          </Eyebrow>
          <h2
            className="font-display mt-4 mb-4"
            style={{ fontSize: 'clamp(26px, 3.6vw, 40px)', fontWeight: 430, color: 'var(--wine-callout-text)' }}
          >
            See it for yourself before you commit to anything.
          </h2>
          <p className="text-[17px] max-w-[520px] mx-auto mb-8" style={{ color: 'var(--wine-bg-muted)' }}>
            Book a free trial class. Meet your child's teacher. See the platform. You owe nothing
            until you decide you want to continue.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/apply" as="a" variant="primary">
              Book your free trial class
            </Button>
            <Button
              href="/faq"
              as="a"
              variant="ghost"
              className="border-[var(--wine-bg-border)] text-[var(--wine-bg-text)] hover:border-[var(--wine-bg-text)] hover:bg-[var(--wine-bg-subtle)]"
            >
              Still have questions? Read the FAQ
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
