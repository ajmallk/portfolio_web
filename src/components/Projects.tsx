import { Section } from './Section';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: "Event Booking Web Application",
    description: "Developed an event booking web application using Django backend and Bootstrap framework. Features include user authentication, event creation, and booking management.",
    tech: ["Django", "Python", "Bootstrap", "HTML/CSS"],
    github: "#",
    external: "#"
  },
  {
    title: "PyHub - Python Learning Hub",
    description: "Created 'PyHub,' a comprehensive Python learning platform with a React frontend and Django backend. Includes robust admin panels for content management and user tracking.",
    tech: ["React.js", "Django", "REST API", "PostgreSQL"],
    github: "#",
    external: "#"
  },
  {
    title: "Smart Irrigation System (IoT-based)",
    description: "Developed an IoT-enabled irrigation system that monitors soil moisture and environmental conditions using sensors. Automatically controls water supply to crops, improving water efficiency and reducing manual effort with real-time monitoring.",
    tech: ["IoT", "Python", "Sensors", "Hardware Integration"],
    github: "#",
    external: "#"
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            key={index} 
            className="group relative flex flex-col justify-between h-full bg-[var(--color-surface)] rounded-2xl p-8 border border-[var(--color-surface-hover)] hover:border-[var(--color-accent-blue)] transition-all duration-300 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-blue)]/5 to-[var(--color-accent-yellow)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            
            <div className="z-10">
              <div className="flex justify-between items-center mb-6">
                <div className="text-[var(--color-accent-yellow)]">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="flex gap-4 text-[var(--color-secondary)]">
                  <motion.a whileHover={{ scale: 1.2, color: 'var(--color-accent-blue)' }} href={project.github} className="transition-colors" aria-label="GitHub Link">
                    <Github size={22} />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.2, color: 'var(--color-accent-yellow)' }} href={project.external} className="transition-colors" aria-label="External Link">
                    <ExternalLink size={22} />
                  </motion.a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--color-secondary)] text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>
            
            <ul className="flex flex-wrap gap-3 mt-auto pt-6 font-mono text-xs font-bold text-[var(--color-accent-yellow)] z-10">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
