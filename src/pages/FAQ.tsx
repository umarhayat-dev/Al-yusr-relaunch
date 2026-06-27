import { motion, useReducedMotion } from 'framer-motion'
import { Colonnade } from '@/components/ui/Colonnade'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Button } from '@/components/ui/Button'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const groups = [
  {
    topic: 'Getting started',
    faqs: [
      { q: 'How do I know which course is right for my child?', a: "Tell us your child's age and current level at your free consultation. If they have never read a letter of Arabic, they start with Qaaidah. If they can already read, we assess where their Tajweed needs work and place them from there." },
      { q: 'What if my child has never learned any Arabic before?', a: 'Qaaidah is designed exactly for that. It starts from the very first letter. No prior knowledge is needed, and no background is too basic.' },
      { q: 'Can adults enroll, or is this only for children?', a: 'All four courses are available to adults. Whether you are a complete beginner, a revert learning to pray, or an adult improving your Tajweed, we have a course and a teacher for you.' },
    ],
  },
  {
    topic: 'Pricing and the free trial',
    faqs: [
      { q: 'How much does it cost?', a: 'We set pricing at your free consultation, tailored to your region. Families in India pay at a different rate to families in the UK or US. This is intentional: fair pricing for your part of the world. There is no fixed public price because a single rate would not be fair across all the places we serve.' },
      { q: 'What is the free trial class?', a: 'A real class with a real teacher, at no cost and with no commitment. It is the best way to see whether AlYusr is right for you before you decide anything. If you want to continue after the trial, we set up your plan and pricing at that point.' },
      { q: 'Am I committed to anything after the free trial?', a: 'No. The trial is exactly that. You owe nothing and sign nothing. If you want to continue, great. If not, we part on good terms.' },
    ],
  },
  {
    topic: 'Safety and teacher matching',
    faqs: [
      { q: 'How do I know my child is safe with an online teacher?', a: 'Every teacher is vetted before they teach. Female teachers are matched to girls and sisters; male teachers to boys and brothers. You can observe any class at any time. Teachers and students never exchange personal contact details. All communication goes through AlYusr.' },
      { q: "Can I sit in on my child's class?", a: 'Yes, any time and without giving notice. We actively encourage parents of younger children to be nearby for the first few classes.' },
      { q: 'How are teachers vetted?', a: 'We assess recitation quality, teaching ability, patience, and conduct before any teacher is approved. See the For Parents page for the full details.' },
    ],
  },
  {
    topic: 'Classes and scheduling',
    faqs: [
      { q: 'What is the difference between one-on-one and group classes?', a: 'One-on-one classes are private: just your child and their teacher. Every correction and every minute is focused on them. Group classes are small (3 to 6 students at the same level) and cost less. Both formats are available for every course.' },
      { q: 'What languages are classes taught in?', a: 'English for all students. Hindi and Urdu for students who prefer it, particularly families in India. Tell us your preference at your consultation.' },
      { q: 'What if we are in a different timezone?', a: 'We have teachers across multiple timezones. Whether you are in India, the UK, the US, or elsewhere, we will find a time that works.' },
      { q: 'How often do classes take place?', a: 'Most families start with two or three classes per week. We build a schedule that fits your life. If things change, we adjust.' },
    ],
  },
  {
    topic: 'Technology',
    faqs: [
      { q: 'What technology do I need for online classes?', a: 'Any device with a camera and microphone: phone, tablet, or laptop. Classes run in a browser. No app downloads required. A standard home or mobile internet connection is enough.' },
      { q: 'What platform do you use?', a: 'We use a simple, reliable video platform. Your teacher sends a link before each class. You click it. That is the whole setup.' },
    ],
  },
  {
    topic: 'Sponsor a student',
    faqs: [
      { q: 'How does the Sponsor-a-Student programme work?', a: 'You fund a free place for a family who cannot afford classes. We match your sponsorship to a real student on our waiting list, keep you updated on their progress, and make sure your giving is fully transparent. See the Sponsor page for the full details.' },
      { q: 'Can I sponsor more than one student?', a: 'Yes. Contact us and we will tell you what is available and what each sponsorship covers.' },
    ],
  },
]

export function FAQ() {
  const reduced = useReducedMotion()
  const ease = [0.2, 0.8, 0.2, 1] as [number, number, number, number]

  return (
    <main id="main-content">
      <section
        className="bg-bone-2 border-b relative overflow-hidden"
        style={{ borderColor: 'var(--line-soft)', padding: '72px 0 80px' }}
      >
        <div className="absolute inset-0 flex items-end justify-end pr-[6%] pointer-events-none" style={{ opacity: 0.07 }} aria-hidden="true">
          <Colonnade heights={[50, 70, 95, 60, 100, 75, 40]} barWidth={16} gap={22} animated />
        </div>
        <div className="max-w-[1080px] mx-auto px-7 relative max-w-[640px]">
          <motion.div initial={reduced ? {} : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.55, ease }}>
            <Eyebrow>FAQ</Eyebrow>
          </motion.div>
          <motion.h1
            initial={reduced ? {} : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.1, ease }}
            className="font-display mt-4"
            style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 430 }}
          >
            Your questions, answered honestly.
          </motion.h1>
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : 0.2, ease }}
            className="text-[19px] text-ink-soft mt-5"
          >
            Every question we get asked, answered honestly.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1080px] mx-auto px-7">
          <div className="max-w-[760px] flex flex-col gap-12">
            {groups.map((group, gi) => (
              <div key={group.topic}>
                <h2
                  className="font-display mb-4"
                  style={{ fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 430, color: 'var(--color-wine)' }}
                >
                  {group.topic}
                </h2>
                <div className="rounded-[var(--radius)] bg-white overflow-hidden" style={{ border: '1px solid var(--line-soft)', boxShadow: 'var(--shadow)' }}>
                  <Accordion multiple={false} className="divide-y" style={{ borderColor: 'var(--line-soft)' }}>
                    {group.faqs.map((faq, fi) => (
                      <AccordionItem key={fi} value={`${gi}-${fi}`} className="border-b last:border-0" style={{ borderColor: 'var(--line-soft)' }}>
                        <AccordionTrigger className="px-6 py-5 text-[16px] font-semibold text-ink text-left hover:no-underline hover:text-wine">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5 text-[15px] text-ink-soft leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 max-w-[760px]">
            <p className="text-[16px] text-ink-soft mb-4">Still have a question? We are happy to answer it directly.</p>
            <div className="flex gap-3 flex-wrap">
              <Button href="/apply" as="a" variant="primary">Book a free trial class</Button>
              <Button href="mailto:info@alyusr.com" as="a" variant="ghost">Email us</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
