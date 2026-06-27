import { ProgramsHero } from '@/components/programs/ProgramsHero'
import { CourseSection } from '@/components/programs/CourseSection'
import { PathwaySection } from '@/components/programs/PathwaySection'
import { FormatComparison } from '@/components/programs/FormatComparison'
import { ProgramsCTA } from '@/components/programs/ProgramsCTA'

export function Programs() {
  return (
    <main id="main-content">
      <ProgramsHero />
      <CourseSection />
      <PathwaySection />
      <FormatComparison />
      <ProgramsCTA />
    </main>
  )
}
