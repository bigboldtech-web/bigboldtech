import type { Service } from '@/types'

export const services: Service[] = [
  {
    slug: 'ai-automation',
    name: 'AI & Automation',
    shortName: 'AI',
    description:
      'Custom AI agents, LLM integrations, and intelligent automation systems that streamline enterprise operations and unlock new revenue channels.',
    longDescription:
      'We design, build, and deploy production-grade AI systems tailored to enterprise workflows. From custom AI agents and LLM-powered chatbots to predictive analytics pipelines and end-to-end workflow automation, our solutions are engineered for reliability, security, and scale. Every engagement begins with a thorough audit of your existing processes to identify the highest-impact automation opportunities, ensuring measurable ROI from day one.',
    icon: 'AI',
    features: [
      'Custom AI Agent Development',
      'LLM Integration & Fine-Tuning (GPT, Claude, Llama)',
      'Intelligent Chatbots & Conversational AI',
      'Workflow Automation & Orchestration',
      'Predictive Analytics & Forecasting Models',
      'Document Processing & Extraction (OCR, NLP)',
      'RAG Pipelines & Knowledge Base Systems',
      'MLOps, Model Monitoring & Continuous Retraining',
    ],
    technologies: [
      'Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Claude',
      'LangChain', 'Hugging Face', 'AWS SageMaker', 'Pinecone',
    ],
    faqs: [
      {
        question: 'How long does it take to build and deploy a custom AI agent?',
        answer:
          'A focused proof-of-concept typically takes 3-5 weeks, allowing you to validate the approach with real data before committing to a full build. Production-grade AI agents with enterprise integrations, guardrails, and monitoring usually take 8-16 weeks depending on complexity. We follow an iterative delivery model so you see working functionality every two weeks.',
      },
      {
        question: 'Can you integrate AI into our existing enterprise software stack?',
        answer:
          'Absolutely. We specialize in embedding AI capabilities into existing ERP, CRM, and operational systems without requiring a full platform overhaul. Whether you run Salesforce, SAP, HubSpot, or custom internal tools, we build secure API layers and middleware that connect AI models to your current workflows. This approach minimizes disruption while delivering immediate value.',
      },
      {
        question: 'How do you ensure data privacy and security with AI implementations?',
        answer:
          'Data security is foundational to every AI project we deliver. We implement role-based access controls, encrypt data at rest and in transit, and can deploy models within your own cloud environment or VPC so sensitive data never leaves your infrastructure. For regulated industries, we build compliance frameworks aligned with SOC 2, HIPAA, GDPR, and industry-specific requirements.',
      },
      {
        question: 'What is the typical ROI of enterprise AI automation?',
        answer:
          'Our enterprise clients typically realize 3-10x ROI within the first 12 months. The most impactful results come from automating high-volume, repetitive processes such as document processing, customer support triage, lead qualification, and data entry. One client reduced manual processing time by 87% and reallocated that team capacity to revenue-generating activities.',
      },
      {
        question: 'Do you provide ongoing support and model optimization after launch?',
        answer:
          'Yes. AI systems require continuous monitoring and optimization to maintain peak performance. We offer dedicated support tiers that include model drift detection, automated retraining pipelines, performance benchmarking, and quarterly strategy reviews. Our MLOps infrastructure ensures your AI systems improve over time rather than degrade.',
      },
    ],
  },
  {
    slug: 'saas-development',
    name: 'SaaS Product Development',
    shortName: 'SaaS',
    description:
      'End-to-end SaaS platform development from initial architecture to scaled product serving thousands of enterprise customers.',
    longDescription:
      'We build SaaS platforms from the ground up with multi-tenant architecture, robust billing systems, and enterprise-ready security baked in from day one. Our team handles product strategy, system design, full-stack development, and infrastructure automation, delivering platforms that scale seamlessly from your first customer to your ten-thousandth. Every SaaS product we ship includes subscription management, role-based access, analytics dashboards, and API-first architecture as standard.',
    icon: 'SaaS',
    features: [
      'Multi-Tenant Architecture & Data Isolation',
      'Subscription Billing & Revenue Management (Stripe)',
      'RESTful & GraphQL API Development',
      'Admin Dashboards & Back-Office Portals',
      'User Management, SSO & RBAC',
      'Usage-Based Metering & Tiered Pricing',
      'White-Label & Custom Branding Capabilities',
      'Auto-Scaling Infrastructure & Zero-Downtime Deploys',
    ],
    technologies: [
      'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis',
      'Stripe', 'Auth0', 'AWS', 'Terraform', 'Kubernetes',
    ],
    faqs: [
      {
        question: 'How do you architect multi-tenant SaaS platforms for enterprise clients?',
        answer:
          'We design multi-tenant systems with logical data isolation at the database level, ensuring each tenant\'s data is completely segregated while sharing compute infrastructure for cost efficiency. Our architecture supports enterprise requirements from day one: SSO via SAML/OIDC, role-based access control, audit logging, custom branding, and dedicated resource allocation for premium tiers. This approach lets you serve SMB and enterprise customers on a single codebase.',
      },
      {
        question: 'Can you take our SaaS product from concept to market launch?',
        answer:
          'Yes, we provide full lifecycle SaaS development. We start with product strategy and competitive analysis, move through UX design and technical architecture, then build iteratively with two-week sprint cycles. We handle Stripe billing integration, authentication, DevOps, QA, and launch readiness. Post-launch, we provide ongoing development support to iterate based on user feedback and growth metrics.',
      },
      {
        question: 'How do you handle billing, subscriptions, and revenue operations?',
        answer:
          'We integrate Stripe as the billing backbone, supporting flat-rate subscriptions, tiered pricing, usage-based metering, free trials, and enterprise invoicing. Our implementations include automated dunning for failed payments, proration for plan changes, tax compliance via Stripe Tax, and real-time revenue dashboards. For enterprise deals, we build custom quoting and contract management workflows.',
      },
      {
        question: 'What security and compliance standards do your SaaS builds meet?',
        answer:
          'Our SaaS platforms are built to SOC 2 Type II standards with end-to-end encryption, secure authentication flows, regular penetration testing, and comprehensive audit trails. We implement compliance frameworks for GDPR, HIPAA, and PCI DSS based on your industry requirements. Infrastructure is provisioned as code via Terraform, ensuring consistent, auditable environments across staging and production.',
      },
      {
        question: 'How do you ensure the platform scales as our customer base grows?',
        answer:
          'Scalability is engineered into the architecture from the start. We use horizontally scalable microservices deployed on Kubernetes with auto-scaling policies, database read replicas and connection pooling, Redis caching layers, and CDN-backed asset delivery. Load testing is part of our QA process, and we build monitoring dashboards that track response times, error rates, and resource utilization in real time.',
      },
    ],
  },
  {
    slug: 'web-apps',
    name: 'Web Applications',
    shortName: 'Web',
    description:
      'High-performance Next.js web applications, admin panels, and customer portals built for enterprise scale and speed.',
    longDescription:
      'We build modern web applications using Next.js and React that deliver sub-second load times, exceptional user experiences, and enterprise-grade reliability. From complex admin panels and internal tools to customer-facing portals and e-commerce engines, our applications are architected for performance, accessibility, and long-term maintainability. Every project ships with server-side rendering, edge caching, and Core Web Vitals optimization as standard.',
    icon: 'Web',
    features: [
      'Next.js Full-Stack Application Development',
      'Admin Panels & Internal Business Tools',
      'E-Commerce Engines & Storefront Platforms',
      'Customer Portals & Self-Service Dashboards',
      'Progressive Web Apps (PWA)',
      'Headless CMS Integration & Content Architecture',
      'Core Web Vitals & Performance Optimization',
      'WCAG 2.1 AA Accessibility Compliance',
    ],
    technologies: [
      'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL',
      'Prisma', 'Tailwind CSS', 'Vercel', 'AWS',
    ],
    faqs: [
      {
        question: 'Why do you recommend Next.js for enterprise web applications?',
        answer:
          'Next.js provides the best combination of developer productivity and production performance for enterprise applications. Its hybrid rendering model (SSR, SSG, ISR) means pages load instantly while remaining fully dynamic. The App Router architecture enables fine-grained caching, streaming, and server components that reduce client-side JavaScript by up to 70%. Combined with Vercel or AWS deployment, it delivers a globally distributed, edge-optimized application out of the box.',
      },
      {
        question: 'Can you migrate our legacy web application to a modern stack?',
        answer:
          'Yes, we specialize in incremental migrations that keep your business running throughout the transition. We typically implement a strangler fig pattern, building new features in Next.js while gradually replacing legacy components. This approach eliminates the risk of a big-bang rewrite and lets you realize value immediately. We have migrated enterprise applications from WordPress, PHP, Angular, and custom legacy stacks.',
      },
      {
        question: 'How do you ensure web application performance meets enterprise standards?',
        answer:
          'Performance is a core engineering discipline, not an afterthought. We target sub-1s Largest Contentful Paint, zero Cumulative Layout Shift, and sub-100ms interaction response times. Our toolkit includes server-side rendering, edge caching, image optimization via next/image, code splitting, lazy loading, and database query optimization. Every build is benchmarked against Lighthouse and real-user monitoring data.',
      },
      {
        question: 'Do you build custom admin panels and internal business tools?',
        answer:
          'Absolutely. We build custom admin panels, CRM interfaces, inventory management systems, reporting dashboards, and operational tools tailored to your exact business processes. Unlike off-the-shelf solutions, our custom tools integrate directly with your data sources and workflows, eliminating manual data entry and context switching. Typical builds take 6-10 weeks for an MVP.',
      },
      {
        question: 'What does your web application development process look like?',
        answer:
          'We follow a structured agile process: discovery and architecture planning (1-2 weeks), UI/UX design with interactive prototypes (2-3 weeks), then iterative development in two-week sprints with demos at the end of each sprint. We integrate automated testing, CI/CD pipelines, and staging environments from the first sprint. Post-launch, we provide monitoring, performance optimization, and ongoing feature development.',
      },
    ],
  },
  {
    slug: 'mobile-apps',
    name: 'Mobile Applications',
    shortName: 'Mobile',
    description:
      'Cross-platform Flutter mobile applications with native performance, real-time features, and offline-first architecture.',
    longDescription:
      'We build polished, high-performance mobile applications using Flutter that run beautifully on both iOS and Android from a single codebase. Our mobile solutions include push notifications, real-time data synchronization, offline-first capabilities, and deep integration with device hardware. Every app is engineered for smooth 60fps animations, minimal battery consumption, and seamless app store approval on both platforms.',
    icon: 'Mobile',
    features: [
      'Cross-Platform Flutter App Development',
      'Push Notifications & In-App Messaging',
      'Real-Time Data Sync & WebSocket Integration',
      'Offline-First Architecture & Local Caching',
      'Biometric Authentication & Secure Storage',
      'Camera, GPS & Native Hardware Integration',
      'App Store Optimization & Submission Management',
      'Analytics, Crash Reporting & Performance Monitoring',
    ],
    technologies: [
      'Flutter', 'Dart', 'Firebase', 'REST APIs', 'GraphQL',
      'Supabase', 'App Store Connect', 'Google Play Console',
    ],
    faqs: [
      {
        question: 'Why do you use Flutter instead of React Native or native development?',
        answer:
          'Flutter delivers the closest-to-native performance of any cross-platform framework, with a single codebase that compiles to native ARM code on both iOS and Android. Its rendering engine provides pixel-perfect control over every UI element, enabling custom animations and complex interfaces that feel truly native. For enterprise clients, this means faster time-to-market, lower maintenance costs, and consistent UX across platforms without sacrificing performance.',
      },
      {
        question: 'How long does it take to build and launch a mobile application?',
        answer:
          'A well-scoped MVP typically takes 10-14 weeks from kickoff to app store submission. A full-featured enterprise mobile application takes 4-8 months depending on complexity. We deliver working builds every two weeks so you can test on real devices throughout development. Our process includes App Store and Google Play submission management, so we handle the entire path from code to live app.',
      },
      {
        question: 'Can you build offline-first mobile applications?',
        answer:
          'Yes, offline-first architecture is one of our specialties. We implement local SQLite databases, intelligent sync queues, and conflict resolution strategies that let your app function fully without internet connectivity. When the connection is restored, data syncs automatically in the background. This is critical for field service apps, logistics platforms, and any use case where reliable connectivity cannot be guaranteed.',
      },
      {
        question: 'How do you handle push notifications and real-time features?',
        answer:
          'We implement push notifications via Firebase Cloud Messaging with support for targeted segments, rich media, and deep linking. For real-time features, we use WebSocket connections or Firebase Realtime Database depending on your requirements. Our implementations include message queuing, retry logic, and graceful fallbacks to ensure notifications and real-time updates are never lost.',
      },
      {
        question: 'Do you provide post-launch support and app store maintenance?',
        answer:
          'Yes. Mobile apps require ongoing maintenance for OS updates, device compatibility, security patches, and app store policy changes. We offer dedicated support tiers that include crash monitoring via Crashlytics, performance optimization, feature updates, and app store review management. We also handle version management and staged rollouts to minimize risk with each release.',
      },
    ],
  },
  {
    slug: 'performance-marketing',
    name: 'Performance Marketing',
    shortName: 'Ads',
    description:
      'ROAS-driven paid advertising across Google, Meta, and LinkedIn that turns ad spend into predictable, scalable revenue.',
    longDescription:
      'We manage high-budget advertising campaigns across Google Ads, Meta Ads, and LinkedIn with a relentless focus on return on ad spend. Our performance marketing team combines advanced audience targeting, creative testing, and real-time bid optimization to maximize every dollar of your budget. Every campaign is built on a foundation of proper conversion tracking, attribution modeling, and transparent reporting tied directly to revenue outcomes.',
    icon: 'Ads',
    features: [
      'Google Ads (Search, Display, Shopping, YouTube)',
      'Meta Ads (Facebook & Instagram) Campaign Management',
      'LinkedIn B2B Advertising & Lead Generation',
      'ROAS-First Budget Allocation & Bid Strategy',
      'Advanced Audience Segmentation & Lookalike Targeting',
      'Creative Testing & Ad Performance Optimization',
      'Landing Page Design & Conversion Rate Optimization',
      'Multi-Touch Attribution & Revenue Reporting',
    ],
    technologies: [
      'Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager',
      'GA4', 'GTM', 'Looker Studio', 'HubSpot',
    ],
    faqs: [
      {
        question: 'What is the minimum ad spend you manage for enterprise clients?',
        answer:
          'We work with enterprise clients investing $25,000 or more per month in paid advertising. At this budget level, we can implement advanced strategies like algorithmic bidding, dynamic creative optimization, and multi-channel attribution that deliver significantly higher returns than basic campaign management. Most of our clients invest $50K-$500K+ monthly across channels.',
      },
      {
        question: 'How do you measure and report on advertising performance?',
        answer:
          'We build custom Looker Studio dashboards that track the metrics that matter: cost per acquisition, return on ad spend, customer lifetime value by channel, and pipeline contribution. Our reporting goes beyond clicks and impressions to show exactly how ad spend translates to qualified leads, opportunities, and closed revenue. Reports are delivered weekly with monthly strategic reviews.',
      },
      {
        question: 'How do you approach Google Ads for enterprise B2B companies?',
        answer:
          'For B2B enterprises, we build campaigns around high-intent keywords mapped to specific stages of the buying journey. We implement offline conversion tracking to feed CRM data back into Google\'s bidding algorithms, enabling optimization for pipeline value rather than just form fills. Combined with RLSA audiences and competitor conquesting strategies, this approach consistently delivers 30-50% lower cost per qualified lead.',
      },
      {
        question: 'Do you create the ad creatives and landing pages?',
        answer:
          'Yes. Our team designs high-converting ad creatives across static, video, and carousel formats, plus dedicated landing pages optimized for conversion. We run systematic A/B tests on headlines, copy, visuals, and CTAs, iterating based on statistical significance rather than gut feel. Every landing page is built for speed, mobile responsiveness, and conversion tracking integration.',
      },
      {
        question: 'How quickly can we expect results from paid advertising campaigns?',
        answer:
          'Paid channels deliver measurable results within the first 2-4 weeks. The initial phase focuses on audience validation, creative testing, and conversion tracking verification. By month two, we have enough data to optimize aggressively. Most clients see their strongest ROAS by month three as campaigns mature and our algorithms have sufficient conversion data to optimize effectively.',
      },
    ],
  },
  {
    slug: 'seo',
    name: 'SEO & Organic Growth',
    shortName: 'SEO',
    description:
      'Enterprise SEO, Generative Engine Optimization (GEO), and AI search visibility strategies that drive sustainable organic growth.',
    longDescription:
      'We deliver comprehensive organic growth strategies that go far beyond traditional SEO. Our approach combines technical SEO, strategic content development, and authoritative link building with next-generation optimization for AI search engines, answer engines, and LLM-powered discovery. We position your brand to dominate both traditional search results and the emerging AI-driven search landscape, ensuring long-term visibility as search behavior evolves.',
    icon: 'SEO',
    features: [
      'Technical SEO Audits & Implementation',
      'Content Strategy & Topical Authority Building',
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'LLM Optimization (LLMO) for AI Search Visibility',
      'Link Building & Digital PR',
      'Schema Markup & Structured Data Implementation',
      'Core Web Vitals & Page Experience Optimization',
    ],
    technologies: [
      'Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console',
      'GA4', 'Surfer SEO', 'Clearscope',
    ],
    faqs: [
      {
        question: 'What is Generative Engine Optimization (GEO) and why does it matter?',
        answer:
          'GEO is the practice of optimizing your content to appear in AI-generated search results from tools like Google AI Overviews, ChatGPT, Perplexity, and Claude. As more users get answers from AI rather than clicking through to websites, GEO ensures your brand is cited as a source in these AI-generated responses. We optimize content structure, authority signals, and citation patterns to maximize your visibility in this rapidly growing channel.',
      },
      {
        question: 'How long does it take to see measurable SEO results?',
        answer:
          'Technical SEO fixes like crawlability, indexation, and Core Web Vitals improvements can show impact within 2-4 weeks. Content and link building strategies typically drive meaningful ranking improvements in 3-6 months, with compounding growth thereafter. For enterprise sites with existing domain authority, we often accelerate results by optimizing existing high-potential pages before building new content.',
      },
      {
        question: 'How does your approach differ from traditional SEO agencies?',
        answer:
          'We integrate traditional SEO with GEO, AEO, and LLMO strategies that most agencies have not adopted yet. Our technical foundation is stronger because we build websites, so we can implement fixes directly rather than handing off recommendations. We also use programmatic SEO and AI-assisted content workflows to scale output without sacrificing quality. Every strategy is tied to revenue metrics, not vanity keyword rankings.',
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer:
          'No reputable SEO provider can guarantee specific rankings because Google\'s algorithm considers hundreds of factors outside any agency\'s control. What we guarantee is a rigorous, proven methodology, transparent reporting, and a track record of driving significant organic growth. Our enterprise clients consistently achieve top positions for high-value keywords and see substantial increases in organic revenue within 6-12 months.',
      },
      {
        question: 'Can you handle SEO for a website migration or rebrand?',
        answer:
          'Yes, we have managed dozens of enterprise-scale migrations including platform changes, domain moves, URL restructures, and rebrands. Our migration process includes comprehensive redirect mapping, content auditing, technical validation, and post-migration monitoring to protect your existing organic equity. When executed properly, migrations can be an opportunity to improve rankings rather than lose them.',
      },
    ],
  },
  {
    slug: 'email-marketing',
    name: 'Email & CRM Automation',
    shortName: 'Email',
    description:
      'Lifecycle email flows, WhatsApp Business automation, and CRM integration systems that nurture leads and maximize customer lifetime value.',
    longDescription:
      'We build sophisticated email and messaging automation systems that drive revenue at every stage of the customer lifecycle. From lead nurture sequences and onboarding flows to re-engagement campaigns and WhatsApp Business API integrations, our systems deliver the right message at the right time through the right channel. Every implementation includes proper deliverability engineering, advanced segmentation, and revenue attribution so you know exactly what each automation is worth.',
    icon: 'Email',
    features: [
      'Lifecycle Email Flow Design & Automation',
      'WhatsApp Business API Integration & Flows',
      'CRM Integration & Data Synchronization',
      'Email Deliverability Optimization (SPF, DKIM, DMARC)',
      'Advanced List Segmentation & Personalization',
      'A/B Testing & Send Time Optimization',
      'Lead Scoring & Nurture Sequence Architecture',
      'Revenue Attribution & Campaign Analytics',
    ],
    technologies: [
      'Engine Mailer', 'HubSpot', 'Klaviyo', 'Customer.io',
      'SendGrid', 'WhatsApp Business API', 'Pabbly Connect',
    ],
    faqs: [
      {
        question: 'What email and messaging platforms do you work with?',
        answer:
          'We work with Engine Mailer, HubSpot, Klaviyo, Customer.io, and SendGrid for email, plus WhatsApp Business API for messaging automation. We help you select the right platform based on your volume, segmentation needs, and integration requirements. If you are on a legacy platform, we handle full migration including list transfer, automation rebuilds, and deliverability warm-up.',
      },
      {
        question: 'How do you improve email deliverability for enterprise senders?',
        answer:
          'Deliverability is an engineering discipline, not a checkbox. We implement proper SPF, DKIM, and DMARC authentication, configure dedicated sending IPs with strategic warm-up schedules, enforce list hygiene via automated bounce and engagement-based suppression, and monitor sender reputation scores continuously. Our clients consistently achieve 98%+ inbox placement rates across major ISPs.',
      },
      {
        question: 'Can you integrate email automation with our existing CRM?',
        answer:
          'Yes. We build bidirectional integrations between your email platform and CRM (HubSpot, Salesforce, or custom systems) using Pabbly Connect and native APIs. This ensures contact data, engagement history, lead scores, and lifecycle stages sync in real time. Sales teams see email engagement data in their CRM, and marketing automations trigger based on CRM events like deal stage changes.',
      },
      {
        question: 'How do you approach WhatsApp Business API for enterprise use?',
        answer:
          'We implement WhatsApp Business API as a high-engagement channel for transactional notifications, appointment reminders, order updates, and conversational commerce. Our implementations include template message approval workflows, opt-in management, automated chatbot flows, and seamless handoff to human agents. WhatsApp typically delivers 3-5x higher open rates than email, making it ideal for time-sensitive communications.',
      },
      {
        question: 'What kind of ROI can we expect from email and CRM automation?',
        answer:
          'Email marketing delivers the highest ROI of any digital channel, typically $36-$42 for every $1 invested. Our enterprise clients see even higher returns through sophisticated lifecycle automation. A well-built welcome sequence alone can increase 90-day customer value by 20-30%. Combined with abandoned cart flows, re-engagement campaigns, and cross-sell automations, the compound impact on customer lifetime value is substantial.',
      },
    ],
  },
  {
    slug: 'devops',
    name: 'DevOps & Cloud',
    shortName: 'DevOps',
    description:
      'CI/CD pipelines, cloud infrastructure, server hardening, and monitoring systems that keep enterprise applications secure, fast, and always available.',
    longDescription:
      'We build and manage the infrastructure that keeps your applications running at peak performance. Our DevOps practice covers the full spectrum: CI/CD pipeline automation, container orchestration with Kubernetes, infrastructure-as-code with Terraform, WAF and server hardening, real-time monitoring and alerting, auto-scaling policies, and disaster recovery planning. Every environment we manage is built for security, observability, and operational efficiency.',
    icon: 'DevOps',
    features: [
      'CI/CD Pipeline Design & Automation',
      'Server Hardening & Security Compliance',
      'Web Application Firewall (WAF) Configuration',
      'Real-Time Monitoring, Alerting & Incident Response',
      'Auto-Scaling & Load Balancing',
      'Disaster Recovery & Business Continuity Planning',
      'Container Orchestration (Docker & Kubernetes)',
      'Infrastructure-as-Code (Terraform)',
    ],
    technologies: [
      'Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'Linode',
      'Cloudflare', 'Terraform', 'Prometheus', 'Grafana',
    ],
    faqs: [
      {
        question: 'What does your CI/CD pipeline setup include?',
        answer:
          'Our CI/CD implementations include automated build, test, and deployment workflows using GitHub Actions. Every pipeline includes linting, unit testing, integration testing, security scanning (SAST/DAST), container image builds, and staged deployments to preview, staging, and production environments. We implement blue-green or canary deployment strategies for zero-downtime releases, with automated rollback triggers based on error rate thresholds.',
      },
      {
        question: 'How do you approach server hardening and security?',
        answer:
          'We follow CIS benchmark standards for server hardening, including SSH key-only authentication, fail2ban intrusion prevention, minimal attack surface configuration, automated security patching, and firewall rules that follow the principle of least privilege. We configure Cloudflare WAF rules to block common attack vectors (SQL injection, XSS, DDoS) and implement rate limiting and bot management. All configurations are codified in Terraform for auditability.',
      },
      {
        question: 'What cloud platforms do you work with?',
        answer:
          'We primarily work with AWS and Linode, with Cloudflare as our edge and security layer. AWS is our recommendation for enterprise workloads requiring the broadest service ecosystem, while Linode offers excellent price-performance for applications that do not need AWS-specific managed services. We manage all infrastructure through Terraform, making cloud provider migrations straightforward when business requirements change.',
      },
      {
        question: 'How do you handle monitoring and incident response?',
        answer:
          'We deploy Prometheus for metrics collection and Grafana for visualization, with alerting rules that notify your team via Slack, PagerDuty, or email based on severity. Our monitoring covers application performance (response times, error rates, throughput), infrastructure health (CPU, memory, disk, network), and business metrics (transaction volume, API usage). We establish runbooks for common incidents and conduct quarterly disaster recovery drills.',
      },
      {
        question: 'Can you manage our existing cloud infrastructure?',
        answer:
          'Yes. We regularly onboard existing cloud environments, starting with a comprehensive infrastructure audit that identifies security vulnerabilities, cost optimization opportunities, and reliability improvements. We then incrementally adopt infrastructure-as-code practices, implement proper monitoring, and optimize resource allocation. Most clients see 20-40% cost reduction in the first quarter through right-sizing, reserved capacity planning, and elimination of unused resources.',
      },
    ],
  },
  {
    slug: 'analytics',
    name: 'Analytics & Intelligence',
    shortName: 'Analytics',
    description:
      'Advanced GA4 implementations, custom Looker dashboards, and data pipelines that turn raw data into actionable business intelligence.',
    longDescription:
      'We build analytics infrastructure that gives enterprise teams a single source of truth for every business decision. From advanced GA4 configurations with custom event tracking to real-time Looker Studio dashboards and BigQuery data warehouses, our implementations capture the data that matters and present it in formats your team will actually use. Every analytics engagement includes proper attribution modeling, cross-platform data unification, and executive reporting frameworks.',
    icon: 'Analytics',
    features: [
      'Advanced GA4 Setup & Custom Event Architecture',
      'Custom Looker Studio Dashboards & Reports',
      'Server-Side Tagging & Consent-Compliant Tracking',
      'Multi-Touch Attribution Modeling',
      'BigQuery Data Warehouse & SQL Analytics',
      'Cross-Platform Data Unification',
      'Real-Time KPI Dashboards for Executive Teams',
      'Conversion Funnel Analysis & Optimization',
    ],
    technologies: [
      'GA4', 'GTM', 'Looker Studio', 'BigQuery', 'Mixpanel',
      'Amplitude', 'Segment', 'dbt',
    ],
    faqs: [
      {
        question: 'What does an advanced GA4 implementation include?',
        answer:
          'Our advanced GA4 setups go far beyond the default installation. We design a custom event taxonomy aligned with your business objectives, implement enhanced e-commerce tracking, configure custom dimensions and metrics, set up server-side tagging for data accuracy, build audience segments for remarketing, and create conversion funnels that map to your actual customer journey. We also implement data streams to BigQuery for advanced SQL analysis beyond what the GA4 interface supports.',
      },
      {
        question: 'How do you build dashboards that teams actually use?',
        answer:
          'Most dashboards fail because they show data without context. We start by interviewing stakeholders to understand the decisions they make weekly and what data would improve those decisions. Then we build role-specific Looker Studio dashboards: executive summaries with trend analysis and KPI scorecards, marketing dashboards with channel performance and attribution, and operational dashboards with real-time metrics. Every visualization answers a specific business question.',
      },
      {
        question: 'Can you unify data from multiple platforms into a single view?',
        answer:
          'Yes, data unification is a core capability. We use Segment as a customer data platform to collect events from your website, mobile app, CRM, and backend systems into a single data stream. This feeds into BigQuery where we use dbt to model unified customer profiles, marketing attribution, and business metrics. The result is a single source of truth that eliminates data silos and conflicting reports across teams.',
      },
      {
        question: 'How do you handle attribution modeling for enterprise businesses?',
        answer:
          'We implement multi-touch attribution models that go beyond last-click. Using GA4 data-driven attribution, BigQuery path analysis, and custom modeling, we map the full customer journey across paid, organic, email, and direct channels. For B2B companies with long sales cycles, we integrate CRM data to attribute revenue to marketing touchpoints that occurred weeks or months before the closed deal. This enables accurate ROI calculation by channel and campaign.',
      },
      {
        question: 'What is server-side tagging and why should we implement it?',
        answer:
          'Server-side tagging routes analytics data through your own server before sending it to platforms like GA4, Meta, and Google Ads. This dramatically improves data accuracy by bypassing ad blockers and browser restrictions that currently prevent 15-30% of client-side events from being captured. It also gives you full control over what data is shared with third parties, ensuring compliance with GDPR and privacy regulations. We deploy server-side containers on Google Cloud or AWS with minimal latency impact.',
      },
    ],
  },
]
