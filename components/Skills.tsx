import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-mono flex items-center whitespace-nowrap">
            <span className="text-accent-light dark:text-accent-dark mr-4">03.</span>
            Skills
            <div className="ml-6 h-px bg-muted-light dark:bg-muted-dark opacity-30 w-full md:w-80"></div>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div key={idx} className="glass-card p-8 rounded-xl border border-muted-light/10 dark:border-muted-dark/10 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-6 font-mono text-text-light dark:text-text-dark border-b border-accent-light/30 dark:border-accent-dark/30 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <div 
                    key={skill.name} 
                    className="px-3 py-1.5 rounded-md bg-secondary-light dark:bg-secondary-dark border border-muted-light/20 dark:border-muted-dark/20 hover:border-accent-light dark:hover:border-accent-dark transition-colors cursor-default"
                  >
                    <span className="text-sm font-mono text-muted-light dark:text-muted-dark">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
