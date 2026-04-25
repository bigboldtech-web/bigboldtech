import Link from 'next/link'

export type Crumb = { label: string; href: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: 'Home', href: '/' }, ...items]
  return (
    <nav className="v4-crumbs" aria-label="Breadcrumb">
      {trail.map((crumb, i) => {
        const isLast = i === trail.length - 1
        return (
          <span key={`${crumb.href}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {isLast
              ? <span className="v4-crumbs-current">{crumb.label}</span>
              : <Link href={crumb.href}>{crumb.label}</Link>
            }
            {!isLast && <span className="v4-crumbs-sep">/</span>}
          </span>
        )
      })}
    </nav>
  )
}
