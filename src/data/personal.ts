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
      src: "/images/carousel/shellhacks2.jpeg",
      alt: "ShellHacks hackathon team photo",
      description: "Team photo before starting our hackathon project at ShellHacks.",
    },
    {
      type: "image",
      src: "/images/carousel/shellhacks1.png",
      alt: "ShellHacks Statefarm team winners photo",
      description: "Celebrating our Statefarm award at ShellHacks with my team!",
    },
    {
      type: "image",
      src: "/images/carousel/sharkbyte.jpeg",
      alt: "SharkByte hackathon team photo",
      description: "Team photo at SharkByte after building TideSense!",
    },
    {
      type: "image",
      src: "/images/carousel/research.jpg",
      alt: "Photo near Research plaque",
      description: "Taken shortly after my team presented our \"Multimodal Deep Learning for Photovoltaic Modules\" project at the DARTS research showcase event.",
    },
    {
      type: "image",
      src: "/images/carousel/dpv.jpg",
      alt: "Group DARTS photo",
      description: "Photo with all the DARTS teams after the research showcase event.",
    },
    {
      type: "image",
      src: "/images/carousel/knightro.png",
      alt: "Photo with Knightro",
      description: "Photo I took with Knightro, the UCF mascot, at KnightHacks VII!",
    },
    {
      type: "image",
      src: "/images/carousel/knighthacksviii.jpg",
      alt: "Knight Hacks VIII hackathon team photo",
      description: "Team photo at KnightHacks VIII while developing Alto.",
    },
  ],
  hobbies: [
    {
      title: "Computer Hardware & Peripherals",
      description: "I enjoy building and optimizing my PC setup, from selecting the right components and specs to fine-tuning peripherals for the best experience.",
      media: [
        { type: "image", src: "/images/hobbies/placeholder.png", alt: "Computer setup" },
      ],
      details: {
        sections: [
          {
            title: "Computer Specs",
            items: [
              { name: "GPU", description: "Gigabyte NVIDIA GeForce RTX 5070 Ti AERO OC 16GB", link: "https://www.gigabyte.com/Graphics-Card/GV-N507TAERO-OC-16GD" },
              { name: "CPU", description: "AMD Ryzen 7 7800X3D 8-Core 16-Thread", link: "https://www.amd.com/en/products/processors/desktops/ryzen/7000-series/amd-ryzen-7-7800x3d.html" },
              { name: "RAM", description: "Team T-Force Delta RGB 32GB (2 x 16GB) DDR5 6000 CL30", link: "https://www.teamgroupinc.com/en/product-detail/memory/T-FORCE/delta-rgb-ddr5-white/delta-rgb-ddr5-white-FF4D532G6000HC30DC01/" },
              { name: "Motherboard", description: "B650E AORUS ELITE X AX ICE", link: "https://www.gigabyte.com/Motherboard/B650E-AORUS-ELITE-X-AX-ICE-rev-10-11" },
              { name: "Storage 1", description: "WD Black SN850X 2TB NVMe SSD (Windows 11 Pro, for gaming)", link: "https://shop.sandisk.com/products/ssd/internal-ssd/wd-black-sn850x-nvme-ssd?sku=WDS200T2X0E-00BCA0" },
              { name: "Storage 2", description: "WD Blue SN5000 1TB NVMe SSD (Kubuntu, for software development)", link: "https://shop.sandisk.com/products/ssd/internal-ssd/wd-blue-sn5000-nvme-ssd?sku=WDS100T4B0E-00CNZ0" },
              { name: "Power Supply", description: "Lian Li EDGE Gold 1000W 80+ Gold Fully Modular", link:"https://lian-li.com/product/edge-gold/" },
              { name: "Case", description: "Lian Li O11 Dynamic Evo RGB", link: "https://lian-li.com/product/o11d-evo-rgb/" },
              { name: "CPU Cooler", description: "Phanteks Glacier One 360M25 G2", link: "https://phanteks.com/product/glacier-one-360m25g2-white/" },
              { name: "Fans" , description: "Phanteks M25G2-120 (6x Reverse, 4x Regular)", link: "https://phanteks.com/product/m25g2-120-white-d-rgb/" },
            ],
          },
          {
            title: "Monitor",
            items: [
              { name: "Primary Monitor", description: "LG 27GX700A-B 27", link: "https://www.lg.com/us/monitors/lg-27gx700a-b-gaming-monitor" },
            ],
          },
          {
            title: "Keyboard",
            items: [
              { name: "Switches", description: "Akko Rosewood", link: "https://en.akkogear.com/product/akko-rosewood-switch/" },
              { name: "Keycaps", description: "Keychron Double Shot PBT OSA Keycaps", link: "https://www.keychron.com/products/double-shot-pbt-osa-full-set-keycap-set?variant=40561987387481" },
              { name: "Keyboard", description: "Monsgeek M1 V5 Via Rapid Disassembly", link: "https://www.monsgeek.com/product/m1-v5-via-rapid-disassembly/" },
            ],
          },
          {
            title: "Mouse",
            items: [
              { name: "Mouse", description: "Razer Viper V3 Pro", link: "https://www.razer.com/gaming-mice/razer-viper-v3-pro" },
            ],
          },
        ],
      },
    },
    {
      title: "Gaming",
      description: "Placeholder description about gaming",
      media: [
        { type: "image", src: "/images/hobbies/placeholder.png", alt: "Placeholder image" },
      ],
    },
  ],
  skills: [
    // Programming Languages
    { name: "Python", icon: "/placeholder.png", type: "Programming Languages" },
    { name: "Java", icon: "/placeholder.png", type: "Programming Languages" },
    { name: "TypeScript", icon: "/placeholder.png", type: "Programming Languages" },
    { name: "JavaScript", icon: "/placeholder.png", type: "Programming Languages" },
    { name: "C", icon: "/placeholder.png", type: "Programming Languages" },
    { name: "C++", icon: "/placeholder.png", type: "Programming Languages" },
    { name: "SQL", icon: "/placeholder.png", type: "Programming Languages" },
    
    // Frameworks/Libraries - Frontend
    { name: "React", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Frontend" },
    { name: "Next.js", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Frontend" },
    { name: "TailwindCSS", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Frontend" },
    
    // Frameworks/Libraries - Backend
    { name: "Node.js", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Backend" },
    { name: "Express", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Backend" },
    { name: "Django", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Backend" },
    
    // Frameworks/Libraries - Database
    { name: "PostgreSQL", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Database" },
    { name: "MongoDB", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Database" },
    { name: "Prisma", icon: "/placeholder.png", type: "Frameworks/Libraries", category: "Database" },
    
    // Developer Tools - DevOps
    { name: "Git", icon: "/placeholder.png", type: "Developer Tools", category: "DevOps" },
    { name: "Docker", icon: "/placeholder.png", type: "Developer Tools", category: "DevOps" },
    { name: "GitHub", icon: "/placeholder.png", type: "Developer Tools", category: "DevOps" },
    
    // Developer Tools - Cloud
    { name: "AWS", icon: "/placeholder.png", type: "Developer Tools", category: "Cloud" },
  ],
  social: {
    github: "https://github.com/sebastian-noel",
    linkedin: "https://www.linkedin.com/in/sebastian-noel-ucf",
    resume: "/resume.pdf",
  },
};
