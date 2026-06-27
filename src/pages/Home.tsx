import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { CourseCards } from '@/components/home/CourseCards'
import { MethodSection } from '@/components/home/MethodSection'
import { SafeguardingTeaser } from '@/components/home/SafeguardingTeaser'
import { SponsorTeaser } from '@/components/home/SponsorTeaser'
import { FAQTeaser } from '@/components/home/FAQTeaser'

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <TrustStrip />
      <CourseCards />
      <MethodSection />
      <SafeguardingTeaser />
      <SponsorTeaser />
      <FAQTeaser />
    </main>
  )
}
