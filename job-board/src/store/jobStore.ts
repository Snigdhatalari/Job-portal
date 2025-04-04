// store/jobStore.ts
import { create } from 'zustand';
import { Job, Company } from '../types/types';

// Mock data
// store/jobStore.ts
const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer (React)',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    description: 'Lead our frontend development team building next-generation web applications. You\'ll architect React solutions and mentor junior developers.',
    requirements: ['5+ years React experience', 'Expertise in TypeScript', 'State management (Redux/Zustand)', 'Testing (Jest/Cypress)'],
    postedAt: '2023-06-15',
    isRemote: true,
    companyId: '1'
  },
  {
    id: '2',
    title: 'Backend Engineer (Node.js)',
    company: 'DataSystems',
    location: 'New York, NY',
    salary: '$110,000 - $140,000',
    description: 'Build scalable microservices for our data processing platform. Work with Kubernetes, Docker, and AWS infrastructure.',
    requirements: ['Node.js & Express', 'MongoDB/PostgreSQL', 'REST/GraphQL APIs', 'AWS Services'],
    postedAt: '2023-06-10',
    isRemote: false,
    companyId: '2'
  },
  {
    id: '3',
    title: 'DevOps Engineer',
    company: 'CloudNine',
    location: 'Austin, TX',
    salary: '$130,000 - $160,000',
    description: 'Automate our deployment pipelines and optimize cloud infrastructure. CI/CD with GitHub Actions and Terraform.',
    requirements: ['AWS/GCP/Azure', 'Kubernetes', 'Infrastructure as Code', 'Monitoring tools'],
    postedAt: '2023-06-05',
    isRemote: true,
    companyId: '3'
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    company: 'CreativeMinds',
    location: 'Chicago, IL',
    salary: '$90,000 - $120,000',
    description: 'Design beautiful, intuitive interfaces for our SaaS products. Conduct user research and create design systems.',
    requirements: ['Figma/Sketch', 'User research', 'Prototyping', 'HTML/CSS basics'],
    postedAt: '2023-05-28',
    isRemote: true,
    companyId: '4'
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Boston, MA',
    salary: '$140,000 - $170,000',
    description: 'Develop machine learning models to extract insights from large datasets. Work with Python and PyTorch.',
    requirements: ['Python/R', 'Machine Learning', 'SQL/NoSQL', 'Data visualization'],
    postedAt: '2023-05-20',
    isRemote: false,
    companyId: '5'
  },
  {
    id: '6',
    title: 'Mobile Developer (React Native)',
    company: 'AppWorks',
    location: 'Seattle, WA',
    salary: '$115,000 - $145,000',
    description: 'Build cross-platform mobile apps for iOS and Android using React Native.',
    requirements: ['React Native', 'TypeScript', 'Mobile UI/UX', 'App Store deployment'],
    postedAt: '2023-05-15',
    isRemote: true,
    companyId: '6'
  },
  {
    id: '7',
    title: 'Full Stack Developer',
    company: 'WebSolutions',
    location: 'Denver, CO',
    salary: '$100,000 - $135,000',
    description: 'End-to-end development of web applications using modern JavaScript frameworks.',
    requirements: ['React/Next.js', 'Node.js', 'PostgreSQL', 'GraphQL'],
    postedAt: '2023-05-10',
    isRemote: true,
    companyId: '7'
  },
  {
    id: '8',
    title: 'QA Automation Engineer',
    company: 'QualityFirst',
    location: 'Atlanta, GA',
    salary: '$95,000 - $125,000',
    description: 'Build automated testing frameworks and ensure software quality.',
    requirements: ['Selenium/Cypress', 'Jest/Mocha', 'CI/CD pipelines', 'Performance testing'],
    postedAt: '2023-05-05',
    isRemote: false,
    companyId: '8'
  },
  {
    id: '9',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Portland, OR',
    salary: '$130,000 - $160,000',
    description: 'Lead product development from conception to launch. Work with engineering and design teams.',
    requirements: ['Agile methodologies', 'Roadmap planning', 'User stories', 'Market research'],
    postedAt: '2023-04-28',
    isRemote: true,
    companyId: '9'
  },
  {
    id: '10',
    title: 'Cybersecurity Specialist',
    company: 'SecureNet',
    location: 'Washington, DC',
    salary: '$150,000 - $180,000',
    description: 'Protect our systems from security threats and implement best practices.',
    requirements: ['Network security', 'Penetration testing', 'SIEM tools', 'Compliance standards'],
    postedAt: '2023-04-20',
    isRemote: false,
    companyId: '10'
  }
];

const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'TechCorp',
    description: 'Leading technology company specializing in web solutions',
    logo: '/techcorp-logo.png'
  },
  {
    id: '2',
    name: 'DataSystems',
    description: 'Enterprise data infrastructure and analytics',
    logo: '/datasystems-logo.png'
  },
  // Add similar entries for all 10 companies
];

type JobState = {
  jobs: Job[];
  companies: Company[];
  addJob: (job: Omit<Job, 'id' | 'postedAt'>) => void;
  getJobById: (id: string) => Job | undefined;
  getCompanyJobs: (companyId: string) => Job[];
};

export const useJobStore = create<JobState>((set, get) => ({
  jobs: mockJobs,
  companies: mockCompanies,
  addJob: (job) => {
    const newJob = {
      ...job,
      id: Math.random().toString(36).substring(2, 9),
      postedAt: new Date().toISOString()
    };
    set((state) => ({ jobs: [...state.jobs, newJob] }));
  },
  getJobById: (id) => get().jobs.find(job => job.id === id),
  getCompanyJobs: (companyId) => get().jobs.filter(job => job.companyId === companyId),
}));