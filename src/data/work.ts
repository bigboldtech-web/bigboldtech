/**
 * Case studies for /work and the homepage Featured Work section.
 *
 * IMPORTANT: Names, metrics, and quotes below are PLACEHOLDER. Replace
 * with real, attributable case studies before launch.
 */

export type CaseStudy = {
  slug: string
  client: string
  industry: string
  title: string
  /** One-line summary used on cards */
  summary: string
  /** Hero image (Unsplash CDN) */
  image: string
  /** 3-4 headline metrics displayed on cards */
  metrics: { value: string; label: string }[]
  /** Service tags */
  services: string[]
  /** Featured on the homepage? */
  featured?: boolean
  placeholder?: boolean
}

const u = (id: string, w = 1600, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}&bbt=v1`

export const caseStudies: CaseStudy[] = [
  {
    slug: 'atlas-bank-fraud-detection',
    client: 'Atlas Bank',
    industry: 'Banking',
    title: 'Real-time fraud detection that saved $11M in 12 months.',
    summary:
      'Replaced a rule-based fraud system with a custom ML pipeline that scores 50M+ transactions a day in under 100ms.',
    image: u('1620228885847-9eab2a1adddc'),
    metrics: [
      { value: '94%',   label: 'Fraud reduction' },
      { value: '$11.2M', label: 'Annual savings' },
      { value: '<100ms', label: 'Scoring latency' },
    ],
    services: ['AI', 'Software'],
    featured: true,
    placeholder: true,
  },
  {
    slug: 'northwind-logistics-platform',
    client: 'Northwind',
    industry: 'Logistics',
    title: 'A logistics ops platform that cut deploy cycles from 4 hours to 8 minutes.',
    summary:
      'Replatformed a manual ops stack onto Kubernetes with full CI/CD, observability, and zero-downtime deploys.',
    image: u('1586528116311-ad8dd3c8310d'),
    metrics: [
      { value: '99.99%', label: 'Production uptime' },
      { value: '8 min',  label: 'Deploy time' },
      { value: '70%',    label: 'Infra cost reduction' },
    ],
    services: ['Software', 'DevOps'],
    featured: true,
    placeholder: true,
  },
  {
    slug: 'lumen-ecommerce-replatform',
    client: 'Lumen & Co.',
    industry: 'E-commerce',
    title: 'Headless commerce migration that lifted revenue 40% in six months.',
    summary:
      'Migrated a $200M e-commerce operation to a headless Next.js storefront with AI-powered personalization.',
    image: u('1607082348824-0a96f2a4b9da'),
    metrics: [
      { value: '40%', label: 'Revenue lift' },
      { value: '3×',  label: 'Page load speed' },
      { value: '+85%', label: 'Mobile conversion' },
    ],
    services: ['Software', 'Marketing', 'Design'],
    featured: true,
    placeholder: true,
  },
  {
    slug: 'verge-patient-portal',
    client: 'Verge Health',
    industry: 'Healthcare',
    title: 'A unified patient portal serving 2M+ patients across 150 facilities.',
    summary:
      'Built a HIPAA-compliant portal with appointment scheduling, telehealth, secure messaging, and health records.',
    image: u('1576091160550-2173dba999ef'),
    metrics: [
      { value: '2M+',  label: 'Patients onboarded' },
      { value: '4.8',  label: 'Patient satisfaction (5)' },
      { value: '-62%', label: 'Appointment no-shows' },
    ],
    services: ['Software', 'Design'],
    placeholder: true,
  },
  {
    slug: 'kestrel-ai-support',
    client: 'Kestrel',
    industry: 'SaaS',
    title: 'AI customer support that automates 80% of tickets.',
    summary:
      'Deployed a domain-trained AI agent and smart escalation flow that saved $400K annually on support headcount.',
    image: u('1551288049-bebda4e38f71'),
    metrics: [
      { value: '80%',  label: 'Tickets automated' },
      { value: '$400K', label: 'Annual savings' },
      { value: '<30s',  label: 'Response time' },
    ],
    services: ['AI', 'Software'],
    placeholder: true,
  },
  {
    slug: 'meridian-growth-engine',
    client: 'Meridian',
    industry: 'Insurance',
    title: 'Performance marketing that scaled spend 10× while improving ROAS.',
    summary:
      'Built attribution, creative testing, and AI-powered bid optimization across Meta, Google, and LinkedIn.',
    image: u('1551288049-bebda4e38f71'),
    metrics: [
      { value: '10×',  label: 'Spend scaled' },
      { value: '9.2×', label: 'Sustained ROAS' },
      { value: '+340%', label: 'Revenue growth' },
    ],
    services: ['Marketing'],
    placeholder: true,
  },
]

export const featuredWork = caseStudies.filter((c) => c.featured)
