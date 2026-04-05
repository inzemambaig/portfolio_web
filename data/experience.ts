export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  techStack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Awesome Company",
    companyUrl: "https://example.com",
    period: "2023 — Present",
    description:
      "Lead development of the core product platform, collaborating with cross-functional teams to ship high-quality features. Championed accessibility, performance improvements, and developer experience across the engineering org.",
    techStack: ["TypeScript", "React", "Next.js", "Node.js", "AWS"],
  },
  {
    role: "Software Engineer",
    company: "Cool Startup",
    companyUrl: "https://example.com",
    period: "2021 — 2023",
    description:
      "Built and maintained key features for a B2B SaaS platform. Collaborated closely with design and product to iterate quickly and deliver polished experiences for thousands of daily active users.",
    techStack: ["React", "GraphQL", "PostgreSQL", "Docker"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    period: "2019 — 2021",
    description:
      "Developed responsive, accessible websites and web apps for a diverse portfolio of clients. Delivered projects on time while maintaining high code quality standards.",
    techStack: ["JavaScript", "Vue.js", "SCSS", "WordPress"],
  },
];
