export function MediaMentions() {
  const publications = [
    'TechCrunch', 'Forbes India', 'YourStory', 'Inc42', 'Entrepreneur India', 'Analytics India Mag',
  ]

  return (
    <section className="media-section">
      <div className="wrap">
        <p className="media-heading">As featured in</p>
        <div className="media-logos">
          {publications.map((pub, i) => (
            <div key={i} className="media-logo">{pub}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
