export function ProblemStatement() {
  const problems = [
    {
      num: '01',
      title: 'Your Tech Stack Is Fragmented',
      description: 'You have a web agency, an app agency, an ad agency, a DevOps vendor, and an analytics consultant — none of them talk to each other. Every handoff leaks context, budget, and momentum.',
    },
    {
      num: '02',
      title: 'Agencies Love Reports, Not Results',
      description: 'You are drowning in slide decks and vanity metrics. Traffic is up 200% but revenue is flat. Your agency celebrates impressions while you are trying to hit quarterly targets.',
    },
    {
      num: '03',
      title: 'AI Is Changing Everything — Most Agencies Have Not Noticed',
      description: 'Your customers are getting answers from ChatGPT and Perplexity instead of clicking your search results. Traditional SEO is table stakes. GEO, AEO, and LLMO are the new battleground — and most agencies cannot even define them.',
    },
  ]

  return (
    <section className="sec problem-sec">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>The Problem</div>
          <h2 className="sec-title">Why Enterprise Tech<br />Is Broken</h2>
          <p className="sec-sub" style={{ margin: '0 auto' }}>If any of these sound familiar, you are not alone. These are the exact problems we built BigBoldTech to solve.</p>
        </div>

        <div className="problem-grid">
          {problems.map((p) => (
            <div key={p.num} className="problem-card reveal">
              <div className="problem-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
