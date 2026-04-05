import Link from "next/link";
import TechTag from "@/components/TechTag";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      {/* Section heading: sticky on mobile, normal on desktop */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-[#0f172a]/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:mb-8 lg:w-full lg:px-0 lg:py-0 lg:backdrop-filter-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Experience
        </h2>
      </div>

      <ol className="group/list space-y-6">
        {experience.map((job) => (
          <li
            key={job.company}
            className="group relative rounded-lg p-4 transition-all duration-200 hover:bg-slate-800/50 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:p-6"
          >
            {/* Date — shown on top on mobile, left column on lg */}
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:absolute lg:left-0 lg:top-6 lg:w-28 lg:text-right">
              {job.period}
            </p>

            <div className="lg:pl-36">
              <h3 className="font-medium leading-snug text-slate-200">
                {job.companyUrl ? (
                  <Link
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/link inline-flex items-baseline gap-1 hover:text-teal-300 focus-visible:text-teal-300"
                  >
                    {job.role} ·{" "}
                    <span className="text-slate-200">{job.company}</span>
                    {/* External link arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="ml-0.5 inline-block h-4 w-4 shrink-0 translate-y-px text-slate-500 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-teal-300"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                ) : (
                  <span>
                    {job.role} · {job.company}
                  </span>
                )}
              </h3>

              <p className="mt-2 text-sm leading-normal text-slate-400">
                {job.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {job.techStack.map((tech) => (
                  <li key={tech}>
                    <TechTag label={tech} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <a
          href="/inzemam_baig_resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        >
          View Full Résumé
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
