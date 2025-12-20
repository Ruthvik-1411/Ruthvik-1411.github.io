
export interface Project {
  id: number;
  title: string;
  description: string;
  categories: string[];
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    live?: string;
  };
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string }[];
}

export type Theme = 'dark' | 'light';
