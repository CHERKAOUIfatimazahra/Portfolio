// components/Experience.jsx
import React from "react";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/Card";

const Experience = () => {
  const experiences = [
    {
      company: "AFRITSY",
      role: "Développeur Full Stack",
      period: "mai 2024 - juillet 2024",
      location: "Agadir",
      description:
        "Développement de solutions e-commerce et e-marketing innovantes",
    },
    {
      company: "Hôpital Militaire OUED EDDAHAB",
      role: "Service du Laboratoire",
      period: "décembre 2022 - mai 2023",
      location: "Agadir",
      description: "Analyse médicale et gestion de laboratoire",
    },
  ];

  return (
    <section id="experience" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Expérience Professionnelle
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{exp.role}</CardTitle>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                </div>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
