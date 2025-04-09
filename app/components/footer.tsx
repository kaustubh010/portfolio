"use client";

import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/Kaustubh_Bhara",
      name: "Twitter",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/kaustubhbharadwaj",
      name: "LinkedIn",
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/kaustubh010",
      name: "GitHub",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/kaustubh._.bharadwaj",
      name: "Instagram",
    },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © {currentYear} Kaustubh. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <nav className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-gray-400 transition-colors hover:bg-teal-600 hover:text-white"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
