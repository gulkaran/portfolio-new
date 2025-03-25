import Link from "next/link";
import Image from "next/image";
import SpotifyCurrentSong from "@/components/spotify/spotify";
import Experience from "@/components/about/experience";
import { Separator } from "@/components/ui/separator";
import ShopifyLogo from "@/public/images/about/shopify.png";
import ScotiabankLogo from "@/public/images/about/scotiabank.png";
import McMasterLogo from "@/public/images/about/mcmaster.png";
import WonderlandLogo from "@/public/images/about/canadas-wonderland.png";

export default function About() {
  return (
    <main
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-8 md:gap-15 gap-8 cursor-default"
      id="about"
    >
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-10 order-2 md:order-1">
        <Image
          src="/images/me.png"
          alt="me"
          width={375}
          height={600}
          className="rounded-xl"
          priority
        />
      </div>

      <div className="flex text-primary order-1 md:order-2">
        <div className="w-full lg:w-2/3 space-y-12 justify-start">
          <section className="mb-6">
            <h2 className="text-4xl font-semibold mb-3 text-primary">
              About Me
            </h2>
            <p className="text-lg mb-6">
              Software engineer, designer, and studying Computer Science at{" "}
              <span className="items-center">
                <Image
                  src={McMasterLogo}
                  alt="McMaster University"
                  width={20}
                  height={20}
                  className="inline-block items-baseline mr-1"
                />
              </span>
              <Link
                href="https://mcmaster.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-5 decoration-primary/50 hover:decoration-primary transition duration-300 ease-in-out"
              >
                McMaster University
              </Link>
              . Currently at Shopify.
            </p>
            <p className="text-lg mb-6">Designing products for the future.</p>

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
