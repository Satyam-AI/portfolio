import Image from "next/image";
import type { Project } from "@/content/types";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

const linkClass = `inline-flex min-h-11 items-center font-medium text-accent underline underline-offset-4 hover:opacity-80 ${focusRing}`;

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`flex flex-col gap-4 rounded-xl border bg-surface p-5 ${
        project.featured ? "border-accent" : "border-border"
      }`}
    >
      {project.image && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div>
        {project.featured && (
          <p className="mb-1 text-sm font-medium text-accent">
            Featured project
          </p>
        )}
        <h3 className="text-xl font-bold text-text">{project.title}</h3>
      </div>

      <p className="text-text-muted">{project.description}</p>

      {project.stack.length > 0 && (
        <ul aria-label="Tools used" className="flex flex-wrap gap-2">
          {project.stack.map((tool) => (
            <li
              key={tool}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-sm text-text"
            >
              {tool}
            </li>
          ))}
        </ul>
      )}

      <ul aria-label="Categories" className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="text-sm text-text-muted">
            #{tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-x-5">
        <a
          href={project.codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View code for ${project.title}`}
          className={linkClass}
        >
          View code
        </a>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${project.title}`}
            className={linkClass}
          >
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}
