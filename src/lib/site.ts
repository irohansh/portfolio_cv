export const site = {
  name: "Rohan Sharma",
  role: "Software Development Engineer",
  location: "Chennai, India",
  tagline:
    "I enjoy staying on top of what's new in tech and putting it to work — always learning something exciting, and always building something with it.",
  githubUsername: "irohansh",
  email: "irohansh235@gmail.com",
  url: "https://irohansh.tech",
  resume:
    "https://drive.google.com/file/d/1qf6LoqQAZaldal_tF2h5M7e5aGE3G-WV/view?usp=sharing",
  socials: {
    github: "https://github.com/irohansh",
    linkedin: "https://www.linkedin.com/in/rohansharma89",
    twitter: "https://x.com/irohansh0",
    leetcode: "https://leetcode.com/irohansh",
  },
} as const;

export const navLinks = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
] as const;

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Vellore Institute of Technology, Chennai",
    period: "2023 — 2027",
    cgpa: "9.1",
    intro:
      "College taught me consistency as much as computer science. Through coursework in systems, databases, and networks, I kept one simple routine: understand the concept in class, then build something with it before the week ended. That habit — steady, unglamorous, repeated — is where most of my growth has come from.",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Programming",
    ],
  },
] as const;

export const experience = [
  {
    role: "Backend Intern",
    company: "Cestrum",
    location: "Chennai, India",
    period: "Oct 2025 — Jun 2026",
    summary:
      "Worked on the backend of a community platform serving 2K+ users.",
    highlights: [
      "Built backend services and REST APIs with Node.js and Express.js powering posts, communities, and user interactions.",
      "Secured the APIs with JWT authentication, Google OAuth 2.0, and role-based access control.",
      "Optimized MongoDB schemas and query execution for faster data retrieval and better scalability.",
      "Delivered real-time engagement, content management, and notification modules in an Agile team using Git.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "OAuth 2.0", "Git"],
  },
  {
    role: "DevOps Intern",
    company: "Comviva",
    location: "Gurugram, India",
    period: "May 2025 — Jul 2025",
    summary:
      "Managed cloud infrastructure and automated delivery pipelines.",
    highlights: [
      "Worked on Infrastructure as Code (IaC) using Terraform to define and manage AWS resources through version-controlled configurations.",
      "Automated build and deployment workflows through CI/CD pipelines using GitHub Actions, working with Docker containers on Linux environments.",
    ],
    stack: ["Terraform", "AWS", "GitHub Actions", "Docker", "Linux", "CI/CD"],
  },
] as const;

export const skills = [
  {
    category: "Languages",
    items: ["Go", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Next.js", "Prisma", "REST APIs", "React"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "Docker", "AWS", "Linux", "Git", "Vercel"],
  },
  {
    category: "Practices",
    items: ["System Design", "Data Structures & Algorithms"],
  },
] as const;

export const certifications = [
  {
    name: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    badge:
      "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
    verifyUrl:
      "https://www.credly.com/badges/391e1ab9-aee4-470d-84c0-7a483505280d",
  },
  {
    name: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    badge: "https://brm-workforce.oracle.com/pdf/certview/images/OCPJSE17.png",
    verifyUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B3AD49F22B25A11FBC9E00237AA3F0778E7CCD95D0326FEB2BE130D602BCDD5D",
  },
] as const;

/**
 * Repos shown in the Projects section, in this order. Descriptions and
 * stacks here override whatever is (or isn't) set on GitHub — the star
 * counts and primary language still come live from the API.
 */
export const featuredRepos: Record<
  string,
  { description: string; stack: readonly string[] }
> = {
  MergeMind: {
    description:
      "A pull-request reviewer that works the way a good team does. A planner agent reads the diff and delegates to security, logic, and style specialists running in parallel, then a synthesiser folds everything into one clean, deduplicated review comment on the PR.",
    stack: ["TypeScript", "Node.js", "AI Agents", "GitHub API"],
  },
  IncidentOS: {
    description:
      "An incident-management platform that meets engineers where they already are — Slack and GitHub. AI-assisted triage sits on a hardened Express and PostgreSQL backend, with schema-validated APIs and rate limiting built in from day one.",
    stack: ["TypeScript", "Next.js", "Express", "PostgreSQL", "Slack API"],
  },
  autoreload: {
    description:
      "Edit, save, and your Go server is already restarting. A self-contained live-reload CLI built directly on fsnotify — debouncing, glob filtering, and careful process lifecycle management, with no third-party hot-reload frameworks in sight.",
    stack: ["Go", "fsnotify", "CLI"],
  },
  scoped_psi: {
    description:
      "Private contact discovery with context. Extends the FNP'04 Private Set Intersection protocol so identifiers only match when both the ID and its scope align — 'Alice at work' stays distinct from 'Alice in personal', and neither side learns anything else.",
    stack: ["Python", "Cryptography", "Private Set Intersection"],
  },
};
