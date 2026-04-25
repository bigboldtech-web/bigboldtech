import {
  DM_Sans,
  Plus_Jakarta_Sans,
  Inter,
  IBM_Plex_Mono,
  Fraunces,
  Bricolage_Grotesque,
  Schibsted_Grotesk,
  Instrument_Serif,
  JetBrains_Mono,
} from 'next/font/google'

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

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  axes: ['opsz', 'SOFT'],
})

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display-v4',
  display: 'swap',
  axes: ['opsz'],
})

export const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-body-v4',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-italic-v4',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-v4',
  display: 'swap',
  weight: ['400', '500'],
})
