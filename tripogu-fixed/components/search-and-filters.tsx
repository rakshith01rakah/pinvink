'use client';

import { useState } from 'react';
import { Filter, Search, X, ArrowUpDown, MapPin, ChevronRight } from 'lucide-react';
import { categories, filters, popularSearches } from '@/lib/data';
import { Badge, SecondaryButton, Surface } from './ui';
import { cn } from '@/lib/utils';

export function SearchHeader({ title = 'Search here' }: { title?: string }) {
  return (
    <Surface className="p-3 sm:p-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="relative min-w-0 flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input className="md-input pl-11" placeholder={title} />
        </label>
        <FilterSheet />
      </div>
    </Surface>
  );
}

export function CategoryPills() {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category, index) => (
        <button key={category} className={cn('md-chip whitespace-nowrap', index === 0 ? 'md-chip-active' : '')}>
          {category}
        </button>
      ))}
    </div>
  );
}

export function SearchSuggestions() {
  return (
    <Surface className="p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h2 className="md-section-title">Popular searches</h2>
          <p className="md-muted mt-1">Quick access to the most searched places and routes.</p>
        </div>
        <Badge><ArrowUpDown className="h-3.5 w-3.5" /> Recent</Badge>
      </div>
      <div className="mt-4 space-y-2">
        {popularSearches.map((item) => (
          <button key={item} className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-50">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600" /> {item}</span>
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </button>
        ))}
      </div>
    </Surface>
  );
}

export function FilterSheet() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(['Waterfalls', 'Open now']);

  return (
    <>
      <button onClick={() => setOpen(true)} className="md-chip shrink-0">
        <Filter className="h-4 w-4" /> Filters
      </button>
      {open ? (
        <div className="fixed inset-0 z-[60] bg-slate-950/35 px-3 py-4 backdrop-blur-sm sm:p-6" onClick={() => setOpen(false)}>
          <div className="mx-auto mt-10 max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Surface className="overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
                  <p className="text-sm text-slate-500">Fine-tune results like Material 3 bottom sheets.</p>
                </div>
                <button className="rounded-full p-2 hover:bg-slate-100" onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
              </div>
              <div className="grid gap-5 p-5 lg:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Categories</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {filters.categories.map((item) => (
                      <button key={item} onClick={() => toggle(item)} className={cn('md-chip', selected.includes(item) ? 'md-chip-active' : '')}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Features</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {filters.features.map((item) => (
                      <button key={item} onClick={() => toggle(item)} className={cn('md-chip', selected.includes(item) ? 'md-chip-active' : '')}>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 rounded-[22px] bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Radius</span>
                    <span className="text-sm text-slate-500">25 km</span>
                  </div>
                  <input type="range" defaultValue={25} min={5} max={100} className="mt-3 w-full accent-blue-600" />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-slate-200 px-5 py-4">
                <SecondaryButton>Clear all</SecondaryButton>
                <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm" onClick={() => setOpen(false)}>
                  Done
                </button>
              </div>
            </Surface>
          </div>
        </div>
      ) : null}
    </>
  );

  function toggle(value: string) {
    setSelected((current) => (current.includes(value) ? current.filter((item) => item !== value) : [...current, value]));
  }
}
