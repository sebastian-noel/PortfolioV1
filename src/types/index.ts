export interface SocialLinks {
  github: string;
  linkedin: string;
  resume: string;
  email?: string;
  devpost?: string;
}

export type MediaType = "image" | "video";

export interface MediaItem {
  type: MediaType;
  src: string;
  alt: string;
  description?: string;
}

export interface ProjectLinks {
  github: string;
  live?: string;
  demo?: string;
  devpost?: string;
  video?: string;
}

export interface Teammate {
  name: string;
  linkedin?: string;
}

export interface ProjectDetails {
  content: string; // Markdown-like content for detailed description
  diagrams?: MediaItem[]; // Additional images for diagrams/examples
}

export interface ProjectColorScheme {
  primary: string;      // Award bg, tech text, purpose, icons/links, button borders
  secondary: string;    // Card background
  techBg: string;       // Technology pill background
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  media: MediaItem[];
  links: ProjectLinks;
  purpose?: string;
  award?: string;
  colorScheme?: ProjectColorScheme;
  teamSize?: number;
  teammates?: Teammate[];
  details?: ProjectDetails;
  gallery?: MediaItem[]; // Additional photos for the carousel in expanded view
}

export interface ExperienceLinks {
  label: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo: string;
  links?: ExperienceLinks[];
  media?: MediaItem[];
  colorScheme?: ProjectColorScheme;
}



export interface Hobby {
  title: string;
  description: string;
  media?: MediaItem[];
}

export interface HeroContent {
  name: string;
  title: string;
  blurb: string;
  location: string;
  headshot: string;
  carousel: MediaItem[];
  hobbies: Hobby[];
  social: SocialLinks;
}
