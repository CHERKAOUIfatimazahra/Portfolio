import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const portfolioData = {
  imgUrl: "/a.png",
  name: "CHERKAOUI FATIMA ZAHRA",
  heading: "Full Stack Developer",
  typingText: [
    "React.js Developer",
    2000,
    "Node.js Developer",
    2000,
    "Express.js Developer",
    2000,
    "MongoDB Specialist",
    2000,
  ],
  description:
    "Passionate full stack developer specializing in modern web technologies including React.js, Node.js, Express.js, and MongoDB. Experienced in building responsive web applications with a focus on user experience and scalable architecture.",
  btnText: "View My Work",
  btnUrl: "projects",
};

const socialData = [
  {
    icon: "bi:github",
    url: "https://github.com/CHERKAOUIfatimazahra",
  },
  {
    icon: "bi:linkedin",
    url: "https://linkedin.com/in/fatimazahra-cherkaoui",
  },
  {
    icon: "bi:envelope",
    url: "mailto:cherkaoui.fatimazahra97@gmail.com",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const SocialBtns = ({ socialBtns, variant }) => {
  return (
    <div className={variant}>
      {socialBtns.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Icon icon={social.icon} className="text-xl" />
        </a>
      ))}
    </div>
  );
};

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-screen flex items-center relative bg-gradient-to-r from-purple-700 to-purple-400 dark:from-purple-900 dark:to-black text-white px-6 py-12 md:py-24 overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 -z-10" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side content */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h6
              {...fadeInUp}
              className="text-lg font-semibold text-purple-200"
            >
              {portfolioData.name}
            </motion.h6>

            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-white"
            >
              {portfolioData.heading}
            </motion.h1>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-3xl font-medium text-gray-300"
            >
              <TypeAnimation
                sequence={portfolioData.typingText}
                speed={0}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-gray-300"
            >
              {portfolioData.description}
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button
                onClick={() => scrollToSection(portfolioData.btnUrl)}
                className="px-8 py-3 bg-white text-purple-700 rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 font-medium shadow-lg"
              >
                <span>{portfolioData.btnText}</span>
                <Icon icon="bi:arrow-right" />
              </button>

              <SocialBtns socialBtns={socialData} variant="flex gap-4" />
            </motion.div>
          </motion.div>

          {/* Right side image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={portfolioData.imgUrl}
              alt="Profile"
              className="rounded-lg shadow-lg max-w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDownCircle className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
