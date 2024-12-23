// components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-4xl mx-auto"
      >
        <motion.img
          src="unnamed.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-primary shadow-xl"
          whileHover={{ scale: 1.1, rotate: 5 }}
        />

        <motion.h1 {...fadeInUp} className="text-5xl md:text-6xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400">
            Fatima Zahra CHERKAOUI
          </span>
        </motion.h1>

        <motion.h2
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-2xl text-gray-600 dark:text-gray-300"
        >
          Développeur Full Stack
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          Passionnée par la création d'applications web innovantes et
          performantes. Spécialisée en React.js, PHP, et technologies modernes
          du web.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Me contacter
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-primary text-primary dark:text-white rounded-full hover:bg-primary/10 transition-colors"
          >
            En savoir plus
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8"
      >
        <ArrowDownCircle className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
