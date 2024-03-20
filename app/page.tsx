//import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import ScrollIndicator from "@/components/ScrollIndicator";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* <About /> */}
      <ScrollIndicator />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
