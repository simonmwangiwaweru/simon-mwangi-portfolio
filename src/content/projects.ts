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
    repos?: { label: string; url: string }[];
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
      "Node.js",
      "Express",
      "MongoDB",
      "Africa's Talking (USSD)",
      "M-Pesa Daraja (escrow)",
      "Google OAuth",
    ],
    problem:
      "Many informal workers — fundis, cleaners, casual laborers — lack smartphones or reliable data, so app-only job platforms exclude the people who need them most.",
    built:
      "A marketplace where workers register and receive job offers via USSD on any phone, while clients post jobs through a web app with Google sign-in, job browsing, and worker/admin dashboards. M-Pesa escrow holds payment until work is confirmed complete, protecting both sides of the transaction. Documented in a full 76-page academic submission covering system design, implementation, and testing.",
    outcome:
      "A working end-to-end platform that proves smartphone-optional access, USSD integration, and mobile-money escrow can combine into one coherent product — genuinely hard integration work for a solo final-year build.",
    links: {
      live: "https://kazi-mtaani.onrender.com",
      github: "https://github.com/simonmwangiwaweru/kazi-mtaani",
    },
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
    links: {
      repos: [
        {
          label: "API",
          url: "https://github.com/simonmwangiwaweru/simple-survey-api",
        },
        {
          label: "Web",
          url: "https://github.com/simonmwangiwaweru/simple-survey-web",
        },
        {
          label: "Mobile",
          url: "https://github.com/simonmwangiwaweru/simple-survey-mobile",
        },
      ],
    },
    images: [],
    featured: true,
  },
  {
    slug: "this-is-margs",
    title: "This Is Margs",
    tagline:
      "A Next.js ecommerce storefront with M-Pesa checkout, Supabase, and an admin dashboard.",
    role: "Full-stack developer (personal project)",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "M-Pesa Daraja",
      "Tailwind CSS",
    ],
    problem:
      "Wanted to prove a complete ecommerce store — catalog, cart, checkout, payments, and admin — could be built and owned end-to-end rather than assembled from Shopify or WooCommerce.",
    built:
      "A full storefront: product shop and detail pages, a cart drawer, a checkout flow wired to M-Pesa Daraja for payment, Supabase for product/order data, and an admin area for managing the catalog. Rounded out with a newsletter signup and a WhatsApp contact button for customer support.",
    outcome:
      "A live, deployed store that proves direct M-Pesa payment integration outside of an academic context, and adds Supabase/Postgres to the stack alongside the MySQL work elsewhere.",
    links: {
      live: "https://this-is-margs.vercel.app",
      github: "https://github.com/simonmwangiwaweru/this-is-margs",
    },
    images: [],
    featured: false,
  },
  {
    slug: "water-tracker",
    title: "Water Debt Tracker",
    tagline:
      "An installable, offline-first PWA for tracking who owes what for water deliveries.",
    role: "Full-stack developer (personal/family project)",
    stack: ["Next.js", "TypeScript", "Supabase", "Dexie.js (IndexedDB)", "PWA"],
    problem:
      "A family water-delivery business was tracking customer credit from memory and paper — nobody could reliably answer who owed what, who logged a sale, or how much was outstanding overall.",
    built:
      "A shared web app, installable to a phone home screen, where any family member logs sales and payments and sees the same live picture of customer balances. Every entry is attributed to a family member without full user accounts. Writes land in local storage first (Dexie/IndexedDB) and sync to Supabase in the background, so logging a sale works even with no signal — a real constraint for deliveries in areas with patchy connectivity. Overdue balances are flagged automatically on the dashboard.",
    outcome:
      "A purpose-built tool solving a real operational problem for a real business, with deliberate trade-offs (no login, local-first writes, offline queueing) made for the actual constraints of the use case rather than by default.",
    links: {
      live: "https://water-tracker-theta-ten.vercel.app",
      github: "https://github.com/simonmwangiwaweru/water-tracker",
    },
    images: [],
    featured: false,
  },
  {
    slug: "michael",
    title: "MICHAEL",
    tagline:
      "A goal-tracking mobile app with an AI coach that checks in on your progress.",
    role: "Full-stack developer (personal project)",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "OpenRouter (LLM)",
    ],
    problem:
      "Goal-tracking apps are usually just checklists — they don't push back, ask questions, or notice when you've gone quiet on a goal.",
    built:
      "A dark-themed Expo app for setting goals with deadlines and milestones, logging progress, and tracking productivity stats. Each goal has its own AI chat tab — backed by free-tier OpenRouter models — that acts as a coach, reviewing progress and prompting check-ins. Data is local-first (AsyncStorage) with Supabase sync and reminder notifications for goals gone quiet.",
    outcome:
      "A working mobile app that pairs habit-tracking with an actual conversational coach rather than static reminders — the clearest AI/LLM-integration project in the lineup.",
    links: {},
    images: [],
    featured: false,
  },
  {
    slug: "the-snicker-lab",
    title: "The Snicker Lab",
    tagline:
      "A vanilla JavaScript ecommerce site for selling sneakers — shop, cart, checkout, and admin, no framework.",
    role: "Full-stack developer (personal project)",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    problem:
      "Wanted to prove that ecommerce fundamentals — cart state, a multi-step checkout, product administration — hold up without leaning on a framework to paper over the details.",
    built:
      "A multi-page sneaker store: a shop listing, product detail pages, a cart, a checkout flow, and a lightweight admin page for managing inventory — all in plain HTML, CSS, and JavaScript, deployed on Vercel.",
    outcome:
      "A fast, dependency-free storefront that shows the fundamentals are solid, not just framework fluency.",
    links: {
      live: "https://the-snicker-lab.vercel.app",
      github: "https://github.com/simonmwangiwaweru/the-snicker-lab",
    },
    images: [],
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
