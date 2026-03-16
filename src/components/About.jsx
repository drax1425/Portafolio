import { motion } from 'framer-motion'
import { Terminal, ShieldCheck, Zap } from 'lucide-react'

export default function About({ t }) {
  const highlights = [
    { icon: <Terminal size={24} />, key: 0 },
    { icon: <ShieldCheck size={24} />, key: 1 },
    { icon: <Zap size={24} />, key: 2 }
  ]

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-emeraldAccent font-mono text-lg">{'//'}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{t.about.heading}</h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="text-slate-300 text-lg leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p>{t.about.bio}</p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {t.about.highlights.map((h, i) => (
              <motion.div 
                key={i}
                className="p-6 rounded-xl bg-darkSurface border border-slate-800 hover:border-emeraldAccent/50 transition-colors flex items-start gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="p-3 rounded-lg bg-slate-900 text-emeraldAccent group-hover:bg-emeraldAccent/10 transition-colors">
                  {highlights[i].icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-100 mb-1">{h.label}</h4>
                  <p className="text-slate-400">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
