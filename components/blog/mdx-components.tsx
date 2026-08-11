import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/blog/code-block";
import { Separator } from "@/components/ui/separator";

/**
 * Typography for MDX post bodies.
 *
 * Styled explicitly rather than with a prose plugin: the app has no
 * @tailwindcss/typography, and the global `.markdown > * { all: revert }` rule
 * used by the LeetCode renderer would strip these styles.
 */
export const mdxComponents: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold tracking-tight mt-12 mb-4">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold tracking-tight mt-8 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold mt-6 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-[15px] leading-7 text-foreground/90">{children}</p>
  ),
  a: ({ href, children }) => {
    const external = typeof href === "string" && href.startsWith("http");
    return (
      <Link
        href={href ?? "#"}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
      >
        {children}
      </Link>
    );
  },
  ul: ({ children }) => (
    <ul className="list-disc mb-6 text-[15px] leading-7 text-foreground/90">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal mb-6 text-[15px] leading-7 text-foreground/90">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="ml-5 my-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-border pl-5 my-8 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  hr: () => <Separator orientation="horizontal" className="my-10" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : ""}
      alt={alt ?? ""}
      className="rounded-2xl border my-8 w-full"
    />
  ),
  // Inline code. Fenced blocks arrive here wrapped in <pre>, handled below.
  code: ({ children, className }) => {
    if (className?.includes("language-")) {
      return <code className={className}>{children}</code>;
    }
    return (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
        {children}
      </code>
    );
  },
  pre: ({ children }) => {
    // Unwrap MDX's <pre><code class="language-x"> into the highlighter.
    const child = children as
      | { props?: { className?: string; children?: string } }
      | undefined;
    const className = child?.props?.className ?? "";
    const language = /language-(\w+)/.exec(className)?.[1] ?? "text";
    const code = String(child?.props?.children ?? "");
    return <CodeBlock language={language} code={code} />;
  },
};
