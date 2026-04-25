import { type ReactNode } from 'react'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'

type Props = {
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
  crumbs?: Crumb[]
  actions?: ReactNode
  visual?: ReactNode
}

export function PageHero({ eyebrow, title, sub, crumbs, actions, visual }: Props) {
  return (
    <section className="v4-page-hero">
      <div className="v4-page-hero-bg" aria-hidden />
      <div className="v4-page-hero-inner">
        <div className={`v4-page-hero-grid ${visual ? '' : 'no-visual'}`}>
          <div className="v4-page-enter">
            {crumbs && <Breadcrumbs items={crumbs} />}
            <span className="v4-eyebrow" style={{ marginTop: 20 }}>{eyebrow}</span>
            <h1>{title}</h1>
            {sub && <p className="lead">{sub}</p>}
            {actions && <div className="v4-page-hero-actions">{actions}</div>}
          </div>
          {visual && (
            <div className="v4-page-hero-stage v4-page-enter" style={{ animationDelay: '0.15s' }}>
              {visual}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
