import Hero from "@/src/sections/Hero.tsx/page";
import Experience from "@/src/sections/Experience.tsx/page";
import Education from "@/src/sections/Education.tsx/page";
import Skills from "@/src/sections/Skills.tsx/page";
import Projects from "@/src/sections/Projects.tsx/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}
