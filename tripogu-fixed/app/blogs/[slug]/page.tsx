import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogs } from '@/lib/data';
import { slugify } from '@/lib/utils';
import { ArrowLeft, Share2, Bookmark, Clock3, UserRound } from 'lucide-react';
import { Surface, Badge } from '@/components/ui';

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug) ?? blogs[0];
  if (!blog) notFound();

  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Link href="/blogs" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"><ArrowLeft className="h-4 w-4" /></Link>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-700">Blog details</div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{blog.title}</h1>
          </div>
        </div>

        <Surface className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="relative min-h-[280px]">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" />
            </div>
            <div className="p-5">
              <Badge>{blog.category}</Badge>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">{blog.excerpt}</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2"><UserRound className="h-4 w-4" /> {blog.author}</div>
                <div className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4" /> {blog.readTime}</div>
              </div>
              <div className="mt-5 flex gap-2">
                <button className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">Save</button>
                <button className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700"><Share2 className="mr-1 inline h-4 w-4" /> Share</button>
              </div>
            </div>
          </div>
        </Surface>

        <Surface className="p-5">
          <article className="prose prose-slate max-w-none">
            {blog.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        </Surface>
      </div>

      <div className="space-y-4">
        <Surface className="p-4">
          <h2 className="md-section-title">Read more</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">Best time to visit</div>
            <div className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">Recommended route stops</div>
            <div className="rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">Packing checklist</div>
          </div>
        </Surface>
        <Surface className="p-4">
          <h2 className="md-section-title">Editorial card</h2>
          <p className="md-muted mt-2">This mirrors the clean side panel from the article mockups.</p>
          <div className="mt-4 flex items-center justify-between rounded-[20px] bg-slate-50 px-4 py-3">
            <span className="text-sm font-semibold text-slate-800">Bookmark this story</span>
            <Bookmark className="h-4 w-4 text-slate-500" />
          </div>
        </Surface>
      </div>
    </div>
  );
}
