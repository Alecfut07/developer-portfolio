import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ContactForm from "@/components/sections/ContactForm";

const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "SQL",
  "Testing",
];

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section>
        <h1 className="text-4xl font-semibold tracking-tight">
          Hi, I'm Alec Ortega Cisneros
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Software developer focused on building fast, reliable, and
          maintainable web products.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border px-3 py-1 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm underline">
            See all
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="mt-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-muted-foreground">
          Have an opportunity or collaboration idea?
        </p>
        <div className="mt-4">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
