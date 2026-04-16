import { savedListings, savedRoutes } from '@/lib/data';
import { PlaceCard, RouteCard } from '@/components/content-cards';
import { HeroMap } from '@/components/hero-map';
import { SectionHeader, Surface } from '@/components/ui';

export default function SavedPage() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]">
      <div className="space-y-4">
        <Surface className="p-4">
          <SectionHeader title="Saved" subtitle="Separate saved listings and saved routes just like the reference screen set." />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-slate-200 bg-blue-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Saved listings</div>
              <div className="mt-2 text-3xl font-bold text-slate-950">{savedListings.length}</div>
            </div>
            <div className="rounded-[22px] border border-slate-200 bg-emerald-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Saved routes</div>
              <div className="mt-2 text-3xl font-bold text-slate-950">{savedRoutes.length}</div>
            </div>
          </div>
        </Surface>
        <HeroMap title="Saved view" subtitle="Map-first saved content explorer." />
        <div>
          <SectionHeader title="Saved listings results" />
          <div className="space-y-3">
            {savedListings.map((place) => <PlaceCard key={place.slug} place={place} compact />)}
          </div>
        </div>
        <div>
          <SectionHeader title="Saved routes results" />
          <div className="space-y-3">
            {savedRoutes.map((route) => <RouteCard key={route.slug} route={route} />)}
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Surface className="p-4">
          <h2 className="md-section-title">Saved collections</h2>
          <p className="md-muted mt-2">One screen to move between cards, route results, and map context.</p>
        </Surface>
        <HeroMap title="Saved collections map" subtitle="Designed to match the mobile saved panel layout." compact />
      </div>
    </div>
  );
}
