import { type HeroContent } from "@/types";

export const heroContent: HeroContent = {
  name: "Sebastian Noel",
  title: "Software Engineer, Researcher, & Leader",
  blurb:
    "Computer Science @ University of Central Florida",
  location: "Orlando, Florida",
  headshot: "/images/profile/headshot.jpg",
  carousel: [
    {
      type: "image",
      src: "/images/carousel/shellhacks1.png",
      alt: "Hackathon team selfie at ShellHacks",
      description: "ShellHacks team posing after a late-night build session.",
    },
    {
      type: "image",
      src: "/images/carousel/shellhacks2.jpeg",
      alt: "ShellHacks awards stage photo",
      description: "Demoed our project and shared learnings with other teams.",
    },
    {
      type: "image",
      src: "/images/carousel/sharkbyte.jpeg",
      alt: "Sharkbyte hackathon group photo",
      description: "Collaborated on a rapid prototype with new teammates.",
    },
    {
      type: "image",
      src: "/images/carousel/research.jpg",
      alt: "Research presentation poster",
      description: "Sharing research findings with peers and mentors.",
    },
    {
      type: "image",
      src: "/images/carousel/dpv.jpg",
      alt: "Club event at DPV",
      description: "Community meetup and project showcase at DPV.",
    },
    {
      type: "image",
      src: "/images/carousel/knightro.png",
      alt: "Knightro mascot photo",
      description: "Catching a moment with Knightro on campus.",
    },
    {
      type: "image",
      src: "/images/carousel/knighthacksviii.jpg",
      alt: "KnightHacks VIII banner",
      description: "KnightHacks VIII kickoff with student builders.",
    },
  ],
  hobbies: [
    {
      title: "Computer Hardware & Peripherals",
      description: "Placeholder description about computer hardware and peripherals",
      media: [
        { type: "image", src: "/images/hobbies/placeholder.png", alt: "Placeholder image" },
      ],
    },
    {
      title: "Gaming",
      description: "Placeholder description about gaming",
      media: [
        { type: "image", src: "/images/hobbies/placeholder.png", alt: "Placeholder image" },
      ],
    },
  ],
  social: {
    github: "https://github.com/sebastian-noel",
    linkedin: "https://www.linkedin.com/in/sebastian-noel-ucf",
    resume: "/resume.pdf",
  },
};
