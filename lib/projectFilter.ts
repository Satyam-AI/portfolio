import type { Project, Tag } from "@/content/types";

export type TagFilter = Tag | "All";

const tagOrder: Tag[] = ["Testing", "Development", "AI/ML"];

export function getTags(projects: Project[]): Tag[] {
  const found = new Set<Tag>();

  for (const project of projects) {
    for (const tag of project.tags) {
      found.add(tag);
    }
  }

  return tagOrder.filter((tag) => found.has(tag));
}

export function filterProjects(projects: Project[], tag: TagFilter): Project[] {
  if (tag === "All") {
    return projects;
  }
  return projects.filter((project) => project.tags.includes(tag));
}
