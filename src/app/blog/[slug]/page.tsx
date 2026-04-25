import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { JsonLd } from '@/components/seo/JsonLd'
import { buildArticleSchema } from '@/lib/schema'
import { PageHero } from '@/components/v4/PageHero'
import { Reveal } from '@/components/v4/Reveal'
import { MidCta } from '@/components/v4/MidCta'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return { title: post.title, description: post.description }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const sections = post.content.split('\n\n').filter(Boolean)

  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1) - (b.category === post.category ? -1 : 1))
    .slice(0, 3)

  return (
    <>
      <JsonLd data={buildArticleSchema(post)} />

      <PageHero
        eyebrow={post.category}
        crumbs={[
          { label: 'Journal', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
        title={post.title}
        sub={post.description}
        actions={
          <div className="v4-card-tags" style={{ marginTop: 0 }}>
            <span className="v4-tag">{post.author}</span>
            <span className="v4-tag">{formatDate(post.date)}</span>
            <span className="v4-tag">{post.readTime}</span>
          </div>
        }
      />

      <section className="v4-section">
        <div className="v4-container">
          <article className="v4-prose" style={{ margin: '0 auto' }}>
            {sections.map((section, i) => {
              const trimmed = section.trim()
              if (trimmed.startsWith('### ')) {
                return <h3 key={i}>{trimmed.replace('### ', '')}</h3>
              }
              if (trimmed.startsWith('## ')) {
                return <h2 key={i}>{trimmed.replace('## ', '')}</h2>
              }
              if (trimmed.startsWith('1. ') || trimmed.startsWith('- ')) {
                const items = trimmed.split('\n').map((s) =>
                  s.replace(/^[\d]+\.\s\*\*/, '').replace(/\*\*\s—\s/, ' — ').replace(/^-\s/, '')
                )
                return (
                  <ol key={i}>
                    {items.map((item, j) => <li key={j}>{item}</li>)}
                  </ol>
                )
              }
              return <p key={i}>{trimmed}</p>
            })}
          </article>
        </div>
      </section>

      <section className="v4-section" style={{ padding: '40px 0' }}>
        <MidCta
          title="Building something this article is about?"
          body="If the post resonates, that probably means we should talk."
          buttonText="Begin a project"
        />
      </section>

      <section className="v4-section">
        <div className="v4-container">
          <div className="v4-block-head">
            <div>
              <span className="v4-eyebrow">Keep reading</span>
              <h2>Related <span className="v4-italic">articles.</span></h2>
            </div>
          </div>
          <div className="v4-index-grid">
            {related.map((rp, i) => (
              <Reveal key={rp.slug} delay={i * 60}>
                <Link href={`/blog/${rp.slug}`} className="v4-card v4-card-link">
                  <div className="v4-card-num">{rp.category}</div>
                  <h3>{rp.title}</h3>
                  <p>{rp.description}</p>
                  <span className="v4-card-arrow">
                    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9 L9 3 M5 3 H9 V7" /></svg>
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
