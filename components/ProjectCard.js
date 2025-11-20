const languageColors = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#2b7489',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Go: '#00ADD8',
  Rust: '#dea584',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  default: '#8257e5'
}

export default function ProjectCard({ repo, index }) {
  const languageColor = languageColors[repo.language] || languageColors.default
  const description = repo.description || 'No description provided.'

  return (
    <div 
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-header">
        <span className="project-icon">📁</span>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-title">
          {repo.name}
        </a>
      </div>
      
      <p className="project-description">{description}</p>
      
      <div className="project-meta">
        {repo.language && (
          <div className="project-language">
            <span 
              className="language-dot" 
              style={{ backgroundColor: languageColor }}
            ></span>
            {repo.language}
          </div>
        )}
        
        <div className="project-stats">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>
      </div>
    </div>
  )
}
