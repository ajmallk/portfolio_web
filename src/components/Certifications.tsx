import { Section } from './Section';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const certs = [
  { name: "Business Analytics with Excel", issuer: "Microsoft", link: "#" },
  { name: "Introduction to Digital Transformation with Google Cloud", issuer: "Google Cloud", link: "#" },
  { name: "Advance JavaScript for Coders: Learn OOP in JavaScript", issuer: "Upskill With Eduniox", link: "#" },
  { name: "Workshop in 'Recent Trends in Computer Systems'", issuer: "Government Polytechnic Wayanad", link: null },
  { name: "Basics of Digital Marketing", issuer: "Uniathéna", link: "#" },
  { name: "Python for Data Science", issuer: "IBM", link: "#" },
  { name: "Cloud Security Essentials for Executives", issuer: "AWS", link: "#" },
  { name: "Cloud for Small Business Owners", issuer: "AWS", link: "#" },
  { name: "AI For All program (AI Aware stage)", issuer: "Intel & Digital India", link: "#" }
];

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((cert, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, backgroundColor: 'var(--color-surface-hover)' }}
            key={index} 
            className="group flex items-start gap-4 p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-surface-hover)] transition-all shadow-md"
          >
            <div className="mt-1 text-[var(--color-accent-blue)]">
              <Award size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-[var(--color-primary)] font-bold mb-1 group-hover:text-[var(--color-accent-yellow)] transition-colors">
                {cert.name}
              </h4>
              <div className="flex items-center justify-between text-sm text-[var(--color-secondary)] font-medium">
                <span>{cert.issuer}</span>
                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[var(--color-accent-blue)] hover:underline"
                  >
                    View <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
