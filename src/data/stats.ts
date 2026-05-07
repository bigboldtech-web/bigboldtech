/**
 * Headline stats used across the site.
 * Real where they exist (Cashkr), placeholder otherwise — flagged with `placeholder: true`.
 */

export type Stat = {
  value: string
  label: string
  /** True if the number is invented and must be replaced before launch */
  placeholder?: boolean
}

export const founderStats: Stat[] = [
  { value: '6',     label: 'Live products in market' },
  { value: '$50M+', label: 'Revenue moved through our products', placeholder: true },
  { value: '4,200', label: 'Cashkr orders processed monthly' },
  { value: '99.9%', label: 'Production uptime, last 12 months', placeholder: true },
]

export const enterpriseStats: Stat[] = [
  { value: '$200M+', label: 'GMV running on infra we built',          placeholder: true },
  { value: '14d',    label: 'Median time to first production deploy' },
  { value: 'SOC 2',  label: 'Type II audit in progress (Q3 2026)',    placeholder: true },
  { value: '24/7',   label: 'On-call rotation across two timezones' },
]

export const trustHighlights = [
  {
    title: 'SOC 2 Type II',
    body: 'Audit underway with a Big Four firm. Bridge letter available on request.',
    status: 'In progress',
    placeholder: true,
  },
  {
    title: 'GDPR / DPDP Act',
    body: 'Standard DPA template, India + EU sub-processor list, breach playbook.',
    status: 'Available',
  },
  {
    title: 'On-call SLA',
    body: 'P0 < 15 min ack, P1 < 1 hr, P2 < 4 hr. Two-timezone rotation.',
    status: 'Standard',
  },
  {
    title: 'Source-code escrow',
    body: 'All client repos owned by the client from day one. Optional third-party escrow.',
    status: 'Standard',
  },
  {
    title: 'Insurance',
    body: 'Professional liability + cyber liability cover. Certificate on request.',
    status: 'Standard',
    placeholder: true,
  },
  {
    title: 'Sub-processors',
    body: 'Vercel, AWS, Cloudflare, Postgres-as-a-service, OpenAI / Anthropic. Versioned list.',
    status: 'Public',
  },
]
