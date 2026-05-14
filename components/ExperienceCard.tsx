import { BriefcaseBusiness } from 'lucide-react';
import type { Experience } from '@/data/portfolio';

export function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <article className="relative ml-8 rounded-2xl border border-line bg-black/25 p-6 shadow-card">
      <div className="absolute -left-10 top-7 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-300/70 bg-base">
        <BriefcaseBusiness size={16} />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-2xl font-semibold">{exp.company}</h3>
          <p className="text-lg text-zinc-300">{exp.role} • {exp.location}</p>
        </div>
        <span className="rounded-lg bg-soft px-3 py-1 text-sm text-muted">{exp.period}</span>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
        {exp.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
    </article>
  );
}
