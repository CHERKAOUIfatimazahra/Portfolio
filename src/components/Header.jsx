import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "./ThemeProvider.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Expérience", href: "#experience" },
    { name: "Formation", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            FZ.CHERKAOUI
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "light" ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          className="md:hidden"
        >
          <div className="pt-4 pb-3 space-y-3">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 10 }}
                className="block text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
