import { blogs } from '@/lib/data';
import { BlogCard } from '@/components/content-cards';
import { SearchHeader, CategoryPills } from '@/components/search-and-filters';
import { HeroMap } from '@/components/hero-map';
import { SectionHeader, Surface } from '@/components/ui';

export default function BlogsPage() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.7fr)]">
      <div className="space-y-4">
        <Surface className="p-4">
          <SectionHeader title="Blog" subtitle="Article cards and a detail layout inspired by the reference screens." />
          <SearchHeader title="Search blogs, destinations, or guides" />
          <div className="mt-4"><CategoryPills /></div>
        </Surface>
        <HeroMap title="Blog discovery" subtitle="Large, readable cards with strong article hierarchy." />
        <div className="space-y-3">
          {blogs.map((blog) => <BlogCard key={blog.slug} blog={blog} />)}
        </div>
      </div>
      <div className="space-y-4">
        <Surface className="p-4">
          <h2 className="md-section-title">Editorial focus</h2>
          <p className="md-muted mt-2">The right side shows featured content and keeps the experience clean on large screens.</p>
        </Surface>
        <HeroMap title="Blog featured card" subtitle="For the desktop detail layout and route-aware content." compact />
      </div>
    </div>
  );
}
