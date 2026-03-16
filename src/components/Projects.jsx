import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects({ t, projects, lang, onViewLanding }) {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emeraldAccent font-mono text-lg">{'//'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{t.projects.heading}</h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <ProjectCard 
                project={project} 
                lang={lang} 
                onViewLanding={project.landing ? () => onViewLanding(project.landing) : null} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
