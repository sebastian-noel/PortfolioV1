import { type Organization } from "@/types";

export const organizations: Organization[] = [
  {
    name: "Graphics Programming Knights",
    role: "Co-founder & Secretary",
    start: "July 2025",
    end: "Present",
    location: "Orlando, FL",
    achievements: [
      "Co-founded and scaled a nonprofit student organization to 160+ members, fostering an inclusive community",
      "Coordinated Render Jam event logistics and management for over 40 participants, culminating in 5 completed projects",
      "Drove membership growth by 35+ through strategic promotion at Opening Knight and the Knight Hacks RSO Fair",
      "Established a centralized Notion workspace for 6 officers to streamline event planning and operations by 50%"
    ],
    logo: "/images/organizations/gpk-logo.png",
    links: { org: "https://knightconnect.campuslabs.com/engage/organization/graphicsprogrammingknights" },
    media: [
      { type: "image", src: "/images/organizations/gpk-renderjam.png", alt: "GPK Render Jam Event" },
      { type: "image", src: "/images/organizations/gpk-workshop.png", alt: "GPK x KH Workshop" }],
  },
  {
    name: "Knight Hacks",
    role: "Mentee",
    start: "September 2024",    
    end: "Present",
    location: "Orlando, FL",
    achievements: [
      "Operation Meetings (Fall 2025)",
      "Kickstart Mentorship (Fall 2025)", 
      "Knight Hacks VIII (Oct 2025)", 
      "GemiKnights (Jun 2025)", 
      "Project Launch (Spring 2025)", 
      "Knight Hacks VII (October 2024)", 
      "Workshops (Fall 2024 - Present)",
    ],
    logo: "/images/organizations/kh-logo.png",
    links: { org: "https://club.knighthacks.org/" },
    media: [
      { type: "image", src: "/images/organizations/placeholder.png", alt: "Placeholder image" }],
  },
  {
    name: "Society of Hispanic Professional Engineers (SHPE) UCF",
    role: "Member",
    start: "August 2025",    
    end: "Present",
    location: "Orlando, FL",
    achievements: [
      "Placeholder text",
    ],
    logo: "/images/organizations/shpe-logo.png",
    links: { org: "https://shpe.org/" },
    media: [
      { type: "image", src: "/images/organizations/placeholder.png", alt: "Placeholder image" }],

  },
  {
    name: "ColorStack",
    role: "Member",
    start: "October 2025",    
    end: "Present",
    location: "Orlando, FL",
    achievements: [
      "Placeholder text",
    ],
    logo: "/images/organizations/colorstack-logo.png",
    links: { org: "https://www.colorstack.org/" },
    media: [
      { type: "image", src: "/images/organizations/placeholder.png", alt: "Placeholder image" }],

  },
  {
    name: "UCF EXCEL",
    role: "Student",
    start: "August 2024",    
    end: "May 2025",
    location: "Orlando, FL",
    achievements: [
      "Placeholder text",
    ],
    logo: "/images/organizations/excel-logo.png",
    links: { org: "https://excel.ucf.edu/" },
    media: [
      { type: "image", src: "/images/organizations/placeholder.png", alt: "Placeholder image" }],

  },
];
