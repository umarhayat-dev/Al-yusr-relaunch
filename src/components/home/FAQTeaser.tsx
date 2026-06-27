import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'How do I know my child will be safe?',
    a: 'Every teacher is vetted and tested before they teach. Female teachers are matched to girls and sisters; male teachers to boys and brothers. You can observe any class at any time, and there is no off-platform contact.',
  },
  {
    q: 'What if my child has never read Arabic before?',
    a: 'That is exactly where Qaaidah starts. It is our foundational course for total beginners, aged 5 to adult. No prior knowledge, no alphabet familiarity needed. Just show up.',
  },
  {
    q: 'How much does it cost?',
    a: 'We set pricing during your free consultation so it reflects your region fairly, whether you are in India or abroad. Book a free trial first. You will owe nothing until you decide to continue.',
  },
]

export function FAQTeaser() {
  return (
    <section className="py-16 border-t" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="max-w-[620px] mb-8">
          <Eyebrow>Common questions</Eyebrow>
          <h2
            className="font-display mt-3"
            style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
          >
            Answers before you commit to anything.
          </h2>
        </div>

        <div
          className="rounded-[18px] bg-white overflow-hidden mb-8"
          style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}
        >
          <Accordion multiple={false} className="divide-y">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b last:border-0" style={{ borderColor: 'var(--line-soft)' }}>
                <AccordionTrigger
                  className="px-6 py-5 text-[16px] font-semibold text-ink text-left hover:no-underline hover:text-wine"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-[15px] text-ink-soft leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Link
          to="/faq"
          className="inline-flex items-center gap-2 font-body font-semibold text-[15px] rounded-[999px] px-[22px] py-[12px] border-[1.5px] border-[var(--line)] text-wine hover:border-wine hover:bg-[rgba(74,2,24,0.03)] no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
        >
          See all questions
        </Link>
      </div>
    </section>
  )
}
