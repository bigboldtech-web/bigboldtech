import Image from 'next/image'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  const items = testimonials.slice(0, 3)
  return (
    <Section size="lg">
      <Container>
        <div className="testimonials-head">
          <Eyebrow>What clients say</Eyebrow>
          <h2 className="h2-bbt">
            Operators who&rsquo;ve hired us, <span className="text-muted-bbt">in their words.</span>
          </h2>
        </div>

        <div className="testimonials-grid">
          {items.map((t) => (
            <figure key={t.author + t.company} className="testimonial-card">
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <div className="testimonial-avatar">
                  {t.avatar ? (
                    <Image src={t.avatar} alt="" width={48} height={48} />
                  ) : (
                    <span>
                      {t.author.split(' ').map((s) => s[0]).slice(0, 2).join('')}
                    </span>
                  )}
                </div>
                <div className="testimonial-meta">
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-role">{t.role} · {t.company}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}
