
import React from 'react';
import { Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-mono flex items-center whitespace-nowrap">
            <span className="text-accent-light dark:text-accent-dark mr-4">01.</span>
            About Me
            <div className="ml-6 h-px bg-muted-light dark:bg-muted-dark opacity-30 w-full md:w-80"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Main text column - ensures it takes full width on mobile but spans most on desktop */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6 text-muted-light dark:text-muted-dark text-lg leading-relaxed">
            <p>
              I'm an <span className="text-text-light dark:text-text-dark">AI Engineer</span> with a deep passion for building intelligent, user-centric systems. 
              I hold a Bachelor's degree in Electrical and Electronics Engineering from <span className="text-accent-light dark:text-accent-dark">NIT Calicut</span>, which gave me a solid foundation in hardware-software integration.
            </p>
            <p>
              My current work focuses on developing and deploying scalable AI solutions, with a particular focus on <span className="text-text-light dark:text-text-dark">Generative AI</span>. I specialize in crafting end-to-end workflows using modern frameworks, integrating intelligent systems into useful applications.
            </p>
            <p>
              Beyond my professional role, I'm an avid tinkerer. Whether it's building personal use applications, XY Plotters or experimenting with computer vision for home automation, I love the intersection of bits and atoms.
            </p>
          </div>

          {/* Visual column - atom/cpu icon with animated glow */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center items-center py-10 md:py-0">
            <div className="relative group w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 border-2 border-accent-light dark:border-accent-dark rounded-xl rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute inset-0 border-2 border-accent-light dark:border-accent-dark rounded-xl -rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-50"></div>
              <div className="relative z-10 w-full h-full bg-secondary-light dark:bg-secondary-dark rounded-xl flex items-center justify-center shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-accent-light/10 dark:bg-accent-dark/10 animate-pulse"></div>
                 <Cpu size={80} className="text-accent-light dark:text-accent-dark animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
