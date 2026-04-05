import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function NavLinks() {
  return (
    <nav aria-label="In-page links">
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex items-center gap-3 py-2 text-sm font-medium tracking-widest text-slate-400 uppercase transition-all duration-200 hover:text-teal-300"
            >
              {/* animated line */}
              <span className="inline-block h-px w-8 bg-slate-500 transition-all duration-200 group-hover:w-14 group-hover:bg-teal-300" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
