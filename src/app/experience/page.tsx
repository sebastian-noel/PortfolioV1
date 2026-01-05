import { experiences } from '@/data';
import ExperienceCard from '@/components/experience/ExperienceCard';

export default function ExperiencePage() {
  return (
    <div className="bg-[color:var(--color-background)] text-[color:var(--color-text)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page header */}
        <div className="space-y-4 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold">Professional Experience</h1>
          <div className="h-1 w-24 bg-[color:var(--color-accent)] rounded-full" />
          <p className="text-lg text-[color:var(--color-text)]/80 max-w-3xl">
            A comprehensive overview of my professional journey. I&apos;ve had the opportunity to work 
            across research labs, startups, and enterprise environments—each experience shaping my 
            growth as a software engineer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, idx) => (
            <ExperienceCard key={`${experience.company}-${idx}`} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
