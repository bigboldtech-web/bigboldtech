export type ServiceDetail = {
  /** What we deliver in detail */
  title: string
  body: string
}

export type ServiceSummary = {
  slug: string
  name: string
  shortName: string
  tagline: string
  oneLiner: string
  /** Long-form description for the deep page hero */
  description: string
  highlights: string[]
  /** Detailed offerings shown on the deep page */
  offerings: ServiceDetail[]
  /** Tools / stack we typically use */
  stack: string[]
  /** Hero image */
  image: string
}

const u = (id: string, w = 1800, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}&bbt=v1`

export const services: ServiceSummary[] = [
  {
    slug: 'ai',
    name: 'AI applications',
    shortName: 'AI',
    tagline: 'AI products that ship to production.',
    oneLiner:
      'Custom AI agents, RAG systems, and LLM-powered features built on your data.',
    description:
      'We build AI applications that survive the demo. Production-grade agents, RAG systems trained on your data, and LLM-powered workflow automation — engineered with eval harnesses, observability, and on-call support so they keep working when the user count goes up.',
    highlights: [
      'Custom AI agents with tool use + memory',
      'RAG systems over enterprise documents',
      'LLM-powered ops + workflow automation',
      'Eval harnesses + continuous tuning loops',
    ],
    offerings: [
      {
        title: 'AI agents and copilots',
        body: 'Domain-trained agents that complete real work — research, drafting, support, ops. Full tool access, memory, and traceability. Built on Claude, OpenAI, or open-weight models depending on the use case.',
      },
      {
        title: 'Retrieval (RAG) over your data',
        body: 'Search and synthesis across your documents, code, ticketing systems, and CRMs. Hybrid retrieval, reranking, citation enforcement — engineered to reduce hallucination, not paper over it.',
      },
      {
        title: 'Workflow + ops automation',
        body: 'Replace the hours engineers spend on triage, summarization, classification, and routing. We deploy agents into your existing systems — Slack, Linear, Salesforce, internal tools.',
      },
      {
        title: 'Evaluation + continuous improvement',
        body: 'AI features fail silently. We build eval harnesses, golden-set regression tests, and real-time quality dashboards so you know when the model is drifting before users do.',
      },
    ],
    stack: ['Claude', 'OpenAI', 'LangGraph', 'pgvector', 'Pinecone', 'TypeScript', 'Python'],
    image: u('1677442135722-5f08a7d7d2c1'),
  },
  {
    slug: 'software',
    name: 'Custom software',
    shortName: 'Software',
    tagline: 'Web, mobile, and SaaS, built to last.',
    oneLiner:
      'Production-grade web apps, mobile apps, and B2B platforms — engineered, not slapped together.',
    description:
      'Web apps, mobile apps, internal tools, and B2B platforms — built on stacks we run in production for ourselves. Senior engineering, real testing, real documentation, real deploys. The kind of code that survives a team change.',
    highlights: [
      'Next.js + React Native applications',
      'Multi-tenant SaaS platforms',
      'Internal tools and admin panels',
      'API design + third-party integrations',
    ],
    offerings: [
      {
        title: 'Web applications',
        body: 'Next.js apps with React Server Components, type-safe APIs, real auth, and Lighthouse scores in the 90s. Built for performance, accessibility, and SEO from day one.',
      },
      {
        title: 'Mobile applications',
        body: 'Cross-platform React Native (Expo) apps with crash analytics, OTA updates, and proper native modules where needed. iOS + Android from one codebase, shipped to both stores.',
      },
      {
        title: 'B2B + multi-tenant SaaS',
        body: 'Tenant isolation, RBAC, audit logs, billing, admin tooling — the unsexy 80% of every SaaS that we&rsquo;ve already built ten times. We start where you would after six months.',
      },
      {
        title: 'Internal tools + admin panels',
        body: 'Operational tools for ops, support, finance, and ML teams. Built fast, with proper auth, designed for the people who actually use them every day.',
      },
    ],
    stack: ['Next.js', 'React Native', 'TypeScript', 'PostgreSQL', 'Prisma', 'tRPC', 'Tailwind'],
    image: u('1517694712202-14dd9538aa97'),
  },
  {
    slug: 'marketing',
    name: 'Digital marketing',
    shortName: 'Marketing',
    tagline: 'Demand engines that compound.',
    oneLiner:
      'Performance ads, SEO, content, and lifecycle automation — built around your funnel.',
    description:
      'Marketing only works when the funnel underneath it is honest. We build performance marketing programs, technical SEO foundations, content systems, and lifecycle automation — all wired to attribution that tells you what&rsquo;s actually working.',
    highlights: [
      'Performance marketing (Meta, Google, LinkedIn)',
      'Technical + content SEO',
      'Email + lifecycle automation',
      'Attribution and analytics',
    ],
    offerings: [
      {
        title: 'Performance marketing',
        body: 'Paid acquisition across Meta, Google, LinkedIn, and TikTok. Structured creative testing, AI-powered bid optimization, weekly ROAS reviews. Scaling spend without losing efficiency.',
      },
      {
        title: 'Technical + content SEO',
        body: 'Crawlable architecture, schema markup, internal linking, and content programs that target real buyer intent. We&rsquo;ve grown organic traffic 300%+ on multiple engagements.',
      },
      {
        title: 'Email + lifecycle automation',
        body: 'Welcome flows, abandoned-cart, post-purchase, retention, win-back. Built on Klaviyo, Customer.io, or your stack. Engagement metrics that actually move LTV.',
      },
      {
        title: 'Attribution + analytics',
        body: 'Multi-touch attribution, server-side tracking, GA4 + warehouse pipelines. Dashboards that tell you what to do next, not what happened last week.',
      },
    ],
    stack: ['Meta Ads', 'Google Ads', 'GA4', 'Klaviyo', 'Customer.io', 'Segment', 'Mixpanel'],
    image: u('1432888498266-38ffec3eaf0a'),
  },
  {
    slug: 'design',
    name: 'Brand & design',
    shortName: 'Design',
    tagline: 'Brand and product, in lockstep.',
    oneLiner:
      'Brand identity, marketing sites, design systems, and product UX — by people who ship.',
    description:
      'We design brands, websites, and products that look like they came from a single mind — because they did. Brand, UX, copy, and motion in lockstep, not in silos. Designed by people who&rsquo;ve been on the engineering side and understand what gets built.',
    highlights: [
      'Brand identity and visual systems',
      'Marketing websites that convert',
      'Product UX + design systems',
      'Motion + 3D for product moments',
    ],
    offerings: [
      {
        title: 'Brand identity + visual systems',
        body: 'Logo, type, color, motion, photography direction. Delivered as a design system, not a PDF. Every asset implementation-ready, every decision justified.',
      },
      {
        title: 'Marketing websites',
        body: 'Conversion-focused marketing sites built on Next.js with proper performance and accessibility. Designed and engineered by the same team — no handoff theatre.',
      },
      {
        title: 'Product UX + design systems',
        body: 'Customer-facing product UX, component libraries, design tokens. Figma + code in sync. We design for the engineering reality, not aspirational mockups.',
      },
      {
        title: 'Motion + 3D moments',
        body: 'WebGL hero moments, scroll-driven storytelling, interactive demos. Used sparingly, where they actually add to the pitch.',
      },
    ],
    stack: ['Figma', 'After Effects', 'WebGL / R3F', 'Framer Motion', 'Lottie'],
    image: u('1561070791-2526d30994b8'),
  },
  {
    slug: 'devops',
    name: 'DevOps & cloud',
    shortName: 'DevOps',
    tagline: 'The infrastructure underneath.',
    oneLiner:
      'Cloud setup, CI/CD, observability, and on-call — so you can scale without surprises.',
    description:
      'The infrastructure underneath. Cloud architecture, CI/CD, observability, on-call rotations, and cost optimization — done by engineers who&rsquo;ve been paged at 3am and built systems to make sure they aren&rsquo;t paged again.',
    highlights: [
      'AWS + GCP infrastructure',
      'CI/CD and zero-downtime deploys',
      'Monitoring, alerting, on-call',
      'Cost optimization + security hardening',
    ],
    offerings: [
      {
        title: 'Cloud architecture',
        body: 'AWS or GCP infrastructure-as-code from day one. Multi-environment, multi-region where needed, with the security guardrails that keep audits painless.',
      },
      {
        title: 'CI/CD pipelines',
        body: 'GitHub Actions, GitLab, or your CI of choice. Zero-downtime deploys, preview environments per PR, automatic rollback on failed health checks.',
      },
      {
        title: 'Observability + on-call',
        body: 'Datadog, Grafana, Sentry — wired to a real on-call rotation. P0 acknowledged in 15 minutes, P1 in an hour, with public status pages and post-mortems.',
      },
      {
        title: 'Cost + security',
        body: 'Quarterly cost reviews that typically find 30–60% savings. Security hardening, IAM audits, dependency scanning, secrets management. SOC 2-ready by default.',
      },
    ],
    stack: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Datadog', 'PagerDuty'],
    image: u('1558494949-ef010cbdcc31'),
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
