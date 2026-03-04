import { useState, useEffect } from 'react'
import ProjectCard from './components/ProjectCard'
import LocalPOSLanding from './components/LocalPOSLanding'
import projectsData from './data/projects.json'
import './App.css'

const strings = {
  en: {
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
    hero: {
      greeting: "Hey, I'm",
      name: 'Drax',
      title: 'Developer & Cybersecurity Enthusiast',
      tagline: 'Building secure, efficient, and elegant digital solutions.',
      cta: 'View Projects',
      contact: 'Contact Me'
    },
    about: {
      heading: 'About Me',
      bio: "I'm a developer passionate about crafting software that solves real problems — from mobile POS systems for small businesses to modern web applications. My curiosity drives me into cybersecurity, ethical hacking, and process automation. I believe in writing clean code, learning relentlessly, and building tools that empower people.",
      highlights: [
        { icon: '💻', label: 'Development', desc: 'Full-stack apps & mobile solutions' },
        { icon: '🔐', label: 'Cybersecurity', desc: 'Ethical hacking & secure systems' },
        { icon: '⚡', label: 'Automation', desc: 'Scripts & workflows that save time' }
      ]
    },
    skills: { heading: 'Tech Stack' },
    projects: { heading: 'Featured Projects' },
    footer: {
      built: 'Designed & built by',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto' },
    hero: {
      greeting: 'Hola, soy',
      name: 'Drax',
      title: 'Desarrollador & Entusiasta de Ciberseguridad',
      tagline: 'Construyendo soluciones digitales seguras, eficientes y elegantes.',
      cta: 'Ver Proyectos',
      contact: 'Contáctame'
    },
    about: {
      heading: 'Sobre Mí',
      bio: 'Soy un desarrollador apasionado por crear software que resuelva problemas reales — desde sistemas POS móviles para pequeños negocios hasta aplicaciones web modernas. Mi curiosidad me impulsa hacia la ciberseguridad, el hacking ético y la automatización de procesos. Creo en escribir código limpio, aprender sin descanso y construir herramientas que empoderen a las personas.',
      highlights: [
        { icon: '💻', label: 'Desarrollo', desc: 'Apps full-stack & soluciones móviles' },
        { icon: '🔐', label: 'Ciberseguridad', desc: 'Hacking ético & sistemas seguros' },
        { icon: '⚡', label: 'Automatización', desc: 'Scripts & flujos que ahorran tiempo' }
      ]
    },
    skills: { heading: 'Tecnologías' },
    projects: { heading: 'Proyectos Destacados' },
    footer: {
      built: 'Diseñado y construido por',
      rights: 'Todos los derechos reservados.'
    }
  }
}

const techStack = [
  { name: 'Python', icon: '🐍', color: '#3776ab' },
  { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
  { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
  { name: 'React', icon: '⚛️', color: '#61dafb' },
  { name: 'React Native', icon: '📱', color: '#61dafb' },
  { name: 'Node.js', icon: '🟢', color: '#339933' },
  { name: 'SQL', icon: '🗄️', color: '#4479a1' },
  { name: 'Java', icon: '☕', color: '#ed8b00' },
  { name: 'HTML/CSS', icon: '🎨', color: '#e34c26' },
  { name: 'Git', icon: '📦', color: '#f05032' },
  { name: 'SQLite', icon: '💾', color: '#003b57' },
  { name: 'Vite', icon: '⚡', color: '#646cff' }
]

function App() {
  const [projects, setProjects] = useState([])
  const [lang, setLang] = useState('es')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentView, setCurrentView] = useState('portfolio')

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = strings[lang]

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  if (currentView === 'localpos') {
    return (
      <LocalPOSLanding
        lang={lang}
        onBack={() => {
          setCurrentView('portfolio')
          window.scrollTo({ top: 0 })
        }}
      />
    )
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-bracket">{'<'}</span>
            <span className="logo-name">Drax</span>
            <span className="logo-bracket">{'/>'}</span>
          </a>

          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <button onClick={() => scrollTo('about')}>{t.nav.about}</button>
            <button onClick={() => scrollTo('skills')}>{t.nav.skills}</button>
            <button onClick={() => scrollTo('projects')}>{t.nav.projects}</button>
            <button onClick={() => scrollTo('contact')}>{t.nav.contact}</button>
            <button onClick={toggleLang} className="lang-toggle">
              <span className={`lang-option${lang === 'es' ? ' active' : ''}`}>ES</span>
              <span className="lang-separator">/</span>
              <span className={`lang-option${lang === 'en' ? ' active' : ''}`}>EN</span>
            </button>
          </div>

          <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="hero">
        <div className="hero-bg-grid"></div>
        <div className="hero-content">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-name">{t.hero.name}</h1>
          <p className="hero-title">{t.hero.title}</p>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              {t.hero.cta}
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              {t.hero.contact}
            </button>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="section about" id="about">
        <div className="container">
          <h2 className="section-heading">
            <span className="heading-decorator">{'// '}</span>
            {t.about.heading}
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <p>{t.about.bio}</p>
            </div>
            <div className="about-highlights">
              {t.about.highlights.map((h, i) => (
                <div className="highlight-card" key={i} style={{ '--delay': `${i * 0.1}s` }}>
                  <span className="highlight-icon">{h.icon}</span>
                  <div>
                    <h4>{h.label}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section skills" id="skills">
        <div className="container">
          <h2 className="section-heading">
            <span className="heading-decorator">{'// '}</span>
            {t.skills.heading}
          </h2>
          <div className="skills-grid">
            {techStack.map((tech, i) => (
              <div className="skill-card" key={tech.name} style={{ '--delay': `${i * 0.05}s`, '--accent': tech.color }}>
                <span className="skill-icon">{tech.icon}</span>
                <span className="skill-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects" id="projects">
        <div className="container">
          <h2 className="section-heading">
            <span className="heading-decorator">{'// '}</span>
            {t.projects.heading}
          </h2>
          <div className="projects-grid">
            {projects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                onViewLanding={project.landing ? () => {
                  setCurrentView(project.landing)
                  window.scrollTo({ top: 0 })
                } : null}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-name">Drax</span>
              <span className="logo-bracket">{'/>'}</span>
            </div>
            <p className="footer-copy">
              {t.footer.built} <strong>Drax</strong> · © {new Date().getFullYear()} · {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
