import { motion, useReducedMotion } from 'framer-motion'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
  as?: 'button' | 'a'
  href?: string
}

const base =
  'inline-flex items-center gap-2 font-body font-semibold text-[15px] rounded-[999px] px-[22px] py-[12px] border-[1.5px] border-transparent cursor-pointer no-underline transition-colors duration-[180ms] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wine'

const variants = {
  primary: 'bg-wine text-[var(--wine-bg-text)] border-wine hover:bg-wine-deep',
  ghost:   'bg-transparent text-wine border-[var(--line)] hover:border-wine hover:bg-[rgba(74,2,24,0.03)]',
}

export function Button({ variant = 'primary', as, href, className = '', children, ...props }: ButtonProps) {
  const reduced = useReducedMotion()
  const cls = `${base} ${variants[variant]} ${className}`

  if (as === 'a' || href) {
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={reduced ? {} : { y: variant === 'primary' ? -1 : 0 }}
        transition={{ duration: reduced ? 0 : 0.18 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={cls}
      whileHover={reduced ? {} : { y: variant === 'primary' ? -1 : 0 }}
      transition={{ duration: reduced ? 0 : 0.18 }}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  )
}
