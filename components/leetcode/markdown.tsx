"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "katex/dist/katex.min.css";
import githubTheme from "@/components/leetcode/github-theme";
import { Copy, ClipboardCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function ProblemPage({
  markdown,
  problemId,
}: {
  markdown: string;
  problemId: string;
}) {
  return (
    <section>
      <div className="markdown">
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            // Custom code block rendering
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");

              const handleCopy = async () => {
                await navigator.clipboard.writeText(String(children));
                toast("Code copied to clipboard.", {
                  icon: (
                    <ClipboardCheck className="text-muted-foreground h-4 w-4" />
                  ),
                  duration: 1500,
                });
              };

              return !inline && match ? (
                <div className="relative">
                  <Button
                    onClick={handleCopy}
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 active:scale-90 transition-transform"
                  >
                    <Copy className="h-4 w-4 text-muted-foreground hover:text-white transition-colors" />
                  </Button>
                  <SyntaxHighlighter
                    style={githubTheme}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-4xl border [scrollbar-color:#ffffff1a_#191919]"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            ul({ children }) {
              return <ul className="list-disc my-2">{children}</ul>;
            },
            li({ children }) {
              return <li className="ml-4 my-2">{children}</li>;
            },
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
      {problemId !== "home" && (
        <>
          <Separator orientation="horizontal" className="h-4 mt-5" />
          <div className="text-sm text-muted-foreground mt-4">
            <Link
              href={`https://leetcode.com/problems/${problemId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              LeetCode Link
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
