import Link from 'next/link'
import { JsonLd } from './JsonLd'
import { buildBreadcrumbSchema } from '@/lib/schema'
import { SITE_CONFIG } from '@/lib/constants'

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: 'Home', href: '/' }, ...items]
  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: `${SITE_CONFIG.url}${item.href}`,
  }))

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" style={{ marginBottom: '32px' }}>
        <ol style={{ display: 'flex', gap: '8px', alignItems: 'center', listStyle: 'none', padding: 0, fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.5px', color: 'var(--text-dim)' }}>
          {allItems.map((item, i) => (
            <li key={item.href} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {i > 0 && <span style={{ color: 'var(--text-dim)' }}>/</span>}
              {i === allItems.length - 1 ? (
                <span style={{ color: 'var(--text-mid)' }}>{item.label}</span>
              ) : (
                <Link href={item.href} style={{ color: 'var(--text-dim)', textDecoration: 'none', transition: 'color 0.3s' }}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
