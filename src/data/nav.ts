export type NavLink = { label: string; href: string }

export const primaryNav: NavLink[] = [
  { label: 'Services',   href: '/services' },
  { label: 'Work',       href: '/work' },
  { label: 'Industries', href: '/industries' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/contact' },
]

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'AI applications',   href: '/services/ai' },
      { label: 'Custom software',   href: '/services/software' },
      { label: 'Digital marketing', href: '/services/marketing' },
      { label: 'Brand & design',    href: '/services/design' },
      { label: 'DevOps & cloud',    href: '/services/devops' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Fintech',     href: '/industries/fintech' },
      { label: 'Healthcare',  href: '/industries/healthcare' },
      { label: 'E-commerce',  href: '/industries/ecommerce' },
      { label: 'SaaS',        href: '/industries/saas' },
      { label: 'Logistics',   href: '/industries/logistics' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us',      href: '/about' },
      { label: 'Our work',      href: '/work' },
      { label: 'Contact',       href: '/contact' },
      { label: 'Careers',       href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy',     href: '/privacy' },
      { label: 'Terms of service',   href: '/terms' },
    ],
  },
]
