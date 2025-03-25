import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-background dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
          className
        )}
      >
        {header}
        <Separator orientation="horizontal" className="bg-primary/30" />
        <div className="group-hover/bento:translate-x-2 transition duration-200 text-xs text-muted-foreground font-light">
          {icon}
          <div className="font-semibold text-primary text-lg mb-2 mt-2">
            {title}
          </div>
          <p className="text-xs text-primary">{description}</p>
        </div>
      </Link>
    );
  }

  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-background dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <Separator orientation="horizontal" className="bg-primary/30" />
      <div className="group-hover/bento:translate-x-2 transition duration-200 text-xs text-muted-foreground font-light">
        {icon}
        <div className="font-semibold text-primary text-lg mb-2 mt-2">
          {title}
        </div>
        <p className="text-xs text-primary">{description}</p>
      </div>
    </div>
  );
};
