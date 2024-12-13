import { Project, Experience, TechnologyCategory, Achievement } from './types';
import { Code2, Database, Layout, Server, Award, Users, Target, Zap, Globe, ClipboardList, SearchCode, Workflow, ShieldCheck } from 'lucide-react';

export const projects: Project[] = [
  {  
    id: 'compass',
    title: 'Report Generator',
    description: 'Generates reports based on CSV data',
    image: '/chart.png',
    tags: ['React', 'CSV Parse', 'ETL', 'ReCharts'],
    githubUrl: 'https://github.com/hdennen/compass-reports',
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: 'derivco-manager',
    role: 'Software Engineering Manager',
    company: 'Derivco',
    companyUrl: 'https://www.linkedin.com/company/derivco/about/',
    period: '10/2023 - 09/2024',
    achievements: [
      'Built and led a team of 6 engineers in 3 months, accelerating project delivery by 3 months',
      'Managed critical path execution across four teams through efficient design sessions and code reviews',
      'Hired 20 engineers across 3 teams, fostering a culture of global remote collaboration',
      'Developed cross-timezone collaboration strategy for 24-hour development cycles'
    ],
    technologies: ['C#', '.NET', 'TypeScript', 'JavaScript', 'PowerShell', 'YAML', 'Docker', 'Playwright', 'Azure DevOps', 'CoPilot']
  },
  {
    id: 'derivco-staff',
    role: 'Staff Software Engineer',
    company: 'Derivco',
    companyUrl: 'https://www.linkedin.com/company/derivco/about/',
    period: '06/2022 - 10/2023',
    achievements: [
      'Led refactor strategy to consolidate 8-month divergent codebase while maintaining continuous deployment',
      'Designed and built configuration engine enabling 24-hour deployment cycles across nine US platforms',
      'Established effective interview process for identifying top talent',
      'Successfully onboarded two teams to effective contribution within weeks'
    ],
    technologies: ['C#', '.NET', 'TypeScript', 'JavaScript', 'PowerShell', 'YAML', 'Docker', 'Playwright', 'Azure DevOps', 'CoPilot']
  },
  {
    id: 'derivco-senior',
    role: 'Senior Software Engineer',
    company: 'Derivco',
    companyUrl: 'https://www.linkedin.com/company/derivco/about/',
    period: '11/2018 - 06/2022',
    achievements: [
      'Developed regulatory compliance API for runtime selection of compliant logic',
      'Led 6-person team to deliver Atom project for entity graph representation',
      'Reduced development time by 90% through node-agnostic program model',
      'Implemented full-stack solution for synchronized game-end experience'
    ],
    technologies: ['C#', '.NET', 'TypeScript', 'PowerShell', 'YAML', 'Docker', 'Playwright', 'Azure DevOps', 'Git']
  },
  {
    id: 'derivco-engineer',
    role: 'Software Engineer II',
    company: 'Derivco',
    companyUrl: 'https://www.linkedin.com/company/derivco/about/',
    period: '06/2016 - 10/2018',
    achievements: [
      'Designed and built window-to-window RPC API for iframe integration',
      'Reduced live incidents by 50% through improved state management',
      'Optimized performance through RAF calls and memory management'
    ],
    technologies: ['TypeScript', 'JavaScript', 'Gulp', 'Webpack', 'Selenium', 'Team City', 'Git']
  },
  {
    id: 'freelance',
    role: 'Freelance Software Developer',
    company: 'Self-Employed',
    period: '2010 - 2016',
    achievements: [
      'Founded Youth Sports Network, successfully acquired by CIMS South Africa in 2014',
      'Developed diverse portfolio including project management, scheduling, and tracking applications',
      'Built prototype for WoahStork marijuana dispensary network'
    ],
    technologies: ['Drupal', 'SQL', 'PHP', 'JavaScript', 'jQuery', 'CSS', 'HTML']
  }
];

export const technologies: TechnologyCategory[] = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Zustand', 'Jest', 'Playwright', 'Vue', 'Angular', 'Nx', 'Gulp', 'Webpack', 'Vite', 'Rollup', 'Babel', 'ESLint', 'Prettier'],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', '.NET', 'C#', 'Java', 'REST APIs', 'GraphQL', 'MediatR', 'Entity Framework', 'Dapper'],
  },
  {
    title: 'DevOps',
    icon: Workflow,
    skills: ['Azure DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions', 'Jenkins', 'GitLab', 'TeamCity', 'Azure', 'AWS', 'GCP'],
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: ['SQL Server', 'PostgreSQL', 'Stored Procedures', 'Couchbase', 'SQL Server Studio', 'SSDT', 'Azure', 'AWS'],
  },
  {
    title: 'Development Practices',
    icon: Code2,
    skills: ['CI/CD', 'TDD', 'Agile', 'SOLID', 'Design Patterns', 'OOP', 'DDD', 'Microservices', 'Event Driven Architecture', 'Onion Architecture', 'CQRS', 'Domain Driven Design'],
  },
  {
    title: 'Testing',
    icon: ShieldCheck,
    skills: ['Jest', 'Playwright', 'Cypress', 'Selenium', 'Puppeteer', 'Mocha', 'Chai', 'Jasmine', 'Karma', 'Unit Testing', 'Integration Testing', 'E2E Testing', 'Behavior Driven Development', 'Acceptance Testing', 'Mocking', 'Stubs', 'Spies'],
  },
  {
    title: 'Project Management',
    icon: ClipboardList,
    skills: ['Git', 'GitHub', 'GitLab', 'Azure DevOps', 'Jira', 'Trello', 'Asana', 'Slack', 'Confluence', 'Git', 'GitHub', 'GitLab', 'Azure DevOps', 'Jira', 'Trello', 'Asana', 'MS Teams', 'Confluence'],
  },
  {
    title: 'Troubleshooting & Debugging',
    icon: SearchCode,
    skills: ['Charles Proxy', 'Postman', 'Fiddler', 'Event Viewer', 'Open Telemetry', 'Sentry', 'Performance Profiling', 'Memory Profiling', 'Logging', 'Kibana']
  }
];

export const achievements: Achievement[] = [
  {
    icon: Users,
    title: '3+ Teams Led',
    description: 'Built and led high-performing development teams',
  },
  {
    icon: Target,
    title: '90% Efficiency Gain',
    description: 'Reduced development time through innovative solutions',
  },
  {
    icon: Zap,
    title: '24h Deployment Cycles',
    description: 'Enabled rapid global deployment capabilities',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Led cross-timezone development strategies',
  },
  {
    icon: Award,
    title: 'Startup Success',
    description: 'Founded and sold Youth Sports Network',
  }
];