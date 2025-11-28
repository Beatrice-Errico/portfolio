// src/components/ProjectCard.tsx
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-slate-800 rounded-xl p-5 md:p-6 bg-slate-900/40 hover:bg-slate-900 transition">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-slate-300 mt-1">{project.subtitle}</p>
      <p className="text-sm text-slate-200 mt-3">{project.description}</p>

      <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-full border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Live demo
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Codice sorgente
          </a>
        )}
      </div>
    </article>
  );
}
