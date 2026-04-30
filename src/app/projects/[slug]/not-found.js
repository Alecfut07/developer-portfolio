import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <p className="text-zinc-400">
          The project you are looking for does not exist.
        </p>
        <Link href="/projects" className="text-cyan-400 hover:text-cyan-300">
          Back to projects
        </Link>
      </div>
    </main>
  );
}
