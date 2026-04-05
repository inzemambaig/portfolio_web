export default function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      {/* Section heading: sticky on mobile, normal on desktop */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 w-screen bg-[#0f172a]/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:mb-8 lg:w-full lg:px-0 lg:py-0 lg:backdrop-filter-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate-400">
        <p>
          I'm a software developer with a passion for building products that
          live on the internet. I care deeply about crafting experiences that are
          fast, accessible, and a joy to use. I thrive at the intersection of
          design and engineering — where aesthetics meets clean, scalable code.
        </p>
        <p>
          Over the years I've worked across a wide range of environments —
          from early-stage startups to established tech companies — shipping
          everything from consumer-facing apps to internal developer tools.
          I enjoy the full journey from idea to deployed product.
        </p>
        <p>
          When I'm not at my desk, you can find me{" "}
          <span className="text-slate-300">
            [your hobby, e.g. hiking / reading / gaming]
          </span>
          , or exploring new places with my{" "}
          <span className="text-slate-300">[family/friends/pet]</span>.
        </p>
      </div>
    </section>
  );
}
