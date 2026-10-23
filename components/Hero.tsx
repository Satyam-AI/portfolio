import { profile } from "@/content/profile";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

export default function Hero() {
  return (
    <section className="py-12 sm:py-20">
      <h1 className="text-4xl font-bold tracking-tight text-text sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
        {profile.headline}
      </p>
      <p className="mt-6 max-w-2xl text-lg text-text-muted">
        {profile.summary}
      </p>
      <p className="mt-4 text-sm text-text-muted">{profile.education}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className={`rounded-lg bg-accent px-5 py-2.5 font-medium text-on-accent hover:opacity-90 ${focusRing}`}
        >
          View projects
        </a>
        <a
          href={profile.resumePath}
          download
          className={`rounded-lg border border-border-control bg-surface px-5 py-2.5 font-medium text-text hover:border-accent ${focusRing}`}
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
