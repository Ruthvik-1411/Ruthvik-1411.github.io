import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="max-w-4xl">
          <p className="text-accent-light dark:text-accent-dark font-mono mb-6 text-lg tracking-wider animate-pulse">
            Hi, I'm
          </p>
          <h1 className="text-5xl md:text-8xl font-bold mb-4 font-mono leading-tight">
            Ruthvik.
          </h1>
          <h2 className="text-3xl md:text-6xl font-bold text-muted-light dark:text-muted-dark mb-8 leading-tight">
            I build intelligent systems.
          </h2>
          <p className="text-lg md:text-xl text-muted-light dark:text-muted-dark max-w-2xl mb-12 leading-relaxed">
            I'm an AI engineer specializing in building scalable and reliable 
            <span className="text-accent-light dark:text-accent-dark font-semibold"> Generative AI </span> 
            applications. I love rapid prototyping, turning let's try this into it's in prod. 
          </p>
          <div>
            <a 
              href="#projects" 
              className="inline-block px-8 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark font-mono font-bold rounded hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all transform hover:-translate-y-1"
            >
              Explore My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
