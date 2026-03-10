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

export const projects: Project[] = [
  {
    name: "Snippify",
    type: "DEVELOPER TOOLS",
    status: "Coming Soon",
    summary:
      "Snippify is a simple tool that lets you create and download beautiful images of your code.",
    href: "/projects",
  },
  {
    name: "Feedora",
    type: "DEVELOPER TOOLS",
    status: "Coming Soon",
    summary:
      "Your users have ideas. Don’t miss them. Embed our simple feedback form and start capturing valuable insights instantly",
    href: "/projects",
  },
  {
    name: "PaletteCraft",
    type: "DESIGN TOOLS",
    status: "Coming Soon",
    summary:
      "PaletteCraft is an AI-powered color palette generator built for Adobe Express. It helps users quickly generate beautiful combinations.",
    href: "/projects",
  },
];

export const heroMetrics = [
  {value: "Open", label: "Source first"},
  {value: "Comming Soon", label: "Active projects"},
  {value: "Comming Soon", label: "Total launches"},
];
