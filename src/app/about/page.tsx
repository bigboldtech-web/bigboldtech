import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Eyebrow } from '@/components/Eyebrow'
import { CountUp } from '@/components/CountUp'
import { Reveal } from '@/components/Reveal'
import { ContactCTA } from '@/components/home/ContactCTA'
import { team } from '@/data/team'
import { headlineStats } from '@/data/stats'

export const metadata: Metadata = {
  title: 'About Big Bold Tech',
  description:
    'Big Bold Tech is a full-service technology + growth partner — engineering, design, and marketing under one roof. Meet the team.',
}

const beliefs = [
  {
    title: 'Senior engineers, not staff augmentation.',
    body: 'Every engagement is led by people who&rsquo;ve been a CTO, a head of design, or a head of growth. We don&rsquo;t farm work down a chain.',
  },
  {
    title: 'Outcomes over hours.',
    body: 'Fixed-bid where it makes sense. Retainers where it doesn&rsquo;t. We don&rsquo;t bill for being busy — we bill for shipping.',
  },
  {
    title: 'Honest scoping, even when it costs us.',
    body: 'We&rsquo;ll tell you when an idea isn&rsquo;t worth building, or when we&rsquo;re not the right team. Better one no than ten lukewarm yeses.',
  },
  {
    title: 'You own everything.',
    body: 'Code, designs, infrastructure, accounts — yours from day one. We hand off cleanly when you&rsquo;re ready, no vendor-lock games.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>The team <span className="hero-accent">behind Big Bold Tech.</span></>}
        description="We're a full-service technology + growth partner based in Bengaluru, with team members across India, the UAE, and the US. Engineering, design, and marketing under one roof — so nothing drops between handoffs."
      />

      {/* Story */}
      <Section size="lg">
        <Container size="narrow">
          <Eyebrow>Our story</Eyebrow>
          <h2 className="h2-bbt about-section-h">
            Built by operators <span className="text-muted-bbt">who&rsquo;ve been on your side of the table.</span>
          </h2>
          <div className="about-prose">
            <p>
              Big Bold Tech was founded by a small group of operators who&rsquo;d
              spent the previous decade building consumer fintech, B2B SaaS,
              and D2C commerce — and were tired of watching agencies sell
              process where senior judgement was needed instead.
            </p>
            <p>
              We started with a simple bet: a single team that owned strategy,
              design, engineering, infrastructure, and growth would ship
              better software, faster, than five vendors pretending to
              coordinate. Five years later, we&rsquo;ve shipped 50+ engagements
              across banking, healthcare, e-commerce, SaaS, and logistics —
              and the bet has paid off.
            </p>
            <p>
              The team has grown, but the model hasn&rsquo;t changed. Senior
              engineers, fixed bids, weekly demos, no surprises. We&rsquo;re the
              technology partner we wished existed when we were on the
              client side.
            </p>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section size="md" bg="panel">
        <Container>
          <ul className="stats-band-grid">
            {headlineStats.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 80} className="stat-cell">
                <div className="stat-num">
                  <CountUp value={s.value} />
                </div>
                <div className="stat-label">{s.label}</div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Beliefs */}
      <Section size="lg">
        <Container>
          <div className="beliefs-head">
            <Eyebrow>What we believe</Eyebrow>
            <h2 className="h2-bbt">
              Four convictions <span className="text-muted-bbt">we don&rsquo;t flex on.</span>
            </h2>
          </div>
          <div className="beliefs-grid">
            {beliefs.map((b, i) => (
              <article key={b.title} className="belief-card">
                <div className="belief-num">0{i + 1}</div>
                <h3 className="h3-bbt" dangerouslySetInnerHTML={{ __html: b.title }} />
                <p dangerouslySetInnerHTML={{ __html: b.body }} />
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section size="lg" bg="subtle">
        <Container>
          <div className="team-head">
            <Eyebrow>The team</Eyebrow>
            <h2 className="h2-bbt">
              The people <span className="text-muted-bbt">you&rsquo;ll actually work with.</span>
            </h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => {
              const initials = m.name
                .split(' ')
                .map((s) => s[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()
              return (
                <Reveal as="article" key={m.name} delay={i * 80} className="team-card">
                  <div className="team-photo">
                    {m.image ? (
                      <Image src={m.image} alt={m.name} width={240} height={240} quality={80} />
                    ) : (
                      <span className="team-photo-fallback" aria-hidden>{initials}</span>
                    )}
                  </div>
                  <div className="team-meta">
                    <h3>{m.name}</h3>
                    <p className="team-role">{m.role}</p>
                    <p className="team-bio">{m.bio}</p>
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43A2.07 2.07 0 1 1 5.34 3.3a2.07 2.07 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                        </svg>
                        View on LinkedIn
                      </a>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      <ContactCTA />
    </>
  )
}
