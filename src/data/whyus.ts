export type Pillar = {
  title: string
  body: string
  /** Inline SVG icon definition */
  iconPath: string
}

export const whyUsPillars: Pillar[] = [
  {
    title: 'Results-driven, not hours-driven',
    body: 'We measure success in revenue, conversion, and uptime — not slide decks or timesheets. Every engagement starts with the metric we&rsquo;re moving.',
    iconPath: 'M3 21V3 M3 21H21 M7 17l4-4 4 4 6-6',
  },
  {
    title: 'One full-stack team',
    body: 'Strategy, design, engineering, infra, and growth — under one roof. No handoffs between agencies, no context lost between vendors.',
    iconPath: 'M12 2 L2 7 L12 12 L22 7 Z M2 17 L12 22 L22 17 M2 12 L12 17 L22 12',
  },
  {
    title: 'Transparent process, fixed bids',
    body: 'Weekly demos, written status, fixed scope-of-work, and a real PM you can call. No mystery invoices, no scope creep theatre.',
    iconPath: 'M9 12l2 2 4-4 M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]
