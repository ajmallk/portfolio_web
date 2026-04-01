import { Section } from './Section';
import { motion } from 'motion/react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-[var(--color-secondary)] leading-relaxed"
        >
          <p>
            Hello! I'm Muhammed Ajmal, a passionate Software Developer, Software Engineer, and Python Full Stack Developer. I thrive in the dynamic world of technology, building web applications and managing databases.
          </p>
          <p>
            My journey into software development started with a strong curiosity about how things work on the web, which led me to dive deep into Python and its powerful frameworks. Today, I'm always eager to create innovative websites and applications that solve real-world problems.
          </p>
          <p>
            My goal is to stay on top of the latest technologies and solve complex problems in the software development field. Whether it's crafting a responsive frontend or architecting a robust backend, I enjoy every step of the development process.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-yellow)] rounded-2xl translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="text-[var(--color-primary)] font-mono text-center space-y-4 z-10"
            >
              <div className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">MA.</div>
              <div className="text-sm tracking-widest uppercase text-[var(--color-secondary)] font-bold">Full Stack Engineer</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
