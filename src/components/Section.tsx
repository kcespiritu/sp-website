import { PropsWithChildren } from 'react';

export function Section({
  index,
  title,
  lead,
  children
}: PropsWithChildren<{ index: string; title: string; lead?: string }>) {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
        <header className="lg:sticky lg:top-24 lg:self-start">
          <p className="label">{index}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink">{title}</h2>
          {lead ? <p className="mt-3 text-sm leading-relaxed text-muted">{lead}</p> : null}
        </header>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
