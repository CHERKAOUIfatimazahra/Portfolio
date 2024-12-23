// components/Experience.jsx
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "AFRITSY",
      role: "Développeur Full Stack",
      period: "mai 2024 - juillet 2024",
      location: "Agadir",
      description:
        "Développement de solutions e-commerce et e-marketing innovantes. Création d'interfaces utilisateur réactives et intégration avec les systèmes backend.",
      tasks: [
        "Développement frontend avec React.js",
        "Création d'API REST avec PHP",
        "Optimisation des performances",
        "Intégration de systèmes de paiement",
      ],
    },
    {
      company: "Hôpital Militaire OUED EDDAHAB",
      role: "Service du Laboratoire",
      period: "décembre 2022 - mai 2023",
      location: "Agadir",
      description:
        "Gestion et analyse des données médicales, optimisation des processus de laboratoire.",
      tasks: [
        "Analyse et traitement des données",
        "Gestion de base de données",
        "Amélioration des processus",
        "Reporting et documentation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Expérience Professionnelle
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.tasks.map((task, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                  >
                    <ExternalLink size={16} className="text-primary" />
                    {task}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
