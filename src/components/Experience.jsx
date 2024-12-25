import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      },
    },
  };

  return (
    <section className="py-20 w-full bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          Expérience Professionnelle
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={cardVariants} className="group">
              <Card className="transform transition-all duration-500 hover:scale-[1.02] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-none shadow-lg hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-muted-foreground mt-4 md:mt-0">
                      <span className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {exp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.tasks.map((task, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 text-foreground group-hover:bg-primary/10 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-primary shrink-0" />
                        <span>{task}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
