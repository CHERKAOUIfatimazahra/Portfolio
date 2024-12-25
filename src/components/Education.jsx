import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Search,
  BookOpen,
  Building2,
  Binary,
} from "lucide-react";
import { Card } from "../components/ui/card";
import Input from "../components/ui/input";
import Badge from "../components/ui/badge";

const EducationCard = ({ education, index }) => {
  const icons = {
    tech: Binary,
    university: BookOpen,
    institute: Building2,
  };

  const Icon = icons[education.type] || GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.2,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <Card className="group p-6 hover:shadow-lg transition-all duration-300 border-l-4 hover:border-l-primary dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <motion.div
            className="bg-primary/10 p-3 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400">
                {education.degree}
              </h3>
              <Badge variant="outline" className="ml-2">
                {education.type}
              </Badge>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">
              {education.school}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar size={16} className="text-primary/70" />
              <span>{education.period}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {education.description}
            </p>
            {education.skills && (
              <div className="mt-4 flex flex-wrap gap-2">
                {education.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const Education = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const education = [
    {
      school: "YouCode Maroc",
      degree: "Développement Full Stack",
      period: "2023 - 2025",
      type: "tech",
      description:
        "Formation intensive en développement web moderne avec focus sur React, PHP, et les technologies actuelles.",
      skills: ["React", "PHP", "JavaScript", "MySQL", "Git", "Agile"],
    },
    {
      school: "University of the People",
      degree: "Baccalauréat en Sciences de la Santé",
      period: "2021 - 2024",
      type: "university",
      description:
        "Formation complète en sciences de la santé avec spécialisation en analyse médicale.",
      skills: ["Biologie", "Chimie", "Analyse Médicale", "Recherche"],
    },
    {
      school: "Institut des formations",
      degree: "Technique et Management de Laboratoire",
      period: "2021 - 2022",
      type: "institute",
      description:
        "Formation spécialisée en gestion et techniques de laboratoire médical.",
      skills: ["Management", "Laboratoire", "Analyse", "Qualité"],
    },
  ];

  const filteredEducation = useMemo(() => {
    return education.filter((edu) => {
      const searchString = searchTerm.toLowerCase();
      return (
        edu.school.toLowerCase().includes(searchString) ||
        edu.degree.toLowerCase().includes(searchString) ||
        edu.description.toLowerCase().includes(searchString) ||
        edu.skills?.some((skill) => skill.toLowerCase().includes(searchString))
      );
    });
  }, [searchTerm]);

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400">
            Formation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Mon parcours académique combine la technologie et les sciences de la
            santé
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher par école, diplôme ou compétence..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {filteredEducation.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
          {filteredEducation.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-500 dark:text-gray-400 py-8"
            >
              Aucun résultat trouvé pour "{searchTerm}"
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
