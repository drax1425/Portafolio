import { motion } from 'framer-motion'
import expData from '../data/experience.json'

export default function Experience({ lang }) {
  const exp = expData[lang].work
  const edu = expData[lang].education

  return (
    <section id="experience" className="py-24 px-6 relative bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-emeraldAccent font-mono text-lg">{'//'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            {lang === 'es' ? 'Experiencia & Educación' : 'Experience & Education'}
          </h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Work */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
              <span className="text-emeraldAccent">💼</span>
              {lang === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
            </h3>
            <div className="space-y-12">
              {exp.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative pl-6 border-l-2 border-slate-800 hover:border-emeraldAccent transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[7px] top-1.5 group-hover:bg-emeraldAccent transition-colors" />
                  <h4 className="text-xl font-bold text-slate-100">{item.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1 mb-3">
                    <span className="text-emeraldAccent font-medium">{item.company}</span>
                    <span className="text-slate-500 font-mono text-sm">{item.date}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
              <span className="text-emeraldAccent">🎓</span>
              {lang === 'es' ? 'Educación' : 'Education'}
            </h3>
            <div className="space-y-12">
              {edu.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative pl-6 border-l-2 border-slate-800 hover:border-emeraldAccent transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[7px] top-1.5 group-hover:bg-emeraldAccent transition-colors" />
                  <h4 className="text-xl font-bold text-slate-100">{item.degree}</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-1 mb-3">
                    <span className="text-emeraldAccent font-medium">{item.school}</span>
                    <span className="text-slate-500 font-mono text-sm">{item.date}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
