export type FAQ = {
  question: string
  answer: string
}

export const generalFAQs: FAQ[] = [
  {
    question: 'How quickly can you start?',
    answer:
      'Once we&rsquo;ve agreed on scope, kickoff happens within 7 days. Median time from signed SOW to first production deploy is 14 days. For larger embedded engagements, ramp-up takes 2–3 weeks while we onboard the team properly.',
  },
  {
    question: 'How do you price engagements?',
    answer:
      'Three structures. Fixed-scope projects start at $25K and run 4–10 weeks against a written SOW. Embedded squads start at $35K/month with a 6-month minimum. Long-term partnerships are custom — typically a quarterly retainer with built-in scope flexibility.',
  },
  {
    question: 'Where is your team based?',
    answer:
      'Headquartered in Bengaluru, India, with team members across India, UAE, and the US. We work in your timezone — most engagements get a US-overlap shift built in by default.',
  },
  {
    question: 'Do you sign NDAs and DPAs?',
    answer:
      'Yes — both. Standard mutual NDAs are signed before any scoping conversation. We have GDPR + DPDP-compliant DPA templates ready, and a public sub-processor list. SOC 2 Type II audit is in progress.',
  },
  {
    question: 'Who owns the code we pay for?',
    answer:
      'You do. Source code, IP, and infrastructure are owned by the client from day one. We retain no rights and ship full handover documentation at the end of every engagement.',
  },
  {
    question: 'Can you work alongside our internal team?',
    answer:
      'Absolutely. About half our engagements are embedded — we slot into your standups, your project management, your code review. We bring the senior bench you can&rsquo;t hire fast enough.',
  },
]
