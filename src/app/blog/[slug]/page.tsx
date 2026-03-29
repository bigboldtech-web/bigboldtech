import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { JsonLd } from '@/components/seo/JsonLd'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { buildArticleSchema } from '@/lib/schema'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  // Simple markdown-like rendering: split by ## and ### for headings
  const sections = post.content.split('\n\n').filter(Boolean)

  // Related posts: same category first, then others, exclude current
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1) - (b.category === post.category ? -1 : 1))
    .slice(0, 3)

  return (
    <>
      <JsonLd data={buildArticleSchema(post)} />
      <div className="blog-detail">
        <div className="wrap">
          <div className="reveal" style={{ maxWidth: '720px', marginBottom: '48px' }}>
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title, href: '/blog/' + post.slug }]} />
            <div className="sec-label">{post.category}</div>
            <h1 className="sec-title">{post.title}</h1>
            <div className="meta" style={{ display: 'flex', gap: '16px', marginTop: '20px', fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)' }}>
              <span>{post.author}</span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="content reveal">
            {sections.map((section, i) => {
              const trimmed = section.trim()
              if (trimmed.startsWith('### ')) {
                return <h3 key={i}>{trimmed.replace('### ', '')}</h3>
              }
              if (trimmed.startsWith('## ')) {
                return <h2 key={i}>{trimmed.replace('## ', '')}</h2>
              }
              if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').map(s => s.replace(/^[\d]+\.\s\*\*/, '').replace(/\*\*\s—\s/, ' — ').replace(/^-\s/, ''))
                return (
                  <ol key={i}>
                    {items.map((item, j) => <li key={j}>{item}</li>)}
                  </ol>
                )
              }
              return <p key={i}>{trimmed}</p>
            })}
          </div>

          {/* CTA */}
          <div style={{ maxWidth: '720px', margin: '64px auto 0' }} className="reveal">
            <div className="cta" style={{ padding: '56px 36px' }}>
              <h2 className="sec-title" style={{ fontSize: '28px' }}>Need Help With This?</h2>
              <p className="sec-sub" style={{ margin: '0 auto 28px', textAlign: 'center', maxWidth: '400px' }}>
                Our team builds exactly the kind of systems discussed in this article. Let&apos;s talk.
              </p>
              <Link href="/contact" className="btn-glow">
                Book Discovery Call
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div style={{ marginTop: '80px' }}>
            <div className="reveal">
              <div className="sec-label">Keep Reading</div>
              <h2 className="sec-title" style={{ fontSize: '32px' }}>Related Articles</h2>
            </div>
            <div className="blog-grid">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="blog-card reveal">
                  <div className="blog-card-body">
                    <span className="cat">{rp.category}</span>
                    <h3>{rp.title}</h3>
                    <p>{rp.description}</p>
                    <div className="meta">
                      <span>{rp.author}</span>
                      <span>{formatDate(rp.date)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }} className="reveal">
            <Link href="/blog" className="btn-ghost">All Articles</Link>
          </div>
        </div>
      </div>
    </>
  )
}
