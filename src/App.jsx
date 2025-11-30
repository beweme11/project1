import './App.css'

function App() {
  return (
    <>
      <div className="hero">
        <h1>
          <span className="gradient-text">Production Ready</span> React
        </h1>
        <p>
          A modern, high-performance landing page deployed via GitHub Actions to AWS EC2 using Docker and Nginx.
        </p>
        <div className="cta-group">
          <button onClick={() => window.open('https://github.com', '_blank')}>
            View Source
          </button>
          <button className="secondary-btn" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
            Learn More
          </button>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">🐳</span>
          <h3>Dockerized</h3>
          <p>
            Built using a multi-stage Dockerfile. Stage 1 builds the app with Node.js, and Stage 2 serves it with Nginx for a tiny footprint.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">🚀</span>
          <h3>Nginx Powered</h3>
          <p>
            Configured with a custom <code>nginx.conf</code> to handle React Router's client-side routing and serve static assets efficiently.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h3>CI/CD Pipeline</h3>
          <p>
            Automated workflow that builds the image, pushes to GHCR, and triggers a deployment on your AWS EC2 instance.
          </p>
        </div>
      </div>

      <footer>
        <p>© 2025 Production React App. Built with Vite & Docker.</p>
      </footer>
    </>
  )
}

export default App
