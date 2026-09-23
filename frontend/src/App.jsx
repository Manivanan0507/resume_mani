import { useState, useEffect } from 'react'
import {
  Code,
  Briefcase,
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
  Phone,
  Printer,
  Users,
  Calendar,
  ShieldCheck,
  PackageCheck,
  Loader2,
  AlertCircle
} from 'lucide-react'
import './App.css'
import maleDevGif from './assets/male_dev_wave.gif'

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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Job Opportunity / Hire Me',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formError, setFormError] = useState(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (!formState.name || !formState.email || !formState.message) return

    setIsSubmitting(true)
    setFormError(null)

    try {
      const response = await fetch('https://formsubmit.co/ajax/manivanan6424@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone || 'Not provided',
          inquiry: formState.inquiryType,
          message: formState.message,
          _replyto: formState.email,
          _subject: `Portfolio Inquiry: ${formState.name} - ${formState.inquiryType}`,
          _template: 'table',
          _captcha: 'false'
        })
      })

      const data = await response.json()

      if (data.message && data.message.toLowerCase().includes('activation')) {
        setFormSubmitted('needs_activation')
      } else if (data.success === 'true' || data.success === true || response.status === 200) {
        setFormSubmitted('success')
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      console.error('Error sending message:', err)
      setFormError('Could not send message automatically. Please click below to email manivanan6424@gmail.com directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormSubmitted(false)
    setFormError(null)
    setFormState({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Job Opportunity / Hire Me',
      message: ''
    })
  }

  // Exact skills from official resume
  const skills = [
    // Frontend
    { name: 'React.js', category: 'frontend', level: 'Expert', progress: 95 },
    { name: 'Next.js', category: 'frontend', level: 'Advanced', progress: 90 },
    { name: 'React Redux (State Management)', category: 'frontend', level: 'Expert', progress: 92 },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Expert', progress: 95 },
    { name: 'HTML5 & Modern CSS', category: 'frontend', level: 'Expert', progress: 98 },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', progress: 92 },
    { name: 'Material UI & Ant Design', category: 'frontend', level: 'Advanced', progress: 88 },
    { name: 'AG Grid (Data Table)', category: 'frontend', level: 'Expert', progress: 92 },

    // Backend & Database
    { name: 'Node.js', category: 'backend', level: 'Advanced', progress: 90 },
    { name: 'Express.js', category: 'backend', level: 'Advanced', progress: 90 },
    { name: 'PostgreSQL & Triggers', category: 'backend', level: 'Advanced', progress: 88 },
    { name: 'MySQL & SQL', category: 'backend', level: 'Advanced', progress: 85 },
    { name: 'REST APIs & RBAC', category: 'backend', level: 'Expert', progress: 92 },

    // Tools & Version Control
    { name: 'Git & GitHub', category: 'tools', level: 'Expert', progress: 95 },
    { name: 'Azure Repos & CI/CD Pipelines', category: 'tools', level: 'Advanced', progress: 88 },
    { name: 'Problem Solving & Debugging', category: 'tools', level: 'Expert', progress: 94 },
    { name: 'Vite & Build Tooling', category: 'tools', level: 'Advanced', progress: 90 },
  ]

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter(s => s.category === activeTab)

  // Experience from official resume
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Zithtech',
      period: 'June 2025 - April 2026',
      location: 'Puducherry / Tamil Nadu, India',
      desc: 'Developed and maintained enterprise web applications using React JS, React Redux, Node JS, and Express JS. Designed responsive user interfaces with React and Tailwind CSS.',
      bullets: [
        'Developed and maintained web applications using React JS, React Redux, Node JS, and Express JS.',
        'Designed responsive user interfaces using React JS and Tailwind CSS.',
        'Implemented Redux state management using actions, reducers, and selectors.',
        'Utilized AG Grid for sorting, filtering, and pagination.',
        'Developed Inventory, Warehouse, and Order Management solutions.',
        'Integrated PostgreSQL with backend applications using advanced queries and trigger functions.',
        'Conducted code reviews, fixed bugs, and improved application performance.',
        'Worked with Git, Azure Repos, and Azure DevOps CI/CD pipelines.',
        'Collaborated with cross-functional teams to deliver software solutions.'
      ],
      tags: ['React JS', 'React Redux', 'Node JS', 'Express JS', 'PostgreSQL', 'AG Grid', 'Tailwind CSS', 'Azure DevOps']
    }
  ]

  // Education from official resume
  const education = [
    {
      title: 'MCA (Master of Computer Applications)',
      company: 'Christ College of Engineering & Technology',
      period: '2023 - 2025',
      location: 'Puducherry, India',
      desc: 'Master of Computer Applications graduate with extensive practical knowledge in modern full stack engineering, databases, and enterprise software design.',
      tags: ['Full Stack Development', 'Database Engineering', 'Enterprise Architectures']
    },
    {
      title: 'B.Sc Computer Science',
      company: 'Tagore Arts and Science College',
      period: '2020 - 2023',
      location: 'Puducherry, India',
      desc: 'Graduated with strong foundation in Software Engineering, Algorithms, Database Management Systems, and Web Application Development.',
      tags: ['Data Structures', 'Algorithms', 'DBMS', 'Web Technologies']
    }
  ]

  // Project modules from official resume
  const projects = [
    {
      title: 'Leave Management Module',
      desc: 'Enterprise employee leave management system featuring leave requests, multi-tier manager & admin approval workflows, leave balance tracking, and support for Casual, Sick, Earned Leave, and Loss of Pay (LOP).',
      tech: ['React JS', 'React Redux', 'Node JS', 'Express JS', 'PostgreSQL'],
      category: 'Enterprise Solution',
      icon: <Calendar size={28} color="#6366f1" />
    },
    {
      title: 'Government Holidays Module',
      desc: 'Country-wise and state-wise holiday calendar management system with dynamic rule engines, location-specific holiday configurations, and holiday calendar synchronization for multi-region teams.',
      tech: ['React JS', 'Next.js', 'Express JS', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Enterprise Module',
      icon: <PackageCheck size={28} color="#06b6d4" />
    },
    {
      title: 'User Management & RBAC Module',
      desc: 'Comprehensive employee profile management system featuring granular role-based access control (RBAC), secure token-based authentication and authorization mechanisms.',
      tech: ['React JS', 'Node JS', 'JWT Auth', 'PostgreSQL', 'Redux'],
      category: 'Security & Auth',
      icon: <ShieldCheck size={28} color="#ec4899" />
    },
    {
      title: 'Inventory, Warehouse & Order Management',
      desc: 'High-throughput inventory tracking and order lifecycle system featuring AG Grid for high-performance sorting, filtering, pagination, and automated PostgreSQL trigger functions.',
      tech: ['React JS', 'AG Grid', 'PostgreSQL Triggers', 'Azure DevOps'],
      category: 'Supply Chain',
      icon: <Layers size={28} color="#22c55e" />
    }
  ]

  return (
    <div className="app-wrapper">
      {/* Navigation */}
      <header className="header">
        <div className="nav-container">
          <a href="#" className="brand-logo" id="nav-brand">
            <span className="logo-badge">MANIVANAN V</span>
            {/* <span>.dev</span> */}
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
                  <span>Full Stack Developer • Available for Opportunities</span>
                </div>

                <h1 className="hero-title">
                  Hi, I'm <span className="gradient-text">Manivanan V</span>
                </h1>

                <div className="hero-subtitle">
                  <Terminal size={20} />
                  <span>Full Stack Developer (React.js • Node.js • PostgreSQL)</span>
                </div>

                <p className="hero-description">
                  Motivated and detail-oriented MCA graduate with hands-on experience in Full Stack Web Development using React.js, Next.js, Node.js, Express.js, PostgreSQL, MySQL, and Redux. Experienced in building enterprise solutions including Leave Management, Government Holidays, and Inventory & Warehouse systems.
                </p>

                <div className="hero-cta">
                  <button
                    className="btn-primary"
                    onClick={() => setShowResumeModal(true)}
                    id="hero-view-cv"
                  >
                    <span>View Resume</span>
                    <ChevronRight size={16} />
                  </button>
                  <a
                    href="/Manivanan_V_Resume.pdf"
                    download="Manivanan_V_Resume.pdf"
                    className="btn-outline"
                    id="hero-download-pdf"
                  >
                    <FileDown size={16} />
                    <span>Download PDF</span>
                  </a>
                </div>

                <div className="social-links">
                  <a
                    href="https://github.com/manivanan14"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="GitHub: manivanan14"
                    id="hero-social-github"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/manivanan-v-453282249"
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon-btn"
                    title="LinkedIn"
                    id="hero-social-linkedin"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href="mailto:manivanan6424@gmail.com"
                    className="social-icon-btn"
                    title="Email: manivanan6424@gmail.com"
                    id="hero-social-email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="tel:7826811406"
                    className="social-icon-btn"
                    title="Phone: 7826811406"
                    id="hero-social-phone"
                  >
                    <Phone size={18} />
                  </a>
                </div>
              </div>

              {/* Hero Visual Card with AI Avatar & Badges */}
              <div className="hero-visual">
                <div className="visual-ambient-orb"></div>
                <div className="avatar-card-wrapper">
                  <div className="avatar-image-container">
                    <img src={maleDevGif} alt="Manivanan V - Full Stack Developer Animation" className="avatar-image avatar-gif" />
                    <div className="avatar-greeting-pill">
                      <span className="wave-hand">👋</span>
                      <span>Hi, Welcome!</span>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="floating-badge badge-top-right">
                    <div className="badge-icon">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <div className="badge-title">Experience</div>
                      <div className="badge-val">Zithtech (Full Stack)</div>
                    </div>
                  </div>

                  <div className="floating-badge badge-bottom-left">
                    <div className="badge-icon">
                      <Code size={18} />
                    </div>
                    <div>
                      <div className="badge-title">Education</div>
                      <div className="badge-val">MCA Graduate</div>
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
                  <div className="stat-label">Full Stack Experience</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon"><PackageCheck size={24} /></div>
                <div>
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Enterprise Modules Built</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon"><Users size={24} /></div>
                <div>
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Interns Trained in React/Node</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon"><Layers size={24} /></div>
                <div>
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Modern Tech Stacks</div>
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
              <p className="section-desc">Technical proficiencies matching enterprise development standards.</p>
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
              <span className="section-tag">Career & Education</span>
              <h2 className="section-title">Professional Background</h2>
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
                    {item.bullets && (
                      <ul style={{ margin: '0.5rem 0 1rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        {item.bullets.map((b, i) => (
                          <li key={i} style={{ marginBottom: '0.35rem' }}>{b}</li>
                        ))}
                      </ul>
                    )}
                    <div className="timeline-tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag-badge">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Extra Activities Card */}
            <div style={{ maxWidth: '800px', margin: '2rem auto 0', padding: '1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <Users size={22} color="var(--primary)" />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Extra Activities & Mentorship</h4>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <strong>Technical Training:</strong> Trained more than 5 interns in <strong>React JS</strong> and <strong>Node JS</strong> through practical hands-on sessions, real-world code reviews, and coding exercises.
              </p>
            </div>
          </div>
        </section>

        {/* Project Modules Worked */}
        <section id="projects" className="projects-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Project Modules Worked</span>
              <h2 className="section-title">Enterprise Software Modules</h2>
              <p className="section-desc">Key systems and architectural modules developed and deployed at Zithtech.</p>
            </div>

            <div className="projects-grid">
              {projects.map((proj, idx) => (
                <div key={idx} className="project-card">
                  <div className="project-banner">
                    <span className="project-banner-icon">{proj.icon}</span>
                  </div>
                  <div className="project-content">
                    <span style={{ fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      {proj.category}
                    </span>
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-desc">{proj.desc}</p>
                    <div className="project-tech">
                      {proj.tech.map(t => (
                        <span key={t} className="tag-badge">{t}</span>
                      ))}
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
              <h2 className="section-title">Contact Information</h2>
              <p className="section-desc">Feel free to reach out directly for software development opportunities.</p>
            </div>

            <div className="contact-grid">
              <div className="contact-info-card">
                <div className="info-item">
                  <div className="info-icon"><Mail size={20} /></div>
                  <div>
                    <div className="info-title">Email</div>
                    <div className="info-val">
                      <a href="mailto:manivanan6424@gmail.com" style={{ color: 'var(--primary)' }}>
                        manivanan6424@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><Phone size={20} /></div>
                  <div>
                    <div className="info-title">Phone / WhatsApp</div>
                    <div className="info-val">
                      <a href="tel:7826811406" style={{ color: 'var(--text-primary)' }}>
                        +91 7826811406
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MapPin size={20} /></div>
                  <div>
                    <div className="info-title">Location</div>
                    <div className="info-val">Puducherry, India</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><LinkedinIcon size={20} /></div>
                  <div>
                    <div className="info-title">LinkedIn</div>
                    <div className="info-val">
                      <a href="https://www.linkedin.com/in/manivanan-v-453282249" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>
                        linkedin.com/in/manivanan-v-453282249
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><GithubIcon size={20} /></div>
                  <div>
                    <div className="info-title">GitHub</div>
                    <div className="info-val">
                      <a href="https://github.com/manivanan14" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>
                        github.com/manivanan14
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Card */}
              <div className="contact-form-card">
                {formSubmitted === 'needs_activation' ? (
                  <div className="form-success-card">
                    <div className="form-success-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: 'var(--primary)' }}>
                      <Mail size={36} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      One-Time Activation Required!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                      An activation email from <strong>FormSubmit</strong> was just sent to <strong>manivanan6424@gmail.com</strong>.
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                      👉 Please open your Gmail inbox and click <strong>"Activate Form"</strong>. Once activated, every message sent from this form will land straight in your Gmail!
                    </p>
                    <div className="form-email-badge">
                      <Mail size={14} />
                      <span>Check inbox: manivanan6424@gmail.com</span>
                    </div>
                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        type="button"
                        className="btn-primary"
                        onClick={resetForm}
                        id="reset-inquiry-btn"
                      >
                        Got it / Back to Form
                      </button>
                    </div>
                  </div>
                ) : formSubmitted === 'success' || formSubmitted === true ? (
                  <div className="form-success-card">
                    <div className="form-success-icon">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                      Inquiry Sent Successfully!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                      Your message and contact details have been delivered directly to Manivanan's Gmail inbox.
                    </p>
                    <div className="form-email-badge">
                      <Mail size={14} />
                      <span>Dispatched to: manivanan6424@gmail.com</span>
                    </div>
                    <div style={{ marginTop: '1.75rem' }}>
                      <button
                        type="button"
                        className="btn-outline"
                        onClick={resetForm}
                        id="send-another-inquiry-btn"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    {formError && (
                      <div className="form-alert-error">
                        <AlertCircle size={20} style={{ flexShrink: 0 }} />
                        <div>
                          <div>{formError}</div>
                          <a
                            href={`mailto:manivanan6424@gmail.com?subject=${encodeURIComponent(`Portfolio Inquiry: ${formState.name} (${formState.inquiryType})`)}&body=${encodeURIComponent(formState.message)}`}
                            style={{ textDecoration: 'underline', fontWeight: 600, color: 'inherit', marginTop: '0.25rem', display: 'inline-block' }}
                          >
                            Click here to open in your Email App &rarr;
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-name">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          className="form-input"
                          placeholder="Your Name"
                          required
                          value={formState.name}
                          onChange={e => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          className="form-input"
                          placeholder="your.email@example.com"
                          required
                          value={formState.email}
                          onChange={e => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row-2">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-phone">Phone / WhatsApp (Optional)</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          className="form-input"
                          placeholder="+91 98765 43210"
                          value={formState.phone}
                          onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-inquiry">Inquiry Reason</label>
                        <select
                          id="contact-inquiry"
                          className="form-select"
                          value={formState.inquiryType}
                          onChange={e => setFormState({ ...formState, inquiryType: e.target.value })}
                        >
                          <option value="Job Opportunity / Hire Me">💼 Full-Time / Contract Job Opportunity</option>
                          <option value="Freelance Project">🚀 Freelance Project Inquiry</option>
                          <option value="Technical Consulting">💡 Technical Consulting</option>
                          <option value="General Collaboration">🤝 Collaboration / General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-message">Message *</label>
                      <textarea
                        id="contact-message"
                        rows="4"
                        className="form-input"
                        placeholder="Please share details about your company, project scope, job position, or requirements..."
                        required
                        value={formState.message}
                        onChange={e => setFormState({ ...formState, message: e.target.value })}
                      ></textarea>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      <button
                        type="submit"
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                        id="submit-contact-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Sending directly to manivanan6424@gmail.com...</span>
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Send Inquiry Directly</span>
                          </>
                        )}
                      </button>

                      <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        Direct inbox delivery to <strong style={{ color: 'var(--primary)' }}>manivanan6424@gmail.com</strong>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Complete Official Resume Modal (1:1 with Original PDF) */}
      {showResumeModal && (
        <div className="modal-overlay" onClick={() => setShowResumeModal(false)}>
          <div className="resume-modal-content" onClick={e => e.stopPropagation()}>
            {/* Modal Controls */}
            <div className="modal-actions-bar">
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <a
                  href="/Manivanan_V_Resume.pdf"
                  download="Manivanan_V_Resume.pdf"
                  className="btn-primary"
                  id="modal-download-pdf-btn"
                >
                  <FileDown size={16} />
                  <span>Download Original PDF</span>
                </a>
                <button
                  className="btn-outline"
                  onClick={() => window.print()}
                  id="modal-print-btn"
                >
                  <Printer size={16} />
                  <span>Print Resume</span>
                </button>
              </div>

              <button
                className="modal-close-btn"
                onClick={() => setShowResumeModal(false)}
                title="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Resume Document Sheet */}
            <div className="resume-paper printable-resume">
              {/* Header */}
              <div className="resume-header">
                <h1 className="resume-name">MANIVANAN V</h1>
                <div className="resume-contact-bar">
                  <span><strong>Email:</strong> <a href="mailto:manivanan6424@gmail.com" className="resume-contact-link">manivanan6424@gmail.com</a></span>
                  <span>•</span>
                  <span><strong>Contact:</strong> <a href="tel:7826811406" className="resume-contact-link">7826811406</a></span>
                  <span>•</span>
                  <span><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/manivanan-v-453282249" target="_blank" rel="noreferrer" className="resume-contact-link">linkedin.com/in/manivanan-v-453282249</a></span>
                  <span>•</span>
                  <span><strong>GitHub:</strong> <a href="https://github.com/manivanan14" target="_blank" rel="noreferrer" className="resume-contact-link">github.com/manivanan14</a></span>
                </div>
              </div>

              {/* Summary */}
              <div className="resume-section">
                <h2 className="resume-section-title">SUMMARY</h2>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  Motivated and detail-oriented MCA graduate with hands-on experience in Full Stack Web Development using React.js, Next.js, Node.js, Express.js, HTML, CSS, JavaScript, PostgreSQL, MySQL, and SQL. Experienced in developing Leave Management Systems and Government Holiday Management modules. Skilled in building responsive user interfaces, REST APIs, database management, and problem-solving. Seeking an opportunity to contribute technical skills and grow as a Software Developer.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="resume-section">
                <h2 className="resume-section-title">TECHNICAL SKILLS</h2>
                <div className="resume-skills-group">
                  <strong>Web Technologies:</strong> HTML, CSS, JavaScript
                </div>
                <div className="resume-skills-group">
                  <strong>Frontend:</strong> React JS, NextJS, React Redux, Tailwind CSS, Material UI, Ant Design
                </div>
                <div className="resume-skills-group">
                  <strong>Backend:</strong> Node JS, Express JS
                </div>
                <div className="resume-skills-group">
                  <strong>Database:</strong> PostgreSQL, MySQL, SQL
                </div>
                <div className="resume-skills-group">
                  <strong>Data Table:</strong> AG Grid
                </div>
                <div className="resume-skills-group">
                  <strong>Version Control & DevOps:</strong> Git, GitHub, Azure Repos, Azure DevOps CI/CD pipelines
                </div>
                <div className="resume-skills-group">
                  <strong>Core Competencies:</strong> Problem Solving and Debugging Skills
                </div>
              </div>

              {/* Professional Experience */}
              <div className="resume-section">
                <h2 className="resume-section-title">PROFESSIONAL EXPERIENCE</h2>
                <div className="resume-sub-heading">
                  <div className="resume-role-title">Zithtech — Full Stack Developer</div>
                  <div className="resume-meta-date">June 2025 – April 2026</div>
                </div>

                <ul className="resume-bullet-list">
                  <li className="resume-bullet-item">Developed and maintained web applications using React JS, React Redux, Node JS, and Express JS.</li>
                  <li className="resume-bullet-item">Designed responsive user interfaces using React JS and Tailwind CSS.</li>
                  <li className="resume-bullet-item">Implemented Redux state management using actions, reducers, and selectors.</li>
                  <li className="resume-bullet-item">Utilized AG Grid for sorting, filtering, and pagination.</li>
                  <li className="resume-bullet-item">Developed Inventory, Warehouse, and Order Management solutions.</li>
                  <li className="resume-bullet-item">Integrated PostgreSQL with backend applications.</li>
                  <li className="resume-bullet-item">Used advanced PostgreSQL queries and trigger functions.</li>
                  <li className="resume-bullet-item">Conducted code reviews, fixed bugs, and improved application performance.</li>
                  <li className="resume-bullet-item">Worked with Git, Azure Repos, and Azure DevOps CI/CD pipelines.</li>
                  <li className="resume-bullet-item">Collaborated with cross-functional teams to deliver software solutions.</li>
                </ul>
              </div>

              {/* Project Modules Worked */}
              <div className="resume-section">
                <h2 className="resume-section-title">PROJECT MODULES WORKED</h2>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Leave Management Module</div>
                  <ul className="resume-bullet-list">
                    <li className="resume-bullet-item">Developed employee leave request and approval workflows.</li>
                    <li className="resume-bullet-item">Implemented leave types such as Casual Leave, Sick Leave, Earned Leave, and Loss of Pay.</li>
                    <li className="resume-bullet-item">Created leave balance tracking and leave history management.</li>
                    <li className="resume-bullet-item">Developed manager and admin approval processes.</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Government Holidays Module</div>
                  <ul className="resume-bullet-list">
                    <li className="resume-bullet-item">Implemented country-wise and state-wise holiday management.</li>
                    <li className="resume-bullet-item">Developed features to add, edit, and manage government holidays.</li>
                    <li className="resume-bullet-item">Integrated holiday calendars and holiday rules.</li>
                    <li className="resume-bullet-item">Managed holiday configurations for different locations.</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>User Management Module</div>
                  <ul className="resume-bullet-list">
                    <li className="resume-bullet-item">Managed employee profiles and role-based access.</li>
                    <li className="resume-bullet-item">Implemented authentication and authorization features.</li>
                  </ul>
                </div>
              </div>

              {/* Extra Activities */}
              <div className="resume-section">
                <h2 className="resume-section-title">EXTRA ACTIVITIES</h2>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <strong>Technical Training:</strong> Trained more than 5 interns in React JS and Node JS through practical sessions and coding exercises.
                </div>
              </div>

              {/* Education */}
              <div className="resume-section" style={{ marginBottom: 0 }}>
                <h2 className="resume-section-title">EDUCATION</h2>
                <div style={{ marginBottom: '0.75rem' }}>
                  <div className="resume-sub-heading">
                    <span className="resume-role-title">MCA (Master of Computer Applications)</span>
                    <span className="resume-meta-date">2023 – 2025</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Christ College of Engineering & Technology</div>
                </div>

                <div>
                  <div className="resume-sub-heading">
                    <span className="resume-role-title">B.Sc Computer Science</span>
                    <span className="resume-meta-date">2020 – 2023</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Tagore Arts and Science College</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>MANIVANAN V</span> • Full Stack Developer
            </div>
            <div>
              GitHub: <a href="https://github.com/manivanan14" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                github.com/manivanan14
              </a> • Repo: <a href="https://github.com/Manivanan0507/resume_mani" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>
                resume_mani
              </a>
            </div>
            <div>
              © {new Date().getFullYear()} Manivanan V. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
