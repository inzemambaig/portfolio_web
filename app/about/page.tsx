import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Your Name",
  description: "Learn more about me, my background, and what I do.",
};

const skills = [
  "JavaScript (ES2022+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "HTML & CSS",
  "Tailwind CSS",
  "PostgreSQL",
  "REST APIs",
  "Git & GitHub",
  "Docker",
  "AWS / Vercel",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-3xl">
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

        <h1 className="mb-2 text-4xl font-bold text-slate-200">About Me</h1>
        <p className="mb-12 text-slate-400">
          A bit more about who I am, what I do, and where I&apos;ve been.
        </p>

        {/* Bio */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200">
            Background
          </h2>
          <div className="space-y-4 text-slate-400">
            <p>
              I&apos;m a software developer based in{" "}
              <span className="text-slate-300">[Your City, Country]</span> with
              a passion for building things that live on the internet. I care
              about writing clean, maintainable code and creating experiences
              that are fast, accessible, and a pleasure to use.
            </p>
            <p>
              My journey into tech started{" "}
              <span className="text-slate-300">[your story here]</span>. Since
              then, I&apos;ve had the opportunity to work with a variety of
              teams and technologies — from building internal tools to shipping
              consumer-facing products.
            </p>
            <p>
              Outside of work, I enjoy{" "}
              <span className="text-slate-300">
                [hobby 1, hobby 2, hobby 3]
              </span>
              . I&apos;m also always reading about{" "}
              <span className="text-slate-300">
                [topics you&apos;re interested in]
              </span>
              .
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200">
            Technologies I work with
          </h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <span className="text-teal-300" aria-hidden="true">
                  ▹
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Education — placeholder */}
        <section>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                2015 — 2019
              </p>
              <p className="font-medium text-slate-200">
                B.Sc. Computer Science
              </p>
              <p className="text-sm text-slate-400">
                Your University Name, Your City
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
