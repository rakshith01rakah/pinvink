'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { travelHubs } from '@/lib/data';
import { Badge, SecondaryButton } from './ui';
import { Star, MapPinned, ChevronRight, ShieldCheck, Clock3 } from 'lucide-react';

const tabs = ['Overview', 'Reviews', 'Travel Hub'] as const;

export function PlaceTabs({
  overview,
  rating,
  reviews,
  tags,
}: {
  overview: string;
  rating: number;
  reviews: string;
  tags: string[];
}) {
  const [active, setActive] = useState<(typeof tabs)[number]>('Overview');
  const topHubs = useMemo(() => travelHubs.slice(0, 5), []);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} className={cn('md-chip whitespace-nowrap', active === tab ? 'md-chip-active' : '')}>
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-4">
        {active === 'Overview' ? (
          <div className="space-y-4">
            <p className="text-sm leading-6 text-slate-600">{overview}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {tags.map((tag) => (
                <div key={tag} className="rounded-[22px] border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800">{tag}</div>
              ))}
            </div>
            <div className="rounded-[24px] bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">Useful info</div>
                <Badge><Clock3 className="h-3.5 w-3.5" /> Open</Badge>
              </div>
              <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                <div className="inline-flex items-center gap-2"><MapPinned className="h-4 w-4" /> Nearby map markers</div>
                <div className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Safety notes included</div>
              </div>
            </div>
          </div>
        ) : null}

        {active === 'Reviews' ? (
          <div className="space-y-3">
            <div className="rounded-[24px] border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-slate-950">{rating.toFixed(1)}</div>
                  <div className="text-sm text-slate-500">{reviews}</div>
                </div>
                <div className="rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700"><Star className="inline h-4 w-4 fill-current" /> Excellent</div>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ['Ayesha', 'Beautiful place and easy to reach.'],
                  ['Rahul', 'Great for photos and a peaceful visit.'],
                  ['Meera', 'Family friendly with a clean trail.'],
                ].map(([name, text]) => (
                  <div key={name} className="rounded-[18px] bg-slate-50 p-3">
                    <div className="text-sm font-semibold text-slate-900">{name}</div>
                    <p className="mt-1 text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {active === 'Travel Hub' ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {topHubs.map((hub) => (
              <div key={hub.name} className="rounded-[22px] border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">{hub.name}</div>
                <div className="mt-1 text-xs text-slate-500">{hub.category}</div>
                <div className="mt-4 flex items-center justify-between">
                  <Badge>{hub.badge}</Badge>
                  <SecondaryButton><ChevronRight className="h-4 w-4" /></SecondaryButton>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
