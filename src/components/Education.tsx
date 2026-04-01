import { Section } from './Section';
import { motion } from 'motion/react';

const education = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic College - Meppadi, Wayanad",
    period: "Completed"
  },
  {
    degree: "B.A Sociology",
    institution: "Calicut University",
    period: "Completed"
  }
];

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01, borderColor: 'var(--color-accent-blue)' }}
            key={index} 
            className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-surface-hover)] transition-all shadow-lg"
          >
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">{edu.degree}</h3>
              <p className="text-[var(--color-secondary)] text-lg">{edu.institution}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block px-5 py-2 rounded-lg bg-[var(--color-accent-yellow)]/10 text-[var(--color-accent-yellow)] font-mono font-bold text-sm border border-[var(--color-accent-yellow)]/20">
                {edu.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
