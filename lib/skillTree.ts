import type { Skill } from "@/content/types";

export type SkillNode = {
  name: string;
  skills: Skill[];
  children: SkillNode[];
};

export function buildSkillTree(skills: Skill[]): SkillNode {
  const root: SkillNode = { name: "root", skills: [], children: [] };

  for (const skill of skills) {
    let node = root;

    for (const segment of skill.path.split("/")) {
      let child = node.children.find((c) => c.name === segment);
      if (!child) {
        child = { name: segment, skills: [], children: [] };
        node.children.push(child);
      }
      node = child;
    }

    node.skills.push(skill);
  }

  return root;
}
