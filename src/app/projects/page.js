import { getAllProjects } from "@/lib/projects";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  title: "Projects",
  description: "Case studies of software projects and engineering decisions.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-20 z-0" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <Card className="bg-zinc-900/70 border-zinc-800 backdrop-blur-sm">
          <CardContent className="p-6">
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <p className="mt-3 text-zinc-400">
              Case studies of software projects and engineering decisions.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            category={project.category}
            image={project.thumbnailImage}
            slug={project.slug}
          />
        ))}
      </section>
    </main>
  );
}
