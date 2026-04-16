'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, MapPinned, Route, BookOpenText, Bookmark, UserRound, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PrimaryLink } from './ui';

const navItems = [
  { href: '/', label: 'Explore', icon: MapPinned },
  { href: '/routes', label: 'Routes', icon: Route },
  { href: '/blogs', label: 'Blogs', icon: BookOpenText },
  { href: '/saved', label: 'Saved', icon: Bookmark },
  { href: '/profile', label: 'Profile', icon: UserRound },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === '/login';
  if (isLogin) return <>{children}</>;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="md-shell flex h-16 items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-slate-900">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm">T</span>
            <span className="hidden sm:block">Tripogu</span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center gap-3 lg:flex">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input className="md-input pl-11" placeholder="Search places, routes, blogs or stay ideas" />
            </label>
            <button className="md-chip">
              <SlidersHorizontal className="h-4 w-4" /> Filters <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <PrimaryLink href="/login" className="hidden sm:inline-flex">Log in</PrimaryLink>
            <Link href="/saved" className="md-chip hidden sm:inline-flex">Saved</Link>
          </div>
        </div>
      </header>

      <main className="md-shell py-4 sm:py-6 lg:py-8">{children}</main>

      <nav className="sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-5 gap-1 px-2 py-2">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={cn('flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold transition', active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100')}>
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <aside className="fixed left-4 top-24 hidden w-24 xl:block">
        <div className="md-card flex flex-col items-stretch p-2">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={cn('mb-1 flex flex-col items-center rounded-2xl px-2 py-3 text-xs font-semibold transition last:mb-0', active ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-100')}>
                <Icon className="mb-1 h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
