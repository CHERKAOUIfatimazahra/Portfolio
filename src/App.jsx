import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Light mode background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-0 transition-opacity duration-300">
          <div className="absolute inset-0 bg-[url('/light-bg-pattern.png')] bg-repeat opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/50 to-white" />
        </div>

        {/* Dark mode background */}
        <div className="absolute inset-0 opacity-0 dark:opacity-10 transition-opacity duration-300">
          <div className="absolute inset-0 bg-[url('/dark-bg-pattern.png')] bg-repeat opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
