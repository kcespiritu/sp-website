import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { ProjectEntry } from '@/components/ProjectEntry';
import { earlier, flagship } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected work and earlier roles — systems built across hardware, backend, and AI.'
};

export default function ProjectsPage() {
  return (
    <div className="shell">
      <section className="pb-4 pt-14 sm:pt-20">
        <p className="label">Projects</p>
        <h1 className="mt-5 max-w-3xl text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tightest text-ink">
          Things I have built, and what was actually hard about them.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          The three below are the ones I can walk through in detail. The rest is where I have worked.
        </p>
      </section>

      <Section
        index="01 — Selected work"
        title="Built end to end"
        lead="Written up with the parts that mattered: what it does, what it is made of, and where the edges were."
      >
        <div className="grid gap-12">
          {flagship.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section
        index="02 — Earlier work"
        title="Roles and systems"
        lead="Consulting, coordination, hardware and the infrastructure I run for myself."
      >
        <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line">
          {earlier.map((item) => (
            <li key={item.title} className="bg-surface px-5 py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-base font-medium text-ink">{item.title}</h3>
                <p className="label">{item.org}</p>
              </div>

              <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-muted">{item.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-1 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
                  >
                    Visit
                    <span aria-hidden>↗</span>
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
