import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'

// Components
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LocalPOSLanding from './components/LocalPOSLanding'

// Data
import strings from './data/strings.json'
import projectsData from './data/projects.json'

function App() {
  const [lang, setLang] = useState('es')
  const [viewingLanding, setViewingLanding] = useState(null)
  const t = strings[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = lang === 'es' ? 'Andrés Barahona | Portafolio' : 'Andrés Barahona | Portfolio'
  }, [lang])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // --- Secondary app state: LocalPOS Landing view ---
  if (viewingLanding === 'localpos') {
    return <LocalPOSLanding lang={lang} onBack={() => setViewingLanding(null)} />
  }

  // --- Main Portfolio View ---
  return (
    <div className="min-h-screen bg-darkBg text-slate-300 font-sans selection:bg-emeraldAccent/30 selection:text-emerald-200">
      
      {/* Navbar/Header */}
      <header className="fixed top-0 w-full z-50 bg-darkBg/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-lg font-bold text-slate-100 hover:text-emeraldAccent transition-colors"
          >
            A.B.
          </button>
          
          <button 
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 hover:border-emeraldAccent/50 bg-darkSurface/50 text-sm font-medium transition-colors"
            onClick={() => setLang(l => l === 'es' ? 'en' : 'es')}
          >
            <Globe size={16} className="text-emeraldAccent" />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <main>
        <Hero t={t} scrollTo={scrollTo} />
        <About t={t} />
        <Experience t={t} lang={lang} />
        <Skills t={t} />
        <Projects 
          t={t} 
          projects={projectsData} 
          lang={lang} 
          onViewLanding={setViewingLanding} 
        />
        
        {/* Contact CTA Section */}
        <section id="contact" className="py-24 px-6 relative bg-emeraldAccent/5 border-t border-emeraldAccent/10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-black text-slate-100 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {lang === 'es' ? '¿Trabajemos juntos?' : "Let's work together."}
            </motion.h2>
            <motion.p 
              className="text-slate-400 text-lg mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {lang === 'es' 
                ? 'Actualmente buscando oportunidades en Desarrollo Web y Ciberseguridad. Mi bandeja de entrada siempre está abierta.' 
                : 'Currently looking for opportunities in Web Development and Cybersecurity. My inbox is always open.'}
            </motion.p>
            <motion.a 
              href="mailto:andresbarahona906@gmail.com"
              className="inline-block px-8 py-4 bg-emeraldAccent hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors duration-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {lang === 'es' ? 'Saludar' : 'Say Hello'}
            </motion.a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800">
        <p className="text-slate-500 font-mono text-sm">
          {lang === 'es' ? 'Diseñado & Construido por Andrés Barahona' : 'Designed & Built by Andrés Barahona'}
        </p>
      </footer>
    </div>
  )
}

export default App
