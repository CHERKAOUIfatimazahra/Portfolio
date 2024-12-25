import React, { useState, useMemo } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Input from "./ui/input";
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
  return (
    <div className="flex gap-1">
      {[...Array(maxLevel)].map((_, index) => (
        <div
          key={index}
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
    <div className="group transform hover:scale-105 transition-all duration-500 ease-out">
      <Card className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
            {title}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              ({filteredSkills.length} skills)
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <skill.icon className="w-6 h-6 text-primary" />
                  <span className="font-medium">{skill.name}</span>
                </div>
                <SkillLevel level={skill.level} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (selectedCategory !== "all") {
      setSelectedCategory("all");
    }
  };

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
    <div className="py-16 w-full bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Professional Skills
        </h2>

        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search skills..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <div className="absolute top-full mt-1 text-sm text-gray-500">
                Found {totalResults} result{totalResults !== 1 ? "s" : ""}
              </div>
            )}
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map(([category, skills]) => (
            <SkillCard
              key={category}
              title={category}
              skills={skills}
              searchTerm={searchTerm}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Skills;
