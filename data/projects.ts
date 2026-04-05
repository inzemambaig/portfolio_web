export type Project = {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application that does something awesome. Built with modern tools and deployed to the cloud. Replace this with a real description of your best project.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-alpha",
    featured: true,
  },
  {
    title: "Project Beta",
    description:
      "An open-source tool that helps developers automate repetitive tasks. Gained traction with the community and is actively maintained.",
    techStack: ["Node.js", "TypeScript", "CLI", "Jest"],
    githubUrl: "https://github.com/yourusername/project-beta",
    featured: true,
  },
  {
    title: "Project Gamma",
    description:
      "A mobile-first web app for tracking personal goals and habits. Features real-time sync and offline support.",
    techStack: ["React", "Firebase", "Tailwind CSS", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-gamma",
    featured: true,
  },
  {
    title: "Project Delta",
    description:
      "A data visualization dashboard for exploring public datasets interactively.",
    techStack: ["D3.js", "React", "REST API"],
    liveUrl: "https://example.com",
    featured: false,
  },
  {
    title: "Project Epsilon",
    description:
      "A browser extension that improves reading experience on the web.",
    techStack: ["JavaScript", "Chrome Extension API", "CSS"],
    githubUrl: "https://github.com/yourusername/project-epsilon",
    featured: false,
  },
  {
    title: "Project Zeta",
    description:
      "A REST API boilerplate with authentication, rate limiting, and full test coverage.",
    techStack: ["Express", "TypeScript", "JWT", "Prisma"],
    githubUrl: "https://github.com/yourusername/project-zeta",
    featured: false,
  },
];
