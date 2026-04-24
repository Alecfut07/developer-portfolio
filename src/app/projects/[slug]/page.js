import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

export async function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} | Project Case Study`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.coverImage || "/images/projects/og-default.png"],
    },
  };
}

export default async function ProjectPage({ params }) {
  const project = await getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          {project.status}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground">{project.tagline}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full border px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-10 grid gap-8">
        <article>
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-muted-foreground">{project.problem}</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="mt-2 text-muted-foreground">{project.solution}</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Challenges</h2>
          <ul className="mt-2 list-disc pl-5 text-muted-foreground">
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="mt-2 list-disc pl-5 text-muted-foreground">
            {project.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-10 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            className="rounded-md bg-black px-4 py-2 text-white"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            className="rounded-md border px-4 py-2"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repo
          </a>
        ) : null}
      </section>
    </main>
  );
}
