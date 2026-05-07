export type ServiceSummary = {
  slug: string
  name: string
  shortName: string
  tagline: string
  /** One-line summary used on home page service cards */
  oneLiner: string
  /** Bulleted highlights — used on /services index page */
  highlights: string[]
}

export const services: ServiceSummary[] = [
  {
    slug: 'ai',
    name: 'AI applications',
    shortName: 'AI',
    tagline: 'AI products that ship to production.',
    oneLiner: 'Custom AI agents, RAG systems, and LLM-powered features built on your data.',
    highlights: [
      'AI agents and copilots',
      'Retrieval (RAG) over your documents',
      'Workflow + ops automation',
      'Eval harnesses and continuous tuning',
    ],
  },
  {
    slug: 'software',
    name: 'Custom software',
    shortName: 'Software',
    tagline: 'Web, mobile, and SaaS, built to last.',
    oneLiner: 'Production-grade web apps, mobile apps, and B2B platforms — engineered, not slapped together.',
    highlights: [
      'Next.js + React Native applications',
      'Multi-tenant SaaS platforms',
      'Internal tools and admin panels',
      'API design + integrations',
    ],
  },
  {
    slug: 'marketing',
    name: 'Digital marketing',
    shortName: 'Marketing',
    tagline: 'Demand engines that compound.',
    oneLiner: 'Performance ads, SEO, content, and lifecycle automation — built around your funnel.',
    highlights: [
      'Performance marketing (Meta + Google + LinkedIn)',
      'Technical + content SEO',
      'Email + lifecycle automation',
      'Attribution and analytics',
    ],
  },
  {
    slug: 'design',
    name: 'Brand & design',
    shortName: 'Design',
    tagline: 'Brand and product, in lockstep.',
    oneLiner: 'Brand identity, marketing sites, design systems, and product UX — by people who ship.',
    highlights: [
      'Brand identity + visual systems',
      'Marketing websites',
      'Product UX and design systems',
      'Motion + 3D for product moments',
    ],
  },
  {
    slug: 'devops',
    name: 'DevOps & cloud',
    shortName: 'DevOps',
    tagline: 'The infrastructure underneath.',
    oneLiner: 'Cloud setup, CI/CD, observability, and on-call — so you can scale without surprises.',
    highlights: [
      'AWS + GCP infrastructure',
      'CI/CD and zero-downtime deploys',
      'Monitoring, alerting, on-call',
      'Cost optimization + security hardening',
    ],
  },
]
