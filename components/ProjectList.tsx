"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/content/types";
import { filterProjects, getTags, type TagFilter } from "@/lib/projectFilter";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [selected, setSelected] = useState<TagFilter>("All");
  const filters: TagFilter[] = ["All", ...getTags(projects)];
  const visible = filterProjects(projects, selected);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-4 flex flex-wrap gap-2"
      >
        {filters.map((tag) => (
          <button
            key={tag}
            type="button"
            aria-pressed={selected === tag}
            onClick={() => setSelected(tag)}
            className={`min-h-11 rounded-full border px-4 text-sm font-medium ${
              selected === tag
                ? "border-accent bg-accent text-on-accent"
                : "border-border-control bg-surface text-text hover:border-accent"
            } ${focusRing}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <p role="status" className="mb-4 text-sm text-text-muted">
        Showing {visible.length} of {projects.length} projects
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
