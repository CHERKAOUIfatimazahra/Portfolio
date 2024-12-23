import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { CodeIcon, ServerIcon, WrenchIcon, GlobeIcon } from "lucide-react";

const Skills = () => {
  const skills = {
    Frontend: {
      icon: CodeIcon,
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    Backend: {
      icon: ServerIcon,
      items: ["PHP", "MySQL", "POO", "Node.js", "API REST"],
    },
    Outils: {
      icon: WrenchIcon,
      items: ["Git", "GitHub", "VS Code", "PhpMyAdmin", "Postman"],
    },
    Langues: {
      icon: GlobeIcon,
      items: ["Français", "Arabe", "Anglais"],
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-black dark:text-white"
        >
          Compétences Techniques
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(
            ([category, { icon: Icon, items }], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <CardTitle className="text-black dark:text-white">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-200 dark:border-purple-700"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
