'use client'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import ProjectCard from '../../components/ProjectCard'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const GITHUB_USERNAME = 'KajriVN'

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(repos => {
        setProjects(repos)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching projects:', err)
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Header active="projects" />
      
      <main className="projects-container">
        <div className="projects-hero">
          <h2>My Projects</h2>
          <p className="subtitle">Explore my GitHub repositories</p>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="error-message">
            <p>Failed to load projects. Please try again later.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="projects-grid">
            {projects.map((repo, index) => (
              <ProjectCard key={repo.id} repo={repo} index={index} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}
