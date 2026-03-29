export const navigation = {
  main: [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ],
  services: [
    { label: 'AI & Automation', href: '/services/ai-automation' },
    { label: 'SaaS Development', href: '/services/saas-development' },
    { label: 'Web Applications', href: '/services/web-apps' },
    { label: 'Mobile Applications', href: '/services/mobile-apps' },
    { label: 'Performance Marketing', href: '/services/performance-marketing' },
    { label: 'SEO & Organic Growth', href: '/services/seo' },
    { label: 'Email & CRM', href: '/services/email-marketing' },
    { label: 'DevOps & Cloud', href: '/services/devops' },
    { label: 'Analytics & BI', href: '/services/analytics' },
  ],
  industries: [
    { label: 'Finance & Fintech', href: '/industries/finance' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'E-Commerce & Retail', href: '/industries/ecommerce' },
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'SaaS & Technology', href: '/industries/saas' },
    { label: 'Manufacturing', href: '/industries/manufacturing' },
  ],
  footer: {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
    ],
  },
} as const
