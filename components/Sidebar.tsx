import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
  return (
    <header className="flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:w-1/2 lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Inzemam Baig
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          AI/ML Engineer | AI & LLM Applications | Cloud Native
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-normal text-slate-400">
          I Design microservices and AI-driven systems that scale
        </p>

        {/* Desktop nav — hidden on mobile */}
        <div className="mt-12 hidden lg:block">
          <NavLinks />
        </div>
      </div>

      <div className="mt-8 lg:mt-0">
        <SocialLinks />
      </div>
    </header>
  );
}
