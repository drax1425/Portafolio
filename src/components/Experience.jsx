import { motion } from 'framer-motion'

export default function Experience({ t, lang }) {
  // Hardcoded CV data based on the extracted PDF
  const expData = {
    es: [
      {
        role: "Desarrollador Full-Stack",
        company: "Proyectos Reales (SaaS & POS)",
        date: "2024 — Presente",
        desc: "Creador y desarrollador principal de GoCartYa (Plataforma SaaS en producción) y creador de sistemas POS a medida para pymes usando React, Next.js, Python y bases de datos relacionales."
      },
      {
        role: "Cajero y Reponedor",
        company: "Unimarc",
        date: "2023 — Presente",
        desc: "Atención al cliente y manejo de caja en supermercado de alto flujo. Trabajo bajo presión y en equipo."
      },
      {
        role: "Operador de Bodega",
        company: "Falabella Tradist",
        date: "2023",
        desc: "Gestión logística y control de inventario en bodega de retail."
      }
    ],
    en: [
      {
        role: "Full-Stack Developer",
        company: "Real Projects (SaaS & POS)",
        date: "2024 — Present",
        desc: "Creator and lead developer of GoCartYa (SaaS platform in production) and custom POS systems for small businesses using React, Next.js, Python, and relational databases."
      },
      {
        role: "Cashier & Restocker",
        company: "Unimarc",
        date: "2023 — Present",
        desc: "Customer service and cash management in a high-traffic supermarket. Thrived under pressure and collaborated in teams."
      },
      {
        role: "Warehouse Operator",
        company: "Falabella Tradist",
        date: "2023",
        desc: "Logistics management and inventory control in a retail warehouse."
      }
    ]
  }

  const eduData = {
    es: [
      {
        degree: "Técnico en Ciberseguridad",
        school: "IPP Instituto Profesional de Providencia",
        date: "2026 — En curso",
        desc: "Seguridad informática, redes, análisis de vulnerabilidades."
      },
      {
        degree: "Ingeniería en Informática (3 años cursados)",
        school: "Duoc UC",
        date: "2023 — 2025",
        desc: "Programación, bases de datos, redes, desarrollo web."
      }
    ],
    en: [
      {
        degree: "Cybersecurity Technician",
        school: "IPP Instituto Profesional de Providencia",
        date: "2026 — Present",
        desc: "Information security, networks, vulnerability analysis."
      },
      {
        degree: "Informatics Engineering (3 years completed)",
        school: "Duoc UC",
        date: "2023 — 2025",
        desc: "Programming, databases, networking, web development."
      }
    ]
  }

  const exp = expData[lang]
  const edu = eduData[lang]

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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">{lang === 'es' ? 'Experiencia & Educación' : 'Experience & Education'}</h2>
          <div className="h-px bg-slate-800 flex-grow ml-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
              <span className="text-emeraldAccent">💼</span> {lang === 'es' ? 'Experiencia Laboral' : 'Work Experience'}
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
                  <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[7px] top-1.5 group-hover:bg-emeraldAccent transition-colors"></div>
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
              <span className="text-emeraldAccent">🎓</span> {lang === 'es' ? 'Educación' : 'Education'}
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
                  <div className="absolute w-3 h-3 bg-slate-800 rounded-full -left-[7px] top-1.5 group-hover:bg-emeraldAccent transition-colors"></div>
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
