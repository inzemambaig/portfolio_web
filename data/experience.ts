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
    role: "Senior Software Developer",
    company: "Infosys",
    companyUrl: "https://www.infosys.com",
    period: "Jan 2024 — Present",
    description:
      "Architected and deployed microservices on AWS using Java, Spring Boot, and PostgreSQL for high-volume banking applications. Led monolith-to-microservices migration, improving system scalability and deployment frequency by 30%. Containerized applications using Docker and orchestrated with Kubernetes on AWS, ensuring high availability. Implemented infrastructure as code using Terraform, reducing provisioning time from days to hours. Optimized JVM performance and database queries, reducing response latency by 20%. Established API security standards, encryption protocols, and compliance controls.",
    techStack: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Terraform"],
  },
  {
    role: "Senior Java Developer",
    company: "Cognizant",
    companyUrl: "https://www.cognizant.com",
    period: "Oct 2021 — Dec 2023",
    description:
      "Led secure cloud data migration of sensitive healthcare data from on-premise systems to Google Cloud Platform (GCP) for a US-based client, with primary focus on HIPAA compliance and protection of Patient Health Information (PHI). Collaborated with compliance teams to validate adherence to healthcare regulations, ensuring auditability and risk mitigation. Coordinated with US-based technical teams to validate data post-migration for downstream analytics. Designed and implemented event-driven architecture using Apache Kafka for real-time data processing. Built cloud-native microservices ensuring seamless inter-service communication and scalability. Developed asynchronous task scheduling systems for intelligent data flow automation.",
    techStack: ["Java", "Spring Boot", "GCP", "Apache Kafka", "Microservices", "PostgreSQL", "Docker"],
  },
  {
    role: "Java Developer",
    company: "Tata Consultancy Services",
    companyUrl: "https://www.tcs.com",
    period: "Feb 2019 — Sept 2021",
    description:
      "Developed backend modules using Spring and PostgreSQL to automate tax return processing. Improved performance by 20% via optimized multithreading and JMeter-based load testing. Integrated Prometheus for performance monitoring and bottleneck detection.",
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
