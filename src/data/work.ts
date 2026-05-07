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
  /** Headline metrics */
  metrics: { value: string; label: string }[]
  services: string[]
  featured?: boolean
  placeholder?: boolean
  /** Long-form content for the deep page */
  challenge: string
  approach: string[]
  outcomes: string[]
  /** Customer quote */
  quote?: { text: string; author: string; role: string }
  /** Year of engagement */
  year: string
  /** Engagement length */
  duration: string
}

const u = (id: string, w = 1800, q = 75) =>
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
      { value: '94%',    label: 'Fraud reduction' },
      { value: '$11.2M', label: 'Annual savings' },
      { value: '<100ms', label: 'Scoring latency' },
      { value: '78%',    label: 'False-positives reduced' },
    ],
    services: ['AI', 'Software'],
    featured: true,
    placeholder: true,
    year: '2025',
    duration: '6 months',
    challenge:
      'Atlas Bank was losing roughly $12M annually to card-present and card-not-present fraud. Their legacy rule-based system had drifted into thousands of overlapping rules — generating so many false positives that legitimate customers were being blocked at the rate of one in every twelve transactions. Customer NPS was bleeding, and the fraud-ops team was running on tribal knowledge.',
    approach: [
      'Audited 24 months of transaction data and reverse-engineered the rule graph to identify which rules were actually pulling weight versus which were dead code costing latency.',
      'Designed and trained a gradient-boosted model on 50M+ labelled transactions, enriched with device, behavioral, and graph signals — with a separate adversarial-example pipeline to keep the model robust against drift.',
      'Built a real-time scoring service in Go with sub-100ms p99 latency, deployed on Kubernetes with multi-region failover and shadow-traffic rollout.',
      'Replaced the static rule console with a fraud-ops UI that lets analysts label disputed cases, see model reasoning, and push retraining triggers without engineering involvement.',
    ],
    outcomes: [
      '$11.2M in annual fraud-loss savings, validated by independent audit at month 12.',
      'False-positive rate dropped 78%, recovering an estimated $4.5M in formerly-blocked legitimate revenue.',
      'Model retraining cadence moved from quarterly to weekly, with a regression eval suite that fails CI on degradation.',
      'SOC 2 + RBI audit pass on first review thanks to comprehensive lineage + decision logging.',
    ],
    quote: {
      text: "Big Bold delivered a fraud detection system that exceeded every benchmark we set. ROI was apparent inside the first month, and they passed our security review faster than any vendor we've worked with.",
      author: 'Priya Raghavan',
      role: 'CTO, Atlas Bank',
    },
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
      { value: 'Zero',   label: 'Downtime deploys' },
    ],
    services: ['Software', 'DevOps'],
    featured: true,
    placeholder: true,
    year: '2025',
    duration: '8 months',
    challenge:
      'Northwind moved 40,000 shipments a day across India and the GCC, but their tech stack was a tangle of manually-deployed PHP services, a single Postgres write-master held together by cron jobs, and dashboards that were six hours behind reality. Deploys were 4-hour ordeals scheduled for Sunday night. When something broke at 2am — which it did — the on-call engineer would simply restart everything.',
    approach: [
      'Containerized the existing stack and shipped it onto a managed Kubernetes cluster, with proper resource limits, autoscaling, and a sane secrets-management pattern from day one.',
      'Built a GitHub-Actions CI/CD pipeline with preview environments per PR, automated regression tests against a production-shaped fixture, and zero-downtime blue/green deploys.',
      'Stood up a full observability stack — Datadog metrics, Loki logs, Grafana dashboards — and a real PagerDuty rotation with documented runbooks for every alert.',
      'Refactored the monolithic Postgres into a primary + read-replica setup with logical replication, then carved out the highest-traffic surfaces into independent services.',
    ],
    outcomes: [
      'Deploys went from 4-hour Sunday-night events to 8-minute non-events that happen 30+ times a week.',
      'Production uptime improved from a self-reported 99.5% to a measured 99.99% across a 12-month window.',
      'Infrastructure costs dropped 70% through right-sizing and committed-use discounts on the migration.',
      'On-call alert volume dropped 85% after the first quarter of stabilization work.',
    ],
    quote: {
      text: 'Our deployments went from 4-hour ordeals to 8-minute non-events. Big Bold gave us the infrastructure reliability our customers depend on.',
      author: 'Daniel Okafor',
      role: 'COO, Northwind',
    },
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
      { value: '40%',  label: 'Revenue lift' },
      { value: '3×',   label: 'Page load speed' },
      { value: '+85%', label: 'Mobile conversion' },
      { value: '+120%', label: 'Organic traffic' },
    ],
    services: ['Software', 'Marketing', 'Design'],
    featured: true,
    placeholder: true,
    year: '2024',
    duration: '5 months',
    challenge:
      'Lumen & Co. ran a $200M annual storefront on a monolithic legacy commerce platform that had stopped scaling. Page loads were 4-6 seconds on mobile, conversion was half what their category benchmark predicted, and personalization was really just a six-segment rule tree. They needed a replatform that didn\'t risk a single dollar of peak-season revenue.',
    approach: [
      'Built a headless Next.js storefront with React Server Components, edge-rendered category pages, and a sub-1s LCP across the catalogue.',
      'Mapped every URL on the legacy platform to its successor with a comprehensive 301 redirect plan, validated against 18 months of analytics traffic.',
      'Integrated AI-powered search, recommendations, and personalization tuned to actual customer journeys instead of demographic segments.',
      'Cut over with shadow-traffic for two weeks before a single-weekend hard switch — zero downtime, zero ranking loss, zero revenue gap.',
    ],
    outcomes: [
      'Revenue per session lifted 40% within six months — a mix of conversion-rate gains, AOV uplift, and traffic recovery.',
      'Mobile conversion improved 85% on the strength of the speed gains alone.',
      'Organic traffic grew 120% over twelve months from the schema, performance, and content overhaul.',
      'Marketing team cut their bid spend 18% while increasing conversion volume — better landing-page experience scoring.',
    ],
    quote: {
      text: 'Migration was flawless. Zero downtime, zero SEO loss, revenue lifted 40% in six months. Best investment we made this decade.',
      author: 'Michelle Park',
      role: 'VP of Digital, Lumen & Co.',
    },
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
      { value: '-45%', label: 'Support call volume' },
    ],
    services: ['Software', 'Design'],
    placeholder: true,
    year: '2024',
    duration: '9 months',
    challenge:
      'Verge Health ran 150 facilities across the US, each with its own patient portal stitched onto whichever EHR the local network used. Patients were carrying four logins, three different appointment apps, and no unified record. NPS was negative double-digits and the call center was drowning.',
    approach: [
      'Designed and shipped a single patient experience that authenticates via SSO across all facilities, with a unified record stitched together via FHIR adapters per EHR vendor.',
      'Built native appointment scheduling, telehealth, secure messaging, and health-record access — designed by the same team that designed it for usability rather than compliance theatre.',
      'Stood up a HIPAA-compliant infra footprint on AWS with audit logging, BAA-signed sub-processors, and SOC 2-aligned controls baked in from day one.',
      'Ran a phased rollout across the 150 facilities over 14 weeks, with parallel-running of the legacy portal during cutover to protect existing workflows.',
    ],
    outcomes: [
      '2M+ patients onboarded across all 150 facilities in the first 9 months.',
      'Patient satisfaction (CSAT-style) settled at 4.8/5 across the unified experience.',
      'Appointment no-shows fell 62% on the back of better reminders and one-tap rescheduling.',
      'Support call volume dropped 45% — the portal absorbed the work the call center used to handle.',
    ],
    quote: {
      text: 'The portal has transformed how our patients interact with our health system. Big Bold understood healthcare complexity like no other agency we evaluated.',
      author: 'Hiroko Tanaka',
      role: 'Chief Digital Officer, Verge Health',
    },
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
      { value: '80%',   label: 'Tickets automated' },
      { value: '$400K', label: 'Annual savings' },
      { value: '<30s',  label: 'Response time' },
      { value: '4.7',   label: 'CSAT (5)' },
    ],
    services: ['AI', 'Software'],
    placeholder: true,
    year: '2025',
    duration: '4 months',
    challenge:
      'Kestrel was a fast-growing B2B SaaS receiving 2,000+ daily support tickets. Response times had stretched to 36 hours; the support team had grown 3× in 18 months and was still losing ground. Their first AI experiment — a generic chatbot bolted onto Intercom — had churned itself out with single-digit deflection rates.',
    approach: [
      'Built a domain-trained agent on Claude with a retrieval layer over their actual product docs, ticket history, and changelog — not a generic FAQ scrape.',
      'Designed a confidence-aware escalation flow: the agent routes to a human the moment it can\'t cite a source for its answer, with the relevant context already attached.',
      'Wired full ticket-level analytics into Looker — every conversation evaluated for resolution, satisfaction, and escalation reason.',
      'Shipped a continuous-improvement loop: humans rate every escalated ticket, those signals retrain the retrieval ranking weekly.',
    ],
    outcomes: [
      '80% of tickets resolved without human involvement within 30 seconds, validated against a hand-labelled audit set.',
      '$400K annualized savings on support team scaling that no longer needed to happen.',
      'CSAT for AI-handled conversations: 4.7/5 — equal to their best human agents.',
      'Escalated tickets carry full context, so human handle-time on the harder ones dropped 40%.',
    ],
    quote: {
      text: "Big Bold's AI support agent handles 80% of our customer queries. Our human team went from drowning in tickets to focusing on the complex stuff that actually needs them.",
      author: 'Rahul Mehta',
      role: 'CTO, Kestrel',
    },
  },
  {
    slug: 'meridian-growth-engine',
    client: 'Meridian',
    industry: 'Insurance',
    title: 'Performance marketing that scaled spend 10× while improving ROAS.',
    summary:
      'Built attribution, creative testing, and AI-powered bid optimization across Meta, Google, and LinkedIn.',
    image: u('1611974789855-9c2a0a7236a3'),
    metrics: [
      { value: '10×',   label: 'Spend scaled' },
      { value: '9.2×',  label: 'Sustained ROAS' },
      { value: '+340%', label: 'Revenue growth' },
      { value: '-45%',  label: 'CAC reduction' },
    ],
    services: ['Marketing'],
    placeholder: true,
    year: '2024',
    duration: '12 months',
    challenge:
      'Meridian was running a $15K/month paid program with a healthy 8× ROAS — and a board mandate to grow 10× without losing efficiency. Two previous agencies had tried and failed; spend would scale, ROAS would collapse. Their attribution was Google Analytics last-click, which lied about what was working.',
    approach: [
      'Replaced last-click attribution with a multi-touch model fed by server-side tracking, validated against a 90-day holdout test.',
      'Built a structured creative-testing framework — 8 variants per concept per week, each tagged for retention, retargeting, or prospecting.',
      'Layered AI-powered bid optimization across Meta, Google, and LinkedIn that respected the new attribution signals rather than the platform-native ROAS.',
      'Ran systematic landing-page A/B tests on the top-of-funnel — typically the bottleneck once paid spend scales past $50K/month.',
    ],
    outcomes: [
      '$15K → $150K/month spend with sustained 9.2× ROAS — actually higher than the starting baseline.',
      '+340% revenue growth attributable to paid acquisition over the engagement.',
      '45% reduction in CAC, primarily from the creative-testing program weeding out underperformers earlier.',
      'In-house team picked up the playbook on month 9 and now runs the program with us as advisor.',
    ],
    quote: {
      text: 'Scaling spend from $15K to $150K monthly while improving ROAS seemed impossible. Big Bold made it look routine — and the analytics they built means we actually understand why it\'s working.',
      author: 'Chris Williams',
      role: 'Head of Growth, Meridian',
    },
  },
]

export const featuredWork = caseStudies.filter((c) => c.featured)

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug)
}
