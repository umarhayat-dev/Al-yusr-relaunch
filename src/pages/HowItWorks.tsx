import { HowHero } from '@/components/how-it-works/HowHero'
import { MethodSteps } from '@/components/how-it-works/MethodSteps'
import { EasePillars } from '@/components/how-it-works/EasePillars'
import { TechSimplicity } from '@/components/how-it-works/TechSimplicity'
import { HowItWorksCTA } from '@/components/how-it-works/HowItWorksCTA'

export function HowItWorks() {
  return (
    <main id="main-content">
      <HowHero />
      <MethodSteps />
      <EasePillars />
      <TechSimplicity />
      <HowItWorksCTA />
    </main>
  )
}
