export interface Service {
  slug: string
  name: string
  shortName: string
  description: string
  longDescription: string
  icon: string
  features: string[]
  technologies: string[]
  faqs: { question: string; answer: string }[]
}

export interface Industry {
  slug: string
  name: string
  description: string
  icon: string
  challenges: string[]
  solutions: string[]
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  industry: string
  services: string[]
  description: string
  challenge: string
  solution: string
  results: { metric: string; value: string }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  image: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  readTime: string
  image: string
  content: string
}
