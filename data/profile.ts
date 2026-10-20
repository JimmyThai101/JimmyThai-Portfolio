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

  /**
   * Extra page at /about. Add photos or story blocks here whenever you want
   * to keep talking — the page grows from these lists.
   */
  moreAbout: {
    title: "More about me",
    intro:
      "This is the extra tab — the stuff that does not fit in a two-paragraph résumé bio. Santa Ana, USC, graduation, and whatever else I feel like putting here.",
    stories: [
      {
        title: "Santa Ana → USC",
        body: "I am heading to USC for Computer Engineering and Computer Science. The pennant photo is from signing day at Santa Ana High School — that is the version of me that is not a GitHub profile.",
      },
      {
        title: "Class of 2026",
        body: "I graduated in 2026. I like building things, and I also like being a person who went to Saints, held a Trojans pennant, and walked the ceremony with everyone else. I will keep adding to this page.",
      },
    ],
    photos: [
      {
        src: "/images/about/usc-signing.jpg",
        alt: "Jimmy Thai holding a USC Trojans pennant at Santa Ana High School",
        caption: "Signing with USC at Santa Ana High School",
        featured: true,
        objectPosition: "center 22%",
      },
      {
        src: "/images/about/graduation-portrait.jpg",
        alt: "Jimmy Thai in cap and gown at high school graduation",
        caption: "Graduation, Class of 2026",
        featured: false,
        objectPosition: "center 12%",
      },
      {
        src: "/images/about/graduation-walk.jpg",
        alt: "Jimmy Thai walking the graduation ceremony in a Class of 2026 stole",
        caption: "Walking the ceremony",
        featured: false,
        objectPosition: "center 42%",
      },
    ],
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
