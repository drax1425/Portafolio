import { motion } from 'framer-motion'

export default function Skills({ t }) {
  const techStack = [
    { name: 'Python', icon: '🐍', color: '#3776ab' },
    { name: 'JavaScript', icon: 'JS', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'TS', color: '#3178c6' },
    { name: 'React / Next.js', icon: '⚛️', color: '#61dafb' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'SQL', icon: '🗄️', color: '#4479a1' },
    { name: 'Git', icon: '📦', color: '#f05032' },
    { name: 'Linux / Kali', icon: '🐧', color: '#f5f5f5' }
  ]

  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-16 flex-row-reverse"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emeraldAccent font-mono text-lg">{'//'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{t.skills.heading}</h2>
          <div className="h-px bg-slate-800 flex-grow mr-4"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <motion.div 
              key={tech.name} 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-darkSurface border border-slate-800 hover:border-emeraldAccent transition-all hover:-translate-y-2 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-300" style={{ textShadow: `0 0 20px ${tech.color}40` }}>
                {tech.icon}
              </span>
              <span className="text-slate-300 font-medium group-hover:text-slate-100 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
