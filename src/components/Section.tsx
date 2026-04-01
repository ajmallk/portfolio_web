import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 md:px-12"
      >
        {title && (
          <div className="mb-12 md:mb-16 flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight heading-gradient">
              {title}
            </h2>
            <div className="h-[1px] flex-1 bg-[var(--color-surface-hover)]"></div>
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
