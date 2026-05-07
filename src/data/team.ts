/**
 * IMPORTANT: All team members below are PLACEHOLDER.
 * Replace with real, permissioned profiles before launch.
 */

export type TeamMember = {
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
}

const a = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&h=400&q=80&bbt=v1`

export const team: TeamMember[] = [
  {
    name: 'Aanya Sharma',
    role: 'Founder & CEO',
    bio: '12 years building consumer + B2B products. Previously led product at two YC-backed fintechs.',
    image: a('1438761681033-6461ffad8d80'),
  },
  {
    name: 'Vikram Iyer',
    role: 'Head of Engineering',
    bio: 'Ex-staff engineer. Has shipped distributed systems at scale across two unicorns. Owns our infra + AI practice.',
    image: a('1472099645785-5658abf4ff4e'),
  },
  {
    name: 'Sara Khan',
    role: 'Head of Design',
    bio: 'Brand + product design across fintech, retail, and SaaS. Believes design starts with copy and ends with motion.',
    image: a('1494790108377-be9c29b29330'),
  },
  {
    name: 'Arjun Mehta',
    role: 'Head of Growth',
    bio: 'Ran performance marketing at two D2C unicorns before joining. Obsessive about attribution and creative testing.',
    image: a('1507003211169-0a1dd7228f2d'),
  },
]
