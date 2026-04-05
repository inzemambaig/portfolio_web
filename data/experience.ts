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
    company: "Infosys",
    companyUrl: "https://www.infosys.com",
    period: "January 2024 — Present",
    description:
      "Lead development of the core product platform, collaborating with cross-functional teams to ship high-quality features. Championed accessibility, performance improvements, and developer experience across the engineering org.",
    techStack: ["Java", "Spring Boot", "MicroServices", "Kubernetes","Terraform","Docker", "AWS"],
  },
  {
    role: "Senior Java Developer",
    company: "Cognizant",
    companyUrl: "https://www.cognizant.com",
    period: "October 2021 — December 2023",
    description:
      "Built and maintained key features for a B2B SaaS platform. Collaborated closely with design and product to iterate quickly and deliver polished experiences for thousands of daily active users.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    role: "Java Developer",
    company: "TCS",
    companyUrl: "https://www.tcs.com",
    period: "February 2019 — September 2021",
    description:
      "Developed responsive, accessible websites and web apps for a diverse portfolio of clients. Delivered projects on time while maintaining high code quality standards.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Docker","Jmeter"],
  },
  {
    role: "Python Developer",
    company: "Lets Nurture",
    companyUrl: "https://www.letsnurture.com",
    period: "July 2018 — January 2019",
    description:
      "Developed responsive, accessible websites and web apps for a diverse portfolio of clients. Delivered projects on time while maintaining high code quality standards.",
    techStack: ["Python", "Django", "Flask", "PostgreSQL"],
  },
];
