import { motion } from 'framer-motion'
import { ArrowUpRight, Smartphone } from 'lucide-react'

export default function ProjectCard({ project, lang, onViewLanding }) {
  const name = lang === 'es' ? project.name_es : project.name_en
  const description = lang === 'es' ? project.description_es : project.description_en
  const features = lang === 'es' ? project.features_es : project.features_en
  const btnText = lang === 'es' ? 'Ver Proyecto' : 'View Project'
  const featLabel = lang === 'es' ? 'Características' : 'Features'

  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-darkSurface border border-slate-800 hover:border-emeraldAccent/50 transition-colors group">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-900">
        <img 
          src={project.image} 
          alt={name} 
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-darkSurface to-transparent opacity-90" />
        
        {/* Tech Badges overlay */}
        {project.techs && project.techs.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.techs.map((tech, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-xs font-mono text-emeraldAccent">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold text-slate-100 mb-3">{name}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="mb-8">
            <h4 className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-3">{featLabel}</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emeraldAccent mt-0.5">▹</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-slate-800">
          {onViewLanding ? (
            <button 
              onClick={onViewLanding}
              className="flex items-center gap-2 text-emeraldAccent hover:text-emerald-400 font-medium transition-colors"
            >
              {lang === 'es' ? 'Ver Demo Interactivo' : 'View Interactive Demo'}
              <ArrowUpRight size={18} />
            </button>
          ) : project.url && project.url !== '#' ? (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-emeraldAccent hover:text-emerald-400 font-medium transition-colors"
            >
              {btnText}
              <ArrowUpRight size={18} />
            </a>
          ) : (
            <span className="flex items-center gap-2 text-slate-500 font-medium cursor-not-allowed">
              {lang === 'es' ? 'App Móvil' : 'Mobile App'}
              <Smartphone size={18} />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
