export function Strip() {
  const items = [
    'Artificial Intelligence', 'SaaS Platforms', 'Mobile Apps',
    'Performance Marketing', 'SEO & Organic Growth', 'DevOps & Cloud',
    'Email Automation', 'Analytics & BI', 'Web Applications',
  ]

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {/* Duplicate items for infinite scroll */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="strip-item">{item}</span>
        ))}
      </div>
    </div>
  )
}
