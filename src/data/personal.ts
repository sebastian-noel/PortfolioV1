import { type HeroContent } from "@/types";

export const heroContent: HeroContent = {
  name: "Sebastian Noel",
  title: "Software Engineer, Researcher, & Leader",
  blurb:
    "Student at the University of Central Florida",
  location: "Orlando, Florida",
  headshot: "/images/profile/headshot.jpg",
  carousel: [
    "/images/carousel/shellhacks1.png",
    "/images/carousel/shellhacks2.jpeg",
    "/images/carousel/sharkbyte.jpeg",
    "/images/carousel/research.jpg",
    "/images/carousel/dpv.jpg",
    "/images/carousel/knightro.png",
    "/images/carousel/knighthacksviii.jpg",
  ],
  hobbies: [
    {
      title: "Computer Hardware + Peripherals and Accessories",
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
