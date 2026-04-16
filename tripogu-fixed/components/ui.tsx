import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('md-pill', className)}>{children}</span>;
}

export function SectionHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div>
        <h2 className="md-section-title">{title}</h2>
        {subtitle ? <p className="md-muted mt-1 max-w-2xl">{subtitle}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function IconButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button
      className={cn(
        'inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-[1px] hover:shadow',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function PrimaryLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md',
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Surface({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('md-card', className)}>{children}</div>;
}
