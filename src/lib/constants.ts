export const SITE_CONFIG = {
  name: 'BigBoldTech',
  legalName: 'BigBoldTech Pvt. Ltd.',
  description:
    'Enterprise technology agency specializing in AI, SaaS development, custom applications, performance marketing, and digital growth systems.',
  url: 'https://bigboldtech.com',
  email: 'contact@bigboldtech.com',
  phone: '+91 000 000 0000',
  address: {
    country: 'IN',
  },
  social: {
    twitter: 'https://twitter.com/bigboldtech',
    linkedin: 'https://linkedin.com/company/bigboldtech',
    github: 'https://github.com/bigboldtech',
    instagram: 'https://instagram.com/bigboldtech',
  },
  foundingDate: '2023',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
] as const
