import React, { useState } from 'react';
import { Github, Youtube } from 'lucide-react';
import { PROJECTS, getIcon } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('genai');
  const categories = ['all', 'genai', 'apps', 'robotics', 'electronics'];

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.categories.includes(filter));

  return (
    <section id="projects" className="py-24 px-6 bg-secondary-light/30 dark:bg-secondary-dark/30">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-mono flex items-center whitespace-nowrap">
            <span className="text-accent-light dark:text-accent-dark mr-4">02.</span>
            Personal Projects
            <div className="ml-6 h-px bg-muted-light dark:bg-muted-dark opacity-30 w-full md:w-80"></div>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded font-mono text-sm transition-all ${
                filter === cat 
                  ? 'bg-accent-light/20 dark:bg-accent-dark/20 text-accent-light dark:text-accent-dark border border-accent-light dark:border-accent-dark' 
                  : 'text-muted-light dark:text-muted-dark hover:text-accent-light dark:hover:text-accent-dark'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="glass-card p-6 rounded-lg border border-muted-light/20 dark:border-muted-dark/20 flex flex-col hover:-translate-y-2 transition-transform group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary-light dark:bg-primary-dark rounded-full text-accent-light dark:text-accent-dark shadow-inner">
                  {getIcon(project.icon)}
                </div>
                <div className="flex space-x-4 text-muted-light dark:text-muted-dark">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                      <Youtube size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3 font-mono group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                {project.title}
              </h3>
              <p className="text-l text-muted-light dark:text-muted-dark mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-[12px] font-mono px-2 py-1 rounded bg-primary-light/50 dark:bg-primary-dark/50 text-accent-light/80 dark:text-accent-dark/80 border border-accent-light/20 dark:border-accent-dark/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
