import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { about, site, skillGroups } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kenneth Espiritu — Chemical Engineering graduate turned automation and full-stack developer, based in Manila.'
};

export default function AboutPage() {
  return (
    <div className="shell">
      <section className="pb-4 pt-14 sm:pt-20">
        <p className="label">About</p>
        <h1 className="mt-5 max-w-3xl text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tightest text-ink">
          Engineer first, developer by trade.
        </h1>
      </section>

      <Section index="01 — Background" title="How I got here">
        <div className="max-w-2xl space-y-5">
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-ink/85">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section
        index="02 — Skills"
        title="Tools I actually use"
        lead="Not everything I have touched — the things I would be comfortable being handed on day one."
      >
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="label">{group.title}</h3>
              <ul className="mt-3.5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-line py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <p className="label">03 — Elsewhere</p>
          <div className="max-w-2xl space-y-4">
            <p className="text-base leading-relaxed text-muted">
              The code is on GitHub, and the short version of my work history is on LinkedIn.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="btn-ghost"
                href={site.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                {site.githubLabel}
              </a>
              <a
                className="btn-ghost"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                {site.linkedinLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
