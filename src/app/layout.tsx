import type { Metadata } from 'next'
import { dmSans, plusJakarta, jetbrainsMono } from '@/lib/fonts'
import { SITE_CONFIG } from '@/lib/constants'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
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
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
