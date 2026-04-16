'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = ['Overview', 'Reviews', 'Travel Hub'];

export function DetailTabs({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState('Overview');
  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)} className={cn('md-chip whitespace-nowrap', active === tab ? 'md-chip-active' : '')}>
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
