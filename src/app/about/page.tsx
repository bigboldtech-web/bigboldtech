import type { Metadata } from 'next'
import Link from 'next/link'
import { team } from '@/data/team'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { MidCta } from '@/components/v4/MidCta'
import { Scene } from '@/components/v4/Scene'

export const metadata: Metadata = {
  title: 'About — The Studio',
  description:
    'Big Bold Tech is an AI-native product studio + venture lab. Mumbai · Bengaluru · Kathmandu. We build software with conviction.',
}

const values = [
  { num: '01', title: 'Conviction over consensus', body: 'Every product has a strong opinion. Build a sharper tool 100 people love over a vague one 10,000 tolerate.' },
  { num: '02', title: 'Ship the version that exists', body: 'Tight loops, daily deploys, learn faster than the slide-deck competition. Velocity is the moat.' },
  { num: '03', title: 'Details are the brand', body: 'Loading states, copy, micro-animations, error messages. The last 5% is where forgettable becomes unforgettable.' },
  { num: '04', title: 'Generalists by design', body: 'Strategy meets infra meets pixel. One team thinking the whole stack so context never leaks.' },
  { num: '05', title: 'Own the outcome', body: 'We do not ship tasks. We ship the metric the work was hired to move. If it cannot be measured, it is not in scope.' },
  { num: '06', title: 'Build, do not blame', body: 'When something breaks we fix it. When something is unclear we clarify. There is one team — yours.' },
]

const story = [
  'Big Bold Tech began in 2022 as a single conviction: AI-native software is going to outperform every "AI feature bolted onto a 2015 product" — and the operators who ship the AI-native version first will dominate their category.',
  'We started by building Cashkr, an India-first device buyback platform that now ships 140+ orders daily across 21 cities. Then we built a SaaS infrastructure layer underneath it — and realised we could ship products for other founders at the same speed.',
  'Today we operate as a product studio + venture lab. We build for our own portfolio (Cashkr, Big Bold Teams, ManagedAd, Workwrk, Suprfly, SwayMaps) and we partner with founders who want the same conviction-led delivery cadence applied to their problem.',
]

const stats = [
  { num: '50+',     lbl: 'Engagements shipped' },
  { num: '6',       lbl: 'Live products' },
  { num: '21',      lbl: 'Cities served' },
  { num: '5,400+',  lbl: 'Cashkr orders / month' },
  { num: '99.9%',   lbl: 'Production uptime' },
  { num: '$50M+',   lbl: 'Client revenue impacted' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        crumbs={[{ label: 'About', href: '/about' }]}
        title={
          <>
            Software that thinks like a <span className="v4-italic">founder.</span>
          </>
        }
        sub={
          <>
            We&rsquo;re a product studio in Mumbai with a team in Kathmandu, building
            AI-native software for the operators, founders, and teams shaping
            what comes next. Built decisively. Shipped relentlessly.
          </>
        }
        actions={
          <>
            <Link href="/contact" className="v4-btn v4-btn-primary">
              Begin a project
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
            </Link>
            <a href="#team" className="v4-btn v4-btn-ghost">Meet the team</a>
          </>
        }
        visual={<Scene name="orbit" />}
      />

      {/* Story */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-block-head">
            <div>
              <span className="v4-eyebrow">Origin</span>
              <h2>Started with a <span className="v4-italic">conviction</span>.<br />Now we ship the proof.</h2>
            </div>
          </div>
          <div className="v4-prose" style={{ maxWidth: 880 }}>
            {story.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="v4-section" style={{ padding: '40px 0' }}>
        <div className="v4-container">
          <div className="v4-stat-grid">
            {stats.map((s) => (
              <div key={s.lbl} className="v4-stat-block">
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-block-head">
            <div>
              <span className="v4-eyebrow">Operating principles</span>
              <h2>What we <span className="v4-italic">refuse</span> to compromise on.</h2>
            </div>
            <p>Six principles that guide every line of code, every brief we accept, and every quarter we ship.</p>
          </div>
          <div className="v4-index-grid">
            {values.map((v, i) => (
              <Reveal key={v.num} delay={i * 60}>
                <div className="v4-card">
                  <div className="v4-card-num">{v.num}</div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="v4-section" id="team">
        <div className="v4-container">
          <div className="v4-block-head">
            <div>
              <span className="v4-eyebrow">The People</span>
              <h2>Senior teams only. <span className="v4-italic">No churn.</span></h2>
            </div>
            <p>The strategists, architects, and engineers who scope your engagement are the same people shipping it. No staffing churn, no junior handoffs.</p>
          </div>
          <div className="v4-team-grid">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 40}>
                <div className="v4-team-card">
                  <div className="v4-team-avatar">{m.initials}</div>
                  <h4>{m.name}</h4>
                  <div className="role">{m.role}</div>
                  <p className="bio">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="v4-section" style={{ padding: '40px 0' }}>
        <MidCta
          title="Bring us a problem worth solving."
          body="We are accepting a small cohort of partners for Q2 2026. Start with a thirty-minute strategy session — no deck, no sales theatre."
          buttonText="Begin a project"
          buttonHref="/contact"
        />
      </section>
    </>
  )
}
