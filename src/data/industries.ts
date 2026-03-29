import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    slug: 'finance',
    name: 'Finance & Fintech',
    description:
      'Technology solutions for banks, fintech startups, investment firms, and insurance companies that drive digital transformation while meeting strict regulatory requirements.',
    icon: '🏦',
    challenges: [
      'Legacy system modernization without service disruption',
      'Regulatory compliance (PCI DSS, SOX, KYC/AML)',
      'Real-time transaction processing at scale',
      'Fraud detection and risk management',
    ],
    solutions: [
      'AI-powered fraud detection and risk scoring',
      'Secure, scalable payment processing platforms',
      'Regulatory compliance automation',
      'Customer-facing fintech applications',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description:
      'HIPAA-compliant digital solutions for hospitals, health systems, biotech companies, and digital health startups.',
    icon: '🏥',
    challenges: [
      'HIPAA compliance and data security',
      'EHR/EMR system integration',
      'Patient engagement and telehealth',
      'Clinical data analytics and research',
    ],
    solutions: [
      'HIPAA-compliant web and mobile applications',
      'AI-powered clinical decision support',
      'Patient portal and telehealth platforms',
      'Healthcare data analytics dashboards',
    ],
  },
  {
    slug: 'ecommerce',
    name: 'E-Commerce & Retail',
    description:
      'Enterprise e-commerce solutions that handle millions of transactions, deliver personalized experiences, and maximize revenue.',
    icon: '🛒',
    challenges: [
      'Scaling for peak traffic and seasonal demand',
      'Personalization across channels',
      'Inventory management and logistics',
      'Conversion rate optimization',
    ],
    solutions: [
      'Headless commerce architecture',
      'AI-powered product recommendations',
      'Omnichannel marketing automation',
      'Performance-optimized storefronts',
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & PropTech',
    description:
      'Technology solutions for real estate firms, property management companies, and PropTech innovators.',
    icon: '🏢',
    challenges: [
      'Digital transformation of traditional processes',
      'Property data aggregation and analytics',
      'Tenant and landlord engagement',
      'Market analysis and valuation',
    ],
    solutions: [
      'Property management platforms',
      'AI-powered market analysis tools',
      'Virtual tour and visualization technology',
      'Tenant engagement applications',
    ],
  },
  {
    slug: 'saas',
    name: 'SaaS & Technology',
    description:
      'Technical partnership for SaaS companies that need to accelerate development, scale infrastructure, or expand capabilities.',
    icon: '💻',
    challenges: [
      'Rapid feature development and iteration',
      'Scaling infrastructure for growth',
      'User acquisition and activation',
      'Technical debt management',
    ],
    solutions: [
      'Dedicated development teams',
      'Architecture review and optimization',
      'Growth marketing and SEO',
      'DevOps and infrastructure automation',
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Industrial',
    description:
      'Digital solutions for manufacturers that optimize operations, reduce costs, and enable data-driven decision making.',
    icon: '🏭',
    challenges: [
      'Operational efficiency and automation',
      'Supply chain visibility',
      'Predictive maintenance',
      'Quality control and compliance',
    ],
    solutions: [
      'IoT data platforms and dashboards',
      'AI-powered predictive maintenance',
      'Supply chain management systems',
      'Quality control automation',
    ],
  },
]
