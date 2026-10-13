export type Level = "learning" | "working" | "comfortable";

export type Tag = "Testing" | "Development";

export type Profile = {
  name: string;
  headline: string;
  email: string;
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
};

export type Skill = {
  name: string;
  level: Level;
  path: string;
  evidence?: string[];
};
