import { SITE_CONFIG } from './constants'

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressCountry: SITE_CONFIG.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: `${SITE_CONFIG.url}/contact`,
    },
    knowsAbout: [
      'Artificial Intelligence',
      'SaaS Development',
      'Mobile App Development',
      'Web Development',
      'Performance Marketing',
      'SEO',
      'DevOps',
      'Cloud Infrastructure',
    ],
    sameAs: Object.values(SITE_CONFIG.social),
  }
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  }
}

export function buildServiceSchema(service: {
  name: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  }
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function buildArticleSchema(article: {
  title: string
  description: string
  slug: string
  date: string
  author: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    url: `${SITE_CONFIG.url}/blog/${article.slug}`,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  }
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    description: SITE_CONFIG.description,
    foundingDate: SITE_CONFIG.foundingDate,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: SITE_CONFIG.address.country,
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'Australia' },
    ],
    knowsAbout: [
      'Artificial Intelligence',
      'SaaS Development',
      'Mobile App Development',
      'Web Development',
      'Performance Marketing',
      'Search Engine Optimization',
      'DevOps',
      'Cloud Infrastructure',
    ],
    sameAs: Object.values(SITE_CONFIG.social),
  }
}
