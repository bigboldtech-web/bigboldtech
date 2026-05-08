import Link from 'next/link'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { Reveal } from '@/components/Reveal'
import { services } from '@/data/services'

const icons: Record<string, string> = {
  ai:        'M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5.6 5.6l2.8 2.8 M15.6 15.6l2.8 2.8 M5.6 18.4l2.8-2.8 M15.6 8.4l2.8-2.8 M12 9a3 3 0 100 6 3 3 0 000-6z',
  software:  'M2 5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z M8 21h8 M12 17v4',
  marketing: 'M3 21V3 M3 21H21 M7 17l4-4 4 4 6-6',
  design:    'M12 2l9 5v10l-9 5-9-5V7z M12 12l9-5 M12 12l-9-5 M12 12v10',
  devops:    'M12 2C7 2 3 6 3 11s4 9 9 9 9-4 9-9-4-9-9-9z M12 6v5l3 3',
}

export function ServicesPreview() {
  return (
    <Section size="lg" id="services">
      <Container>
        <div className="services-preview-head">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="h2-bbt">
              Five capabilities. <span className="text-muted-bbt">One team.</span>
            </h2>
          </div>
          <p className="lede-bbt">
            We deliver across the whole stack — from the AI under the hood,
            to the product on top, to the demand engine that grows it. Pick
            one. Pick all five.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80} className="reveal-cell">
            <Link href={`/services/${s.slug}`} className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icons[s.slug]} />
                </svg>
              </div>
              <div className="service-card-body">
                <h3 className="h3-bbt">{s.name}</h3>
                <p>{s.oneLiner}</p>
              </div>
              <span className="service-card-cta">
                Explore
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M3 7 H11 M7 3 L11 7 L7 11" />
                </svg>
              </span>
            </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
