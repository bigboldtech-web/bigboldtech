import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { services } from '@/data/services'
import { caseStudies } from '@/data/work'
import { industries } from '@/data/industries'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = SITE_CONFIG.url

  const staticPages = [
    { path: '',           priority: 1.0,  changeFrequency: 'weekly'  as const },
    { path: '/services',  priority: 0.9,  changeFrequency: 'monthly' as const },
    { path: '/work',      priority: 0.9,  changeFrequency: 'weekly'  as const },
    { path: '/industries',priority: 0.8,  changeFrequency: 'monthly' as const },
    { path: '/about',     priority: 0.7,  changeFrequency: 'monthly' as const },
    { path: '/contact',   priority: 0.9,  changeFrequency: 'monthly' as const },
    { path: '/privacy',   priority: 0.3,  changeFrequency: 'yearly'  as const },
    { path: '/terms',     priority: 0.3,  changeFrequency: 'yearly'  as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  return [
    ...staticPages,
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
    ...industries.map((i) => ({
      url: `${base}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    ...caseStudies.map((c) => ({
      url: `${base}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
