// src/components/ProjectCard.jsx

export function ProjectCard({ project }) {
  return (
    <article
      className="rounded-[28px] border border-rose-100 bg-white/80 backdrop-blur-sm
                 shadow-[0_14px_35px_rgba(0,0,0,0.06)] p-5 md:p-6 flex flex-col gap-3"
    >
      <div>
        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[#241824]">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs uppercase tracking-wide text-rose-400 mt-1">
            {project.subtitle}
          </p>
        )}
      </div>

      <p className="text-sm md:text-base text-[#6b546c] leading-relaxed">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <ul className="mt-1 space-y-1 text-sm text-[#6b546c] list-disc list-inside">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-rose-100
                       bg-rose-50/70 text-[#8B6F8F]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-[#FF2F7D] hover:text-[#d82568]
                       underline underline-offset-4"
          >
            Live demo
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-[#241824]
                       underline underline-offset-4"
          >
            Codice sorgente
          </a>
        )}
      </div>
    </article>
  );
}
