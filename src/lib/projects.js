import fs from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

const projectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  summary: z.string().min(1),
  status: z.enum(["planned", "in-progress", "completed"]),
  featured: z.boolean(),
  publishedAt: z.string(),
  coverImage: z.string(),
  techStack: z.array(z.string()).default([]),
  problem: z.string().min(1),
  solution: z.string().min(1),
  challenges: z.array(z.string()).default([]),
  results: z.array(z.string()).default([]),
  liveUrl: z.string().optional().default(""),
  githubUrl: z.string().optional().default(""),
});

const projectsDir = path.join(process.cwd(), "src/content/projects");

async function readProjectFile(fileName) {
  const raw = await fs.readFile(path.join(projectsDir, fileName), "utf8");
  const parsed = JSON.parse(raw);
  return projectSchema.parse(parsed);
}

export async function getAllProjects() {
  const files = await fs.readdir(projectsDir);
  const projectFiles = files.filter(
    (f) => f.endsWith(".json") && !f.startsWith("_"),
  );

  const projects = await Promise.all(projectFiles.map(readProjectFile));

  return projects.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getFeaturedProjects(limit = 3) {
  const all = await getAllProjects();
  return all.filter((p) => p.featured).slice(0, limit);
}

export async function getProjectBySlug(slug) {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug) || null;
}

export async function getProjectSlugs() {
  const all = await getAllProjects();
  return all.map((p) => ({ slug: p.slug }));
}
