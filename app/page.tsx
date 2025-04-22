"use client";

import About from "@/components/about";
import BubbleBackground from "@/components/BubbleBackground";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center px-4">
      <BubbleBackground />
      <Intro />
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/> 
    </main>
  );
}
