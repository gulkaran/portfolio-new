import Link from "next/link";
import Image from "next/image";
import SpotifyCurrentSong from "@/components/spotify/spotify";
import Experience from "@/components/about/experience";
import { Separator } from "@/components/ui/separator";
import ShopifyLogo from "@/public/images/about/shopify.png";
import ScotiabankLogo from "@/public/images/about/scotiabank.png";
import WonderlandLogo from "@/public/images/about/canadas-wonderland.png";
import { ExternalLink } from "lucide-react";

export default function About() {
  return (
    <main
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 md:gap-15 gap-8 cursor-default"
      id="about"
    >
      <div className="flex justify-center items-center mb-10 order-2 md:order-1">
        <Image
          src="/images/me.png"
          alt="me"
          width={375}
          height={600}
          className="rounded-xl h-auto"
          priority
        />
      </div>

      <div className="flex text-primary order-1 md:order-2">
        <div className="space-y-12 flex flex-col items-center md:items-start max-w-md">
          <section className="mb-6">
            <h2 className="text-4xl font-semibold mb-3 text-primary">
              About Me
            </h2>
            <p className="text-lg mb-6">
              Software engineer, designer, and studying Computer Science at
              McMaster University. Currently at Shopify.
            </p>

            <div className="flex items-center">
              <p className="text-lg mb-6">
                Engineering the future.{" "}
                <span className="group inline-flex items-center gap-1 cursor-pointer">
                  <Link
                    href="../resume/Gulkaran_Singh_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground group-hover:text-primary underline underline-offset-5 decoration-primary/50 group-hover:decoration-primary transition duration-300 ease-in-out"
                  >
                    Resume
                  </Link>
                  <ExternalLink
                    strokeWidth={1.5}
                    className="text-muted-foreground group-hover:text-primary transition duration-300 ease-in-out transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </p>
            </div>

            <div className="relative">
              <Experience
                company="Shopify"
                jobTitle="Software Engineering Intern"
                date="Summer 2025"
                img={ShopifyLogo}
                color="bg-emerald-300"
                url="https://www.shopify.com"
              />

              <Experience
                company="Scotiabank"
                jobTitle="Trades Floor Fullstack Developer"
                date="Winter 2024"
                img={ScotiabankLogo}
                color="bg-red-400"
                url="https://www.scotiabank.com"
              />

              <Experience
                company="Canada's Wonderland"
                jobTitle="Software Engineering Intern"
                date="Summer 2023"
                img={WonderlandLogo}
                color="bg-blue-400"
                url="https://www.canadaswonderland.com"
              />
            </div>
          </section>

          <section className="mb-6 sm:mb-8">
            <p className="text-lg mb-3">I&apos;m currently listening to</p>
            <div className="flex justify-center lg:justify-start">
              <SpotifyCurrentSong />
            </div>
          </section>

          <div className="flex h-5 items-center space-x-4 mb-3 justify-center lg:justify-start font-light">
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              projects
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="/leetcode"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              leetcode
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="/notes"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              notes
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://github.com/gulkaran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              github
            </Link>
            <Separator orientation="vertical" />
            <Link
              href="https://linkedin.com/in/gulkaran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              linkedin
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
