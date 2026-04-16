export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { HeroMap } from '@/components/hero-map';
import { CategoryPills, SearchHeader } from '@/components/search-and-filters';
import { PlaceCard, RouteCard, BlogCard } from '@/components/content-cards';
import { SectionHeader, Badge, PrimaryLink, Surface } from '@/components/ui';
import { places, routes, blogs, travelHubs } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles, Users } from 'lucide-react';

export default function HomePage() {
return ( <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)] xl:grid-cols-[minmax(0,1.2fr)_minmax(420px,0.8fr)]">

```
  {/* LEFT SIDE */}
  <div className="space-y-4">

    <Surface className="overflow-hidden p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-2xl">
          <Badge>
            <Sparkles className="h-3.5 w-3.5" /> Material 3 travel discovery
          </Badge>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Discover beautiful tourist places and plan your next trip.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            A map-first responsive interface with mobile and desktop layouts,
            search, filters, routes, blog content, and saved collections.
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-[22px] bg-blue-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Places
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">
              128+
            </div>
          </div>

          <div className="rounded-[22px] bg-emerald-50 p-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Routes
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">
              42
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <SearchHeader />
      </div>

      <div className="mt-4">
        <CategoryPills />
      </div>
    </Surface>

    <HeroMap
      title="Western Ghats Viewpoint Route Map"
      subtitle="Explore scenic routes, nearby places, and save the best stops for later."
    />

    <div className="grid gap-4 xl:grid-cols-2">

      {/* RESULTS */}
      <div>
        <SectionHeader
          title="Results"
          subtitle="Cards are designed to collapse cleanly on mobile and expand on desktop."
        />

        <div className="space-y-3">
          {places.map((place) => (
            <PlaceCard key={place.slug} place={place} />
          ))}
        </div>
      </div>

      {/* ROUTES */}
      <div>
        <SectionHeader
          title="Routes"
          subtitle="Popular route collections shown with a quick preview and direct action."
        />

        <div className="space-y-3">
          {routes.map((route) => (
            <RouteCard key={route.slug} route={route} />
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="space-y-4">

    <Surface className="p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="md-section-title">Quick actions</h2>
          <p className="md-muted mt-1">
            Common travel tasks in one place.
          </p>
        </div>
        <Compass className="h-6 w-6 text-blue-600" />
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        {[
          ['Explore map', '/'],
          ['Find routes', '/routes'],
          ['Read blogs', '/blogs'],
          ['Open saved', '/saved'],
        ].map(([label, href]) => (
          <Link
            key={label}
            href={href}
            className="flex items-center justify-between rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:bg-white"
          >
            {label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </Surface>

    <Surface className="p-4">
      <SectionHeader
        title="Travel hub"
        subtitle="Useful services and booking shortcuts."
      />

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {travelHubs.map((hub) => (
          <div
            key={hub.name}
            className="flex items-center justify-between rounded-[20px] border border-slate-200 bg-white px-4 py-3"
          >
            <div>
              <div className="font-semibold text-slate-900">
                {hub.name}
              </div>
              <div className="text-xs text-slate-500">
                {hub.category}
              </div>
            </div>

            <button className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
              {hub.badge}
            </button>
          </div>
        ))}
      </div>
    </Surface>

    <Surface className="p-4">
      <SectionHeader
        title="Blogs"
        subtitle="Helpful content with an article-first layout."
      />

      <div className="space-y-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </Surface>

    <Surface className="p-5">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700">
          <Users className="h-6 w-6" />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900">
            Built for mobile and desktop
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            Responsive grid, bottom navigation on mobile, side rail on desktop,
            and Material 3 surfaces with clear hierarchy.
          </p>

          <PrimaryLink href="/login" className="mt-4">
            Open login screen
          </PrimaryLink>
        </div>
      </div>
    </Surface>

  </div>
</div>
```

);
}
