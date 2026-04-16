import { SearchHeader, CategoryPills } from '@/components/search-and-filters';
import { RouteCard } from '@/components/content-cards';
import { routes } from '@/lib/data';
import { HeroMap } from '@/components/hero-map';
import { SectionHeader, Surface } from '@/components/ui';

export default function RoutesPage() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.35fr)_minmax(380px,0.65fr)]">
      <div className="space-y-4">
        <Surface className="p-4">
          <SectionHeader title="Routes" subtitle="Browse route collections with filters and a map-backed layout." />
          <SearchHeader title="Search routes, places, or cities" />
          <div className="mt-4"><CategoryPills /></div>
        </Surface>
        <HeroMap title="Routes + filters" subtitle="Responsive route browsing on desktop and mobile." />
        <div className="space-y-3">
          {routes.map((route) => <RouteCard key={route.slug} route={route} />)}
        </div>
      </div>
      <div className="space-y-4">
        <Surface className="p-4">
          <h2 className="md-section-title">Filter friendly layout</h2>
          <p className="md-muted mt-2">Desktop keeps the search bar and cards visible while map context stays close by.</p>
        </Surface>
        <HeroMap title="Desktop map focus" subtitle="Matches the reference’s map + cards split layout." compact />
      </div>
    </div>
  );
}
