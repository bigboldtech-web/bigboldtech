export function ClientLogos() {
  const logos = [
    'NovaPay Financial', 'MedConnect Health', 'Luxe Retail Group',
    'UrbanCraft Living', 'PropVault Tech', 'LearnBridge Academy',
    'SwiftRoute Logistics', 'Meridian Capital', 'Atlas Industries',
    'Pinnacle SaaS', 'Forge Digital', 'Apex Commerce',
  ]

  return (
    <section className="logo-section">
      <div className="wrap">
        <p className="logo-heading">Trusted by forward-thinking enterprises</p>
      </div>
      <div className="logo-marquee">
        <div className="logo-track">
          {[...logos, ...logos].map((name, i) => (
            <div key={i} className="logo-item">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
