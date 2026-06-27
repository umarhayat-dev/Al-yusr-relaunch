import { AboutHero } from '@/components/about/AboutHero'
import { MissionSection } from '@/components/about/MissionSection'
import { ValuesSection } from '@/components/about/ValuesSection'
import { ContactSection } from '@/components/about/ContactSection'

export function About() {
  return (
    <main id="main-content">
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <ContactSection />
    </main>
  )
}
