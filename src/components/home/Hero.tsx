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
    <section className="bg-background text-foreground pt-2 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-16 md:grid-cols-[1.3fr_0.7fr] items-start w-full">
        <div className="space-y-8 pt-15 md:pt-30">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-foreground text-center md:text-left whitespace-nowrap truncate">{name}</h1>

            {/* Desktop subtitle (keep original placement on md+), hide on mobile */}
            <p className="hidden md:block text-3xl sm:text-4xl text-primary">{title}</p>
          </div>

          {/* Mobile-only headshot placed directly under name */}
          <div className="md:hidden mx-auto w-64 sm:w-72 mb-0">
            <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-3/4">
              <Image src={headshot} alt={`${name} headshot`} fill className="object-cover" priority />
              <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Mobile-only location directly under the headshot */}
          <div className="md:hidden mt-2 mb-0 flex justify-center">
            <div className="flex items-center gap-1 text-(--color-text)/70 text-[12px] py-0 pb-0 mb-0">
              <MapPin className="h-3 w-3 text-accent" />
              <span className="text-[12px]">{location}</span>
            </div>
          </div>

          {/* Mobile-only subtitle + university placed beneath mobile headshot; single-line */}
          <div className="space-y-0 md:hidden text-center mt-6">
            <p className="text-lg text-primary whitespace-nowrap truncate">{title}</p>
            <p className="text-sm text-(--color-text)/80 whitespace-nowrap truncate">{blurb}</p>
          </div>

          {/* Desktop blurb (keep original placement on md+), hide on mobile */}
          <p className="hidden md:block text-2xl leading-relaxed text-(--color-text)/80 max-w-3xl">{blurb}</p>

          {/* Social buttons: center on mobile, left-aligned on desktop */}
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
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
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:-translate-y-1.25 hover:shadow md:text-base"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {label}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-2 text-(--color-text)/70 justify-start">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{location}</span>
          </div>
          {/* (mobile) About section begins after this block */}
        </div>

        {/* Desktop headshot: hide on mobile, keep on md+ to retain original desktop layout */}
        <div className="relative mx-auto h-full w-full hidden md:block">
          <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-3/4">
            <Image
              src={headshot}
              alt={`${name} headshot`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
