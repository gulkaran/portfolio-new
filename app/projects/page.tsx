import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import type { Metadata } from "next";
import projects from "./projects.json";
import bytekode from "@/public/images/projects/bytekode.svg";
import yrcodes from "@/public/images/projects/yrcodes.png";
import memorybox from "@/public/images/projects/memorybox.png";
import fluidsim from "@/public/images/projects/fluidsim.svg";
import handtex from "@/public/images/projects/handtex.svg";
import markdown from "@/public/images/projects/markdown.svg";
import spiderman from "@/public/images/projects/spiderman.png";

export const metadata: Metadata = {
  title: "Gulkaran Singh | Projects",
  description: "Projects I've created over the years.",
};

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
              <h1 className="text-5xl font-bold mb-3">Projects</h1>
              <p className="text-muted-foreground flex items-center gap-1">
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
              </p>
            </div>
          </div>
        </header>
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
