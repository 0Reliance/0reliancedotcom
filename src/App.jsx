import React from 'react'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      {/* Header Navigation */}
      <header className="hub-header">
        <nav className="hub-nav">
          <div className="nav-brand">
            <h1>0Reliance Lab</h1>
            <span className="tagline">Self-Hosting & Freedom Tools</span>
          </div>
          <div className="nav-links">
            <a href="#docs">Docs</a>
            <a href="#university">University</a>
            <a href="#exports">Exports</a>
            <a href="#github">GitHub</a>
            <a href="#resources">Resources</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>0Reliance Lab</h1>
          <p className="hero-subtitle">Your Gateway to Self-Hosting Freedom & Educational Resources</p>
          <p className="hero-description">
            Empowering individuals with tools, knowledge, and resources for complete digital independence. 
            Learn, build, and thrive in the decentralized web.
          </p>
        </div>
      </section>

      {/* Main Hub Cards */}
      <main className="hub-main">
        <section className="hub-cards">
          <div className="card-grid">
            {/* MKDocs Ultra Card */}
            <a href="https://docs.0reliance.com" target="_blank" rel="noopener noreferrer" className="hub-card docs-card">
              <div className="card-icon">📚</div>
              <div className="card-content">
                <h2>MKDocs Ultra</h2>
                <p>Custom AI Copilot version of MKDocs Material</p>
                <div className="card-features">
                  <span className="feature-tag">AI-Powered</span>
                  <span className="feature-tag">Documentation</span>
                  <span className="feature-tag">Interactive</span>
                </div>
                <span className="card-link">docs.0reliance.com →</span>
              </div>
            </a>

            {/* Export Gallery Card */}
            <a href="https://692b041f9a99771f24f34110.blocks-app.diy/ExportGallery" target="_blank" rel="noopener noreferrer" className="hub-card exports-card">
              <div className="card-icon">🎨</div>
              <div className="card-content">
                <h2>Export Gallery</h2>
                <p>HTML lessons and projects from 0Reliance ecosystem</p>
                <div className="card-features">
                  <span className="feature-tag">Visual</span>
                  <span className="feature-tag">Interactive</span>
                  <span className="feature-tag">Projects</span>
                </div>
                <span className="card-link">Export Gallery →</span>
              </div>
            </a>

            {/* 0Reliance University Card */}
            <a href="https://692b041f9a99771f24f34110.blocks-app.diy/" target="_blank" rel="noopener noreferrer" className="hub-card university-card">
              <div className="card-icon">🎓</div>
              <div className="card-content">
                <h2>0Reliance University</h2>
                <p>100+ detailed multimedia lessons on self-hosting</p>
                <div className="card-features">
                  <span className="feature-tag">Courses</span>
                  <span className="feature-tag">Multimedia</span>
                  <span className="feature-tag">Expert</span>
                </div>
                <span className="card-link">University →</span>
              </div>
            </a>

            {/* GitHub Repository Card */}
            <a href="https://github.com/0Reliance/" target="_blank" rel="noopener noreferrer" className="hub-card github-card">
              <div className="card-icon">💻</div>
              <div className="card-content">
                <h2>GitHub Repository</h2>
                <p>Complete 0Reliance Lab source code and projects</p>
                <div className="card-features">
                  <span className="feature-tag">Open Source</span>
                  <span className="feature-tag">Code</span>
                  <span className="feature-tag">Projects</span>
                </div>
                <span className="card-link">GitHub →</span>
              </div>
            </a>
          </div>
        </section>

        {/* Resources Section */}
        <section className="resources-section" id="resources">
          <h2>Self-Hosting Resources & Tools</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>🔧 Development Tools</h3>
              <ul>
                <li><a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">Git Version Control</a></li>
                <li><a href="https://docker.com" target="_blank" rel="noopener noreferrer">Docker Containers</a></li>
                <li><a href="https://nginx.org" target="_blank" rel="noopener noreferrer">Nginx Web Server</a></li>
                <li><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js Runtime</a></li>
              </ul>
            </div>

            <div className="resource-card">
              <h3>🌐 Hosting Platforms</h3>
              <ul>
                <li><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a></li>
                <li><a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a></li>
                <li><a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer">Cloudflare Pages</a></li>
                <li><a href="https://github.com/features/pages" target="_blank" rel="noopener noreferrer">GitHub Pages</a></li>
              </ul>
            </div>

            <div className="resource-card">
              <h3>📚 Learning Resources</h3>
              <ul>
                <li><a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></li>
                <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></li>
                <li><a href="https://w3schools.com" target="_blank" rel="noopener noreferrer">W3Schools</a></li>
                <li><a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">Stack Overflow</a></li>
              </ul>
            </div>

            <div className="resource-card">
              <h3>🛡️ Privacy & Security</h3>
              <ul>
                <li><a href="https://privacytools.io" target="_blank" rel="noopener noreferrer">Privacy Tools</a></li>
                <li><a href="https:// EFF.org" target="_blank" rel="noopener noreferrer">Electronic Frontier Foundation</a></li>
                <li><a href="https://gnu.org" target="_blank" rel="noopener noreferrer">GNU Project</a></li>
                <li><a href="https://fsf.org" target="_blank" rel="noopener noreferrer">Free Software Foundation</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* RSS Feeds Section */}
        <section className="feeds-section">
          <h2>Latest from the Community</h2>
          <div className="feeds-grid">
            <div className="feed-card">
              <h3>📰 Tech News</h3>
              <div className="feed-placeholder">
                <p>RSS feed for latest self-hosting and tech news</p>
                <a href="#" className="feed-link">Subscribe to RSS</a>
              </div>
            </div>
            <div className="feed-card">
              <h3>🔧 Project Updates</h3>
              <div className="feed-placeholder">
                <p>Latest updates from 0Reliance Lab projects</p>
                <a href="#" className="feed-link">Subscribe to RSS</a>
              </div>
            </div>
            <div className="feed-card">
              <h3>📚 Tutorials</h3>
              <div className="feed-placeholder">
                <p>New tutorials and guides from the community</p>
                <a href="#" className="feed-link">Subscribe to RSS</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="hub-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>0Reliance Lab</h3>
            <p>Empowering digital freedom through self-hosting and education.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#university">University</a></li>
              <li><a href="#github">GitHub</a></li>
              <li><a href="#resources">Resources</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li><a href="https://github.com/0Reliance/discussions" target="_blank" rel="noopener noreferrer">Discussions</a></li>
              <li><a href="https://github.com/0Reliance/issues" target="_blank" rel="noopener noreferrer">Issues</a></li>
              <li><a href="mailto:contact@0reliance.com">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 0Reliance Lab. Committed to digital freedom and self-hosting education.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
