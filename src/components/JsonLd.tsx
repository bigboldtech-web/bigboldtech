type Props = { data: Record<string, unknown> | Record<string, unknown>[] }

export function JsonLd({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      // Next.js Script component would be overkill for static JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
