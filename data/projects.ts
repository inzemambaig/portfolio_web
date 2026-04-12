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
    title: "GenAI Customer Onboarding & Personalization Platform",
    description:
      "POC for Danske Bank — a GenAI-powered onboarding assistant using AWS Bedrock Agents. Built LLM-driven workflows for customer data collection, KYC validation, and product recommendations. Integrated AWS Knowledge Bases for context-aware responses and designed an end-to-end onboarding-to-fulfillment flow using microservices.",
    techStack: ["AWS Bedrock", "LLM", "Microservices", "AWS Knowledge Bases", "GenAI"],
    featured: true,
  },
  {
    title: "AI Mock Interview & Resume Analysis Platform",
    description:
      "AI-powered platform to analyze resumes and generate role-specific interview questions. Integrated AI models to extract skills and experience from resumes, implemented LLM-based answer evaluation with structured feedback reports, and designed a complete workflow from resume upload to interview simulation.",
    techStack: ["AI/LLM", "Resume Parsing", "Next.js", "TypeScript"],
    liveUrl: "https://mockintervu.netlify.app/",
    featured: true,
  },
];
