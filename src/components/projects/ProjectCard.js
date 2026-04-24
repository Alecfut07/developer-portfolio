import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-xl border p-5 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-muted-foreground">
        {project.status}
      </p>
      <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="rounded-full border px-2 py-1 text-xs">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-md bg-black px-3 py-2 text-sm text-white"
        >
          View Case Study
        </Link>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border px-3 py-2 text-sm"
          >
            Live Demo
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border px-3 py-2 text-sm"
          >
            GitHub Repo
          </a>
        ) : null}
      </div>
    </article>
  );
}
