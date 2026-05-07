export default function HomePage() {
  return (
    <main style={{ padding: '120px 24px', maxWidth: 720, margin: '0 auto' }}>
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
        Big Bold Tech · rebuild in progress
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 5vw, 72px)',
          fontWeight: 700,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: 24,
        }}
      >
        Software, AI, and growth — end-to-end.
      </h1>
      <p style={{ color: '#8E9AB8', fontSize: 17, lineHeight: 1.6 }}>
        New site coming. This is the holding page after the rebuild wipe.
      </p>
    </main>
  )
}
