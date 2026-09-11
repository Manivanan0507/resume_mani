import { useState, useEffect } from 'react'
import {
  Code,
  Briefcase,
  FolderGit2,
  Mail,
  Sun,
  Moon,
  FileDown,
  ExternalLink,
  ChevronRight,
  Terminal,
  Sparkles,
  MapPin,
  Send,
  CheckCircle2,
  X,
  Layers,
  Award,
  Phone
} from 'lucide-react'
import './App.css'
import maniPhoto from './assets/mani_photo.jpg'

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


export default function App() {
  const [theme, setTheme] = useState('dark')
  const [activeTab, setActiveTab] = useState('all')
  const [timelineType, setTimelineType] = useState('experience')
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email) return
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormState({ name: '', email: '', message: '' })
    }, 4000)
  }

  const skills = [
    { name: 'React.js', category: 'frontend', level: 'Advanced', progress: 95 },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Expert', progress: 95 },
    { name: 'TypeScript', category: 'frontend', level: 'Intermediate', progress: 85 },
    { name: 'HTML5 & Modern CSS3', category: 'frontend', level: 'Expert', progress: 98 },
    { name: 'Tailwind CSS & UI Systems', category: 'frontend', level: 'Advanced', progress: 92 },
    { name: 'Next.js', category: 'frontend', level: 'Advanced', progress: 88 },
    { name: 'Node.js & Express', category: 'backend', level: 'Advanced', progress: 85 },
    { name: 'RESTful API Design', category: 'backend', level: 'Expert', progress: 90 },
    { name: 'MongoDB / PostgreSQL', category: 'backend', level: 'Intermediate', progress: 82 },
    { name: 'Git & GitHub Workflows', category: 'tools', level: 'Expert', progress: 94 },
    { name: 'Vite & Webpack Build Tools', category: 'tools', level: 'Advanced', progress: 90 },
    { name: 'Docker & Deployment (Vercel/Render)', category: 'tools', level: 'Intermediate', progress: 80 },
  ]

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(s => s.category === activeTab)

  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'Tech Solutions & Web Services',
      period: '1 Year Experience (2025 - Present)',
      location: 'Tamil Nadu, India',
      desc: 'Engineered responsive React web applications and REST APIs with Node.js & Express. Designed modern UI components, optimized frontend performance, and delivered clean, maintainable code.',
      tags: ['React', 'JavaScript', 'Node.js', 'Vite', 'REST API', 'Git']
    }
  ]

  const education = [
    {
      title: 'Bachelor of Computer Science (Bsc)',
      company: 'pondicherry university',
      period: '2020 - 2023',
      location: 'Puducherry, India',
      desc: 'Graduated with a solid foundation in Software Engineering, Algorithms, Database Management Systems, and Modern Web Application Development.',
      tags: ['Data Structures', 'Web Development', 'Computer Networks', 'DBMS']
    }
  ]

  const projects = [
    {
      title: 'Resume Mani - Modern Portfolio',
      desc: 'High-performance developer portfolio and interactive resume website built with React, Vite, and custom CSS design system.',
      tech: ['React', 'Vite', 'Design System', 'Responsive UI'],
      github: 'https://github.com/Manivanan0507/resume_mani',
      icon: '⚡'
    },
    {
      title: 'Full Stack Task & Project Manager',
      desc: 'Real-time collaborative kanban task management tool with drag-and-drop, authentication, and team analytics.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Manivanan0507',
      icon: '🚀'
    },
    {
      title: 'E-Commerce Cloud Storefront',
      desc: 'Modern online storefront with cart management, dynamic product filtering, payment gateway integration, and order tracking.',
      tech: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
      github: 'https://github.com/Manivanan0507',
      icon: '💎'
    }
  ]

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <header className="header">
        <div className="nav-container">
          <a href="#" className="brand-logo" id="nav-brand">
            <span className="logo-badge">MANI</span>
            <span>.dev</span>
          </a>

          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title="Toggle Theme"
              id="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="btn-outline"
              onClick={() => setShowResumeModal(true)}
              id="view-resume-nav-btn"
            >
              <FileDown size={16} />
              <span>Resume</span>
            </button>
            <a href="#contact" className="btn-primary" id="hire-me-nav-btn">
              <span>Hire Me</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="about" className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="status-badge">
                  <span className="status-dot"></span>
                  <span>Available for Full-time & Freelance Roles</span>
                </div>

                <h1 className="hero-title">
                  Hi, I'm <span className="gradient-text">Manivanan</span>
                </h1>

                <div className="hero-subtitle">
                  <Terminal size={20} />
                  <span>Full Stack Developer & Software Craftsman</span>
                </div>

                <p className="hero-description">
                  Passionate Full Stack Developer with 1 year of hands-on experience building modern, responsive, and performant web applications with React, Node.js, and clean code principles.
                </p>

                <div className="hero-cta">
                  <a href="#projects" className="btn-primary" id="hero-explore-projects">
                    <span>Explore My Work</span>
                    <ChevronRight size={16} />
                  </a>
                  <button
                    className="btn-outline"
                    onClick={() => setShowResumeModal(true)}
                    id="hero-download-cv"
                  >
                    <FileDown size={16} />
                    <span>Download CV</span>
                  </button>
                </div>

                <div className="social-links">
                  <a
                    href="https://github.com/Manivanan0507"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="GitHub"
                    id="hero-social-github"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="LinkedIn"
                    id="hero-social-linkedin"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="mailto:contact@manivanan.dev"
                    className="social-icon-btn"
                    title="Email"
                    id="hero-social-email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

              {/* Hero Visual Card with Photo & Badges */}
              <div className="hero-visual">
                <div className="visual-ambient-orb"></div>
                <div className="avatar-card-wrapper">
                  <div className="avatar-image-container">
                    <img src={maniPhoto} alt="Manivanan (Mani)" className="avatar-image" />
                  </div>

                  {/* Floating Badges */}
                  <div className="floating-badge badge-top-right">
                    <div className="badge-icon">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="badge-title">Experience</div>
                      <div className="badge-val">1 Year Experience</div>
                    </div>
                  </div>

                  <div className="floating-badge badge-bottom-left">
                    <div className="badge-icon">
                      <Code size={18} />
                    </div>
                    <div>
                      <div className="badge-title">Focus</div>
                      <div className="badge-val">React & Node.js</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><Briefcase size={24} /></div>
                <div>
                  <div className="stat-number">1 Year</div>
                  <div className="stat-label">Professional Experience</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon"><Code size={24} /></div>
                <div>
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Projects & Applications</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon"><Award size={24} /></div>
                <div>
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Commitment & Quality</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon"><Layers size={24} /></div>
                <div>
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Tech Tools & Stacks</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Technical Competencies</span>
              <h2 className="section-title">Skills & Technologies</h2>
              <p className="section-desc">A curated set of tools and technologies I use to build scalable web software.</p>
            </div>

            <div className="skills-filter">
              {['all', 'frontend', 'backend', 'tools'].map(category => (
                <button
                  key={category}
                  className={`filter-btn ${activeTab === category ? 'active' : ''}`}
                  onClick={() => setActiveTab(category)}
                  id={`skill-filter-${category}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="skills-grid">
              {filteredSkills.map(skill => (
                <div key={skill.name} className="skill-card">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Timeline Section */}
        <section id="experience" className="experience-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Career Pathway</span>
              <h2 className="section-title">Experience & Education</h2>
              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                <button
                  className={`filter-btn ${timelineType === 'experience' ? 'active' : ''}`}
                  onClick={() => setTimelineType('experience')}
                  id="timeline-btn-experience"
                >
                  Experience
                </button>
                <button
                  className={`filter-btn ${timelineType === 'education' ? 'active' : ''}`}
                  onClick={() => setTimelineType('education')}
                  id="timeline-btn-education"
                >
                  Education
                </button>
              </div>
            </div>

            <div className="timeline">
              {(timelineType === 'experience' ? experiences : education).map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <h3 className="timeline-role">{item.title}</h3>
                    <div className="timeline-meta">
                      <span>{item.company}</span>
                      <span>•</span>
                      <span>{item.period}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                    <p className="timeline-desc">{item.desc}</p>
                    <div className="timeline-tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Portfolio Showcase</span>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-desc">Selected work and open-source applications built with modern web tech.</p>
            </div>

            <div className="projects-grid">
              {projects.map((proj, idx) => (
                <div key={idx} className="project-card">
                  <div className="project-banner">
                    <span className="project-banner-icon">{proj.icon}</span>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.desc}</p>
                    <div className="project-tech">
                      {proj.tech.map(t => (
                        <span key={t} className="tag-badge">{t}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline"
                        style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
                      >
                        <GithubIcon size={15} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title">Let's Build Something Together</h2>
              <p className="section-desc">Have a project, opportunity, or idea? Feel free to reach out directly.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-info-card">
                <div className="info-item">
                  <div className="info-icon"><Mail size={20} /></div>
                  <div>
                    <div className="info-title">Email</div>
                    <div className="info-val">manivanan@example.com</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Phone size={20} /></div>
                  <div>
                    <div className="info-title">Phone</div>
                    <div className="info-val">+91 98765 43210</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MapPin size={20} /></div>
                  <div>
                    <div className="info-title">Location</div>
                    <div className="info-val">Tamil Nadu, India</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><GithubIcon size={20} /></div>
                  <div>
                    <div className="info-title">GitHub</div>
                    <div className="info-val">
                      <a href="https://github.com/Manivanan0507" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>
                        github.com/Manivanan0507
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="contact-form-card">
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                    <CheckCircle2 size={52} color="#22c55e" style={{ margin: '0 auto 1rem' }} />
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Message Received!</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out, Mani will respond promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        className="form-input"
                        placeholder="John Doe"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        rows="4"
                        className="form-input"
                        placeholder="Tell me about your project or role..."
                        value={formState.message}
                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="submit-contact-btn">
                      <Send size={16} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <div className="modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowResumeModal(false)}>
              <X size={18} />
            </button>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span className="logo-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>RESUME</span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Manivanan (Mani)</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Full Stack Web Developer • Tamil Nadu, India</p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>Professional Summary</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Full stack web developer with 1 year of professional experience building responsive, performant web applications using React, Node.js, Express, and modern tooling. Passionate about clean architecture, UI engineering, and rapid problem-solving.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', textTransform: 'uppercase', fontSize: '0.85rem' }}>Core Technical Skills</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                React.js, JavaScript (ES6+), TypeScript, Next.js, Node.js, Express, REST APIs, HTML5, CSS3, Tailwind CSS, MongoDB, Git, GitHub, Docker, Vite.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button
                className="btn-outline"
                onClick={() => window.print()}
              >
                Print / Save PDF
              </button>
              <button
                className="btn-primary"
                onClick={() => alert('Resume download initiated for Manivanan!')}
              >
                <FileDown size={16} />
                Download File
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>resume_mani</span> • Crafted with React & Vite
            </div>
            <div>
              Repository: <a href="https://github.com/Manivanan0507/resume_mani" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                github.com/Manivanan0507/resume_mani
              </a>
            </div>
            <div>
              © {new Date().getFullYear()} Manivanan. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
