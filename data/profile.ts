export const profile = {
  name: "Jimmy Thai",
  headline: "Computer Engineering and Computer Science Student",
  heroDescription:
    "I build full-stack applications, automation tools, and AI-assisted research systems. I am interested in software engineering, artificial intelligence, and creating practical technology that solves real problems.",
  about:
    "I am an incoming Computer Engineering and Computer Science student at USC. I enjoy building practical software — from full-stack apps and automation tools to AI-assisted research systems that make messy workflows easier to trust and review.",
  aboutDetails:
    "My experience includes web crawling, data processing, dashboard design, and STEM leadership. I like understanding how systems work end to end, improving inefficient processes, and turning ideas into polished products people can actually use.",
  headshot: {
    src: "/images/jimmy-thai-headshot.png",
    alt: "Professional headshot of Jimmy Thai in a suit",
  },

  email: "jimmythai2108@gmail.com",
  githubUrl: "https://github.com/JimmyThai101",
  linkedinUrl: "https://www.linkedin.com/in/jimmy-thai-a6521b31a/",
  resumeUrl: "https://drive.google.com/file/d/15ZxCSJLDG2DaJs8O_KvhR9z6o_Vn6t5R/view?usp=sharing",

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
