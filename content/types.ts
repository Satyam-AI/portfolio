export type Level = "learning" | "working" | "comfortable";

export type Tag = "Testing" | "Development" | "AI/ML";

export type Profile = {
  name: string;
  headline: string;
  summary: string;
  education: string;
  email: string;
  mobile: string;
  githubUrl: string;
  linkedinUrl: string;
  youtubeUrl?: string;
  resumePath: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: Tag[];
  stack: string[];
  codeUrl: string;
  demoUrl?: string;
  image?: string;
  featured?: boolean;
};

export type Skill = {
  name: string;
  level: Level;
  path: string;
  evidence?: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};
