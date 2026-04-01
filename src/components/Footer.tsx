import { Github, Linkedin, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-[var(--color-surface-hover)] bg-[var(--color-surface)] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.1)_0%,transparent_50%)]"></div>
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold heading-gradient mb-6 inline-block"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[var(--color-secondary)] text-lg max-w-xl mx-auto mb-10"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(250,204,21,0.4)" }}
          href="https://wa.me/919745167255?text=Hello"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-yellow)] text-[#020617] font-bold text-lg transition-all mb-16"
        >
          Say Hello
        </motion.a>
        
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          <motion.a whileHover={{ y: -5, color: 'var(--color-accent-blue)' }} href="https://github.com/ajmallk" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] transition-colors" aria-label="GitHub">
            <Github size={28} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: 'var(--color-accent-yellow)' }} href="https://linkedin.com/in/ajmallmhd" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] transition-colors" aria-label="LinkedIn">
            <Linkedin size={28} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: '#003A9B' }} href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-secondary)] transition-colors" aria-label="Indeed">
            <Briefcase size={28} />
          </motion.a>
        </div>
        
        <div className="text-[var(--color-secondary)] font-mono text-sm">
          <p>Designed & Built by Muhammed Ajmal</p>
          <p className="mt-2 text-xs opacity-70">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
