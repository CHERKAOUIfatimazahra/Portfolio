// components/Hero.jsx
import React from "react";

const Hero = () => (
  <section className="py-20 px-6 text-center">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Fatima Zahra CHERKAOUI</h1>
      <h2 className="text-2xl text-muted-foreground mb-8">
        Développeur Full Stack
      </h2>
      <p className="text-lg mb-8">
        Passionnée par le développement web et la création d'applications
        innovantes
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#contact"
          className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90"
        >
          Me contacter
        </a>
        <a
          href="#about"
          className="border border-input hover:bg-accent px-6 py-2 rounded-full"
        >
          En savoir plus
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
