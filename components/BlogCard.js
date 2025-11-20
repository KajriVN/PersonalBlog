import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.filename}`} className="blog-card">
      <Image 
        src={post.thumbnail} 
        alt={post.title}
        width={200}
        height={140}
        className="blog-card-thumbnail"
      />
      <div className="blog-card-content">
        <div>
          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-excerpt">{post.excerpt}</p>
        </div>
        <div>
          <div className="blog-card-meta">
            <span>📅 {post.date}</span>
            <span>📂 {post.category}</span>
          </div>
          <div className="blog-card-tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-card-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
