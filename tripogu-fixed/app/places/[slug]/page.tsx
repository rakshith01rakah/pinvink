import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Bookmark, Share2, Star, MapPin, Clock3 } from 'lucide-react';
import { places } from '@/lib/data';
import { slugify, stars } from '@/lib/utils';
import { HeroMap } from '@/components/hero-map';
import { Badge, PrimaryLink, SecondaryButton, Surface, SectionHeader } from '@/components/ui';
import { PlaceTabs } from '@/components/place-tabs';

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export default async function PlaceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const place = places.find((item) => item.slug === slug) ?? places[0];
  if (!place) notFound();

  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Place details</div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{place.title}</h1>
          </div>
        </div>

        <Surface className="overflow-hidden p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
            <HeroMap title={place.title} subtitle={place.subtitle} compact />
            <div className="space-y-3">
              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Overview</div>
                    <p className="mt-2 text-sm text-slate-600">{place.subtitle}</p>
                  </div>
                  <div className="rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-amber-700"><Star className="inline h-4 w-4 fill-current" /> {stars(place.rating)}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge><MapPin className="h-3.5 w-3.5" /> {place.distance}</Badge>
                  <Badge><Clock3 className="h-3.5 w-3.5" /> {place.reviews}</Badge>
                  <Badge>{place.bestTime}</Badge>
                </div>
              </div>
              <div className="flex gap-2">
                <PrimaryLink href="/saved">Save place</PrimaryLink>
                <SecondaryButton><Share2 className="h-4 w-4" /> Share</SecondaryButton>
              </div>
            </div>
          </div>
        </Surface>

        <Surface className="p-4 sm:p-5">
          <SectionHeader title="Discover" subtitle="Overview, reviews, and travel hub tabs are all integrated here." />
          <PlaceTabs overview={place.overview} rating={place.rating} reviews={place.reviews} tags={place.tags} />
        </Surface>
      </div>

      <div className="space-y-4">
        <Surface className="p-4 sm:p-5">
          <h2 className="md-section-title">Travel quick actions</h2>
          <div className="mt-4 space-y-2">
            <button className="flex w-full items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-800"><span>Directions</span><MapPin className="h-4 w-4" /></button>
            <button className="flex w-full items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-800"><span>Save listing</span><Bookmark className="h-4 w-4" /></button>
            <button className="flex w-full items-center justify-between rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-800"><span>Check travel hub</span><ArrowLeft className="h-4 w-4 rotate-180" /></button>
          </div>
        </Surface>
        <HeroMap title="Place preview" subtitle="Matches the map + overview/reviews/travel hub reference pattern." compact />
      </div>
    </div>
  );
}
