import CopyButton from "@/components/CopyButton";
import { profile } from "@/content/profile";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

const linkClass = `inline-flex min-h-11 items-center break-words font-medium text-accent underline underline-offset-4 hover:opacity-80 ${focusRing}`;

function shortUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold text-text sm:text-3xl">Contact</h2>
      <p className="mt-2 mb-6 text-text-muted">
        The fastest way to reach me is by email or phone.
      </p>

      <dl className="grid max-w-xl grid-cols-[5.5rem_1fr] items-center gap-x-4 gap-y-2">
        <dt className="font-mono text-sm text-text-muted">Email</dt>
        <dd className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className={linkClass}>
            {profile.email}
          </a>
          <CopyButton text={profile.email} />
        </dd>

        <dt className="font-mono text-sm text-text-muted">Phone</dt>
        <dd>
          <a href={`tel:${profile.mobile}`} className={linkClass}>
            {profile.mobile}
          </a>
        </dd>

        <dt className="font-mono text-sm text-text-muted">GitHub</dt>
        <dd>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {shortUrl(profile.githubUrl)}
          </a>
        </dd>

        <dt className="font-mono text-sm text-text-muted">LinkedIn</dt>
        <dd>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {shortUrl(profile.linkedinUrl)}
          </a>
        </dd>

        {profile.leetcodeUrl && (
          <>
            <dt className="font-mono text-sm text-text-muted">LeetCode</dt>
            <dd>
              <a
                href={profile.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {shortUrl(profile.leetcodeUrl)}
              </a>
            </dd>
          </>
        )}

        {profile.youtubeUrl && (
          <>
            <dt className="font-mono text-sm text-text-muted">YouTube</dt>
            <dd>
              <a
                href={profile.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {shortUrl(profile.youtubeUrl)}
              </a>
            </dd>
          </>
        )}
      </dl>

      <a
        href={profile.resumePath}
        download
        className={`mt-8 inline-flex min-h-11 items-center rounded-lg bg-accent px-5 font-medium text-on-accent hover:opacity-90 ${focusRing}`}
      >
        Download resume
      </a>
    </section>
  );
}
