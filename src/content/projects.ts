export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  stack: string[];
  problem: string;
  built: string;
  outcome: string;
  links: {
    live?: string;
    github?: string;
  };
  images: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "kazi-mtaani",
    title: "Kazi Mtaani",
    tagline:
      "Connecting Kenya's informal workers to jobs — even without a smartphone.",
    role: "Full-stack developer (final-year university project)",
    stack: [
      "Next.js",
      "Node.js",
      "MySQL",
      "Africa's Talking (USSD)",
      "M-Pesa Daraja (escrow)",
    ],
    problem:
      "Many informal workers — fundis, cleaners, casual laborers — lack smartphones or reliable data, so app-only job platforms exclude the people who need them most.",
    built:
      "A marketplace where workers register and receive job offers via USSD on any phone, while clients post jobs through a web app. M-Pesa escrow holds payment until work is confirmed complete, protecting both sides of the transaction. Documented in a full 76-page academic submission covering system design, implementation, and testing.",
    outcome:
      "A working end-to-end platform that proves smartphone-optional access, USSD integration, and mobile-money escrow can combine into one coherent product — genuinely hard integration work for a solo final-year build.",
    links: {},
    images: [],
    featured: true,
  },
  {
    slug: "simplesurvey",
    title: "SimpleSurvey",
    tagline: "Build, share, and collect survey responses across web and mobile.",
    role: "Full-stack developer (pre-interview task for Sky World Limited)",
    stack: [
      "Node.js",
      "Express",
      "MySQL",
      "React",
      "Vite",
      "Tailwind CSS",
      "React Native",
      "Expo",
    ],
    problem:
      "The brief called for a complete survey platform delivered under a tight timeline, spanning a backend API, a web client, and a mobile app — with documentation good enough to hand off to another team.",
    built:
      "A REST API (Node/Express/MySQL) backing a React web app for building and analyzing surveys, plus a React Native/Expo mobile app for collecting responses on the go. Delivered alongside technical documentation and a client handover document.",
    outcome:
      "A single end-to-end delivery spanning three surfaces — API, web, and mobile — completed to a professional handover standard, not just a working demo.",
    links: {},
    images: [],
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
