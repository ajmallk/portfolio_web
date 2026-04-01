/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Languages } from './components/Languages';
import { Footer } from './components/Footer';
import { BackgroundIcons } from './components/BackgroundIcons';
import { AIAssistant } from './components/AIAssistant';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-primary)] font-sans selection:bg-[var(--color-accent-yellow)] selection:text-[#0f172a]">
      <BackgroundIcons />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Languages />
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
}

