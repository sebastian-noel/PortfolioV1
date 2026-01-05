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

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  media: MediaItem[];
  links: ProjectLinks;
  highlight?: string;
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
}

export interface OrganizationLinks {
  org?: string;
}

export interface Organization {
  name: string;
  role: string;
  start: string;
  end: string;
  location: string;
  achievements: string[];
  logo: string;
  links?: OrganizationLinks;
  media?: MediaItem[];
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
