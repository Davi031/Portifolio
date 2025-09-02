"use client";

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SpaceField from "./components/SpaceField"; 

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projetos", "sobreMim"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#04001C] text-white overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <SpaceField /> 
      </div>

      <div className="relative z-10">
        <Navigation activeSection={activeSection} />

        <main>
          <section id="home">
            <HeroSection />
          </section>

          <section id="projetos">
            <ProjectsSection />
          </section>

          <section id="sobreMim">
            <AboutSection />
          </section>
        </main>

        <footer className="bg-[#042a4b] h-16 flex justify-center items-center">
          <h1 className="text-sm">DMARTINS</h1>
        </footer>
      </div>
    </div>
  );
}