import { JsonLd } from '@/components/seo/JsonLd'
import { buildFAQSchema } from '@/lib/schema'

export function FAQAccordion() {
  const faqs = [
    {
      q: 'What kind of businesses does BigBoldTech work with?',
      a: 'BigBoldTech partners exclusively with established businesses generating $1M+ in revenue who need enterprise-grade technology infrastructure, AI integration, performance marketing at scale, and comprehensive growth systems.',
    },
    {
      q: 'What services does BigBoldTech offer?',
      a: 'BigBoldTech offers end-to-end technology services including AI & Automation, SaaS Development, Web & Mobile Apps, Performance Marketing, SEO & Organic Growth, Email Marketing, DevOps & Cloud Infrastructure, and Analytics & BI.',
    },
    {
      q: 'Where is BigBoldTech located?',
      a: 'BigBoldTech is headquartered in India and serves clients globally across North America, Europe, Middle East, and Asia-Pacific.',
    },
    {
      q: 'How long does a typical project take?',
      a: 'Project timelines vary by scope. MVPs typically take 6-8 weeks, full platforms 3-6 months. We follow agile sprints with weekly demos so you see progress immediately.',
    },
    {
      q: 'Do you work with startups or only enterprises?',
      a: 'We work primarily with established businesses doing $1M+ in revenue. However, we selectively partner with well-funded startups that align with our expertise and have clear product-market fit.',
    },
    {
      q: 'What makes BigBoldTech different from other agencies?',
      a: 'We are builder-led, not sales-led. Your point of contact writes code. We own the full stack — from infrastructure to marketing pixels — so there is no finger-pointing between vendors.',
    },
  ]

  const schemaFaqs = faqs.map((f) => ({ question: f.q, answer: f.a }))

  return (
    <section className="sec sec-dark" id="faq">
      <JsonLd data={buildFAQSchema(schemaFaqs)} />
      <div className="wrap">
        <div className="reveal">
          <div className="sec-label">FAQ</div>
          <h2 className="sec-title">Questions & Answers</h2>
          <p className="sec-sub">Everything you need to know before we start building together.</p>
        </div>
        <div className="faq-cols">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item reveal">
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
