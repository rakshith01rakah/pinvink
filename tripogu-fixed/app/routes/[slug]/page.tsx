import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin, Star, Clock3, ArrowLeft, Share2, Bookmark, Navigation2 } from 'lucide-react';
import { routes } from '@/lib/data';
import { slugify, stars } from '@/lib/utils';
import { HeroMap } from '@/components/hero-map';
import { Badge, PrimaryLink, SecondaryButton, Surface, SectionHeader } from '@/components/ui';

export function generateStaticParams() {
  return routes.map((route) => ({ slug: route.slug }));
}

export default async function RouteDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routes.find((item) => item.slug === slug) ?? routes[0];
  if (!route) notFound();

  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Link href="/routes" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"><ArrowLeft className="h-4 w-4" /></Link>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Route details</div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{route.title}</h1>
          </div>
        </div>

        <Surface className="overflow-hidden p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
            <HeroMap title={route.title} subtitle={route.subtitle} compact />
            <div className="space-y-3">
              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Route summary</div>
                    <p className="mt-2 text-sm text-slate-600">{route.summary}</p>
                  </div>
                  <div className="rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700"><Star className="inline h-4 w-4 fill-current" /> {stars(route.rating)}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge><Clock3 className="h-3.5 w-3.5" /> {route.duration}</Badge>
                  <Badge><Navigation2 className="h-3.5 w-3.5" /> {route.distance}</Badge>
                  <Badge><CalendarDays className="h-3.5 w-3.5" /> {route.difficulty}</Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <PrimaryLink href="/saved">Save route</PrimaryLink>
                <SecondaryButton><Share2 className="h-4 w-4" /> Share</SecondaryButton>
              </div>
            </div>
          </div>
        </Surface>

        <Surface className="p-4 sm:p-5">
          <SectionHeader title="Route stops" subtitle="Structured like the reference route details screen with long-form content and useful stops." />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {route.stops.map((stop, index) => (
              <div key={stop} className="rounded-[22px] border border-slate-200 bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Stop {index + 1}</div>
                <div className="mt-2 font-semibold text-slate-900">{stop}</div>
                <p className="mt-2 text-sm text-slate-600">Short stop description and map note for route planning.</p>
              </div>
            ))}
          </div>
        </Surface>

        <Surface className="p-4 sm:p-5">
          <SectionHeader title="Route guide" subtitle="This section behaves like the long article in the mockup." />
          <div className="prose prose-slate max-w-none">
            <p>Use this page to compare route distance, stops, and difficulty before saving it for later. The layout intentionally keeps the map close to the route summary, while the lower half gives you the readable article-style section from the reference.</p>
            <p>On desktop, this page benefits from a two-column layout. On mobile, the sections stack into a simple vertical flow so the route summary remains easy to scan without losing the map context.</p>
          </div>
        </Surface>
      </div>

      <div className="space-y-4">
        <Surface className="p-4 sm:p-5">
          <h2 className="md-section-title">Suggested actions</h2>
          <div className="mt-4 space-y-2">
            <button className="flex w-full items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-800"><span>Open route map</span><Bookmark className="h-4 w-4" /></button>
            <button className="flex w-full items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-800"><span>Compare stops</span><MapPin className="h-4 w-4" /></button>
            <button className="flex w-full items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-800"><span>Check weather</span><CalendarDays className="h-4 w-4" /></button>
          </div>
        </Surface>
        <HeroMap title="Route preview" subtitle="A polished map surface for quick glance planning." compact />
      </div>
    </div>
  );
}
