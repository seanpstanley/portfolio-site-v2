import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

/** The home page: every section, in order. */
export default function Home() {
  return (
    <main id="main" className="flex flex-col gap-[104px]">
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
