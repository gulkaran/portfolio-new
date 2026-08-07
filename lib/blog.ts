import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
};

export type Post = {
  meta: PostMeta;
  content: string;
};

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function toMeta(slug: string, data: Record<string, unknown>, content: string): PostMeta {
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    author: String(data.author ?? "Gulkaran Singh"),
    category: String(data.category ?? "Writing"),
    readingTime: readingTime(content),
  };
}

/** All post slugs, derived from the .mdx files on disk. */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/** A single post, or null when the slug does not exist. */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { meta: toMeta(slug, data, content), content };
}

/** Post metadata for every post, newest first. */
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug)?.meta)
    .filter((meta): meta is PostMeta => Boolean(meta))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

/** Renders an ISO date as e.g. "March 14, 2025". */
export function formatDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
