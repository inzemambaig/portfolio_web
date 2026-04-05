import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Your Name",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-xl">
        {/* Back link */}
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
          Back to Home
        </Link>

        <h1 className="mb-2 text-4xl font-bold text-slate-200">
          Get In Touch
        </h1>
        <p className="mb-10 text-slate-400">
          I&apos;m currently open to new opportunities. Whether you have a
          question, a project idea, or just want to say hi — drop me a line!
          I&apos;ll do my best to get back to you promptly.
        </p>

        {/* Email CTA */}
        <Link
          href="mailto:inzemambaig@gmail.com"
          className="inline-flex items-center gap-2 rounded border border-teal-400/50 px-6 py-3 text-sm font-medium text-teal-300 transition-all duration-200 hover:border-teal-300 hover:bg-teal-400/10 focus-visible:border-teal-300"
        >
          Say Hello
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
            <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
          </svg>
        </Link>

        {/* Social links */}
        <div className="mt-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
            Or find me on
          </p>
          <ul className="flex flex-col gap-3">
            {[
              {
                label: "GitHub",
                href: "https://github.com/inzemambaig",
                handle: "@inzemambaig",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/inzemam-baig/",
                handle: "Inzemam Baig",
              },
            ].map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between rounded-lg border border-slate-700/50 p-4 transition-all duration-200 hover:border-teal-400/40 hover:bg-slate-800/50"
                >
                  <span className="text-sm font-medium text-slate-300 group-hover:text-teal-300">
                    {s.label}
                  </span>
                  <span className="text-xs text-slate-500 group-hover:text-slate-400">
                    {s.handle}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
