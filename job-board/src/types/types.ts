// types/types.ts
export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    description: string;
    requirements: string[];
    postedAt: string;
    isRemote: boolean;
    companyId: string;
  }
  
  export interface Company {
    id: string;
    name: string;
    description: string;
    logo: string;
  }