"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Loading() {
  const skeletonItems = Array(6).fill(null);

  return (
    <div className="min-h-screen p-6 my-15">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <div className="w-fit">
            <Link href="/">
              <ArrowLeft className="h-6 w-6 mb-8 text-muted-foreground hover:text-white transition-colors" />
            </Link>
          </div>
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-5xl font-bold mb-3">LeetCode</h1>
              <Skeleton className="h-6 w-40" />
            </div>
          </div>
        </header>
        <BentoGrid className="max-w-4xl mx-auto">
          {skeletonItems.map((_, i) => (
            <BentoGridItem
              key={i}
              title={<Skeleton className="h-6 w-32" />}
              description=""
              header={<Skeleton className="w-full h-full rounded-xl" />}
              icon={<Skeleton className="h-4 w-24" />}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
