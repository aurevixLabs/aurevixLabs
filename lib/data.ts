export type Capability = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  type: string;
  status: string;
  summary: string;
  href: string;
};

export type FeaturedProject = {
  name: string;
  type: string;
  status: string;
  summary: string;
  href: string;
};

export const capabilities: Capability[] = [
  {
    title: "Open Source Developer",
    description:
      "we build open source products, tools, and libraries that empower developers worldwide.",
  },
  {
    title: "Experimental Things",
    description:
      "We explore new ideas and technologies through research projects, prototypes, and early-stage products.",
  },
  {
    title: "Production Ready",
    description:
      "We build production-ready software products and systems for real-world use, with a focus on reliability, scalability, and user experience.",
  },
];

export const projects: Project[] = [];

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Aurevix UI",
    type: "Design System",
    status: "In Progress",
    summary:
      "A clean component toolkit focused on developer-first interfaces and practical defaults.",
    href: "/projects",
  },
  {
    name: "Lab Experiments",
    type: "R&D",
    status: "Active",
    summary:
      "Fast prototyping tracks for product ideas, interaction patterns, and technical validation.",
    href: "/projects",
  },
  {
    name: "Infra Notes",
    type: "Engineering",
    status: "Upcoming",
    summary:
      "Internal tooling and systems work that supports reliable releases and scalable product delivery.",
    href: "/projects",
  },
];

export const heroMetrics = [
  {value: "Open", label: "Source first"},
  {value: "Comming Soon", label: "Active projects"},
  {value: "Comming Soon", label: "Total launches"},
];
