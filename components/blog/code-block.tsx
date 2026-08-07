"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import githubTheme from "@/components/leetcode/github-theme";
import { Copy, ClipboardCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

/**
 * Styled code block for MDX posts. Mirrors the highlighter setup already used
 * by the LeetCode markdown renderer so code looks identical across the app.
 */
export function CodeBlock({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast("Code copied to clipboard.", {
      icon: <ClipboardCheck className="text-muted-foreground h-4 w-4" />,
      duration: 1500,
    });
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative my-8 group">
      <Button
        onClick={handleCopy}
        variant="ghost"
        size="icon"
        aria-label="Copy code"
        className="absolute top-2 right-2 h-8 w-8 active:scale-90 cursor-pointer z-10 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground hover:text-white transition-colors" />
        )}
      </Button>
      <SyntaxHighlighter
        style={githubTheme as never}
        language={language}
        PreTag="div"
        className="rounded-2xl border text-sm [scrollbar-color:#ffffff1a_#191919]"
      >
        {code.replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
}
