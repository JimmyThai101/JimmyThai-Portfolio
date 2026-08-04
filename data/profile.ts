export const profile = {
  name: "Jimmy Thai",
  headline: "Computer Engineering and Computer Science Student",
  heroDescription:
    "I build full-stack applications, automation tools, and AI-assisted research systems. I am interested in software engineering, artificial intelligence, and creating practical technology that solves real problems.",
  about:
    "I am an incoming Computer Engineering and Computer Science student at USC. My experience includes full-stack development, web crawling, data processing, AI-assisted research workflows, and STEM leadership. I enjoy understanding how systems work, improving inefficient processes, and turning ideas into usable software.",

  // Update these placeholders with your real links
  email: "your.email@example.com",
  githubUrl: "https://github.com/yourusername",
  linkedinUrl: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume/Jimmy-Thai-Resume.pdf",

  experience: [
    {
      title: "Full-Stack Software Development Intern",
      organization: "PlannedQuest",
      description:
        "Built and improved a full-stack lead-research system for identifying college and career readiness decision-makers across school districts and community organizations. Developed data collection workflows, a research dashboard, CSV exports, and AI-assisted validation processes. Worked with Next.js, React, TypeScript, Node.js, Express, Server-Sent Events, Playwright, and PostgreSQL-ready data.",
    },
  ],

  skills: {
    Languages: ["Python", "JavaScript", "TypeScript", "Java", "HTML", "CSS"],
    Frontend: ["React", "Next.js", "Tailwind CSS"],
    "Backend and APIs": [
      "Node.js",
      "Express",
      "REST APIs",
      "Server-Sent Events",
    ],
    "Data and AI": [
      "PostgreSQL",
      "CSV Processing",
      "Web Crawling",
      "OpenAI API",
      "Retrieval-Augmented Generation concepts",
      "AI-assisted workflows",
    ],
    Tools: ["Git", "GitHub", "Cursor", "VS Code", "Playwright"],
  },
} as const;

export type Profile = typeof profile;
