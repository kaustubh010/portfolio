"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/kaustubhbharadwaj",
      name: "LinkedIn",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/kaustubh010",
      name: "GitHub",
      gradient: "from-slate-500 to-slate-700",
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      url: "https://www.instagram.com/kaustubh._.bharadwaj",
      name: "Instagram",
      gradient: "from-pink-500 to-purple-600",
    },
  ];

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950 py-12">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
      
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          {/* Copyright Text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center sm:items-start gap-2"
          >
            <p className="text-sm text-slate-400">
              © {currentYear} <span className="text-white font-semibold">Kaustubh Bhardwaj</span>. All rights reserved.
            </p>
            <p className="text-xs text-slate-500">
              Built with Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <nav className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 text-slate-400 transition-all hover:border-slate-700 hover:-translate-y-1"
                  aria-label={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <span className="relative z-10 group-hover:text-white transition-colors">
                    {link.icon}
                  </span>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${link.gradient} blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Optional decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
        />
      </div>
    </footer>
  );
}