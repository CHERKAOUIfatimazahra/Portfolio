import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  Send,
  Loader2,
  Check,
} from "lucide-react";
import  Card  from "./ui/Card";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import Button from "./ui/Button";
import useToast from "./ui/use-toast";

const ContactIcon = ({ icon: Icon, className }) => (
  <div
    className={`p-3 rounded-full ${className} transform transition-all duration-300 group-hover:scale-110`}
  >
    <Icon className="w-6 h-6" />
  </div>
);


const ContactCard = ({ contact, index }) => {
  const Icon = contact.icon;

  return (
    <motion.a
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Card className="flex items-center gap-4 p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-l-primary dark:bg-gray-800/50 backdrop-blur-sm">
        <ContactIcon
          icon={Icon}
          className={`
            ${contact.label === "Email" ? "bg-red-100 text-red-600" : ""}
            ${
              contact.label === "Téléphone" ? "bg-green-100 text-green-600" : ""
            }
            ${contact.label === "GitHub" ? "bg-purple-100 text-purple-600" : ""}
            ${contact.label === "LinkedIn" ? "bg-blue-100 text-blue-600" : ""}
          `}
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {contact.label}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{contact.value}</p>
        </div>
      </Card>
    </motion.a>
  );
};

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message envoyé!",
      description: "Je vous répondrai dès que possible.",
    });

    // Reset form after showing success state
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Nom
          </label>
          <Input
            type="text"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            placeholder="Votre nom"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <Input
            type="email"
            required
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            placeholder="votre@email.com"
            className="w-full"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <Textarea
          required
          value={formState.message}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          placeholder="Votre message..."
          className="w-full min-h-[150px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Envoi...
          </>
        ) : isSubmitted ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Envoyé!
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Envoyer le message
          </>
        )}
      </Button>
    </form>
  );
};

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
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité ou
            collaboration.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {contacts.map((contact, index) => (
                <ContactCard
                  key={contact.label}
                  contact={contact}
                  index={index}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 dark:bg-gray-800/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">
                Envoyez-moi un message
              </h3>
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
