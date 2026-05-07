import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        padding: '40px 24px',
        textAlign: 'center',
      }}
    >
      <div>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#5C6586',
            marginBottom: 16,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: 16,
          }}
        >
          Page not found.
        </h1>
        <p style={{ color: '#8E9AB8', marginBottom: 32 }}>
          The link you followed is broken or this page was moved.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            padding: '14px 22px',
            background: '#4A74FF',
            color: '#fff',
            borderRadius: 999,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
