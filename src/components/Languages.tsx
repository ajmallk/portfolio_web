import { Section } from './Section';
import { motion } from 'motion/react';

const languages = [
  { name: "Malayalam", level: "Native" },
  { name: "English", level: "Professional Working" },
  { name: "Arabic", level: "Basic" }
];

export function Languages() {
  return (
    <Section id="languages" title="Languages">
      <div className="flex flex-wrap gap-6">
        {languages.map((lang, index) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: 'var(--color-accent-yellow)' }}
            key={index} 
            className="flex-1 min-w-[200px] p-8 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-surface-hover)] transition-all shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">{lang.name}</h3>
            <p className="text-[var(--color-accent-blue)] font-mono font-bold text-sm uppercase tracking-wider">{lang.level}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
