'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

export function NavLink({ href, children }: PropsWithChildren<{ href: string }>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href as never}
      aria-current={isActive ? 'page' : undefined}
      className={
        'relative rounded-md px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-200 ' +
        (isActive ? 'text-ink' : 'text-muted hover:text-ink')
      }
    >
      {children}
      {isActive ? (
        <span aria-hidden className="absolute inset-x-2.5 -bottom-px block h-px bg-accent" />
      ) : null}
    </Link>
  );
}
