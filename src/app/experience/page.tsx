import { experiences } from '@/data';
import ExperienceCard from '@/components/experience/ExperienceCard';

export default function ExperiencePage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page header */}
        <div className="space-y-4 mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Experience</h1>
          <div className="h-1 w-36 bg-accent rounded-full mx-auto" />
          <p className="text-lg text-(--color-text)/80 max-w-3xl mx-auto">
            My growth has been driven by a blend of professional internships, academic research, and leadership in student organizations.
            Together, these experiences have shaped the software engineer I am today.
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
