import { type Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Bank of New York Mellon (BNY)",
    role: "Incoming Applied Technology Intern",
    start: "January 2026",
    end: "Present",
    location: "Orlando, FL",
    achievements: [
      "Spring 2026 Applied Technology in Banking Experiential Intern"
    ],
    logo: "/images/experience/bny-logo.png",
    links: { company: "https://www.bny.com/corporate/global/" },
    media: [
      { type: "image", src: "/images/experience/bny-office.jpg", alt: "BNY CTOC Lab" },
      { type: "image", src: "/images/experience/bny-ucf.jpg", alt: "BNY x UCF Collaboration" },
    ],
  },
  {
    company: "Center for Research in Computer Vision",
    role: "Incoming Computer Vision Engineer Intern",
    start: "January 2026",
    end: "Present",
    location: "Orlando, FL",
    achievements: [
      "Spring 2026 Undergraduate Computer Vision Researcher under Dr. Yogesh S Rawat"
    ],
    logo: "/images/experience/crcv-logo.png",
    links: { company: "https://www.crcv.ucf.edu/" },
    media: [
      { type: "image", src: "/images/experience/crcv-building.jpg", alt: "CRCV Research Lab in L3Harris Engineering Center" },
    ],
  },
  {
    company: "Data-Enabled Photovoltaics",
    role: "Software Engineering Intern",
    start: "June 2024",
    end: "August 2024",
    location: "Remote",
    achievements: [
      "Co-authored (as 2nd author) a research paper on the Multimodal Deep Learning for Photovoltaic Modules (in progress)",
      "Improved voltage prediction accuracy from 51% to 77% by implementing wavelet-enhanced LSTM models",
      "Achieved an R2 of 53% and MAE of 0.89 for crack defect prediction using Multi-Layer Perceptrons (MLPs)",
      "Engineered an image processing pipeline using Marimo notebooks, reducing data processing time by 25%",
      "Architected a foundational Python package by refactoring 14 scripts to accelerate future research and development"
    ],
    logo: "/images/experience/dpv-logo.jpg",
    links: { company: "https://ucf-dpv.notion.site/DARTS-2025-2498d52e715180b18c7fd1065e655faf?p=2498d52e7151801d89c8f4d5ea1a9ac7&pm=c" },
    media: [
      { type: "image", src: "/images/experience/dpv-team.jpg", alt: "DPV DARTS Showcase" },
    ],
  },
];

