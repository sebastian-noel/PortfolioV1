import Image from "next/image";
import { Github, Linkedin, FileText, MapPin } from "lucide-react";
import { heroContent } from "@/data";

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
};

export default function Hero() {
  const { name, title, blurb, location, headshot, social } = heroContent;

  return (
    <section className="bg-[color:var(--color-background)] text-[color:var(--color-text)] pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 md:grid-cols-[1.3fr_0.7fr] items-start w-full">
        <div className="space-y-8 pt-15 md:pt-30">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-[color:var(--color-text)]">{name}</h1>
            <p className="text-3xl sm:text-4xl text-[color:var(--color-primary)]">{title}</p>
          </div>
          <p className="text-2xl leading-relaxed text-[color:var(--color-text)]/80 max-w-3xl">{blurb}</p>

          <div className="flex flex-wrap items-center gap-4">
            {Object.entries(social).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon) return null;
              const label = key === "resume" ? "Resume" : key.charAt(0).toUpperCase() + key.slice(1);
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-primary)]/40 bg-[color:var(--color-background)] px-4 py-2 text-sm font-medium text-[color:var(--color-text)] shadow-sm transition hover:-translate-y-[1px] hover:shadow md:text-base"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-[color:var(--color-accent)]" />
                  {label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-[color:var(--color-text)]/70">
            <MapPin className="h-4 w-4 text-[color:var(--color-accent)]" />
            <span>{location}</span>
          </div>
        </div>

        <div className="relative mx-auto h-full w-full">
          <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[3/4]">
            <Image
              src={headshot}
              alt={`${name} headshot`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
