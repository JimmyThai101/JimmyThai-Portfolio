import type { CaseStudy } from "@/types/case-study";

export const plannedquestCaseStudy: CaseStudy = {
  slug: "plannedquest",
  projectId: "plannedquest-lead-research",
  title: "PlannedQuest Lead Research Pipeline",
  hero: {
    role: "Full-Stack Software Development Intern",
    timeline: "Internship project, 2025–2026",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Playwright",
      "Server-Sent Events",
      "OpenAI API",
      "CSV",
      "PostgreSQL",
    ],
    summary:
      "A full-stack research platform that automates organization discovery, content collection, selective AI evaluation, and human review to produce structured lead data for college and career readiness outreach.",
  },
  sectionOrder: [
    "problem",
    "role",
    "architecture",
    "technologyStack",
    "designDecisions",
    "methodology",
    "aiIntegration",
    "designProcess",
    "collaboration",
    "results",
    "lessonsLearned",
    "nextSteps",
    "gallery",
  ],
  sections: {
    problem: {
      title: "Problem",
      paragraphs: [
        "PlannedQuest needed a reliable way to identify college and career readiness (CCR) decision-makers across school districts and community organizations. Manual research required visiting many organization websites, reading staff directories and program pages, and recording contacts with enough context to qualify relevance.",
        "That workflow was slow, inconsistent, and difficult to scale. Researchers could spend significant time on a single district without a repeatable process for comparing candidates, validating sources, or exporting results in a database-ready format.",
        "The objective was to build a research pipeline that could load seed organizations, discover relevant pages automatically, collect evidence-backed contact candidates, apply selective AI evaluation, and route results through human review before export.",
      ],
    },
    role: {
      title: "My Role",
      paragraphs: [
        "I was responsible for building and improving the research pipeline end to end. That included the Node.js and Express research engine, Playwright-based browsing, deterministic content collection, selective AI-assisted evaluation, source validation, and the Next.js review dashboard.",
        "I also owned the user experience for monitoring live research progress, reviewing candidate contacts, preparing CSV exports, and shaping data structures that could be loaded into PostgreSQL by another developer on the team.",
        "My work focused on making the system practical for real research sessions: observable progress, defensible outputs, and workflows that a reviewer could trust before accepting a lead.",
      ],
    },
    architecture: {
      title: "System Architecture",
      description:
        "The pipeline separates long-running research work from the review interface. Collection and evaluation run in the backend; reviewers interact with results through the dashboard.",
      steps: [
        { label: "Seed Organizations" },
        {
          label: "Node.js + Express Research Engine",
          description: "Orchestrates jobs, routes, and research state.",
        },
        {
          label: "Website Discovery",
          description: "Finds staff, program, and contact pages from seed URLs.",
        },
        {
          label: "Playwright Browser Automation",
          description: "Loads dynamic pages and captures rendered content.",
        },
        {
          label: "Content Collection",
          description: "Extracts text and metadata from discovered pages.",
        },
        {
          label: "Deterministic Filtering",
          description: "Applies rule-based qualification before AI review.",
        },
        {
          label: "Selective AI Evaluation",
          description: "Scores candidates only when structured evidence exists.",
        },
        {
          label: "Source Validation",
          description: "Requires URLs and page context for every accepted result.",
        },
        {
          label: "Next.js Review Dashboard",
          description: "Presents candidates, scores, and review status.",
        },
        { label: "Human Review" },
        {
          label: "CSV Export",
          description: "Produces structured files for downstream use.",
        },
        {
          label: "PostgreSQL-ready Data",
          description: "Column shapes prepared for database integration.",
        },
      ],
    },
    technologyStack: {
      title: "Technology Stack",
      description:
        "Each technology was chosen to support a specific part of the pipeline rather than to maximize stack complexity.",
      items: [
        {
          name: "Next.js",
          reason:
            "Provided the review dashboard, routing, and a React foundation for presenting research results and review actions in a maintainable application structure.",
        },
        {
          name: "React",
          reason:
            "Enabled interactive review interfaces for filtering candidates, inspecting source context, and updating review status without reloading the page.",
        },
        {
          name: "TypeScript",
          reason:
            "Added type safety across shared data shapes for contacts, organizations, review states, and export formats, which reduced errors in a multi-step pipeline.",
        },
        {
          name: "Node.js",
          reason:
            "Served as the runtime for the research engine and allowed the same language to be used across collection, evaluation, and API coordination.",
        },
        {
          name: "Express",
          reason:
            "Offered a straightforward way to expose research endpoints, stream progress events, and coordinate long-running jobs from the dashboard.",
        },
        {
          name: "Playwright",
          reason:
            "Handled modern organization websites that rely on client-side rendering or navigation patterns that static HTTP requests alone could not reliably capture.",
        },
        {
          name: "Server-Sent Events",
          reason:
            "Gave reviewers live visibility into research progress without polling, which was important for multi-step jobs that could run for extended periods.",
        },
        {
          name: "OpenAI API",
          reason:
            "Supported selective qualification of contact candidates when deterministic rules identified plausible matches but needed semantic judgment over collected evidence.",
        },
        {
          name: "CSV",
          reason:
            "Provided a portable export format that reviewers could inspect immediately and that could be transformed into database inserts without blocking on full backend integration.",
        },
        {
          name: "PostgreSQL",
          reason:
            "Defined the target data model for durable lead storage. Exports were shaped to align with PostgreSQL-ready schemas handled by another developer on the team.",
        },
      ],
    },
    designDecisions: {
      title: "Design Decisions",
      items: [
        {
          decision: "Separate frontend and backend",
          reason:
            "Research jobs are long-running and browser-heavy, while the dashboard should stay responsive for review work.",
          tradeoffs:
            "Added deployment and coordination complexity compared with a single-process application.",
          benefits:
            "Isolated failures, clearer responsibilities, and better UX during active research runs.",
        },
        {
          decision: "Use Server-Sent Events for progress",
          reason:
            "Reviewers needed continuous feedback while organizations moved through discovery, collection, and evaluation.",
          tradeoffs:
            "SSE is one-way and less flexible than WebSockets for bidirectional communication.",
          benefits:
            "Simple to implement over HTTP and sufficient for streaming status updates to the dashboard.",
        },
        {
          decision: "Use Playwright for collection",
          reason:
            "Many target sites expose staff or program information only after client-side rendering or navigation.",
          tradeoffs:
            "Browser automation is slower and more resource-intensive than plain HTTP fetching.",
          benefits:
            "Higher fidelity page capture and fewer missed contacts on dynamic sites.",
        },
        {
          decision: "Collect deterministically before AI",
          reason:
            "AI should evaluate evidence, not replace the collection step or invent missing context.",
          tradeoffs:
            "Required more upfront parsing and filtering logic before any model call.",
          benefits:
            "Lower token usage, clearer audit trail, and reduced risk of unsupported AI outputs.",
        },
        {
          decision: "Require human review",
          reason:
            "Lead quality depends on organizational context that automated scoring alone cannot guarantee.",
          tradeoffs:
            "Review adds manual effort even when automation produces strong candidates.",
          benefits:
            "Final exported data reflects reviewer judgment and verified evidence.",
        },
        {
          decision: "Store source URLs with every candidate",
          reason:
            "A contact without provenance is difficult to trust, defend, or revisit during review.",
          tradeoffs:
            "Extra metadata to collect, validate, and display in the dashboard.",
          benefits:
            "Reviewers can inspect the exact page that supported each result.",
        },
        {
          decision: "Export to CSV first",
          reason:
            "The team needed inspectable outputs before full database ingestion was complete.",
          tradeoffs:
            "CSV is not as expressive as a live database schema for relationships and constraints.",
          benefits:
            "Fast handoff, easy manual QA, and a stable bridge to PostgreSQL loading.",
        },
        {
          decision: "Prepare PostgreSQL-ready data shapes",
          reason:
            "Another developer was handling database integration, so exports needed predictable columns and types.",
          tradeoffs:
            "Required coordination on schema expectations and export conventions.",
          benefits:
            "Reduced rework between research output and durable storage.",
        },
      ],
    },
    methodology: {
      title: "Methodology",
      description:
        "Each organization moved through the same repeatable workflow from seed input to export-ready output.",
      steps: [
        {
          label: "Load organization",
          description: "Start from a seed record with name, domain, and campaign context.",
        },
        {
          label: "Discover pages",
          description: "Search the site for staff directories, leadership pages, and CCR program pages.",
        },
        {
          label: "Collect content",
          description: "Use Playwright to capture rendered page text and relevant metadata.",
        },
        {
          label: "Filter candidates",
          description: "Apply deterministic rules to remove obvious noise before model evaluation.",
        },
        {
          label: "Evaluate with AI",
          description: "Send structured evidence to the model only for plausible candidates.",
        },
        {
          label: "Validate sources",
          description: "Attach URLs and page context to every result considered for review.",
        },
        {
          label: "Human review",
          description: "Reviewers accept, reject, or defer candidates in the dashboard.",
        },
        {
          label: "Export",
          description: "Generate CSV output aligned with downstream PostgreSQL loading.",
        },
      ],
    },
    aiIntegration: {
      title: "AI Integration",
      paragraphs: [
        "AI was used selectively as part of the evaluation layer. I did not train or fine-tune a model for this project. Instead, the system relied on prompt refinement, qualification rules, structured inputs, source validation, token optimization, fallback modes, and human verification.",
        "Deterministic collection ran first. The model received bounded context such as page excerpts, role titles, and organization metadata rather than open-ended instructions to find contacts on its own. Prompts were refined to emphasize evidence-based qualification and to reject candidates when source material was weak or ambiguous.",
        "AI was never allowed to invent contacts. Every accepted result required supporting evidence from collected pages, and reviewers could inspect the source URL behind each candidate. When model output was unavailable or low confidence, the pipeline could fall back to deterministic results or route items to manual review.",
        "This approach kept AI useful for semantic judgment while preserving auditability. The goal was not maximum automation, but higher-quality review input with defensible provenance.",
      ],
    },
    designProcess: {
      title: "Design Loop",
      description:
        "Quality improved through repeated observation and iteration rather than a single upfront design pass.",
      steps: [
        { label: "Observe", description: "Run the pipeline on real organizations." },
        { label: "Identify issue", description: "Find missed pages, noisy candidates, or review friction." },
        { label: "Hypothesis", description: "Propose a rule, prompt, or UI change." },
        { label: "Implement", description: "Update collection, evaluation, or dashboard behavior." },
        { label: "Test", description: "Re-run representative organizations and compare outputs." },
        { label: "Review", description: "Inspect results with PlannedQuest feedback." },
        { label: "Improve", description: "Keep changes that improved accuracy or reviewer efficiency." },
      ],
    },
    collaboration: {
      title: "Collaboration",
      paragraphs: [
        "I worked with PlannedQuest through regular feedback on research quality, dashboard usability, and export requirements. Requirement discussions focused on which contact types mattered for CCR outreach, what evidence reviewers needed to see, and how exported data should map to downstream workflows.",
        "Review meetings helped prioritize fixes when the pipeline missed relevant pages, produced noisy candidates, or made manual review slower than necessary. That feedback directly shaped filtering rules, dashboard presentation, and export fields.",
        "I also coordinated with another developer responsible for PostgreSQL integration. My responsibility was to keep CSV exports structured, consistent, and aligned with the expected database schema so their loading work could proceed without reformatting research output by hand.",
      ],
    },
    results: {
      title: "Results",
      paragraphs: [
        "The completed system supported end-to-end research runs from seeded organizations through review and export. The dashboard made live progress visible, allowed reviewers to inspect candidate evidence, and produced structured CSV output for downstream use.",
        "During project evaluation, the pipeline was run against a final set of ten districts. That run produced qualified organizations and strong CCR contact candidates that could be reviewed and exported through the dashboard workflow.",
        "These outcomes reflect the results of that specific evaluation run and the intended workflow of the system. They are not presented as universal performance guarantees across all organization types or future campaigns.",
      ],
    },
    lessonsLearned: {
      title: "Lessons Learned",
      paragraphs: [
        "Architecture mattered most when jobs were long-running and reviewers needed visibility without blocking the UI. Separating collection from review made the system easier to reason about and safer to iterate on.",
        "Prompt engineering was most effective when inputs were already structured and bounded. The best improvements came from better evidence collection and qualification rules, not from asking the model to do more autonomous research.",
        "Data validation and source tracking were as important as scoring. Review trust increased when every candidate had a clear URL and page context attached.",
        "Research automation works best as a hybrid system: deterministic collection and filtering first, selective AI second, and human review last. That balance produced outputs that were both scalable and defensible.",
      ],
    },
    nextSteps: {
      title: "Next Steps",
      paragraphs: [
        "The next scalability step is JSON-driven campaign configuration. Instead of hardcoding organization types, page discovery patterns, qualification rules, and export fields for one use case, the pipeline can read structured JSON that defines a research campaign.",
        "That approach would allow new industries, new research campaigns, new organization types, and new export formats without rebuilding the application core. The engine would remain the same while configuration files define seeds, filters, prompts, and output mappings.",
        "In practice, this means adding a campaign schema, validating configuration at job start, and keeping the dashboard generic enough to render review states for multiple campaign templates.",
      ],
    },
    gallery: {
      title: "Gallery",
      items: [
        {
          src: "/images/projects/plannedquest/architecture.svg",
          alt: "PlannedQuest system architecture diagram placeholder",
          caption:
            "High-level architecture from seed organizations through research engine, review dashboard, and export.",
        },
        {
          src: "/images/projects/plannedquest/dashboard.svg",
          alt: "PlannedQuest review dashboard placeholder",
          caption:
            "Review dashboard for inspecting candidate contacts, scores, and review status.",
        },
        {
          src: "/images/projects/plannedquest/research-engine.svg",
          alt: "PlannedQuest research engine placeholder",
          caption:
            "Research engine coordinating discovery, Playwright collection, and evaluation jobs.",
        },
        {
          src: "/images/projects/plannedquest/validation.svg",
          alt: "PlannedQuest source validation placeholder",
          caption:
            "Source validation view showing evidence URLs attached to candidate results.",
        },
        {
          src: "/images/projects/plannedquest/csv-export.svg",
          alt: "PlannedQuest CSV export placeholder",
          caption:
            "CSV export workflow producing structured, PostgreSQL-ready lead data.",
        },
        {
          src: "/images/projects/plannedquest/before-after.svg",
          alt: "PlannedQuest before and after workflow placeholder",
          caption:
            "Manual research workflow compared with the automated pipeline and review process.",
        },
      ],
    },
  },
};
