import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import logoUrl from '/docs/alyusr-logo.png'

const links = [
  { label: 'Programs', to: '/programs' },
  { label: 'How it works', to: '/how-it-works' },
  { label: 'For parents', to: '/for-parents' },
  { label: 'Sponsor', to: '/sponsor' },
  { label: 'About', to: '/about' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header
      className="sticky top-0 z-30 border-b"
      style={{
        background: 'rgba(250,246,239,0.82)',
        backdropFilter: 'blur(12px)',
        borderColor: 'var(--line-soft)',
      }}
    >
      <div className="max-w-[1080px] mx-auto px-7 flex items-center gap-7 h-[74px]">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-[11px] no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
          aria-label="AlYusr Institute home"
        >
          <img src={logoUrl} alt="" height={30} className="h-[30px] w-auto block" />
          <span className="font-display text-[21px] font-[430] text-wine leading-none">
            AlYusr
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 ml-2" aria-label="Main navigation">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-[14.5px] no-underline transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine ${
                pathname === to ? 'text-wine' : 'text-ink-soft hover:text-wine'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        {/* CTA */}
        <Button href="/apply" as="a" variant="primary" className="hidden md:inline-flex">
          Book a free trial class
        </Button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-6 h-[2px] bg-ink transition-transform duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-ink transition-transform duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-bone border-t" style={{ borderColor: 'var(--line-soft)' }}>
          <nav className="max-w-[1080px] mx-auto px-7 py-5 flex flex-col gap-4" aria-label="Mobile navigation">
            {links.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-[16px] text-ink-soft hover:text-wine no-underline"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button href="/apply" as="a" variant="primary" className="mt-2 self-start">
              Book a free trial class
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
