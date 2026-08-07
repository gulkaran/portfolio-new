"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { PageShell } from "@/components/page-shell";
import Image from "next/image";
import projects from "./projects.json";
import bytekode from "@/public/images/projects/bytekode.svg";
import yrcodes from "@/public/images/projects/yrcodes.png";
import memorybox from "@/public/images/projects/memorybox.png";
import fluidsim from "@/public/images/projects/fluidsim.svg";
import handtex from "@/public/images/projects/handtex.svg";
import markdown from "@/public/images/projects/markdown.svg";
import spiderman from "@/public/images/projects/spiderman.png";

export default function Projects() {
  const mapping = {
    bytekode: bytekode,
    yrcodes: yrcodes,
    memorybox: memorybox,
    fluidsim: fluidsim,
    handtex: handtex,
    markdown: markdown,
    spiderman: spiderman,
  };
  return (
    <PageShell
      title="Projects"
      subtitle={
        <>
          Source code on{" "}
          <Link
            href="https://github.com/gulkaran"
            className="hover:text-white transition-colors flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <Github className="h-4 w-4" />
          </Link>
        </>
      }
    >
      <BentoGrid className="max-w-8xl mx-auto grid-cols-1 md:grid-cols-2">
        {projects.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
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
