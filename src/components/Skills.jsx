import React from "react";
import { Card, CardContent } from "../components/ui/card";
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
import { FaGlobe, FaNetworkWired } from "react-icons/fa"; // Icônes supplémentaires

const SkillCard = ({ title, skills }) => (
  <div className="group transform hover:scale-105 transition-all duration-500 ease-out">
    <Card className="h-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <skill.icon className="w-6 h-6 text-primary" />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const Skills = () => {
  const skillsData = {
    Frontend: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
    Backend: [
      { name: "PHP", icon: SiPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "API REST", icon: FaNetworkWired }, // Icône corrigée
    ],
    Tools: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: FaNetworkWired }, // Exemple alternatif
      { name: "Postman", icon: SiPostman },
    ],
    Languages: [
      { name: "Français", icon: FaGlobe },
      { name: "Arabe", icon: FaGlobe },
      { name: "Anglais", icon: FaGlobe },
    ],
  };

  return (
    <div className="py-16 w-full bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Compétences Professionnelles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCard key={category} title={category} skills={skills} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
