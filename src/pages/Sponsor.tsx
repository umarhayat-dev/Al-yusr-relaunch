import { SponsorHero } from '@/components/sponsor/SponsorHero'
import { HowSponsorshipWorks } from '@/components/sponsor/HowSponsorshipWorks'
import { SponsorImpact } from '@/components/sponsor/SponsorImpact'
import { SponsorCTA } from '@/components/sponsor/SponsorCTA'

export function Sponsor() {
  return (
    <main id="main-content">
      <SponsorHero />
      <HowSponsorshipWorks />
      <SponsorImpact />
      <SponsorCTA />
    </main>
  )
}
