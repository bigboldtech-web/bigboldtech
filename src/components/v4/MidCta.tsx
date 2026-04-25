import Link from 'next/link'

type Props = {
  title: string
  body?: string
  buttonText?: string
  buttonHref?: string
}

export function MidCta({
  title,
  body,
  buttonText = 'Book a discovery call',
  buttonHref = '/contact',
}: Props) {
  return (
    <div className="v4-container">
      <div className="v4-mid-cta">
        <div>
          <h3 className="v4-display">{title}</h3>
          {body && <p>{body}</p>}
        </div>
        <Link href={buttonHref} className="v4-btn v4-btn-primary">
          {buttonText}
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7h8M8 4l3 3-3 3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
