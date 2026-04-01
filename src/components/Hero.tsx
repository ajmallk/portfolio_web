import { motion } from 'motion/react';
import { Github, Linkedin, MapPin, Phone, Briefcase, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(var(--color-surface-hover)_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-[var(--color-accent-blue)] text-white rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.5)]">
              Software Engineer
            </span>
            <span className="text-[var(--color-accent-yellow)] font-mono text-sm tracking-wide uppercase font-semibold">
              Portfolio
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-extrabold tracking-tighter text-gradient leading-[1.1] pb-2"
          >
            <span className="text-5xl md:text-7xl lg:text-8xl block mb-2">MUHAMMED AJMAL</span>
            <span className="text-3xl md:text-4xl lg:text-5xl block text-[var(--color-secondary)]">PYTHON DEVELOPER AND FULL STACK ENGINEER</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-2xl text-lg md:text-xl text-[var(--color-secondary)] leading-relaxed mt-4 font-medium"
          >
            I thrive in the dynamic world of technology, building robust web applications and managing databases. Always eager to create innovative solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
          >
            <motion.div whileHover={{ scale: 1.05, borderColor: 'var(--color-accent-yellow)' }} className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] shadow-lg transition-all rounded-xl">
              <div className="p-3 bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] rounded-lg">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-[var(--color-secondary)] font-mono uppercase tracking-wider">Location</p>
                <p className="text-sm font-semibold text-[var(--color-primary)]">Kerala, India</p>
              </div>
            </motion.div>
            
            <motion.a whileHover={{ scale: 1.05, borderColor: 'var(--color-accent-blue)' }} href="mailto:ajmalmhdin@gmail.com" className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] shadow-lg transition-all rounded-xl group">
              <div className="p-3 bg-[var(--color-accent-yellow)]/20 text-[var(--color-accent-yellow)] rounded-lg group-hover:bg-[var(--color-accent-yellow)] group-hover:text-[#020617] transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-[var(--color-secondary)] font-mono uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold text-[var(--color-primary)] truncate max-w-[150px] md:max-w-full">ajmalmhdin@gmail.com</p>
              </div>
            </motion.a>
            
            <motion.a whileHover={{ scale: 1.05, borderColor: 'var(--color-accent-yellow)' }} href="tel:9745167255" className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] shadow-lg transition-all rounded-xl group">
              <div className="p-3 bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)] rounded-lg group-hover:bg-[var(--color-accent-blue)] group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-[var(--color-secondary)] font-mono uppercase tracking-wider">Phone</p>
                <p className="text-sm font-semibold text-[var(--color-primary)]">9745167255</p>
              </div>
            </motion.a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://github.com/ajmallk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] text-[var(--color-primary)] hover:border-[var(--color-accent-yellow)] hover:text-[var(--color-accent-yellow)] transition-colors rounded-xl shadow-lg"
              aria-label="GitHub"
            >
              <Github size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              href="https://linkedin.com/in/ajmallmhd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] text-[var(--color-primary)] hover:border-[var(--color-accent-blue)] hover:text-[var(--color-accent-blue)] transition-colors rounded-xl shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              href="https://www.indeed.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[var(--color-surface)] border border-[var(--color-surface-hover)] text-[var(--color-primary)] hover:border-[#003A9B] hover:text-[#003A9B] transition-colors rounded-xl shadow-lg flex items-center justify-center font-bold"
              aria-label="Indeed"
            >
              <Briefcase size={22} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
