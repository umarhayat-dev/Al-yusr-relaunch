import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <Eyebrow>Get in touch</Eyebrow>
            <h2
              className="font-display mt-3 mb-5"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              A real institution with real people behind it.
            </h2>
            <p className="text-[17px] text-ink-soft leading-relaxed mb-6">
              Whether you have a question about enrolling, want to discuss sponsorship, or simply
              want to know who is running this, we are here and we respond.
            </p>
            <Button href="/apply" as="a" variant="primary">
              Book a free trial class
            </Button>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className="rounded-[var(--radius)] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <h3 className="font-display text-[18px] mb-4" style={{ fontWeight: 430 }}>Contact us</h3>
              <div className="flex flex-col gap-3 text-[15px] text-ink-soft">
                <a
                  href="mailto:info@alyusr.com"
                  className="text-wine font-semibold hover:text-wine-deep no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
                >
                  info@alyusr.com
                </a>
                <p>We aim to respond within one working day.</p>
              </div>
            </div>
            <div
              className="rounded-[var(--radius)] bg-white p-6"
              style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
            >
              <h3 className="font-display text-[18px] mb-3" style={{ fontWeight: 430 }}>Languages</h3>
              <p className="text-[15px] text-ink-soft">
                We correspond in English, Hindi, and Urdu. Write to us in whichever you are
                most comfortable with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
