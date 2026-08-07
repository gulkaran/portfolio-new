"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PageShell } from "@/components/page-shell";
import Image from "next/image";
import notes from "./notes.json";
import calc from "@/public/images/notes/calc.svg";
import dsa from "@/public/images/notes/dsa.svg";
import stats from "@/public/images/notes/stats.svg";
import discrete from "@/public/images/notes/discrete.svg";
import linalg from "@/public/images/notes/linalg.svg";

export default function Projects() {
  const mapping = {
    calc2: calc,
    dsa: dsa,
    stats: stats,
    discrete: discrete,
    linalg: linalg,
  };

  return (
    <PageShell title="Notes" subtitle="Notes written in LaTeX!">
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
                className="w-full h-auto object-contain data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-600/10"
                data-loaded="false"
                onLoad={(event) => {
                  event.currentTarget.setAttribute("data-loaded", "true");
                }}
              />
            }
            icon={item.icon}
            href={item.url}
          />
        ))}
      </BentoGrid>
    </PageShell>
  );
}
