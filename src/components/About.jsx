import React from "react";
import { Card, CardContent } from "../components/ui/Card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">À propos de moi</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">
              Je suis un développeur Full Stack passionné et déterminé,
              spécialisé dans la création d'applications web innovantes. Fort
              d'une solide expérience académique et professionnelle, je m'engage
              à fournir des solutions de qualité, tout en recherchant
              continuellement l'excellence et l'amélioration dans mon domaine.
              Actuellement, je suis à la recherche d'un stage en développement
              Full Stack pour le mois de juin, afin de mettre en pratique mes
              compétences et d'approfondir mes connaissances dans le domaine.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
