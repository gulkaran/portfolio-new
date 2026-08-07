import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Gulkaran Singh",
  description:
    "Writing on engineering, my career and building things for the web.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <PageShell
      title="Blog"
      subtitle="Writing on engineering, my career and building things for the web."
    >
      {posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col divide-y divide-border border-t border-border">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-3 py-10"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span aria-hidden="true">/</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>

                <h2 className="text-2xl font-semibold tracking-tight text-balance flex items-start gap-2">
                  <span className="group-hover:underline underline-offset-4 decoration-border">
                    {post.title}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 mt-2 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                </h2>

                <p className="text-[15px] leading-7 text-muted-foreground text-pretty max-w-2xl">
                  {post.description}
                </p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </PageShell>
  );
}
