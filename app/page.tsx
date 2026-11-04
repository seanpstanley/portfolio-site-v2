import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

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
