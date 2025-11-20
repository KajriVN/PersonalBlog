import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import { blogPosts } from '../../../data/blogPosts'
import Header from '../../../components/Header'
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}
export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState(null)
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const currentPost = blogPosts.find(p => p.filename === params.slug)
    if (!currentPost) {
      setLoading(false)
      return
    }

    setPost(currentPost)

    // Load markdown content
    fetch(`/posts/${params.slug}.md`)
      .then(res => res.text())
      .then(markdown => {
        marked.setOptions({
          highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
              return hljs.highlight(code, { language: lang }).value
            }
            return hljs.highlightAuto(code).value
          },
          breaks: true,
          gfm: true
        })

        const html = marked.parse(markdown)
        setContent(html)
        setLoading(false)

        // Highlight code blocks after content is set
        setTimeout(() => {
          document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block)
          })
        }, 100)
      })
      .catch(err => {
        console.error('Error loading post:', err)
        setLoading(false)
      })
  }, [params.slug])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="error-container">
        <h1>Post not found</h1>
        <Link href="/blog">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      <Header active="blog" />

      <main className="post-container container">
        <article className="post-content">
          <div className="post-header">
            <div className="post-meta">
              <span className="post-date">📅 {post.date}</span>
              <span className="post-category">{post.category}</span>
            </div>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-tags">
              {post.tags.map(tag => (
                <span key={tag} className="post-tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <div 
            className="post-body markdown-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          
          <div className="post-footer">
            <Link href="/blog" className="back-link">← Back to Blog</Link>
          </div>
        </article>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© Katjri – All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
