"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { LegoScene } from "./lego-model";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="pt-6 px-6 md:px-12">
        <nav className="flex justify-center space-x-8 relative z-10">
          <Link
            href=""
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white/80 hover:text-white transition-colors"
          >
            about
          </Link>
          <Link
            href="/projects"
            className="text-white/80 hover:text-white transition-colors"
          >
            projects
          </Link>
          <Link
            href="/resume"
            className="text-white/80 hover:text-white transition-colors"
          >
            resume
          </Link>
        </nav>
      </header>

      <div className="absolute inset-0 z-1">
        <LegoScene />
        <ShootingStars />
        <StarsBackground />
      </div>

      <main className="flex-1 flex flex-col justify-center items-center px-6 relative z-10">
        <div className="max-w-6xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-5 text-white/85 group w-fit">
            <span className="text-violet-500 group-hover:text-purple-500 transition-colors">
              [gulkaran
            </span>
            <span className="group-hover:text-white transition-colors"> ~</span>
            <span className="text-violet-500 group-hover:text-purple-500 transition-colors">
              {" "}
              ]
            </span>
            <span className="group-hover:text-white transition-colors">$</span>
          </h1>

          <div className="flex h-5 items-center space-x-3">
            <p className="text-lg md:text-xl text-muted-foreground">
              <span className="italic">/ gul-car-n /</span>
            </p>
            <Separator orientation="vertical" />
            <p className="text-lg md:text-xl text-muted-foreground">
              software engineer and cs student
            </p>
          </div>

          <div className="mt-8 flex space-x-6 inset-0 z-1">
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
