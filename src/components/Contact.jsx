// components/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: MailIcon,
      label: "Email",
      value: "cherkaoui.fatimazahra97@gmail.com",
      href: "mailto:cherkaoui.fatimazahra97@gmail.com",
    },
    {
      icon: PhoneIcon,
      label: "Téléphone",
      value: "0601483643",
      href: "tel:0601483643",
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: "CHERKAOUIfatimazahra",
      href: "https://github.com/CHERKAOUIfatimazahra",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: "fatimazahra-cherkaoui",
      href: "https://www.linkedin.com/in/fatimazahra-cherkaoui",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Contact
        </motion.h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {contact.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
