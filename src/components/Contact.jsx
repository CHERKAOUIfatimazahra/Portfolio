// components/Contact.jsx
import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-16">
    <div className="container">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact</h2>
      <div className="flex flex-col items-center gap-6">
        <a
          href="mailto:cherkaoui.fatimazahra97@gmail.com"
          className="flex items-center gap-2 hover:text-primary"
        >
          <MailIcon size={20} />
          cherkaoui.fatimazahra97@gmail.com
        </a>
        <div className="flex gap-6">
          <a
            href="https://github.com/CHERKAOUIfatimazahra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/fatimazahra-cherkaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <LinkedinIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;