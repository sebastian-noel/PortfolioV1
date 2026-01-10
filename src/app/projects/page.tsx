import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data";

export default function ProjectsPage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
				<div className="mb-12 space-y-4 text-center">
					<h1 className="text-4xl sm:text-5xl font-bold">Projects</h1>
					<div className="mx-auto h-1 w-32 rounded-full bg-accent" />
					<p className="mx-auto max-w-3xl text-lg text-(--color-text)/80">
						As I&apos;ve explored different languages and frameworks, my projects have served as the ultimate testing ground for my growth.
                        This collection represents that evolution, capturing how I&apos;ve applied new technologies to build increasingly complex and functional software.
					</p>
				</div>

				<div className="grid auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2">
					{projects.map((project, idx) => (
						<ProjectCard key={`${project.title}-${idx}`} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
