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
    title: "Open Build Stack",
    description:
      "Reusable components, playbooks, and tooling that accelerate product teams without locking them in.",
  },
  {
    title: "Experimental Systems",
    description:
      "Rapid prototypes for edge computing, AI workflows, and automation pipelines where speed to insight matters.",
  },
  {
    title: "Production Architecture",
    description:
      "Reliable services with observability, security baselines, and scalable deployment patterns from day one.",
  },
];

export const projects: Project[] = [
  {
    name: "Signal Forge",
    type: "DEVELOPER PLATFORM",
    status: "Live",
    summary:
      "A deployment orchestration panel for shipping multi-service apps in minutes with guardrails built in.",
    href: "#",
  },
  {
    name: "NodePilot",
    type: "INFRASTRUCTURE",
    status: "Beta",
    summary:
      "Control plane for distributed edge nodes with low-latency service placement and automatic failover.",
    href: "#",
  },
  {
    name: "LensKit",
    type: "PRIVACY TOOLS",
    status: "R&D",
    summary:
      "Browser-native utility suite for secure capture, local processing, and encrypted collaboration workflows.",
    href: "#",
  },
];

export const processSteps = [
  "Discovery Sprint",
  "Rapid Prototype",
  "Production Delivery",
];

export const studioHighlights = [
  "Average MVP delivery in 4-6 weeks",
  "Cross-functional product + engineering squad",
  "Transparent handoff with clear documentation",
];

export const heroMetrics = [
  {value: "12", label: "Active projects"},
  {value: "28", label: "Total launches"},
  {value: "Open", label: "Source first"},
];
