import type { Experience } from "@/content/types";

export default function ExperienceList({ entries }: { entries: Experience[] }) {
  return (
    <ol className="ml-2 border-l border-border">
      {entries.map((entry) => (
        <li
          key={`${entry.company}-${entry.period}`}
          className="relative pb-10 pl-8 last:pb-0"
        >
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg"
          />
          <p className="font-mono text-sm text-text-muted">{entry.period}</p>
          <h3 className="mt-1 text-xl font-semibold text-text">{entry.role}</h3>
          <p className="font-medium text-accent">{entry.company}</p>
          <p className="mt-3 max-w-prose text-text-muted">{entry.summary}</p>
        </li>
      ))}
    </ol>
  );
}
