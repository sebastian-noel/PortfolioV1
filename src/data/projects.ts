import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "TideSense",
    description: "Mobile beach safety app to provide real-time riptide detection using a smartphone camera",
    technologies: ["React Native (Expo)", "TensorFlow Lite", "YOLOv8", "Roboflow", "SQLite", "FastAPI", "TypeScript", "Python", "Google Gemini", "ElevenLabs"],
    media: [
      { type: "image", src: "/images/projects/tidesense-logo.jpeg", alt: "Tide Sense Logo" },
      { type: "video", src: "/videos/tidesense-demo.mp4", alt: "Tide Sense Demo" },
    ],
    links: {
      github: "https://github.com/Stevin006/TideSense",
      devpost: "https://devpost.com/software/riptide-wip",
      demo: "https://youtube.com/shorts/cJQApi3ehAw"
      // video: ADD VIDEO
    },
    highlight: "SharkByte 2025 Hackathon",
  }, 
  {
    title: "Alto",
    description: "Financial management web app to improve budgeting using an AI actionable calendar",
    technologies: ["Google ADK", "Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Python"],
    media: [
      { type: "image", src: "/images/projects/alto-dashboard.png", alt: "Alto Dashboard" },
      { type: "image", src: "/images/projects/alto-workflow.png", alt: "Alto Workflow" },
    ],
    links: {
      github: "https://github.com/evans-christian2004/alto-starter",
      devpost: "https://devpost.com/software/alto-m96ytw",
    },
    highlight: "Knight Hacks VIII 2025 Hackathon",
  },
  {
    title: "Next Step",
    description: "Insurance learning web app using AI conversations to simulate complex insurance-related scenarios",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Flask", "OpenAI GPT-4", "Vapi API"],
    media: [
      { type: "image", src: "/images/projects/nextstep-dashboard.png", alt: "Next Step Dashboard" },
      { type: "image", src: "/images/projects/nextstep-win.jpg", alt: "Next Step Winning Photo" },
    ],
    links: {
      github: "https://github.com/sebastian-noel/NextStep",
      devpost: "https://devpost.com/software/next-step-cme06a",
      // video: ADD VIDEO
    },
    highlight: "Statefarm Challenge Winner, ShellHacks 2025 Hackathon",
  },
  {
    title: "FE AI",
    description: "Study tool web app using AI to grade responses to the UCF Computer Science Foundations exam",
    technologies: ["React", "JavaScript", "CSS", "Google Gemini", "TLDraw API"],
    media: [
      { type: "image", src: "/images/projects/feai-feedback.png", alt: "FE AI Feedback" },
    ],
    links: {
      github: "https://github.com/sebastian-noel/FE-AI",
      devpost: "https://devpost.com/software/untitled-project-g6fl50ordx7m",
    },
    highlight: "GemiKnights 2025 Hackathon",
  },
  {
    title: "DishDash",
    description: "Recipe reccommendation web app that suggests recipes based on your available ingredients",
    technologies: ["React", "JavaScript", "CSS", "MongoDB", "TLDraw API"],
    media: [
      { type: "image", src: "/images/projects/dishdash-home.png", alt: "DishDash Home" },
    ],
    links: {
      github: "https://github.com/sebastian-noel/DishDash",
      devpost: "https://devpost.com/software/dishdash-iy7rah",
    },
    highlight: "Knight Hacks VII 2024 Hackathon",
  },
];
