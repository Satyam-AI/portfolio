import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "ai-interviewer",
    title: "AI-Interviewer",
    description:
      "An AI-driven platform where candidates upload a resume, get automatically screened, take a simulated interview tailored to their profile, and receive real-time feedback and scores.",
    tags: ["Development", "AI/ML"],
    stack: ["Agentic AI", "LangChain"], // TODO: add the other tools you used
    codeUrl: "https://github.com/Satyam-AI", // TODO: link to this repository
    featured: true,
  },
  {
    id: "face-attendance",
    title: "Face recognition attendance system",
    description:
      "Recognises faces against a provided database and marks attendance automatically, with manual marking and record export.",
    tags: ["Development", "AI/ML"],
    stack: [], // TODO: the tools you used
    codeUrl: "https://github.com/Satyam-AI", // TODO: link to this repository
  },
  {
    id: "digit-recognition",
    title: "Handwritten digit recognition",
    description:
      "Predicts handwritten digits drawn in a Tkinter GUI using an SVM trained on MNIST, at 95.07% precision.",
    tags: ["AI/ML"],
    stack: ["Python", "Tkinter", "SVM", "MNIST"],
    codeUrl: "https://github.com/Satyam-AI", // TODO: link to this repository
  },
];
