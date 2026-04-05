import type { Metadata } from "next";
import Link from "next/link";
import TechTag from "@/components/TechTag";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project Archive — Inzemam Baig",
  description: "A complete archive of all personal and professional projects.",
};

export default function ProjectsPage() {
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

        <h1 className="mb-2 text-4xl font-bold text-slate-200">
          All Projects
        </h1>
        <p className="mb-12 text-slate-400">
          A complete archive of personal and professional projects I&apos;ve
          worked on.
        </p>

        {/* Table */}
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="pb-4 pr-8 text-sm font-semibold uppercase tracking-wider text-slate-200">
                Project
              </th>
              <th className="hidden pb-4 pr-8 text-sm font-semibold uppercase tracking-wider text-slate-200 sm:table-cell">
                Description
              </th>
              <th className="hidden pb-4 text-sm font-semibold uppercase tracking-wider text-slate-200 md:table-cell">
                Stack
              </th>
              <th className="pb-4 text-sm font-semibold uppercase tracking-wider text-slate-200">
                Links
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr
                key={project.title}
                className="group border-b border-slate-700/30 transition-colors hover:bg-slate-800/50"
              >
                <td className="py-4 pr-8 align-top">
                  <p className="font-medium text-slate-200 group-hover:text-teal-300">
                    {project.title}
                  </p>
                </td>
                <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 sm:table-cell">
                  {project.description}
                </td>
                <td className="hidden py-4 align-top md:table-cell">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <li key={tech}>
                        <TechTag label={tech} />
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="py-4 align-top">
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`GitHub for ${project.title}`}
                        className="text-slate-400 hover:text-teal-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Live site for ${project.title}`}
                        className="text-slate-400 hover:text-teal-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
