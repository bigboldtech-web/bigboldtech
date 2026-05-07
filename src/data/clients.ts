/**
 * Placeholder client logos.
 *
 * IMPORTANT: All names below are INVENTED. They are NOT real companies.
 * Replace with real client/advisor/partner logos before production launch.
 *
 * The actual SVG marks live in @/components/v4/ClientMarks.tsx. This file
 * just declares which placeholders exist + the order they appear in.
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
  | 'cobalt-pay'
  | 'arc-systems'

export type ClientLogo = {
  id: ClientLogoId
  /** Display name — used for alt text and the team-photo / case-study links */
  name: string
  /** One-line descriptor; only shown in some layouts */
  kind: string
}

export const placeholderClients: ClientLogo[] = [
  { id: 'atlas-bank',   name: 'Atlas Bank',     kind: 'Banking' },
  { id: 'northwind',    name: 'Northwind',      kind: 'Logistics' },
  { id: 'meridian',     name: 'Meridian',       kind: 'Insurance' },
  { id: 'kestrel',      name: 'Kestrel',        kind: 'SaaS' },
  { id: 'helix-labs',   name: 'Helix Labs',     kind: 'Biotech' },
  { id: 'orbis',        name: 'Orbis',          kind: 'Aerospace' },
  { id: 'lumen-co',     name: 'Lumen & Co.',    kind: 'Retail' },
  { id: 'verge-health', name: 'Verge Health',   kind: 'Healthcare' },
  { id: 'cobalt-pay',   name: 'Cobalt Pay',     kind: 'Fintech' },
  { id: 'arc-systems',  name: 'Arc Systems',    kind: 'Enterprise SaaS' },
]
