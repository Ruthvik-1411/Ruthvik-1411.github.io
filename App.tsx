import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CircuitBackground from './components/CircuitBackground';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return (saved as Theme) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <CircuitBackground />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-8 text-center font-mono text-xs text-muted-light dark:text-muted-dark">
        <div className="container mx-auto px-6">
          <p className="mb-2 text-l">Designed & Built by <span className="text-accent-light dark:text-accent-dark">Ruthvik</span> using Gemini 3.0</p>
          {/* <p>© {new Date().getFullYear()} All rights reserved. Powered by React & Tailwind.</p> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
