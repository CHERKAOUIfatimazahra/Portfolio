import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

const MovingBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const followMouse = () => {
      setOffset({
        x: (mousePosition.x - window.innerWidth / 2) / 50,
        y: (mousePosition.y - window.innerHeight / 2) / 50
      });
    };

    const animationFrame = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  return (
    <>
      {/* Light mode animated background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-0 transition-opacity duration-300 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/light-bg-pattern.png')] bg-repeat opacity-20"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/50 to-white">
          <div className="absolute inset-0 animate-pulse opacity-30" />
        </div>
      </div>
      
      {/* Dark mode animated background */}
      <div className="absolute inset-0 opacity-0 dark:opacity-10 transition-opacity duration-300 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('/dark-bg-pattern.png')] bg-repeat opacity-20"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black">
          <div className="absolute inset-0 animate-pulse opacity-30" />
        </div>
      </div>
    </>
  );
};

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground relative">
        <MovingBackground />
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