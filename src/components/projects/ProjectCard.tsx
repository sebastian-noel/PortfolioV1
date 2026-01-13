import Image from "next/image";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { type Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onLearnMore: () => void;
}

export default function ProjectCard({ project, onLearnMore }: ProjectCardProps) {
  const { title, description, technologies, media, links, purpose, award, colorScheme } = project;
  const primaryMedia = media.find((item) => item.type === "image") ?? media[0];

  // Default colors if no color scheme is provided
  const primary = colorScheme?.primary ?? "var(--color-accent)";
  const secondary = colorScheme?.secondary ?? "var(--color-secondary)";
  const techBg = colorScheme?.techBg ?? `${primary}26`; // 15% opacity fallback

  return (
    <article 
      onClick={onLearnMore}
      className="group relative flex h-full flex-col gap-4 rounded-3xl border p-6 shadow-sm cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
      style={{
        backgroundColor: `${secondary}26`,
        borderColor: techBg,
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = primary}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = techBg}
      >
      {award && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <span 
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide shadow-lg transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3"
            style={{ backgroundColor: primary, color: '#0a0a0a' }}
          >
            🏆 {award}
          </span>
        </div>
      )}
      {primaryMedia && (
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-background/60 group/media">
          {primaryMedia.type === "image" ? (
            <Image
              src={primaryMedia.src}
              alt={primaryMedia.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover/media:scale-110"
              sizes="(max-width: 768px) 100vw, 600px"
              priority={false}
            />
          ) : (
            <video
              src={primaryMedia.src}
              className="h-full w-full object-cover transition-transform duration-300 group-hover/media:scale-110"
              controls
              muted
              playsInline
              aria-label={primaryMedia.alt}
            />
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3">
        {purpose && (
          <span 
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: primary }}
          >
            {purpose}
          </span>
        )}
        <h3 
          className="text-2xl font-bold bg-clip-text text-transparent"
          style={{ 
            backgroundImage: `linear-gradient(90deg, ${primary} 0%, ${secondary} 100%)`,
          }}
        >
          {title}
        </h3>
        <p className="text-base leading-relaxed text-foreground/80">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ backgroundColor: techBg, color: primary }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition hover:opacity-80"
              style={{ borderColor: `${primary}99`, color: primary }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition hover:opacity-80"
              style={{ borderColor: `${primary}99`, color: primary }}
            >
              <PlayCircle className="h-4 w-4" />
              Demo
            </a>
          )}
          {links.devpost && (
            <a
              href={links.devpost}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition hover:opacity-80"
              style={{ borderColor: `${primary}99`, color: primary }}
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
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition hover:opacity-80"
              style={{ borderColor: `${primary}99`, color: primary }}
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
          {links.video && (
            <a
              href={links.video}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium transition hover:opacity-80"
              style={{ borderColor: `${primary}99`, color: primary }}
            >
              <PlayCircle className="h-4 w-4" />
              Video
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
