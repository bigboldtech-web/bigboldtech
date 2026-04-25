import Link from 'next/link'
import { Scene } from '@/components/v4/Scene'

export default function NotFound() {
  return (
    <section className="v4-404">
      <div className="v4-404-stage" aria-hidden>
        <Scene name="drift" />
      </div>

      <div className="content">
        <div className="glitch v4-display">404</div>
        <h1>Signal lost.</h1>
        <p>The page you were looking for has drifted out of orbit. Either the link is stale, or we never built it. Either way — let&rsquo;s get you back.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="v4-btn v4-btn-primary">
            Back to home
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
          </Link>
          <Link href="/contact" className="v4-btn v4-btn-ghost">Tell us what you wanted</Link>
        </div>
      </div>
    </section>
  )
}
