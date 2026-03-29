export interface TeamMember {
  name: string
  role: string
  initials: string
}

export const team: TeamMember[] = [
  { name: 'Marcus Chen', role: 'Founder & CEO', initials: 'MC' },
  { name: 'Sarah Okafor', role: 'CTO', initials: 'SO' },
  { name: 'James Rivera', role: 'VP of Engineering', initials: 'JR' },
  { name: 'Priya Sharma', role: 'Head of AI', initials: 'PS' },
  { name: 'David Kim', role: 'Head of Design', initials: 'DK' },
  { name: 'Elena Novak', role: 'Head of Growth', initials: 'EN' },
]
