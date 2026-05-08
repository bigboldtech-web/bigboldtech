/**
 * Team profiles. Names + LinkedIn URLs are real (taken from the
 * profile slugs the team provided). Roles, bios, and photos are
 * still PLACEHOLDER — fill in once the team approves their copy
 * and gives permission for photo use.
 *
 * To add a real headshot:
 *   1. Drop the file into /public/team/<filename>.jpg
 *   2. Set `image: '/team/<filename>.jpg'`
 *   Photos must be permissioned. Don't reuse LinkedIn images
 *   without explicit consent — it's both a LinkedIn TOS issue
 *   and a personality-rights issue in India.
 */

export type TeamMember = {
  name: string
  role: string
  bio: string
  /** Local public path or full URL. Optional — if missing, initials render. */
  image?: string
  linkedin?: string
  /** Marks placeholder role/bio that still needs to be filled in */
  placeholderCopy?: boolean
}

export const team: TeamMember[] = [
  {
    name: 'Pranjal H.',
    role: 'Founder',
    bio: 'Pranjal leads Big Bold Tech end-to-end — from new-business conversations to product strategy and engineering oversight on every engagement.',
    linkedin: 'https://www.linkedin.com/in/pranjal-h-70576a233/',
    placeholderCopy: true,
  },
  {
    name: 'Nirajan Bohara',
    role: 'Engineering Lead',
    bio: 'Nirajan owns the engineering bench across web, mobile, and AI work. He architects new builds, leads code review, and keeps shipped systems running reliably in production.',
    linkedin: 'https://www.linkedin.com/in/nirajan-bohara-a97643237/',
    placeholderCopy: true,
  },
  {
    name: 'Bikesh Bhaila',
    role: 'Design & Brand Lead',
    bio: 'Bikesh leads brand, marketing, and product design across every Big Bold Tech engagement — from first wireframe to launch-ready visual system.',
    linkedin: 'https://www.linkedin.com/in/bikesh-bhaila-a8b5251a9/',
    placeholderCopy: true,
  },
]
