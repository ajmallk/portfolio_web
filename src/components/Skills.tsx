import { Section } from './Section';
import { motion } from 'motion/react';

const skillCategories = [
  {
    title: "Programming & Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Python"]
  },
  {
    title: "Backend & Frameworks",
    skills: ["Django", "FastAPI"]
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "Firebase", "AWS"]
  },
  {
    title: "Deployment & Tools",
    skills: ["Hostinger", "Git", "Netlify", "PythonAnywhere"]
  },
  {
    title: "AI & Modern Development",
    skills: ["AI-assisted coding", "ChatGPT", "Google AI Studio", "Prompt engineering", "Rapid prototyping"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem-solving", "Time management", "Critical thinking", "Adaptability", "Communication"]
  }
];

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: 'var(--color-accent-yellow)' }}
            key={index} 
            className="bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-2xl p-6 transition-all shadow-lg"
          >
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[var(--color-accent-blue)] shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.li 
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent-blue)', color: '#fff', borderColor: 'var(--color-accent-blue)' }}
                  key={i}
                  className="px-4 py-1.5 bg-[var(--color-bg)] text-[var(--color-secondary)] font-medium text-sm rounded-lg border border-[var(--color-surface-hover)] transition-colors cursor-default"
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
