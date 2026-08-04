export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  /** Path relative to /public, e.g. /images/projects/my-project.png */
  image: string;
  imageAlt: string;
  /** When true, this project is sorted to the top of the list */
  featured?: boolean;
  githubUrl?: string;
  liveDemoUrl?: string;
};
