import type { Metadata } from 'next'
import { dmSans, plusJakarta, jetbrainsMono } from '@/lib/fonts'
import { SITE_CONFIG } from '@/lib/constants'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Big Bold Tech — Software, AI, and growth, end-to-end',
    template: '%s | Big Bold Tech',
  },
  description:
    'Big Bold Tech is a full-service technology partner. We build AI applications, custom software, and growth systems for ambitious companies.',
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
      <body>{children}</body>
    </html>
  )
}
