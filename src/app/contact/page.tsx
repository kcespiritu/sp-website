import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name} — automation, full-stack, and systems work.`
};

const LINK =
  'text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-accent hover:text-accent break-words';

export default function ContactPage() {
  return (
    <div className="shell">
      <section className="pb-4 pt-14 sm:pt-20">
        <p className="label">Contact</p>
        <h1 className="mt-5 max-w-3xl text-[clamp(1.75rem,4.5vw,2.75rem)] font-semibold leading-[1.1] tracking-tightest text-ink">
          Tell me what needs building.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          I am based in {site.location} and work remotely across time zones. The fastest way to reach me is
          email.
        </p>
      </section>

      <Section index="01 — Direct" title="Where to reach me">
        <dl className="specgrid sm:grid-cols-2">
          <div>
            <dt className="label">Email</dt>
            <dd className="mt-1.5 text-sm">
              <a className={LINK} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </dd>
          </div>

          <div>
            <dt className="label">GitHub</dt>
            <dd className="mt-1.5 text-sm">
              <a className={LINK} href={site.github} target="_blank" rel="noreferrer noopener">
                {site.githubLabel}
              </a>
            </dd>
          </div>

          <div>
            <dt className="label">LinkedIn</dt>
            <dd className="mt-1.5 text-sm">
              <a className={LINK} href={site.linkedin} target="_blank" rel="noreferrer noopener">
                {site.linkedinLabel}
              </a>
            </dd>
          </div>

          <div>
            <dt className="label">Location</dt>
            <dd className="mt-1.5 text-sm text-ink">{site.location} &middot; UTC+8</dd>
          </div>
        </dl>
      </Section>

      <section className="border-t border-line py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <p className="label">02 — Start here</p>
          <div className="max-w-2xl">
            <p className="flex items-center gap-2.5 text-base text-ink">
              <span className="dot" aria-hidden />
              Currently available
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {site.availability}. Tell me what the process is, roughly how much time it eats, and what
              you have already tried. If it is not worth automating, I will say so.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I reply within one business day, usually sooner, and I work across time zones.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
