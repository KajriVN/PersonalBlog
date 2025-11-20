'use client'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '../data/blogPosts'

export default function Sidebar({ activeCategory, onCategoryClick, totalPosts }) {
  const categoryCounts = {}
  blogPosts.forEach(post => {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1
  })

  return (
    <aside className="sidebar-left">
      <div className="profile-card">
        <Image 
          src="./assets/V9_ Insert 2_darker.png" 
          alt="Katjri" 
          width={100}
          height={100}
          className="profile-avatar"
        />
        <h2 className="profile-name">Katjri</h2>
        <p className="profile-tagline">Rookie in Cyber Security</p>
        
        <nav className="sidebar-nav">
          <Link href="/" className="sidebar-nav-item">
            <span className="nav-icon">🏠</span>
            <span className="nav-text">HOME</span>
          </Link>
          <a href="#categories" className="sidebar-nav-item">
            <span className="nav-icon">☰</span>
            <span className="nav-text">CATEGORIES</span>
          </a>
          <a href="#tags" className="sidebar-nav-item" onClick={(e) => { e.preventDefault(); alert('Tags feature coming soon!') }}>
            <span className="nav-icon">🏷️</span>
            <span className="nav-text">TAGS</span>
          </a>
          <a href="#archives" className="sidebar-nav-item" onClick={(e) => { e.preventDefault(); alert('Archives feature coming soon!') }}>
            <span className="nav-icon">📁</span>
            <span className="nav-text">ARCHIVES</span>
          </a>
          <Link href="/#about" className="sidebar-nav-item">
            <span className="nav-icon">ℹ️</span>
            <span className="nav-text">ABOUT</span>
          </Link>
        </nav>

        <div className="social-links">
          <a href="https://github.com/KajriVN" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://x.com/katjri" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter/X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="panel classification-panel" id="categories">
        <h3>☰ CATEGORIES</h3>
        <div className="category-list">
          <div 
            className={`category-item ${!activeCategory ? 'active' : ''}`}
            onClick={() => onCategoryClick(null)}
          >
            <span className="category-name">📚 All Posts</span>
            <span className="category-count">{totalPosts}</span>
          </div>
          
          {Object.entries(categoryCounts).map(([category, count]) => {
            const icon = category.includes('CTF') ? '🚩' : category.includes('CVE') ? '🔒' : '📝'
            return (
              <div 
                key={category}
                className={`category-item ${activeCategory === category ? 'active' : ''}`}
                onClick={() => onCategoryClick(category)}
              >
                <span className="category-name">{icon} {category}</span>
                <span className="category-count">{count}</span>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
