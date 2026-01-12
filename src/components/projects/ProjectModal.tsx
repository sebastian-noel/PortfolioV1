"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  PlayCircle,
  Users,
  Linkedin,
} from "lucide-react";
import { type Project, type MediaItem } from "@/types";

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine media and gallery for the carousel
  const allMedia: MediaItem[] = [
    ...project.media,
    ...(project.gallery ?? []),
  ];

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allMedia.length - 1 : prev - 1
    );
  }, [allMedia.length]);

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === allMedia.length - 1 ? 0 : prev + 1
    );
  }, [allMedia.length]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentMedia = allMedia[currentImageIndex];
  const { title, description, technologies, links, purpose, teamSize, teammates, details } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-secondary/30 bg-background shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-background/80 p-2 text-foreground/80 backdrop-blur-sm transition hover:bg-secondary/30 hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Image Carousel */}
          {allMedia.length > 0 && (
            <div className="relative aspect-video w-full bg-background/60">
              {currentMedia.type === "image" ? (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              ) : (
                <video
                  src={currentMedia.src}
                  className="h-full w-full object-contain"
                  controls
                  muted
                  playsInline
                  aria-label={currentMedia.alt}
                />
              )}

              {/* Carousel Navigation */}
              {allMedia.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground/80 backdrop-blur-sm transition hover:bg-secondary/30 hover:text-foreground"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground/80 backdrop-blur-sm transition hover:bg-secondary/30 hover:text-foreground"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {allMedia.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-2 w-2 rounded-full transition ${
                          idx === currentImageIndex
                            ? "bg-accent"
                            : "bg-foreground/40 hover:bg-foreground/60"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Image Caption */}
              {currentMedia.alt && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-4 py-1 text-sm text-foreground/80 backdrop-blur-sm">
                  {currentMedia.alt}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="space-y-6 p-6 sm:p-8">
            {/* Header */}
            <div className="space-y-2">
              {purpose && (
                <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {purpose}
                </span>
              )}
              <h2 id="modal-title" className="text-3xl font-bold text-foreground sm:text-4xl">
                {title}
              </h2>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-foreground/80">
                {description}
              </p>

              {/* Detailed Content */}
              {details?.content && (
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-wrap text-base leading-relaxed text-foreground/70">
                    {details.content}
                  </div>
                </div>
              )}

              {/* Diagrams */}
              {details?.diagrams && details.diagrams.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  {details.diagrams.map((diagram, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-xl border border-secondary/30"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={diagram.src}
                          alt={diagram.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                      {diagram.description && (
                        <p className="bg-secondary/10 p-3 text-sm text-foreground/70">
                          {diagram.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Team Section */}
            {(teamSize || (teammates && teammates.length > 0)) && (
              <div className="space-y-3 rounded-2xl border border-secondary/30 bg-secondary/10 p-4">
                <div className="flex items-center gap-2 text-foreground">
                  <Users className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-semibold">Team</h3>
                  {teamSize && (
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-sm text-accent">
                      {teamSize} {teamSize === 1 ? "member" : "members"}
                    </span>
                  )}
                </div>

                {teammates && teammates.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {teammates.map((teammate, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 rounded-full border border-secondary/30 bg-background/50 px-3 py-1.5"
                      >
                        <span className="text-sm font-medium text-foreground">
                          {teammate.name}
                        </span>
                        {teammate.linkedin && (
                          <a
                            href={teammate.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent transition hover:text-accent/80"
                            aria-label={`${teammate.name}'s LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-3 border-t border-secondary/30 pt-6">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-background transition hover:bg-accent/90"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
              {links.demo && (
                <a
                  href={links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/10"
                >
                  <PlayCircle className="h-4 w-4" />
                  Watch Demo
                </a>
              )}
              {links.devpost && (
                <a
                  href={links.devpost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Devpost
                </a>
              )}
              {links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Site
                </a>
              )}
              {links.video && (
                <a
                  href={links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent/60 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/10"
                >
                  <PlayCircle className="h-4 w-4" />
                  Video
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
