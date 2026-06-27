import { Routes, Route } from 'react-router-dom'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { ForParents } from '@/pages/ForParents'
import { HowItWorks } from '@/pages/HowItWorks'
import { Programs } from '@/pages/Programs'
import { Sponsor } from '@/pages/Sponsor'
import { About } from '@/pages/About'
import { SuccessStories } from '@/pages/SuccessStories'
import { FAQ } from '@/pages/FAQ'
import { Apply } from '@/pages/Apply'
import { Dashboard, Teach, Admin } from '@/pages/stubs'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bone">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-wine focus:text-[var(--wine-bg-text)] focus:rounded-lg focus:font-semibold focus:text-[14px]"
      >
        Skip to main content
      </a>
      <Nav />
      <div className="flex-1">
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/programs"        element={<Programs />} />
          <Route path="/how-it-works"    element={<HowItWorks />} />
          <Route path="/for-parents"     element={<ForParents />} />
          <Route path="/sponsor"         element={<Sponsor />} />
          <Route path="/about"           element={<About />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/faq"             element={<FAQ />} />
          <Route path="/apply"           element={<Apply />} />
          <Route path="/dashboard"       element={<Dashboard />} />
          <Route path="/teach"           element={<Teach />} />
          <Route path="/admin"           element={<Admin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
