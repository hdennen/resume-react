export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export interface TimelineItem {
  year: string;
  content: React.ReactNode;
}

export interface TechnologyCategory {
  title: string;
  icon: React.ComponentType;
  skills: string[];
}

export interface Achievement {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export type Achievements = Achievement[];