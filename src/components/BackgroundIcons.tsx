import { motion } from 'motion/react';
import { Database, Terminal, Cpu, Globe, Server, Code, Monitor, Smartphone, Cloud, Wifi, Layers } from 'lucide-react';

export const BackgroundIcons = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.03] z-0">
      <motion.div animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[10%] text-[var(--color-primary)]"><Code size={64} /></motion.div>
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[15%] text-[var(--color-primary)]"><Database size={80} /></motion.div>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[15%] left-[20%] text-[var(--color-primary)]"><Terminal size={72} /></motion.div>
      <motion.div animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] left-[5%] text-[var(--color-primary)]"><Cpu size={96} /></motion.div>
      <motion.div animate={{ y: [0, -35, 0], rotate: [0, 12, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[25%] right-[10%] text-[var(--color-primary)]"><Globe size={64} /></motion.div>
      <motion.div animate={{ y: [0, 25, 0], rotate: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] right-[25%] text-[var(--color-primary)]"><Server size={80} /></motion.div>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[30%] left-[40%] text-[var(--color-primary)]"><Monitor size={70} /></motion.div>
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[40%] left-[60%] text-[var(--color-primary)]"><Cloud size={85} /></motion.div>
      <motion.div animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] right-[40%] text-[var(--color-primary)]"><Layers size={60} /></motion.div>
      <motion.div animate={{ y: [0, 35, 0], rotate: [0, -10, 0] }} transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] right-[40%] text-[var(--color-primary)]"><Wifi size={75} /></motion.div>
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[75%] left-[30%] text-[var(--color-primary)]">
        <svg width="90" height="90" viewBox="0 0 110 110" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M53.9 11.1C41.3 11.1 39.1 16.9 39.1 16.9L38.9 26.6H71.5V30.5H30.7C16.3 30.5 11.4 39.6 11.4 53.6C11.4 68.3 15.6 75.9 28.1 75.9H34.8V64.6C34.8 51.5 45.7 40.8 59.1 40.8H79.3V27.3C79.3 15.5 68.8 11.1 53.9 11.1ZM43.3 18.9C45.4 18.9 47.1 20.6 47.1 22.7C47.1 24.8 45.4 26.5 43.3 26.5C41.2 26.5 39.5 24.8 39.5 22.7C39.5 20.6 41.2 18.9 43.3 18.9ZM81.9 34.1H75.2V45.4C75.2 58.5 64.3 69.2 50.9 69.2H30.7V82.7C30.7 94.5 41.2 98.9 56.1 98.9C68.7 98.9 70.9 93.1 70.9 93.1L71.1 83.4H38.5V79.5H79.3C93.7 79.5 98.6 70.4 98.6 56.4C98.6 41.7 94.4 34.1 81.9 34.1ZM66.7 91.1C64.6 91.1 62.9 89.4 62.9 87.3C62.9 85.2 64.6 83.5 66.7 83.5C68.8 83.5 70.5 85.2 70.5 87.3C70.5 89.4 68.8 91.1 66.7 91.1Z"/>
        </svg>
      </motion.div>
    </div>
  );
}
