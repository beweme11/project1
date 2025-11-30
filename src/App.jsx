import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Zap, Layers, ArrowRight, Wand2, Box, Palette } from 'lucide-react'
import { Pricing } from './components/Pricing'
import { ParticlesBackground } from './components/ParticlesBackground'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        if (data.status === 'exists') {
          setMessage('You\'re already on the list! 🎉')
          setMessageType('info')
        } else {
          setMessage('Thank you for joining! We\'ll be in touch soon. ✨')
          setMessageType('success')
          setEmail('')
        }
      } else {
        setMessage('Something went wrong. Please try again.')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Unable to connect. Please try again later.')
      setMessageType('error')
    } finally {
      setLoading(false)
      setTimeout(() => setMessage(''), 5000)
    }
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      <ParticlesBackground />
      <div className="bg-glow">
        <div className="glow-blob blob-1"></div>
        <div className="glow-blob blob-2"></div>
        <div className="glow-blob blob-3"></div>
      </div>

      <nav>
        <div className="logo">
          <Sparkles size={24} className="text-purple-400" />
          Lumina
        </div>
        <div className="nav-links">
          <span className="nav-link">Features</span>
          <span className="nav-link">Showcase</span>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="badge"
          >
            ✨ Coming Soon: The Future of Ad Creation
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Create impossible ads <br />
            <span className="gradient-text-hero">in seconds with AI</span>
          </motion.h1>

          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-subtitle"
          >
            Lumina empowers marketing creatives to generate high-fidelity, brand-consistent advertising assets instantly. Stop searching for stock photos. Start creating.
          </motion.p>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="cta-container"
          >
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
              <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '5px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <input 
                  type="email" 
                  placeholder="Enter your email for early access" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  style={{ background: 'transparent', border: 'none', padding: '0.8rem 1.5rem', color: 'white', outline: 'none', width: '250px' }}
                />
                <button 
                  type="submit" 
                  className="primary-btn"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`message-box ${messageType}`}
                  style={{
                    marginTop: '1rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '12px',
                    background: messageType === 'success' ? 'rgba(34, 197, 94, 0.1)' : messageType === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                    border: `1px solid ${messageType === 'success' ? 'rgba(34, 197, 94, 0.3)' : messageType === 'error' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
                    color: messageType === 'success' ? '#86efac' : messageType === 'error' ? '#fca5a5' : '#93c5fd'
                  }}
                >
                  {message}
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="dashboard-preview"
          >
            <img src="/dashboard.png" alt="Lumina Dashboard Interface" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Supercharge your workflow
          </motion.h2>
          
          <div className="features-grid">
            <FeatureCard 
              icon={<Wand2 size={24} />}
              title="Generative Magic"
              description="Describe your product and setting. Lumina's advanced diffusion models generate photorealistic scenes in seconds."
            />
            <FeatureCard 
              icon={<Palette size={24} />}
              title="Brand Consistency"
              description="Upload your brand kit. Our AI understands your color palette, typography, and visual style to ensure perfect alignment."
            />
            <FeatureCard 
              icon={<Layers size={24} />}
              title="Infinite Variations"
              description="Need A/B testing assets? Generate hundreds of variations of the same ad with subtle changes instantly."
            />
          </div>
        </section>

        {/* Showcase Section */}
        <section className="showcase-section">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Made with Lumina
          </motion.h2>

          <div className="showcase-grid">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="showcase-item"
            >
              <img src="/sneaker.png" alt="Futuristic Sneaker Ad" />
              <div className="showcase-overlay">
                <h3>Cyberpunk Streetwear</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Prompt: Futuristic sneaker, neon city, cinematic lighting</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="showcase-item"
            >
              <img src="/perfume.png" alt="Luxury Perfume Ad" />
              <div className="showcase-overlay">
                <h3>Ethereal Fragrance</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>Prompt: Crystal bottle, bioluminescent forest, magical atmosphere</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <Pricing />

        {/* Footer */}
        <footer>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1280px', margin: '0 auto' }}>
            <div className="logo" style={{ fontSize: '1.2rem' }}>
              <Sparkles size={20} className="text-purple-400" />
              Lumina
            </div>
            <p>© 2025 Lumina AI Inc. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ color: '#64748b' }}>Twitter</a>
              <a href="#" style={{ color: '#64748b' }}>Instagram</a>
              <a href="#" style={{ color: '#64748b' }}>LinkedIn</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="feature-card"
    >
      <div className="feature-icon-wrapper">
        {icon}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

export default App
