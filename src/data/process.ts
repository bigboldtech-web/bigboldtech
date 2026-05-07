export type ProcessStep = {
  num: string
  phase: string
  title: string
  body: string
  duration: string
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    phase: 'Discovery',
    title: 'Sharpen the problem.',
    body: 'A focused week of stakeholder interviews, audits, and competitive teardown. We leave with a written problem statement, success metrics, and a path through risk.',
    duration: '~1 week',
  },
  {
    num: '02',
    phase: 'Design',
    title: 'Make it real on paper.',
    body: 'Brand, UX, and copy in lockstep — not in silos. You see clickable prototypes within two weeks, and we&rsquo;re ready for engineering on day 15.',
    duration: '~2 weeks',
  },
  {
    num: '03',
    phase: 'Build',
    title: 'Ship to production.',
    body: 'Real backend, real infra, real auth — built on the same stack our other clients run at scale. Weekly demos, written status, no surprise invoices.',
    duration: '4–10 weeks',
  },
  {
    num: '04',
    phase: 'Scale',
    title: 'Operate and grow.',
    body: 'Monitoring, on-call, marketing engine, and continuous shipping. We hand off when you&rsquo;re ready — or stay on as your long-term tech partner.',
    duration: 'Ongoing',
  },
]
