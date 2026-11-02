"use client";

import { useState } from "react";
import type { Level } from "@/content/types";
import type { SkillNode } from "@/lib/skillTree";

const levelLabel: Record<Level, string> = {
  learning: "Learning now",
  working: "Working knowledge",
  comfortable: "Comfortable",
};

const levelDot: Record<Level, string> = {
  learning: "bg-level-learning",
  working: "bg-level-working",
  comfortable: "bg-level-comfortable",
};

function Group({ node }: { node: SkillNode }) {
  const [open, setOpen] = useState(true);

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex min-h-11 items-center gap-2 rounded-md px-2 font-medium text-text hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
      >
        <span aria-hidden="true">{open ? "▾" : "▸"}</span>
        {node.name}
      </button>
      {open && (
        <ul className="ml-4 border-l border-border pl-4">
          {node.skills.map((skill) => (
            <li key={skill.name} className="flex items-center gap-2 py-1.5">
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${levelDot[skill.level]}`}
              />
              <span className="text-text">{skill.name}</span>
              <span className="text-sm text-text-muted">
                {levelLabel[skill.level]}
              </span>
            </li>
          ))}
          {node.children.map((child) => (
            <Group key={child.name} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function SkillTree({ root }: { root: SkillNode }) {
  return (
    <ul aria-label="Skills">
      {root.children.map((child) => (
        <Group key={child.name} node={child} />
      ))}
    </ul>
  );
}
