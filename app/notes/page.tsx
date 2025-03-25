import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import notes from "./notes.json";
import calc from "@/public/images/notes/calc.svg";
import dsa from "@/public/images/notes/dsa.svg";
import stats from "@/public/images/notes/stats.svg";
import discrete from "@/public/images/notes/discrete.svg";
import linalg from "@/public/images/notes/linalg.svg";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gulkaran Singh | Notes",
  description: "Notes I've written in LaTeX.",
};

export default function Projects() {
  const mapping = {
    calc2: calc,
    dsa: dsa,
    stats: stats,
    discrete: discrete,
    linalg: linalg,
  };

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
              <h1 className="text-5xl font-bold mb-3">Notes</h1>
              <p className="text-muted-foreground flex items-center gap-1">
                Notes written in LaTeX!
              </p>
            </div>
          </div>
        </header>
        <BentoGrid className="max-w-8xl mx-auto grid-cols-1 md:grid-cols-2">
          {notes.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description=""
              header={
                <Image
                  src={mapping[item.header as keyof typeof mapping] || ""}
                  alt={item.title}
                  className="w-full h-auto max-h-[200px] object-contain"
                />
              }
              icon={item.icon}
              href={item.url}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
