import Link from 'next/link'

export default function Header({ active = '' }) {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-panel">
          <Link href="/" className={active === 'home' ? 'active' : ''}>
            Home
          </Link>
          <Link href="/projects" className={active === 'projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link href="/collection" className={active === 'collection' ? 'active' : ''}>
            Collection
          </Link>
          <Link href="/blog" className={active === 'blog' ? 'active' : ''}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
