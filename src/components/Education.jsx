// components/Education.jsx
import React from "react";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/Card";

const Education = () => {
  const education = [
    {
      school: "YouCode Maroc",
      degree: "Développement full stack",
      period: "septembre 2023 - 2025",
      description: "Formation en développement web full stack",
    },
    {
      school: "University of the People",
      degree: "BACCALAURÉAT EN SCIENCES DE LA SANTÉ",
      period: "2021 - 2024",
      description: "Formation en sciences de la santé",
    },
    {
      school: "Institut des formations",
      degree: "ATTESTATION EN TECHNIQUE ET MANAGEMENT DE LABORATOIRE",
      period: "2021 - 2022",
      description: "Formation en gestion de laboratoire",
    },
  ];

  return (
    <section id="education" className="py-16 bg-accent/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Formation</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.school}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar size={16} />
                  {edu.period}
                </div>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
