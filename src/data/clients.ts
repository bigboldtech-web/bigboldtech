/**
 * Placeholder client logos for the LogoStrip module.
 *
 * IMPORTANT: All names are INVENTED. Replace with real, permissioned
 * logos before launch. Each `id` maps to an SVG mark in
 * @/components/ClientMarks.
 */

export type ClientLogoId =
  | 'atlas-bank'
  | 'northwind'
  | 'meridian'
  | 'kestrel'
  | 'helix-labs'
  | 'orbis'
  | 'lumen-co'
  | 'verge-health'

export type ClientLogo = { id: ClientLogoId; name: string }

export const placeholderClients: ClientLogo[] = [
  { id: 'atlas-bank',   name: 'Atlas Bank' },
  { id: 'northwind',    name: 'Northwind' },
  { id: 'meridian',     name: 'Meridian' },
  { id: 'kestrel',      name: 'Kestrel' },
  { id: 'helix-labs',   name: 'Helix Labs' },
  { id: 'orbis',        name: 'Orbis' },
  { id: 'lumen-co',     name: 'Lumen & Co.' },
  { id: 'verge-health', name: 'Verge Health' },
]
