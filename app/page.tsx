import Sidebar from "@/components/Sidebar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    /* Cursor-glow radial background — follows mouse on desktop */
    <div className="relative min-h-screen bg-[#0f172a] px-6 py-12 md:px-12 lg:px-24">
      {/* Radial gradient spotlight that gives the page depth */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity"
        style={{
          background:
            "radial-gradient(600px at 50% 50%, rgba(29,78,216,0.12), transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-screen-xl">
        {/* Two-column layout on lg+: sticky sidebar left, scrollable content right */}
        <div className="lg:flex lg:gap-16">
          {/* ── LEFT — sticky sidebar ───────────────────────── */}
          <div className="lg:w-[45%]">
            <Sidebar />
          </div>

          {/* ── RIGHT — scrollable sections ─────────────────── */}
          {/* Each section is rendered ONCE. Headings are sticky on mobile,
              normal on desktop — handled inside each section component. */}
          <main className="pt-24 lg:w-[55%] lg:pt-0">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}

