const items = [
  'Vetted teachers',
  'Female teachers for girls, male for boys',
  'English, Hindi and Urdu',
  'Free trial class',
  'Fair pricing for your region',
]

export function TrustStrip() {
  return (
    <div
      className="bg-bone-2 border-y py-5"
      style={{ borderColor: 'var(--line-soft)' }}
    >
      <div className="max-w-[1080px] mx-auto px-7">
        <ul
          className="list-none p-0 m-0 flex flex-wrap gap-x-[22px] gap-y-3"
          aria-label="Trust signals"
        >
          {items.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-[14px] text-ink-soft"
            >
              <span
                aria-hidden="true"
                className="inline-block w-[5px] h-[18px] rounded-[2px] bg-wine shrink-0"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
