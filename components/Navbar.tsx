import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Github } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: '01.' },
    { name: 'Projects', href: '#projects', id: '02.' },
    { name: 'Skills', href: '#skills', id: '03.' },
    { name: 'Connect', href: '#connect', id: '04.' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'py-3 bg-primary-light/80 dark:bg-primary-dark/80 backdrop-blur-md shadow-lg' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-accent-light dark:text-accent-dark font-mono text-2xl font-bold group">
          &lt;Ruthvik<span className="group-hover:text-text-light dark:group-hover:text-text-dark transition-colors">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-accent-light dark:hover:text-accent-dark text-lg transition-colors">
              <span className="text-accent-light dark:text-accent-dark mr-1">{link.id}</span>
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a 
            href="https://github.com/ruthvik-1411" 
            target="_blank" 
            className="px-4 py-2 border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-primary-light dark:bg-primary-dark z-[99] transition-transform duration-300 transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-10 font-mono text-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-accent-light dark:hover:text-accent-dark transition-colors"
            >
              <span className="block text-accent-light dark:text-accent-dark text-center mb-1">{link.id}</span>
              {link.name}
            </a>
          ))}
          <a 
            href="https://github.com/ruthvik-1411" 
            target="_blank"
            className="px-8 py-4 border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
