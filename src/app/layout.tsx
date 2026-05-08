import type { Metadata } from 'next'
import { dmSans, plusJakarta, jetbrainsMono } from '@/lib/fonts'
import { SITE_CONFIG } from '@/lib/constants'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'
import { themeInitScript } from '@/components/ThemeToggle'
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildLocalBusinessSchema,
} from '@/lib/schema'
import '@/styles/globals.css'
import '@/styles/components.css'
import '@/styles/home.css'
import '@/styles/pages.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Big Bold Tech — Software, AI, and growth, end-to-end',
    template: '%s | Big Bold Tech',
  },
  description:
    'Big Bold Tech is a full-service technology + growth partner. We build AI applications, custom software, and the marketing engines that put them in front of customers.',
  keywords: [
    'AI development agency',
    'custom software development',
    'AI applications',
    'SaaS development',
    'digital marketing agency',
    'performance marketing',
    'SEO agency India',
    'fintech software',
    'healthcare software',
    'e-commerce development',
    'DevOps consulting',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Big Bold Tech — Software, AI, and growth, end-to-end',
    description:
      'Full-service technology partner. AI applications, custom software, digital marketing, brand & design, DevOps. Five capabilities, one team.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Big Bold Tech',
    description:
      'Full-service technology partner. AI applications, custom software, digital marketing, brand & design, DevOps.',
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
      className={`${dmSans.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Sets data-theme on <html> before any paint to prevent
          // flash-of-wrong-theme. Reads localStorage + system pref.
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebSiteSchema()} />
        <JsonLd data={buildLocalBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
