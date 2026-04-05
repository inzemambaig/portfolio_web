import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      {/* Section heading: sticky on mobile, normal on desktop */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-[#0f172a]/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:mb-8 lg:w-full lg:px-0 lg:py-0 lg:backdrop-filter-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Contact
        </h2>
      </div>

      <div className="space-y-4 text-slate-400">
        <p>
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is always open. I'll
          do my best to get back to you!
        </p>

        <div className="pt-2">
          <Link
            href="mailto:your@email.com"
            className="inline-flex items-center gap-2 rounded border border-teal-400/50 px-6 py-3 text-sm font-medium text-teal-300 transition-all duration-200 hover:border-teal-300 hover:bg-teal-400/10 focus-visible:border-teal-300 focus-visible:bg-teal-400/10"
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
        </div>
      </div>
    </section>
  );
}
