export function TechStack() {
  const techs = [
    'React / Next.js', 'Flutter', 'Node.js / NestJS', 'TypeScript',
    'PostgreSQL', 'Redis', 'Prisma ORM', 'Docker',
    'GitHub Actions', 'OpenAI / Claude', 'GA4 / GTM', 'Meta Ads',
    'Google Ads', 'AWS / Linode', 'RabbitMQ', 'Cloudflare',
    'Engine Mailer', 'Pabbly Connect', 'Tailwind CSS', 'LangChain',
  ]

  return (
    <section className="sec sec-dark" id="tech">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>Our Arsenal</div>
          <h2 className="sec-title">Technologies We Master</h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>We pick the right tool for the job — never the trendy one.</p>
        </div>
        <div className="tech-cloud">
          {techs.map((tech) => (
            <div key={tech} className="tech-tag reveal">{tech}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
