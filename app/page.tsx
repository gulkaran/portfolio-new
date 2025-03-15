import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

require("dotenv").config();

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
