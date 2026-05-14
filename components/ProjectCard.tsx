import { Github } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-line bg-black/30 p-6 transition hover:-translate-y-1 hover:border-zinc-500">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
        <Github className="text-zinc-400" size={20} />
      </div>
      <p className="mt-4 text-muted">{project.description}</p>
      <p className="mt-4 text-sm text-zinc-300">{project.impact}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => <span className="rounded-md bg-zinc-800 px-3 py-1 text-sm" key={item}>{item}</span>)}
      </div>
    </article>
  );
}
