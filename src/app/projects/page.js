import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "Case studies of software projects and engineering decisions.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-3 text-muted-foreground">
        Each project includes context, implementation details, challenges, and
        results.
      </p>

      <section>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
