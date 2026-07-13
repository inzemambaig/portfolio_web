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
    role: "Senior AI/ML Developer",
    company: "Infosys",
    companyUrl: "https://www.infosys.com",
    period: "Jan 2024 — Present",
    description:
      "Built enterprise GenAI solutions using AWS Bedrock, Knowledge Bases, and Retrieval-Augmented Generation (RAG) for document understanding, semantic search, and intelligent recommendations. Designed LLM-powered workflows for customer onboarding and KYC validation, integrating both AWS Bedrock and Azure OpenAI endpoints. Developed Python and Java (Spring Boot) backend services and REST APIs to orchestrate AI workflows, backed by PostgreSQL for workflow and metadata persistence. Led monolith-to-microservices migration, improving deployment agility and system scalability by 30%. Containerized and deployed workloads on Kubernetes, with infrastructure automated via Terraform and CI/CD pipelines. Implemented JWT-based authentication, RBAC, and compliance-driven API security standards.",
    techStack: ["Python", "AWS Bedrock", "RAG", "LangChain", "Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "Terraform"],
  },
  {
    role: "Senior Application Engineer",
    company: "Cognizant",
    companyUrl: "https://www.cognizant.com",
    period: "Oct 2021 — Dec 2023",
    description:
      "Led secure cloud data migration of sensitive healthcare data from on-premise systems to Amazon Web Services (AWS) for a US-based client, with primary focus on HIPAA compliance and protection of Patient Health Information (PHI). Collaborated with compliance teams to validate adherence to healthcare regulations, ensuring auditability and risk mitigation. Coordinated with US-based technical teams to validate data post-migration for downstream analytics. Designed and implemented event-driven architecture using Apache Kafka for real-time data processing. Built cloud-native microservices ensuring seamless inter-service communication and scalability. Developed asynchronous task scheduling systems for intelligent data flow automation.",
    techStack: ["Java", "Spring Boot", "AWS", "Apache Kafka", "Microservices", "PostgreSQL", "Docker"],
  },
  {
    role: "Application Engineer",
    company: "Tata Consultancy Services",
    companyUrl: "https://www.tcs.com",
    period: "Feb 2019 — Sept 2021",
    description:
      "Developed backend modules using Spring and PostgreSQL to automate tax return processing, including large-scale VAT return workflows for a government client. Improved performance by 20% via optimized multithreading and JMeter-based load testing. Integrated Prometheus for performance monitoring and bottleneck detection.",
    techStack: ["Java", "Spring", "PostgreSQL", "JMeter", "Prometheus"],
  },
  {
    role: "Python Developer",
    company: "Lets Nurture",
    companyUrl: "https://www.letsnurture.com",
    period: "Jul 2018 — Jan 2019",
    description:
      "Built a Python Flask-based geolocation service converting coordinates into human-readable location codes.",
    techStack: ["Python", "Flask"],
  },
];
