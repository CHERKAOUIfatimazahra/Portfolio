// components/Skills.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";

const Skills = () => {
  const skills = {
    Frontend: ["React.js", "HTML5", "CSS3", "JavaScript"],
    Backend: ["PHP", "MySQL", "POO"],
    Outils: ["Git", "GitHub", "PhpMyAdmin"],
    Langues: ["Français", "Arabe", "Anglais"],
  };

  return (
    <section id="skills" className="py-16 bg-accent/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary/10 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
