import Link from 'next/link';
import { ChevronRight, MapPin, Star, Clock3, Navigation, BookOpenText } from 'lucide-react';
import { Badge, Surface } from './ui';
import { cn, slugify, stars } from '@/lib/utils';
import type { Place, Route, Blog } from '@/lib/data';
import type { CSSProperties } from 'react';

function thumbStyle(image: string) {
  return {
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.35)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  } as CSSProperties;
}

export function PlaceCard({ place, compact = false }: { place: Place; compact?: boolean }) {
  return (
    <Surface className={cn('overflow-hidden', compact ? '' : 'group')}>
      <div className={cn('grid gap-0', compact ? 'grid-cols-[110px_1fr]' : 'grid-cols-[140px_1fr] sm:grid-cols-[170px_1fr]')}>
        <div className="relative min-h-[110px] bg-slate-200" style={thumbStyle(place.image)} />
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{place.category}</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">{place.title}</h3>
            </div>
            <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700">
              <Star className="h-4 w-4 fill-current" /> {stars(place.rating)}
            </div>
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-slate-600">{place.subtitle}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {place.distance}</span>
            <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {place.reviews}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {place.tags.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <Link href={`/places/${slugify(place.title)}`} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
              View details <ChevronRight className="h-4 w-4" />
            </Link>
            <button className="rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-700">Save</button>
          </div>
        </div>
      </div>
    </Surface>
  );
}

export function RouteCard({ route }: { route: Route }) {
  return (
    <Surface className="overflow-hidden">
      <div className="grid gap-0 sm:grid-cols-[190px_1fr]">
        <div className="relative min-h-[160px] bg-slate-200" style={thumbStyle(route.image)} />
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Routes</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">{route.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{route.subtitle}</p>
            </div>
            <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-semibold text-emerald-700">{stars(route.rating)}</div>
          </div>
          <p className="mt-3 line-clamp-2 text-sm text-slate-600">{route.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge>{route.duration}</Badge>
            <Badge>{route.distance}</Badge>
            <Badge>{route.difficulty}</Badge>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500"><Navigation className="h-4 w-4" /> {route.stops.length} stops</div>
            <Link href={`/routes/${slugify(route.title)}`} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
              Open route <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Surface>
  );
}

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Surface className="overflow-hidden">
      <div className="grid gap-0 sm:grid-cols-[220px_1fr]">
        <div className="relative min-h-[180px] bg-slate-200" style={thumbStyle(blog.image)} />
        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700">{blog.category}</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">{blog.title}</h3>
            </div>
            <Badge><BookOpenText className="h-3.5 w-3.5" /> {blog.readTime}</Badge>
          </div>
          <p className="mt-3 line-clamp-3 text-sm text-slate-600">{blog.excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-slate-500">By {blog.author}</span>
            <Link href={`/blogs/${slugify(blog.title)}`} className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700">
              Read article <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Surface>
  );
}
