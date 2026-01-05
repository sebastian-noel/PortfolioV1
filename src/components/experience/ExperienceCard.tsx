'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, MapPin, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    company,
    role,
    start,
    end,
    location,
    description,
    achievements,
    technologies,
    logo,
    links,
    media,
  } = experience;

  const images = media?.filter((m) => m.type === 'image') ?? [];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex gap-8">
      {/* Timeline date on the side */}
      <div className="hidden md:flex flex-col items-end w-40 shrink-0 pt-2">
        <span className="text-sm font-medium text-[color:var(--color-primary)]">{start}</span>
        <span className="text-xs text-[color:var(--color-text)]/60">to</span>
        <span className="text-sm font-medium text-[color:var(--color-primary)]">{end}</span>
      </div>

      {/* Timeline line and dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[color:var(--color-accent)] shrink-0 mt-2" />
        <div className="w-0.5 flex-1 bg-[color:var(--color-secondary)]/50" />
      </div>

      {/* Main card */}
      <div className="relative flex-1 rounded-3xl bg-[color:var(--color-secondary)]/20 p-8 shadow-sm transition hover:shadow-lg mb-10">
        {/* Logo - absolute positioned in top right */}
        {logo && (
          <div className="absolute top-6 right-6 w-24 h-24 shrink-0 overflow-hidden rounded-xl bg-white">
            <Image
              src={logo}
              alt={`${company} logo`}
              fill
              className="object-contain p-2"
            />
          </div>
        )}

        {/* Mobile date display */}
        <div className="md:hidden flex items-center gap-2 text-sm text-[color:var(--color-primary)] mb-6">
          <span>{start}</span>
          <span className="text-[color:var(--color-text)]/60">-</span>
          <span>{end}</span>
        </div>

        {/* Role */}
        <h3 className="text-2xl font-bold text-[color:var(--color-text)] mb-2 pr-28">{role}</h3>

        {/* Company name */}
        <p className="text-xl text-[color:var(--color-primary)] mb-2">{company}</p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-[color:var(--color-text)]/70 mb-6">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        {/* Full-width Image carousel */}
        {images.length > 0 && (
          <div className="relative w-full mb-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-[color:var(--color-background)]">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Image navigation */}
            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-background)]/80 p-2 shadow-md transition hover:bg-[color:var(--color-background)]"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5 text-[color:var(--color-accent)]" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-background)]/80 p-2 shadow-md transition hover:bg-[color:var(--color-background)]"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5 text-[color:var(--color-accent)]" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition ${
                        idx === currentImageIndex
                          ? 'bg-[color:var(--color-accent)]'
                          : 'bg-[color:var(--color-text)]/40'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-lg text-[color:var(--color-text)]/85 leading-relaxed mb-5">{description}</p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[color:var(--color-accent)]/20 px-3 py-1 text-xs font-medium text-[color:var(--color-accent)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Expand/Collapse button */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
        >
          {isExpanded ? 'Hide Details' : 'Show More Details'}
          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {/* Expandable content - full width */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="space-y-4 pt-6 mt-6 border-t border-[color:var(--color-secondary)]/40">
                {/* Achievements */}
                {achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-[color:var(--color-text)] mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-[color:var(--color-text)]/80"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent)] shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links & Resources */}
                {links && links.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-[color:var(--color-text)] mb-3">
                      Links & Resources
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
