import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PageShellProps = {
  /** Large page heading. Omit when the page renders its own title (e.g. a blog post). */
  title?: string;
  /** Muted supporting line under the title. */
  subtitle?: React.ReactNode;
  /** Where the back arrow points. Defaults to the home page. */
  backHref?: string;
  /** Accessible label for the back arrow. */
  backLabel?: string;
  /** `default` matches /notes and /projects. `prose` narrows the measure for long-form reading. */
  width?: "default" | "prose";
  children: React.ReactNode;
};

/**
 * The shared page shell used by top-level pages (/notes, /projects, /blog).
 * Extracted from the markup that /notes and /projects previously duplicated inline.
 */
export function PageShell({
  title,
  subtitle,
  backHref = "/",
  backLabel = "Back",
  width = "default",
  children,
}: PageShellProps) {
  return (
    <div className="min-h-screen p-6 my-15">
      <div
        className={cn(
          "mx-auto",
          width === "prose" ? "max-w-2xl" : "max-w-4xl"
        )}
      >
        <header className={cn(title ? "mb-10" : "mb-8")}>
          <div className="w-fit">
            <Link href={backHref} aria-label={backLabel}>
              <ArrowLeft className="h-6 w-6 mb-8 text-muted-foreground hover:text-white transition-colors" />
            </Link>
          </div>
          {title && (
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-5xl font-bold mb-3">{title}</h1>
                {subtitle && (
                  <p className="text-muted-foreground flex items-center gap-1">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          )}
        </header>
        {children}
      </div>
    </div>
  );
}
