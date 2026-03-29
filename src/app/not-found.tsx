import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <div className="stat-val" style={{ fontSize: 'clamp(80px, 15vw, 200px)', marginBottom: '24px' }}>404</div>
        <h1 className="sec-title" style={{ marginBottom: '16px' }}>Page Not Found</h1>
        <p className="sec-sub" style={{ margin: '0 auto 40px', textAlign: 'center' }}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link href="/" className="btn-glow">
          Back to Home
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
        </Link>
      </div>
    </section>
  )
}
