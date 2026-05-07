/**
 * IMPORTANT: All people, companies, and quotes below are PLACEHOLDER.
 * Replace with attributed, permissioned quotes before launch.
 */

export type Testimonial = {
  quote: string
  author: string
  role: string
  company: string
  /** Optional avatar (Unsplash CDN). If omitted, initials are rendered. */
  avatar?: string
}

const a = (id: string, w = 200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${w}&q=${q}&bbt=v1`

export const testimonials: Testimonial[] = [
  {
    quote:
      'Big Bold delivered a fraud detection system that exceeded every benchmark we set. ROI was apparent inside the first month, and they passed our security review faster than any vendor we&rsquo;ve worked with.',
    author: 'Priya Raghavan',
    role: 'CTO',
    company: 'Atlas Bank',
    avatar: a('1494790108377-be9c29b29330'),
  },
  {
    quote:
      'They replaced a six-figure annual SaaS contract with a custom platform their team operates for us. Better margins, faster releases, real audit trail. We don&rsquo;t talk about vendors — we talk about Big Bold.',
    author: 'Daniel Okafor',
    role: 'COO',
    company: 'Northwind',
    avatar: a('1500648767791-00dcc994a43e'),
  },
  {
    quote:
      'What I valued most was the candor about scope. They told us which parts of our wishlist were actually &ldquo;next year&rdquo;, not &ldquo;next quarter&rdquo;. That honesty saved us from a bad bet.',
    author: 'Hiroko Tanaka',
    role: 'Chief Digital Officer',
    company: 'Meridian',
    avatar: a('1438761681033-6461ffad8d80'),
  },
  {
    quote:
      'Migration was flawless. Zero downtime, zero SEO loss, revenue lifted 40% in six months. Best investment we made this decade.',
    author: 'Michelle Park',
    role: 'VP of Digital',
    company: 'Lumen & Co.',
    avatar: a('1573496359142-b8d87734a5a2'),
  },
  {
    quote:
      'Big Bold&rsquo;s AI support agent handles 80% of our customer queries. Our human team went from drowning in tickets to focusing on the complex stuff that actually needs them.',
    author: 'Rahul Mehta',
    role: 'CTO',
    company: 'Kestrel',
    avatar: a('1472099645785-5658abf4ff4e'),
  },
  {
    quote:
      'Scaling spend from $15K to $150K monthly while improving ROAS seemed impossible. Big Bold made it look routine — and the analytics they built means we actually understand why it&rsquo;s working.',
    author: 'Chris Williams',
    role: 'Head of Growth',
    company: 'Helix Labs',
    avatar: a('1507003211169-0a1dd7228f2d'),
  },
]
