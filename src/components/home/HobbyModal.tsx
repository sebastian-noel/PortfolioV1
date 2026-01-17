"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import { type Hobby } from "@/types";
import TypingTest from "./TypingTest";

interface HobbyModalProps {
  hobby: Hobby;
  isOpen: boolean;
  onClose: () => void;
}

export default function HobbyModal({ hobby, isOpen, onClose }: HobbyModalProps) {
  const cover = hobby.media?.find((m) => m.type === "image");
  const isHardwareHobby = hobby.title === "Computer Hardware & Peripherals";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="hobby-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-accent bg-background shadow-2xl"
      >
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
          {/* Header Image */}
          {cover && (
            <div className="relative aspect-video w-full bg-background/60">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="space-y-6 p-6 sm:p-8">
            {/* Title & Description */}
            <div className="space-y-3">
              <h2
                id="hobby-modal-title"
                className="text-3xl font-bold text-accent sm:text-4xl"
              >
                {hobby.title}
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {hobby.description}
              </p>
            </div>

            {/* Sections */}
            {hobby.details?.sections && hobby.details.sections.length > 0 && (
              <div className="space-y-6">
                {hobby.details.sections.map((section) => (
                  <div key={section.title} className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-start justify-between gap-4 rounded-xl bg-secondary/20 p-4"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-foreground">
                              {item.name}
                            </p>
                            {item.description && (
                              <p className="mt-1 text-sm text-foreground/70">
                                {item.description}
                              </p>
                            )}
                          </div>
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 rounded-full p-2 text-accent transition hover:bg-accent/20"
                              aria-label={`View ${item.name}`}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Show Typing Test after Keyboard section */}
                    {isHardwareHobby && section.title === "Keyboard" && (
                      <div className="mt-4">
                        <TypingTest />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
