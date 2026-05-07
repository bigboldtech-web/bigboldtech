export type Stat = {
  value: string
  label: string
  placeholder?: boolean
}

export const headlineStats: Stat[] = [
  { value: '$200M+', label: 'Revenue moved through products we built',  placeholder: true },
  { value: '50+',    label: 'Production engagements shipped',            placeholder: true },
  { value: '99.9%',  label: 'Average uptime across managed systems',     placeholder: true },
  { value: '14d',    label: 'Median time from kickoff to first deploy' },
]
