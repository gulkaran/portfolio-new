import Link from "next/link";
import Image from "next/image";
import SpotifyCurrentSong from "@/components/spotify/spotify";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <main
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 md:gap-30 gap-12"
      id="about"
    >
      <div className="w-full md:w-fit flex justify-center">
        <Image
          src="/images/me.png"
          alt="me"
          width={350}
          height={600}
          className="rounded-xl"
          priority
        />
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-fit space-y-12">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-1">education</h2>
            <p className="text-lg mb-1">
              <span className="font-bold">cs</span> @ mcmaster university (3.95
              gpa)
            </p>
            <p className="text-sm text-muted-foreground">2022 - 2026</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">experience</h2>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/35"></div>

              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 top-2.5 w-2.5 h-2.5 rounded-full bg-white border-2"></div>
                <p className="text-lg mb-0.5">
                  software engineering intern @{" "}
                  <span className="font-semibold">shopify</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  summer 2025 (present)
                </p>
              </div>

              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 top-2.5 w-2.5 h-2.5 rounded-full bg-white border-2"></div>
                <p className="text-lg mb-0.5">
                  trades floor fullstack developer @{" "}
                  <span className="font-semibold">scotiabank</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  winter 2024 (4 months)
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-2 top-2.5 w-2.5 h-2.5 rounded-full bg-white border-2"></div>
                <p className="text-lg mb-0.5">
                  software engineer @{" "}
                  <span className="font-semibold">
                    canada&apos;s wonderland
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  summer 2023 (4 months)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-1">listening to</h2>
            <SpotifyCurrentSong />
          </section>

          <div className="flex h-5 items-center space-x-4">
            <Link
              href="/projects"
              className="text-white/80 hover:text-white transition-colors"
            >
              projects
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="/leetcode"
              className="text-white/80 hover:text-white transition-colors"
            >
              leetcode
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="/notes"
              className="text-white/80 hover:text-white transition-colors"
            >
              notes
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://github.com/gulkaran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white/80 hover:text-white transition-colors"
            >
              github
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://linkedin.com/in/gulkaran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white transition-colors"
            >
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
