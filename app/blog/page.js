'use client'
import { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import BlogCard from '../../components/BlogCard'
import Header from '../../components/Header'
import { blogPosts } from '../../data/blogPosts'

export default function BlogPage() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)

  const handleSearch = (query) => {
    setSearchQuery(query)
    const filtered = blogPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
    setFilteredPosts(filtered)
    setActiveCategory(null)
  }

  const handleCategoryFilter = (category) => {
    setActiveCategory(category)
    setSearchQuery('')
    if (category) {
      setFilteredPosts(blogPosts.filter(post => post.category === category))
    } else {
      setFilteredPosts(blogPosts)
    }
  }

  return (
    <div className="blog-page">
      <div className="blog-background" />
      <Header active="blog" />
      
      <div className="page-container">
        <Sidebar 
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryFilter}
          totalPosts={blogPosts.length}
        />

        <main className="main-content">
          <div className="page-title">
            <h1>Blog Posts</h1>
            <p className="subtitle">Thoughts, writings, and technical explorations</p>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="🔍 Search blog posts..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <div className="blog-grid">
            {filteredPosts.length === 0 ? (
              <div className="no-results">
                <h2>No posts found</h2>
                <p>Try a different search term</p>
              </div>
            ) : (
              filteredPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
