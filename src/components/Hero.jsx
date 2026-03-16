import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero({ t, scrollTo }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emeraldAccent/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-start w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p 
          className="text-emeraldAccent font-mono mb-4 text-sm md:text-base tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t.hero.greeting}
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-8xl font-black text-slate-100 tracking-tight mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {t.hero.name}.
        </motion.h1>
        
        <motion.h2 
          className="text-3xl md:text-6xl font-bold text-slate-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {t.hero.title}.
        </motion.h2>
        
        <motion.p 
          className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {t.hero.tagline}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button 
            onClick={() => scrollTo('projects')}
            className="px-8 py-4 bg-emeraldAccent hover:bg-emerald-400 text-slate-900 font-bold rounded-lg transition-colors duration-200"
          >
            {t.hero.cta}
          </button>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-8 py-4 border border-slate-600 hover:border-emeraldAccent hover:text-emeraldAccent text-slate-300 font-bold rounded-lg transition-colors duration-200"
          >
            {t.hero.contact}
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce cursor-pointer hover:text-emeraldAccent transition-colors"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  )
}
