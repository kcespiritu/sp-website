import Link from 'next/link';
import { site } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink">{site.name}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            {site.location}
          </p>
        </div>

        <nav aria-label="Elsewhere" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="shell py-4">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
            © {new Date().getFullYear()} {site.name} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
