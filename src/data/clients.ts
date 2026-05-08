/**
 * Client logos for the LogoStrip module.
 *
 * Some names below are PLACEHOLDER (`real: false`) — invented brands
 * to be replaced with real, permissioned logos before launch.
 * Cashkr is a real Big Bold Tech property and stays.
 *
 * Each `id` maps to an SVG mark in @/components/ClientMarks.
 */

export type ClientLogoId =
  | 'cashkr'
  | 'atlas-bank'
  | 'northwind'
  | 'meridian'
  | 'kestrel'
  | 'helix-labs'
  | 'orbis'
  | 'lumen-co'
  | 'verge-health'

export type ClientLogo = {
  id: ClientLogoId
  name: string
  /** True if this is a real, permissioned logo. Used to find/keep
   *  Cashkr (and future real clients) when the placeholders are
   *  swapped out before launch. */
  real?: boolean
}

export const placeholderClients: ClientLogo[] = [
  { id: 'cashkr',       name: 'Cashkr', real: true },
  { id: 'atlas-bank',   name: 'Atlas Bank' },
  { id: 'northwind',    name: 'Northwind' },
  { id: 'meridian',     name: 'Meridian' },
  { id: 'kestrel',      name: 'Kestrel' },
  { id: 'helix-labs',   name: 'Helix Labs' },
  { id: 'orbis',        name: 'Orbis' },
  { id: 'lumen-co',     name: 'Lumen & Co.' },
  { id: 'verge-health', name: 'Verge Health' },
]
