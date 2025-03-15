import Link from "next/link";
import SpotifyCurrentSong from "@/components/spotify/spotify";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <main
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-8"
      id="about"
    >
      <div className="w-full md:w-1/2 flex justify-center">
        {/* <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-08%20at%202.16.55%E2%80%AFAM-D47A4TVyZhSQrG3STl3Xa9bgwzdegl.png"
          alt="Spider-Man hanging upside down"
          width={400}
          height={600}
          className="object-contain"
          priority
        /> */}
      </div>

      <div className="w-full md:w-1/2 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">education</h2>
          <p className="text-lg mb-0.5">
            <span className="font-bold">cs</span> @ mcmaster university (3.95
            gpa)
          </p>
          <p className="text-sm text-muted-foreground">sep 2022 - apr 2026</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">experience</h2>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/35"></div>

            <div className="relative pl-10 pb-8">
              <div className="absolute left-2 top-1 w-2.5 h-2.5 rounded-full bg-white border-2"></div>
              <p className="text-sm text-muted-foreground">
                may 2025 - aug 2025 (4 months)
              </p>
              <p className="text-lg mb-0.5">
                backend engineer @{" "}
                <span className="font-semibold">shopify</span>
              </p>
            </div>

            <div className="relative pl-10 pb-8">
              <div className="absolute left-2 top-1 w-2.5 h-2.5 rounded-full bg-white border-2"></div>
              <p className="text-sm text-muted-foreground">
                jan 2024 - apr 2024 (4 months)
              </p>
              <p className="text-lg mb-0.5">
                full stack developer @{" "}
                <span className="font-semibold">scotiabank</span>
              </p>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-2 top-1 w-2.5 h-2.5 rounded-full bg-white border-2"></div>
              <p className="text-sm text-muted-foreground">
                may 2023 - aug 2023 (4 months)
              </p>
              <p className="text-lg mb-0.5">
                software engineer @{" "}
                <span className="font-semibold">canada&apos;s wonderland</span>
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">listening to</h2>
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
            href="/skills"
            className="text-white/80 hover:text-white transition-colors"
          >
            skills
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
            href="/resume"
            className="text-white/80 hover:text-white transition-colors"
          >
            resume
          </Link>
        </div>
      </div>
    </main>
  );
}
