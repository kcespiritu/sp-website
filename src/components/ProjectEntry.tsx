import type { Project } from '@/lib/content';

export function ProjectEntry({ project }: { project: Project }) {
  // With an odd number of specs, the trailing grid cell would render as an
  // empty block against the hairline backdrop. Let the last row span the width.
  const hasTrailingGap = project.specs.length % 2 === 1;

  return (
    <article className="border-t border-line pt-10 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
        <p className="label">{project.kind}</p>
      </div>

      <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink">{project.summary}</p>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{project.detail}</p>

      <dl className="specgrid mt-7 sm:grid-cols-2">
        {project.specs.map((spec, index) => (
          <div
            key={spec.label}
            className={
              hasTrailingGap && index === project.specs.length - 1 ? 'sm:col-span-2' : undefined
            }
          >
            <dt className="label">{spec.label}</dt>
            <dd className="mt-1.5 text-sm leading-snug text-ink">{spec.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.stack.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>

      {project.link ? (
        <a
          href={project.link.href}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
        >
          {project.link.label}
          <span aria-hidden>↗</span>
        </a>
      ) : null}
    </article>
  );
}
