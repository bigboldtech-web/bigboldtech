import type { Testimonial } from '@/types'

type Props = {
  eyebrow?: string
  heading?: React.ReactNode
  testimonials: Testimonial[]
  /** Cap how many to show (default: 3) */
  limit?: number
}

export function TestimonialRow({ eyebrow, heading, testimonials, limit = 3 }: Props) {
  const items = testimonials.slice(0, limit)
  return (
    <section className="v4-section v4-testimonials">
      <div className="v4-container">
        {eyebrow && <span className="v4-eyebrow">{eyebrow}</span>}
        {heading && <h2 className="v4-h2">{heading}</h2>}
        <div className="v4-testimonial-grid">
          {items.map((t, i) => (
            <figure key={i} className="v4-testimonial-card">
              <blockquote>
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption>
                <div className="v4-testimonial-avatar" aria-hidden>
                  {t.author
                    .split(' ')
                    .map((s) => s[0])
                    .slice(0, 2)
                    .join('')}
                </div>
                <div className="v4-testimonial-meta">
                  <div className="v4-testimonial-author">{t.author}</div>
                  <div className="v4-testimonial-role">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
