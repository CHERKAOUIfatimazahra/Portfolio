// components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Card } from "../components/ui/card";

const Education = () => {
  const education = [
    {
      school: "YouCode Maroc",
      degree: "Développement Full Stack",
      period: "2023 - 2025",
      description:
        "Formation intensive en développement web moderne avec focus sur React, PHP, et les technologies actuelles.",
    },
    {
      school: "University of the People",
      degree: "Baccalauréat en Sciences de la Santé",
      period: "2021 - 2024",
      description:
        "Formation complète en sciences de la santé avec spécialisation en analyse médicale.",
    },
    {
      school: "Institut des formations",
      degree: "Technique et Management de Laboratoire",
      period: "2021 - 2022",
      description:
        "Formation spécialisée en gestion et techniques de laboratoire médical.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Formation
        </motion.h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {edu.school}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
