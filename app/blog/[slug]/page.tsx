import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { evaluate } from "next-mdx-remote-client/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import { PageShell } from "@/components/page-shell";
import { mdxComponents } from "@/components/blog/mdx-components";
import { Separator } from "@/components/ui/separator";
import { getPostBySlug, getPostSlugs, getAllPosts, formatDate } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.meta.title} | Gulkaran Singh`,
    description: post.meta.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const { content, error } = await evaluate({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  // evaluate() returns MDX syntax errors instead of throwing, so surface them.
  if (error) throw error;

  const { meta } = post;
  const morePosts = getAllPosts()
    .filter((other) => other.slug !== meta.slug)
    .slice(0, 2);

  return (
    <PageShell width="prose" backHref="/blog" backLabel="Back to blog">
      <article>
        <header className="mb-10">
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="uppercase tracking-wider">{meta.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-balance mb-4">
            {meta.title}
          </h1>

          <p className="text-[15px] leading-7 text-muted-foreground text-pretty mb-6">
            {meta.description}
          </p>

          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="text-foreground">{meta.author}</span>
            <span aria-hidden="true">·</span>
            <span>{meta.readingTime}</span>
          </div>
        </header>

        <Separator orientation="horizontal" className="mb-10" />

        {content}
      </article>

      <footer className="mt-16">
        <Separator orientation="horizontal" className="mb-8" />

        {morePosts.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-5">
              More posts
            </h2>
            <div className="flex flex-col gap-5">
              {morePosts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <span className="text-base font-medium group-hover:underline underline-offset-4 decoration-border">
                    {other.title}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {other.category} · {formatDate(other.date)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>
      </footer>
    </PageShell>
  );
}
