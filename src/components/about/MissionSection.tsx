import { Eyebrow } from '@/components/ui/Eyebrow'

export function MissionSection() {
  return (
    <section className="py-16 border-b" style={{ borderColor: 'var(--line-soft)' }}>
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2
              className="font-display mt-3 mb-5"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              Quran and Arabic for every student who wants it.
            </h2>
            <p className="text-[17px] text-ink-soft leading-relaxed mb-4">
              Most online Islamic education is cheap, transactional, and low-trust. Families in
              India and in the Western diaspora deserve better: structured, accountable, and
              beautifully delivered education that actually works.
            </p>
            <p className="text-[17px] text-ink-soft leading-relaxed">
              We started AlYusr because the gap was obvious and the bar was low. Premium,
              institute-grade Islamic education online did not exist in the way it should. We are
              building it.
            </p>
          </div>
          <div>
            <Eyebrow>Why ease matters</Eyebrow>
            <h2
              className="font-display mt-3 mb-5"
              style={{ fontSize: 'clamp(26px, 3.6vw, 38px)', fontWeight: 430 }}
            >
              The name is the strategy.
            </h2>
            <p className="text-[17px] text-ink-soft leading-relaxed mb-4">
              AlYusr (يُسر) means ease in Arabic. The word comes from the Quran: "Allah intends
              ease for you, not hardship." That verse shapes how we teach, how we price, and how
              we welcome students who think they started too late.
            </p>
            <p className="text-[17px] text-ink-soft leading-relaxed">
              Ease does not mean low standards. It means we remove every unnecessary obstacle
              between a student and their learning, so the hard work that remains is the right
              kind of hard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
