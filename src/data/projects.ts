import { type Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Tide Sense",
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
    purpose: "SharkByte 2025 Hackathon",
    colorScheme: {
      primary: "#7A9CD5",
      secondary: "#343E8B",
      techBg: "#7A9CD526", // Primary w/ 15% opacity
    },
    teamSize: 4,
    teammates: [
      { name: "Stevin George", linkedin: "https://www.linkedin.com/in/georgestevin/" },
      { name: "Nicole Bustos", linkedin: "https://www.linkedin.com/in/nicolebustos/" },
      { name: "Chris Ho", linkedin: "https://www.linkedin.com/in/chris-ho-15a039329/" },
    ],
    details: {
      content: `TideSense is a mobile application designed to enhance beach safety by detecting riptides in real-time using smartphone cameras.

The app leverages machine learning models trained with YOLOv8 and Roboflow to identify dangerous water patterns. When a potential riptide is detected, users receive immediate visual and audio alerts powered by ElevenLabs text-to-speech.

Key Features:
• Real-time camera analysis for riptide detection
• AI-powered safety recommendations via Google Gemini
• Offline capability with local SQLite database
• Cross-platform support (iOS & Android) via React Native

The backend is built with FastAPI, providing fast and reliable API endpoints for additional processing and data synchronization.`,
    },
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
    purpose: "Knight Hacks VIII 2025 Hackathon",
    colorScheme: {
      primary: "#71CCFF",
      secondary: "#0049AF",
      techBg: "#71CCFF26", // Primary w/ 15% opacity
    },
    teamSize: 4,
    teammates: [
      { name: "Stevin George", linkedin: "https://www.linkedin.com/in/georgestevin/" },
      { name: "Christian Evans", linkedin: "https://www.linkedin.com/in/evanschristian/" },
      { name: "Ibrahim Shaqqou", linkedin: "https://www.linkedin.com/in/ibrahim-shaqqou-5866b0329/" },
    ],
    details: {
      content: `Alto is a financial management application that transforms budgeting into actionable tasks through an AI-powered calendar interface.

The application analyzes your financial habits and creates personalized action items to help you achieve your savings goals. Using Google's ADK (Agent Development Kit), Alto provides intelligent recommendations and reminders.

Key Features:
• AI-driven budget analysis and recommendations
• Interactive calendar with financial action items
• Clean, modern UI built with Shadcn components
• Real-time sync across devices`,
    },
  },
  {
    title: "Next Step",
    description: "Insurance learning web app using AI conversations to simulate complex insurance-related scenarios",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Flask", "OpenAI GPT-4", "Vapi API"],
    media: [
      { type: "image", src: "/images/projects/nextstep-logo.png", alt: "Next Step Logo" },
      { type: "image", src: "/images/projects/nextstep-dashboard.png", alt: "Next Step Dashboard" },
      { type: "image", src: "/images/projects/nextstep-win.jpg", alt: "Next Step Winning Photo" },
    ],
    links: {
      github: "https://github.com/sebastian-noel/NextStep",
      devpost: "https://devpost.com/software/next-step-cme06a",
      // video: ADD VIDEO
    },
    purpose: "ShellHacks 2025 Hackathon",
    award: "Winner - Statefarm Challenge",
    colorScheme: {
      primary: "#11CF77",
      secondary: "#0C1729",
      techBg: "#11CF7726", // Primary w/ 15% opacity
    },
    teamSize: 4,
    teammates: [
      { name: "Stevin George", linkedin: "https://www.linkedin.com/in/georgestevin/" },
      { name: "Alejandro Jaimes", linkedin: "https://www.linkedin.com/in/alejandro-jaimes-coco/" },
      { name: "Carlos Rincon", linkedin: "https://www.linkedin.com/in/carlos-rincon-004241387/" },
    ],
    details: {
      content: `Next Step is an educational platform that helps users understand complex insurance concepts through interactive AI-powered conversations.

The application simulates real-world insurance scenarios using GPT-4, allowing users to practice navigating claims, understanding policies, and making informed decisions. Voice interaction is enabled through Vapi API for a more natural learning experience.

Key Features:
• Interactive AI conversations simulating insurance scenarios
• Voice-enabled interactions for accessibility
• Progress tracking and learning analytics
• Scenario library covering various insurance types

This project won the Statefarm Challenge at ShellHacks 2025, demonstrating its potential to improve insurance literacy.`,
    },
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
    purpose: "GemiKnights 2025 Hackathon",
    colorScheme: {
      primary: "#DEB254",
      secondary: "#191E1F",
      techBg: "#DEB25426", // Primary w/ 15% opacity
    },
    teamSize: 3,
    teammates: [
      { name: "Stevin George", linkedin: "https://www.linkedin.com/in/georgestevin/" },
      { name: "Christian Evans", linkedin: "https://www.linkedin.com/in/evanschristian/" },
    ],
    details: {
      content: `FE AI is a study companion designed to help UCF Computer Science students prepare for the Foundations Exam.

The application allows students to practice exam-style questions and receive instant AI-powered feedback on their responses. Using Google Gemini, FE AI provides detailed explanations and suggestions for improvement.

Key Features:
• Handwriting recognition via TLDraw for natural problem-solving
• AI grading with detailed feedback
• Practice questions covering all FE exam topics
• Progress tracking to identify weak areas`,
    },
  },
  {
    title: "Dish Dash",
    description: "Recipe reccommendation web app that suggests recipes based on your available ingredients",
    technologies: ["React", "JavaScript", "CSS", "MongoDB", "TLDraw API"],
    media: [
      { type: "image", src: "/images/projects/dishdash-home.png", alt: "DishDash Home" },
    ],
    links: {
      github: "https://github.com/sebastian-noel/DishDash",
      devpost: "https://devpost.com/software/dishdash-iy7rah",
    },
    purpose: "Knight Hacks VII 2024 Hackathon",
    colorScheme: {
      primary: "#CF3524",
      secondary: "#4E8BC8",
      techBg: "#CF352426", // Primary w/ 15% opacity
    },
    teamSize: 2,
    teammates: [
      { name: "Ibrahim Shaqqou", linkedin: "https://www.linkedin.com/in/ibrahim-shaqqou-5866b0329/" },
    ],
    details: {
      content: `DishDash helps reduce food waste by suggesting recipes based on ingredients you already have at home.

Simply input the ingredients available in your kitchen, and DishDash will recommend recipes that maximize what you have. The application uses MongoDB to store a comprehensive recipe database and user preferences.

Key Features:
• Ingredient-based recipe search
• Smart recipe matching algorithm
• Save favorite recipes for later
• Dietary preference filters`,
    },
  },
];
