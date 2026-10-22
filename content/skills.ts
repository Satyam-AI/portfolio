import type { Skill } from "./types";

export const skills: Skill[] = [
  // Testing
  { name: "Root cause analysis", level: "working", path: "Testing" },
  { name: "Defect triage and escalation", level: "working", path: "Testing" },
  { name: "Jira", level: "working", path: "Testing" },
  // Switch these on when each has a public repo you can demo:
  // { name: "Manual testing and test case design", level: "working", path: "Testing" },
  // { name: "API testing with Postman", level: "working", path: "Testing" },
  // { name: "UI automation with Selenium", level: "working", path: "Testing" },
  // { name: "TestNG or pytest", level: "working", path: "Testing" },

  // Development
  { name: "C++", level: "comfortable", path: "Development/Languages" },
  {
    name: "Python",
    level: "working",
    path: "Development/Languages",
    evidence: ["digit-recognition"],
  },
  // { name: "Core Java", level: "working", path: "Development/Languages" },
  { name: "Git and GitHub", level: "working", path: "Development/Tools" },
  { name: "ERPNext and Frappe", level: "working", path: "Development/Tools" },

  // Data
  { name: "SQL", level: "working", path: "Data" },
  { name: "MySQL", level: "working", path: "Data" },

  // AI
  {
    name: "Machine learning (SVM)",
    level: "working",
    path: "AI",
    evidence: ["digit-recognition"],
  },
  { name: "Deep learning", level: "working", path: "AI" },
  {
    name: "LangChain",
    level: "working",
    path: "AI",
    evidence: ["ai-interviewer"],
  },
];
