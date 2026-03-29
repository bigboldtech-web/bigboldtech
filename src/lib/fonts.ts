import { DM_Sans, Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500', '600'],
})
