import type { Metadata } from 'next'
import { dmSans, plusJakarta, inter, ibmPlexMono } from '@/lib/fonts'
import { SITE_CONFIG } from '@/lib/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildOrganizationSchema, buildWebSiteSchema, buildLocalBusinessSchema } from '@/lib/schema'
import { ParticleCanvas } from '@/components/effects/ParticleCanvas'
import { ScrollReveal } from '@/components/effects/ScrollReveal'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'BigBoldTech — Enterprise Technology Partners | AI, Apps, SaaS, Marketing',
    template: '%s | BigBoldTech',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'enterprise technology agency',
    'AI development company',
    'SaaS development',
    'custom app development',
    'performance marketing agency',
    'SEO agency India',
    'digital transformation partner',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'BigBoldTech — Enterprise Technology Partners',
    description: 'We build the technology backbone for businesses that think big. AI, Apps, SaaS, Marketing & Growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigBoldTech — Enterprise Technology Partners',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${plusJakarta.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <ParticleCanvas />
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebSiteSchema()} />
        <JsonLd data={buildLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
