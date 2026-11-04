"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "copied" | "failed";

export default function CopyButton({ text }: { text: string }) {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2500);
    return () => clearTimeout(timer);
  }, [status]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  }

  const copied = status === "copied";

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={`inline-flex min-h-11 items-center gap-2 rounded-lg border bg-surface px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring ${
          copied
            ? "border-success text-success"
            : "border-border-control text-text hover:border-accent"
        }`}
      >
        {copied && (
          <span
            aria-hidden="true"
            className="grid h-5 w-5 place-items-center rounded-full bg-success text-bg"
          >
            <svg
              viewBox="0 0 20 20"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 10.5l4 4 8-9" />
            </svg>
          </span>
        )}
        {copied ? "Copied" : status === "failed" ? "Copy failed" : "Copy"}
      </button>
      <span role="status" className="sr-only">
        {copied ? "Email address copied" : ""}
        {status === "failed"
          ? "Copy failed. Select the address and copy it manually."
          : ""}
      </span>
    </>
  );
}
