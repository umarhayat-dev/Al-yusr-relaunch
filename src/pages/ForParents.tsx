import { PageHero } from '@/components/for-parents/PageHero'
import { SafeguardingFull } from '@/components/for-parents/SafeguardingFull'
import { TeacherVetting } from '@/components/for-parents/TeacherVetting'
import { ClassExperience } from '@/components/for-parents/ClassExperience'
import { ProgressReviews } from '@/components/for-parents/ProgressReviews'
import { SchedulingFlexibility } from '@/components/for-parents/SchedulingFlexibility'
import { ParentsCTA } from '@/components/for-parents/ParentsCTA'

export function ForParents() {
  return (
    <main id="main-content">
      <PageHero />
      <SafeguardingFull />
      <TeacherVetting />
      <ClassExperience />
      <ProgressReviews />
      <SchedulingFlexibility />
      <ParentsCTA />
    </main>
  )
}
