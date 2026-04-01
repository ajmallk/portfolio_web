import { Section } from './Section';
import { motion } from 'motion/react';

const experiences = [
  {
    role: "Junior Software Engineer",
    company: "sinnoteq IT consulting",
    period: "Present",
    description: [
      "Working as a Junior Software Engineer, contributing to the development of robust software solutions.",
      "Collaborating with cross-functional teams to design and implement new features."
    ]
  },
  {
    role: "Python Full Stack Developer Intern",
    company: "Techolas Technologies",
    period: "Past",
    description: [
      "Built dynamic web applications using Python (Django) and React.js.",
      "Integrated REST APIs to connect frontend and backend systems seamlessly."
    ]
  },
  {
    role: "Python Internship Trainee",
    company: "MAXLORE Innovations LLP, Calicut",
    period: "Past",
    description: [
      "Learned core Python fundamentals including data types, functions, loops, and file handling.",
      "Gained hands-on experience in writing, testing, and debugging Python programs."
    ]
  }
];

export function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={index} 
            className="relative pl-8 md:pl-0"
          >
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--color-surface-hover)]"></div>
            <div className="md:grid md:grid-cols-[200px_1fr] gap-8 items-start relative">
              <div className="hidden md:block absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-[var(--color-accent-yellow)] shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
              
              <div className="text-[var(--color-accent-yellow)] font-mono text-sm mb-2 md:mb-0 pt-1 font-bold">
                {exp.period}
              </div>
              
              <motion.div 
                whileHover={{ x: 10, borderColor: 'var(--color-accent-blue)' }}
                className="bg-[var(--color-surface)] border border-[var(--color-surface-hover)] rounded-xl p-6 md:p-8 transition-all shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                  {exp.role}
                </h3>
                <div className="text-[var(--color-accent-blue)] font-bold mb-4 text-lg">
                  @ {exp.company}
                </div>
                <ul className="space-y-3 text-[var(--color-secondary)]">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[var(--color-accent-yellow)] mt-1.5 text-sm">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
