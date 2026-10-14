import Link from 'next/link';
import { Section } from '@/components/Section';
import { ProjectEntry } from '@/components/ProjectEntry';
import { flagship, focus, howItWorks, services, site } from '@/lib/content';

export default function HomePage() {
  return (
    <div className="shell">
      <section className="pb-14 pt-14 sm:pb-20 sm:pt-24">
        <p className="label flex items-center gap-2">
          <span className="dot" aria-hidden />
          {site.location} &middot; {site.availability}
        </p>

        <h1 className="mt-6 max-w-4xl text-[clamp(1.9rem,5.6vw,3.5rem)] font-semibold leading-[1.06] tracking-tightest text-ink">
          {site.claim}
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{site.intro}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a className="btn-primary" href={`mailto:${site.email}`}>
            Email me
          </a>
          <Link className="btn-ghost" href="/projects">
            See the work
          </Link>
        </div>

        <dl className="specgrid mt-14 sm:grid-cols-3">
          {focus.map((item) => (
            <div key={item.label}>
              <dt className="label">{item.label}</dt>
              <dd className="mt-1.5 text-sm leading-snug text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section
        index="01 — Selected work"
        title="Three things worth looking at"
        lead="Each of these is several moving parts that had to survive contact with real use."
      >
        <div className="grid gap-12">
          {flagship.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section
        index="02 — Work with me"
        title="Three ways this usually starts"
        lead="Fixed scope and a fixed price, agreed before I start. No hourly billing."
      >
        <div className="specgrid sm:grid-cols-3">
          {services.map((item) => (
            <div key={item.title}>
              <h3 className="text-sm font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <ol className="specgrid mt-4 sm:grid-cols-3">
          {howItWorks.map((item) => (
            <div key={item.step}>
              <p className="label">{item.step}</p>
              <h4 className="mt-1.5 text-sm font-medium text-ink">{item.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </ol>
      </Section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <p className="label">03 — Contact</p>
          <div>
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              If you need something built end to end, that is the work I want.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a className="btn-primary" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <Link className="btn-ghost" href="/contact">
                More ways to reach me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
