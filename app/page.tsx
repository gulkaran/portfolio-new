import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import dotenv from "dotenv";

dotenv.config();

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
