export type Industry = {
  slug: string
  name: string
  tagline: string
  /** One paragraph describing what we do for this industry */
  intro: string
  /** Common challenges this industry brings to us */
  challenges: string[]
  /** What we typically deliver */
  solutions: string[]
  /** Hero image URL (Unsplash CDN) */
  image: string
  /** Featured case-study slug for this industry, if any */
  featuredCaseSlug?: string
  placeholder?: boolean
}

const u = (id: string, w = 1600, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}&bbt=v1`

export const industries: Industry[] = [
  {
    slug: 'fintech',
    name: 'Fintech & Banking',
    tagline: 'Software that moves money — without breaking it.',
    intro:
      'We build fraud detection systems, payment platforms, lending engines, and compliance tooling for fintechs and banks. The work demands sub-100ms latency, hard auditability, and zero-tolerance for downtime — exactly the bar we hold our own products to.',
    challenges: [
      'Legacy core systems that can&rsquo;t support modern UX',
      'Rule-based fraud systems with high false-positive rates',
      'Reg-driven feature backlogs that crowd out product work',
      'Data scattered across CRM, payments, and core banking',
    ],
    solutions: [
      'Real-time ML fraud detection',
      'Modern customer-facing portals + mobile apps',
      'Compliance-as-code: auditable workflows by default',
      'Unified data platforms with secure access patterns',
    ],
    image: u('1611974789855-9c2a0a7236a3'),
    featuredCaseSlug: 'atlas-bank-fraud-detection',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagline: 'HIPAA-grade software that patients actually use.',
    intro:
      'Patient portals, telehealth, EHR integrations, and clinical-trial tooling — built to consumer-grade UX standards while meeting HIPAA, HITRUST, and SOC 2 controls. We work with health systems, digital-health startups, and pharma operations teams.',
    challenges: [
      'Multi-EHR integrations with inconsistent data shapes',
      'High patient drop-off in onboarding and follow-up',
      'Legacy portals that fail consumer-grade UX expectations',
      'Compliance overhead that slows feature velocity',
    ],
    solutions: [
      'Unified patient experiences across facilities',
      'Telehealth + secure messaging at scale',
      'Pre-built compliance scaffolding (HIPAA, BAA-ready)',
      'AI clinical documentation + workflow assistants',
    ],
    image: u('1576091160550-2173dba999ef'),
    featuredCaseSlug: 'verge-patient-portal',
  },
  {
    slug: 'ecommerce',
    name: 'E-commerce & Retail',
    tagline: 'Storefronts that load fast and sell harder.',
    intro:
      'Headless commerce, marketing infrastructure, AI personalization, and growth engines for D2C brands and retailers. We build the storefront, the search, the recommendations, and the demand engine that fills the funnel.',
    challenges: [
      'Monolithic platforms with poor mobile performance',
      'Personalization that&rsquo;s really just rule-based segmentation',
      'Fragmented marketing stack with no real attribution',
      'High CAC, no path to incremental ROAS',
    ],
    solutions: [
      'Headless Next.js storefronts with sub-1s LCP',
      'AI-powered search, recommendations, and personalization',
      'Attribution + creative-testing frameworks',
      'Lifecycle automation that compounds LTV',
    ],
    image: u('1607082348824-0a96f2a4b9da'),
    featuredCaseSlug: 'lumen-ecommerce-replatform',
  },
  {
    slug: 'saas',
    name: 'SaaS & Technology',
    tagline: 'AI features that ship — and infrastructure that holds.',
    intro:
      'For B2B SaaS and devtools companies, we build AI agent features, customer-facing apps, internal ops platforms, and the infrastructure that runs them. Many of our SaaS clients use us as a senior team they can&rsquo;t hire fast enough.',
    challenges: [
      'AI features stuck in demo mode, never reaching prod',
      'Hiring senior engineers slower than the roadmap demands',
      'Infrastructure groaning under product-market fit',
      'Internal tools sprawl and tech-debt accumulation',
    ],
    solutions: [
      'Production-ready AI agents with eval harnesses',
      'Embedded squads that ship alongside your team',
      'Platform refactors and infra modernization',
      'Internal tooling that pays for itself in a quarter',
    ],
    image: u('1551288049-bebda4e38f71'),
    featuredCaseSlug: 'kestrel-ai-support',
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    tagline: 'Operations software built for the warehouse, the road, and the dashboard.',
    intro:
      'Fleet management, last-mile platforms, warehouse ops, and supply-chain visibility software. We&rsquo;ve shipped the kind of systems that don&rsquo;t make headlines — but cut deploy cycles from hours to minutes and run with 99.99% uptime.',
    challenges: [
      'Manual deployments and 4-hour deploy cycles',
      'Disconnected tooling across ops, drivers, and customers',
      'Dashboards that report yesterday, not now',
      'Cost spirals as the operation scales',
    ],
    solutions: [
      'Kubernetes + zero-downtime CI/CD',
      'Driver, ops, and customer apps on a single backend',
      'Real-time telemetry and decision dashboards',
      'Cost-optimized cloud infrastructure',
    ],
    image: u('1586528116311-ad8dd3c8310d'),
    featuredCaseSlug: 'northwind-logistics-platform',
  },
  {
    slug: 'edtech',
    name: 'EdTech & Learning',
    tagline: 'Learning platforms that teach the way students learn.',
    intro:
      'Course platforms, AI tutors, student-success tools, and demand engines for EdTech businesses. We&rsquo;ve scaled paid acquisition 10× while improving ROAS, and built AI tutors that actually personalize.',
    challenges: [
      'Generic LMS UX that students disengage from',
      'Paid-acquisition cost spirals',
      'AI &ldquo;tutors&rdquo; that are really just chatbots',
      'Engagement and completion metrics stuck flat',
    ],
    solutions: [
      'Engagement-first product UX',
      'Performance marketing + creative testing',
      'AI tutoring built on student-specific data',
      'Lifecycle automation for retention + upsell',
    ],
    image: u('1503676260728-1c00da094a0b'),
    featuredCaseSlug: 'meridian-growth-engine',
    placeholder: true,
  },
]
