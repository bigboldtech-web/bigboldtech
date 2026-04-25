import type { Metadata } from 'next'
import {
  dmSans,
  plusJakarta,
  inter,
  ibmPlexMono,
  fraunces,
  bricolage,
  schibsted,
  instrumentSerif,
  jetbrainsMono,
} from '@/lib/fonts'
import { SITE_CONFIG } from '@/lib/constants'
import { HeaderV4 } from '@/components/v4/Header'
import { FooterV4 } from '@/components/v4/Footer'
import { SmoothScroll } from '@/components/v4/SmoothScroll'
import { Cursor } from '@/components/v4/Cursor'
import { ScrollProgress } from '@/components/v4/ScrollProgress'
import { SectionIndicator } from '@/components/v4/SectionIndicator'
import { HudChip } from '@/components/v4/HudChip'
import { AmbientField } from '@/components/v4/AmbientField'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildOrganizationSchema, buildWebSiteSchema, buildLocalBusinessSchema } from '@/lib/schema'
import '@/styles/globals.css'
import '@/styles/v4.css'
import '@/styles/v4-fx.css'
import '@/styles/v4-pages.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Big Bold Tech — AI-native software, built with conviction',
    template: '%s | Big Bold Tech',
  },
  description:
    'AI-native product studio + venture lab. We design and ship software for the operators, founders, and teams shaping what comes next.',
  keywords: [
    'AI-native product studio',
    'AI agents for SMB',
    'product venture lab India',
    'Cashkr',
    'Workwrk',
    'ManagedAd',
    'Suprfly',
    'SwayMaps',
    'Big Bold Teams',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Big Bold Tech — AI-native software, built with conviction',
    description:
      'A product studio + venture lab. AI agents, SaaS, devtools — built decisively, shipped relentlessly.',
  },
  twitter: { card: 'summary_large_image', title: 'Big Bold Tech' },
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
      className={`${dmSans.variable} ${plusJakarta.variable} ${inter.variable} ${ibmPlexMono.variable} ${fraunces.variable} ${bricolage.variable} ${schibsted.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body data-theme="v4">
        <AmbientField />
        <SmoothScroll />
        <Cursor />
        <ScrollProgress />
        <SectionIndicator />
        <HudChip />
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebSiteSchema()} />
        <JsonLd data={buildLocalBusinessSchema()} />
        <HeaderV4 />
        <main>{children}</main>
        <FooterV4 />
      </body>
    </html>
  )
}
