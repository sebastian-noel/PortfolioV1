import Image from "next/image";
import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { type Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, technologies, media, links, highlight } = project;
  const primaryMedia = media.find((item) => item.type === "image") ?? media[0];

  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-secondary/30 bg-secondary/15 p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      {primaryMedia && (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background/60">
          {primaryMedia.type === "image" ? (
            <Image
              src={primaryMedia.src}
              alt={primaryMedia.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority={false}
            />
          ) : (
            <video
              src={primaryMedia.src}
              className="h-full w-full object-cover"
              controls
              muted
              playsInline
              aria-label={primaryMedia.alt}
            />
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3">
        {highlight && (
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            {highlight}
          </span>
        )}
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        <p className="text-base leading-relaxed text-(--color-text)/80">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent"
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
              className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/10"
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
              className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/10"
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
              className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/10"
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
              className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/10"
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
              className="inline-flex items-center gap-1 rounded-full border border-accent/60 px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent/10"
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
