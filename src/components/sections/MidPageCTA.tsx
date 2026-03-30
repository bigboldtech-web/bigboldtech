import Link from 'next/link'

interface MidPageCTAProps {
  headline?: string
  subtext?: string
  buttonText?: string
  buttonHref?: string
  variant?: 'default' | 'compact'
}

export function MidPageCTA({
  headline = 'Ready to Engineer Your Growth?',
  subtext = 'Book a free discovery call. No pitch decks, no obligations — just a technical conversation about what is possible.',
  buttonText = 'Book Discovery Call',
  buttonHref = '/contact',
  variant = 'default',
}: MidPageCTAProps) {
  return (
    <section className={`mid-cta ${variant === 'compact' ? 'mid-cta-compact' : ''}`}>
      <div className="wrap">
        <div className="mid-cta-inner reveal">
          <div className="mid-cta-content">
            <h3>{headline}</h3>
            {variant !== 'compact' && <p>{subtext}</p>}
          </div>
          <Link href={buttonHref} className="btn-glow">
            {buttonText}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
