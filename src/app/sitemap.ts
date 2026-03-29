import type { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { services } from '@/data/services'
import { industries } from '@/data/industries'
import { caseStudies } from '@/data/case-studies'
import { blogPosts, blogCategories } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/careers', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_CONFIG.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  const servicePages = services.map((service) => ({
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const industryPages = industries.map((industry) => ({
    url: `${SITE_CONFIG.url}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${SITE_CONFIG.url}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  const categoryPages = blogCategories.map((cat) => ({
    url: `${SITE_CONFIG.url}/blog/category/${cat.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...caseStudyPages,
    ...blogPages,
    ...categoryPages,
  ]
}
