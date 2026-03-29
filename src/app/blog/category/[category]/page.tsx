import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts, blogCategories } from '@/data/blog-posts'
import { formatDate } from '@/lib/utils'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.toLowerCase().replace(/\s+/g, '-') }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const name = category.replace(/-/g, ' ')
  return { title: `${name} Articles`, description: `BigBoldTech blog posts about ${name}` }
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryName = category.replace(/-/g, ' ')
  const filtered = blogPosts.filter((p) => p.category.toLowerCase() === categoryName.toLowerCase())

  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="reveal">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: categoryName, href: '/blog/category/' + category }]} />
          <div className="sec-label">Blog</div>
          <h1 className="sec-title" style={{ textTransform: 'capitalize' }}>{categoryName}</h1>
        </div>
        <div className="blog-grid">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card reveal">
              <div className="blog-card-body">
                <span className="cat">{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="meta">
                  <span>{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: '48px', textAlign: 'center' }} className="reveal">
          <Link href="/blog" className="btn-ghost">All Posts</Link>
        </div>
      </div>
    </section>
  )
}
