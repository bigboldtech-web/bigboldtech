import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on AI, web development, SaaS, marketing, and enterprise technology from the BigBoldTech team.',
}

export default function BlogPage() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
          <div className="sec-label">Insights</div>
          <h1 className="sec-title">Blog</h1>
          <p className="sec-sub">Actionable insights on enterprise technology, AI, growth marketing, and everything we build.</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card reveal">
              <div className="blog-card-body">
                <span className="cat">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="meta">
                  <span>{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
