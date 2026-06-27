interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-[9px] font-body font-semibold text-[12.5px] tracking-[0.18em] uppercase text-wine-700 ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block w-[14px] h-[2px] bg-brass shrink-0"
      />
      {children}
    </span>
  )
}
