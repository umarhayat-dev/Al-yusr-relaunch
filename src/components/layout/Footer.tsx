import { Link } from 'react-router-dom'
import logoUrl from '/docs/alyusr-logo.png'

const columns = [
  {
    heading: 'Learn',
    links: [
      { label: 'Programs', to: '/programs' },
      { label: 'How it works', to: '/how-it-works' },
      { label: 'Success stories', to: '/success-stories' },
    ],
  },
  {
    heading: 'Trust',
    links: [
      { label: 'For parents', to: '/for-parents' },
      { label: 'About us', to: '/about' },
      { label: 'Sponsor a student', to: '/sponsor' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQ', to: '/faq' },
      { label: 'Apply', to: '/apply' },
      { label: 'Contact', to: '/about#contact' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-wine-deep text-[#f6e6e9]">
      <div className="max-w-[1080px] mx-auto px-7 py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Brand column */}
          <div className="flex-1 max-w-xs">
            <Link to="/" className="flex items-center gap-3 no-underline mb-4" aria-label="AlYusr Institute home">
              <img src={logoUrl} alt="" className="h-7 w-auto brightness-0 invert opacity-80" />
              <span className="font-display text-[20px] font-[430] text-[#f6e6e9]">AlYusr</span>
            </Link>
            <p className="text-[14.5px] text-[var(--footer-muted)] leading-relaxed">
              Authentic Islamic learning, made easy. For every family, wherever you are.
            </p>
            {/* Language switcher */}
            <div className="flex gap-3 mt-5 text-[13px] font-semibold">
              <button className="text-[#fdeef0] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fdeef0]">EN</button>
              <span className="text-[var(--footer-sep)]" aria-hidden="true">|</span>
              <button className="text-[var(--footer-muted)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fdeef0]" lang="hi">हिन्दी</button>
              <span className="text-[var(--footer-sep)]" aria-hidden="true">|</span>
              <button className="text-[var(--footer-muted)] hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fdeef0]" lang="ur" dir="rtl">اردو</button>
            </div>
          </div>

          {/* Nav columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-body font-semibold text-[12.5px] tracking-[0.18em] uppercase text-[#b5894e] mb-4">
                {col.heading}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {col.links.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-[14.5px] text-[var(--footer-muted)] hover:text-[#f6e6e9] no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fdeef0]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[13px] text-[var(--footer-sep)]"
          style={{ borderTop: '1px solid rgba(246,230,233,0.12)' }}
        >
          <p>Al-Yusr Institute &copy; {new Date().getFullYear()}</p>
          <a
            href="mailto:info@alyusr.com"
            className="text-[var(--footer-muted)] hover:text-[#f6e6e9] no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fdeef0]"
          >
            info@alyusr.com
          </a>
        </div>
      </div>
    </footer>
  )
}
