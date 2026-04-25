import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, blogCategories } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.toLowerCase().replace(/\s+/g, '-') }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const name = category.replace(/-/g, ' ')
  return { title: `${name} — Journal`, description: `Big Bold Tech journal — articles on ${name}` }
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const name = category.replace(/-/g, ' ')
  const filtered = blogPosts.filter((p) => p.category.toLowerCase() === name.toLowerCase())

  return (
    <>
      <PageHero
        eyebrow="Journal"
        crumbs={[
          { label: 'Journal', href: '/blog' },
          { label: name, href: `/blog/category/${category}` },
        ]}
        title={
          <span style={{ textTransform: 'capitalize' }}>{name}</span>
        }
        sub={`Selected articles from the studio on ${name.toLowerCase()}.`}
      />

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-index-grid">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 50}>
                <Link href={`/blog/${post.slug}`} className="v4-card v4-card-link">
                  <div className="v4-card-num">{post.category}</div>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <div className="v4-card-tags" style={{ marginTop: 'auto' }}>
                    <span className="v4-tag">{post.author}</span>
                    <span className="v4-tag">{formatDate(post.date)}</span>
                  </div>
                  <span className="v4-card-arrow">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <Link href="/blog" className="v4-btn v4-btn-ghost">All articles</Link>
          </div>
        </div>
      </section>
    </>
  )
}
