import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'

export const metadata: Metadata = {
  title: 'Journal — Insights from the studio',
  description:
    'Notes from the team at Big Bold Tech on AI-native software, growth engineering, and the operating systems behind real shipped products.',
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        crumbs={[{ label: 'Journal', href: '/blog' }]}
        title={
          <>
            Notes from the <span className="v4-italic">studio.</span>
          </>
        }
        sub="What we are seeing, building, and arguing about. Published when there is something worth saying — never on a content calendar."
      />

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-index-grid">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 50}>
                <Link href={`/blog/${post.slug}`} className="v4-card v4-card-link">
                  <div className="v4-card-num">{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <div className="v4-card-tags" style={{ marginTop: 'auto' }}>
                    <span className="v4-tag">{post.author}</span>
                    <span className="v4-tag">{formatDate(post.date)}</span>
                    <span className="v4-tag">{post.readTime}</span>
                  </div>
                  <span className="v4-card-arrow">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M3 9 L9 3 M5 3 H9 V7" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
