"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { LegoScene } from "./lego-model";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen cursor-default">
      {/* 1. Add pointer-events-none to header so clicks pass through empty header space
       */}
      <header className="pt-6 px-6 md:px-12 pointer-events-none">
        {/* 2. Add pointer-events-auto so links are still clickable
         */}
        <nav className="flex justify-center space-x-8 relative z-10 mt-1 font-light pointer-events-auto">
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            projects
          </Link>
          <Link
            href="../resume/Gulkaran_Singh_Resume.pdf"
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </Link>
        </nav>
      </header>

      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 pointer-events-none">
          <ShootingStars />
          <StarsBackground />
        </div>

        <LegoScene />
      </div>

      <main className="flex-1 flex flex-col justify-center items-center px-6 relative z-10 pointer-events-none">
        <div className="max-w-6xl w-full">
          {/* 4. Add pointer-events-auto to the Text so you can still select it
           */}
          <h1 className="text-4xl md:text-7xl font-bold mb-5 text-white/85 group w-fit pointer-events-auto">
            <span className="text-violet-500 group-hover:text-purple-500 transition-colors">
              [gulkaran
            </span>
            <span className="group-hover:text-white transition-colors"> ~</span>
            <span className="text-violet-500 group-hover:text-purple-500 transition-colors">
              {" "}
              ]
            </span>
            <span className="group-hover:text-white transition-colors"> $</span>
          </h1>

          {/* 5. Add pointer-events-auto to the description
           */}
          <div className="flex h-5 items-center space-x-3 pointer-events-auto">
            <p className="text-md md:text-xl text-muted-foreground">
              <span className="italic">/ gul-car-n /</span>
            </p>
            <Separator orientation="vertical" />
            <p className="text-md md:text-xl text-muted-foreground">
              build the missing, reimagine the existing
            </p>
          </div>

          {/* 6. Add pointer-events-auto to the buttons container so they are clickable
           */}
          <div className="mt-8 flex space-x-6 inset-0 z-1 pointer-events-auto">
            <Link
              href="https://github.com/gulkaran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/gulkaran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=gulkaransingh.m@gmail.com&su=&body=Hello%20Gulkaran!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
