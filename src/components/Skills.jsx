import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import Input from "./ui/Input";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiMysql,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { FaGlobe, FaNetworkWired, FaSearch } from "react-icons/fa";

const SkillLevel = ({ level }) => {
  const maxLevel = 5;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex gap-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {[...Array(maxLevel)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 1 }}
          animate={{
            scale: isHovered && index < level ? 1.2 : 1,
            transition: { duration: 0.2, delay: index * 0.05 },
          }}
          className={`h-1.5 w-3 rounded-full ${
            index < level
              ? "bg-gradient-to-r from-primary to-purple-600"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        />
      ))}
    </div>
  );
};

const SkillCard = ({ title, skills, searchTerm }) => {
  const filteredSkills = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();
    return skills.filter((skill) => {
      const skillName = skill.name.toLowerCase();
      const titleMatch = title.toLowerCase().includes(search);
      const nameMatch = skillName.includes(search);
      const words = search.split(" ");
      const multiWordMatch = words.every(
        (word) => skillName.includes(word) || title.toLowerCase().includes(word)
      );
      return search === "" || titleMatch || nameMatch || multiWordMatch;
    });
  }, [skills, searchTerm, title]);

  if (filteredSkills.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="p-6">
          <motion.h3
            className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent flex items-center gap-2"
            layout
          >
            {title}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              ({filteredSkills.length} skills)
            </span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <span className="font-medium dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                  <SkillLevel level={skill.level} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Your existing skillsData...
  const skillsData = {
    Frontend: [
      { name: "JavaScript", icon: SiJavascript, level: 4 },
      { name: "React.js", icon: SiReact, level: 4 },
      { name: "HTML5", icon: SiHtml5, level: 5 },
      { name: "CSS3", icon: SiCss3, level: 5 },
      { name: "Tailwind", icon: SiTailwindcss, level: 4 },
      { name: "Bootstrap", icon: SiBootstrap, level: 3 },
    ],
    Backend: [
      { name: "PHP", icon: SiPhp, level: 3 },
      { name: "MySQL", icon: SiMysql, level: 3 },
      { name: "Node.js", icon: SiNodedotjs, level: 3 },
      { name: "API REST", icon: FaNetworkWired, level: 4 },
    ],
    Tools: [
      { name: "Git", icon: SiGit, level: 4 },
      { name: "GitHub", icon: SiGithub, level: 4 },
      { name: "VS Code", icon: FaNetworkWired, level: 5 },
      { name: "Postman", icon: SiPostman, level: 4 },
    ],
    Languages: [
      { name: "Français", icon: FaGlobe, level: 5 },
      { name: "Arabe", icon: FaGlobe, level: 5 },
      { name: "Anglais", icon: FaGlobe, level: 4 },
    ],
  };

  const categories = ["all", ...Object.keys(skillsData)];

  const filteredCategories = useMemo(() => {
    if (selectedCategory === "all") {
      return Object.entries(skillsData);
    }
    return Object.entries(skillsData).filter(
      ([category]) => category === selectedCategory
    );
  }, [selectedCategory]);

  const totalResults = useMemo(() => {
    return filteredCategories.reduce((acc, [_, skills]) => {
      const filtered = skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          searchTerm
            .toLowerCase()
            .split(" ")
            .every((term) => skill.name.toLowerCase().includes(term))
      );
      return acc + filtered.length;
    }, 0);
  }, [filteredCategories, searchTerm]);

  return (
    <section className="py-16 w-full bg-gradient-to-b from-transparent via-gray-50/50 to-white dark:via-gray-900/50 dark:to-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          Professional Skills
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 flex flex-col sm:flex-row gap-4"
        >
          <div className="relative flex-1">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search skills..."
                className="pl-10 w-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <AnimatePresence>
              {searchTerm && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-1 text-sm text-gray-500 dark:text-gray-400"
                >
                  Found {totalResults} result{totalResults !== 1 ? "s" : ""}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px] bg-white dark:bg-gray-800">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredCategories.map(([category, skills]) => (
              <SkillCard
                key={category}
                title={category}
                skills={skills}
                searchTerm={searchTerm}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
