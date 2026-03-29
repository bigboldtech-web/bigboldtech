import type { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fintech-ai-fraud-detection',
    title: 'AI-Powered Fraud Detection for a Leading Fintech',
    client: 'NovaPay Financial',
    industry: 'Finance & Fintech',
    services: ['AI Solutions', 'Web Development'],
    description:
      'Built a real-time fraud detection system that reduced fraudulent transactions by 94% while maintaining seamless user experience.',
    challenge:
      'NovaPay was losing $12M annually to fraud. Their rule-based system generated excessive false positives, blocking legitimate customers and hurting revenue.',
    solution:
      'We developed a custom ML model trained on 50M+ transactions, implementing real-time scoring with sub-100ms latency. The system adapts to new fraud patterns automatically through continuous learning.',
    results: [
      { metric: 'Fraud Reduction', value: '94%' },
      { metric: 'False Positives Reduced', value: '78%' },
      { metric: 'Annual Savings', value: '$11.2M' },
      { metric: 'Processing Latency', value: '<100ms' },
    ],
    testimonial: {
      quote:
        'Big Bold Technologies delivered a fraud detection system that exceeded every benchmark we set. The ROI was apparent within the first month.',
      author: 'Sarah Chen',
      role: 'CTO, NovaPay Financial',
    },
    image: '/images/case-studies/fintech-fraud.jpg',
  },
  {
    slug: 'healthcare-patient-portal',
    title: 'Enterprise Patient Portal for a Healthcare Network',
    client: 'MedConnect Health Systems',
    industry: 'Healthcare & Life Sciences',
    services: ['Web Development', 'App Development'],
    description:
      'Designed and built a HIPAA-compliant patient portal serving 2M+ patients across 150 facilities.',
    challenge:
      'MedConnect needed to unify patient access across 150 facilities with different EHR systems, while maintaining strict HIPAA compliance and delivering a consumer-grade user experience.',
    solution:
      'We built a unified patient portal with a custom integration layer connecting to 5 different EHR systems. The platform includes appointment scheduling, telehealth, secure messaging, and health records access.',
    results: [
      { metric: 'Patients Onboarded', value: '2M+' },
      { metric: 'Patient Satisfaction', value: '4.8/5' },
      { metric: 'Appointment No-shows Reduced', value: '62%' },
      { metric: 'Support Calls Reduced', value: '45%' },
    ],
    testimonial: {
      quote:
        'The portal has transformed how our patients interact with our health system. Big Bold Technologies understood healthcare complexity like no other agency we evaluated.',
      author: 'Dr. James Morrison',
      role: 'Chief Digital Officer, MedConnect',
    },
    image: '/images/case-studies/healthcare-portal.jpg',
  },
  {
    slug: 'ecommerce-platform-migration',
    title: 'Headless Commerce Migration for a Global Retailer',
    client: 'Luxe Retail Group',
    industry: 'E-Commerce & Retail',
    services: ['Web Development', 'SEO', 'Digital Marketing'],
    description:
      'Migrated a $200M e-commerce operation to headless architecture, increasing site speed by 3x and revenue by 40%.',
    challenge:
      'Luxe Retail\'s monolithic platform couldn\'t handle peak traffic, had poor mobile performance, and limited their ability to create personalized shopping experiences.',
    solution:
      'We executed a zero-downtime migration to a headless architecture with Next.js frontend, composable commerce backend, and AI-powered personalization. SEO was preserved through careful redirect mapping and schema optimization.',
    results: [
      { metric: 'Page Load Speed', value: '3x Faster' },
      { metric: 'Revenue Increase', value: '40%' },
      { metric: 'Mobile Conversion', value: '+85%' },
      { metric: 'Organic Traffic', value: '+120%' },
    ],
    testimonial: {
      quote:
        'The migration was flawless. Zero downtime, zero SEO loss, and the results speak for themselves. Our best investment this decade.',
      author: 'Michelle Park',
      role: 'VP of Digital, Luxe Retail Group',
    },
    image: '/images/case-studies/ecommerce-migration.jpg',
  },
  {
    slug: 'ai-customer-support-d2c',
    title: 'AI-Powered Customer Support for a D2C Brand',
    client: 'UrbanCraft Living',
    industry: 'E-Commerce & Retail',
    services: ['AI Solutions', 'Web Development'],
    description:
      'Built an AI chatbot that automated 80% of customer support queries, saving $400K annually while improving customer satisfaction.',
    challenge:
      'UrbanCraft Living was receiving 2,000+ daily support tickets that overwhelmed their customer service team, leading to slow response times and declining customer satisfaction.',
    solution:
      'We built an AI-powered chatbot capable of handling 80% of customer queries autonomously, combined with smart routing that escalates complex issues to the right human agents instantly.',
    results: [
      { metric: 'Tickets Automated', value: '80%' },
      { metric: 'Customer Satisfaction', value: '4.7/5' },
      { metric: 'Annual Savings', value: '$400K' },
      { metric: 'Response Time', value: '<30s' },
    ],
    testimonial: {
      quote:
        'BigBoldTech\'s AI chatbot handles 80% of our customer queries. Our support team went from drowning in tickets to focusing on complex issues that actually need a human touch.',
      author: 'Rahul Mehta',
      role: 'CTO, UrbanCraft Living',
    },
    image: '/images/case-studies/ai-customer-support.jpg',
  },
  {
    slug: 'saas-real-estate-portfolio',
    title: 'SaaS Platform for Real Estate Portfolio Management',
    client: 'PropVault Technologies',
    industry: 'Real Estate & PropTech',
    services: ['SaaS Development', 'Mobile Apps'],
    description:
      'Designed and built a multi-tenant SaaS platform to manage 500+ properties across 12 cities, replacing fragmented spreadsheet workflows.',
    challenge:
      'PropVault Technologies was managing 500+ properties across 12 cities using spreadsheets, resulting in data silos, missed rent collections, and delayed maintenance responses.',
    solution:
      'We built a multi-tenant SaaS platform with comprehensive tenant management, automated rent collection, maintenance tracking with SLA enforcement, and real-time portfolio analytics dashboards.',
    results: [
      { metric: 'Properties Managed', value: '500+' },
      { metric: 'Operations Speed', value: '3x Faster' },
      { metric: 'Rent Collection Rate', value: '98%' },
      { metric: 'Cities Covered', value: '12' },
    ],
    testimonial: {
      quote:
        'We went from managing properties in spreadsheets to a full SaaS platform in 4 months. BigBoldTech didn\'t just build what we asked for -- they built what we actually needed.',
      author: 'Ananya Desai',
      role: 'Co-Founder, PropVault Technologies',
    },
    image: '/images/case-studies/saas-real-estate.jpg',
  },
  {
    slug: 'performance-marketing-edtech',
    title: 'Performance Marketing Scale-Up for EdTech',
    client: 'LearnBridge Academy',
    industry: 'SaaS & Technology',
    services: ['Performance Marketing', 'Analytics'],
    description:
      'Scaled ad spend from $15K to $150K per month while improving ROAS from 8x to 9.2x, driving a 340% revenue increase.',
    challenge:
      'LearnBridge Academy had a $15K/month ad spend delivering 8x ROAS, but needed to scale to $150K/month without losing efficiency -- a challenge that had stumped two previous agencies.',
    solution:
      'We implemented multi-channel attribution modeling, a structured creative testing framework, AI-powered bid optimization across platforms, and systematic landing page A/B testing to maintain efficiency at scale.',
    results: [
      { metric: 'Ad Spend Scaled', value: '10x' },
      { metric: 'ROAS Maintained', value: '9.2x' },
      { metric: 'Revenue Increase', value: '340%' },
      { metric: 'CAC Reduction', value: '45%' },
    ],
    testimonial: {
      quote:
        'Scaling from $15K to $150K monthly ad spend while improving ROAS seemed impossible. BigBoldTech made it look easy.',
      author: 'Chris Williams',
      role: 'Head of Growth, LearnBridge Academy',
    },
    image: '/images/case-studies/performance-marketing-edtech.jpg',
  },
  {
    slug: 'enterprise-devops-logistics',
    title: 'Enterprise DevOps Transformation for a Logistics Company',
    client: 'SwiftRoute Logistics',
    industry: 'Manufacturing & Industrial',
    services: ['DevOps & Cloud', 'Web Development'],
    description:
      'Transformed manual deployment processes into a fully automated CI/CD pipeline, achieving 99.99% uptime and 8-minute deploy cycles.',
    challenge:
      'SwiftRoute Logistics relied on manual deployments with 4-hour deploy cycles that frequently caused downtime, impacting delivery tracking and customer trust.',
    solution:
      'We implemented Kubernetes orchestration for container management, built a comprehensive CI/CD pipeline, deployed a full monitoring and alerting stack, and engineered zero-downtime deployment strategies.',
    results: [
      { metric: 'Uptime', value: '99.99%' },
      { metric: 'Deploy Time', value: '8min' },
      { metric: 'Infra Cost Reduction', value: '70%' },
      { metric: 'Downtime Deploys', value: 'Zero' },
    ],
    testimonial: {
      quote:
        'Our deployments went from 4-hour ordeals to 8-minute non-events. BigBoldTech gave us the infrastructure reliability our customers depend on.',
      author: 'Vikram Patel',
      role: 'VP of Engineering, SwiftRoute Logistics',
    },
    image: '/images/case-studies/devops-logistics.jpg',
  },
]
