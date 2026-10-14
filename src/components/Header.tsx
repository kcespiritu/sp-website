import Link from 'next/link';
import { NavLink } from '@/components/NavLink';
import { site } from '@/lib/content';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="group flex min-w-0 items-baseline gap-3">
          <span className="truncate text-sm font-semibold tracking-tight text-ink">{site.name}</span>
          <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted sm:inline">
            Automation &amp; Systems
          </span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
