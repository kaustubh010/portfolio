"use client";

import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import { cn } from "@/lib/utils";

const tanker = localFont({ src: "../fonts/tanker.ttf", weight: "400", style: "normal", display: "swap" });
const supreme = localFont({ src: "../fonts/supreme.ttf", weight: "400", style: "normal", display: "swap" });

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

const socialLinks = [
  {
    icon: <Linkedin size={15} />,
    url: "https://www.linkedin.com/in/kaustubhbharadwaj",
    name: "LinkedIn",
    color: "#F97316",
    colorRgb: "249,115,22",
  },
  {
    icon: <Github size={15} />,
    url: "https://github.com/kaustubh010",
    name: "GitHub",
    color: "#EF4444",
    colorRgb: "239,68,68",
  },
  {
    icon: <Instagram size={15} />,
    url: "https://www.instagram.com/kaustubh._.bharadwaj",
    name: "Instagram",
    color: "#F43F5E",
    colorRgb: "244,63,94",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#060404",
        borderTop: "1px solid rgba(249,115,22,0.12)",
      }}
    >
      {/* Subtle glow at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">

        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
            <div className="flex items-center gap-2.5">
              <div
                className="w-1 h-7 rounded-full"
                style={{ background: "linear-gradient(180deg, #F97316, #F43F5E)" }}
              />
              <span
                className={cn("text-2xl leading-none tracking-tight", tanker.className)}
                style={{
                  background: "linear-gradient(120deg, #ffffff 30%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                KB
              </span>
              <div
                className="w-1 h-7 rounded-full"
                style={{ background: "linear-gradient(180deg, #F97316, #F43F5E)" }}
              />
            </div>
            </Link>

            <p className={cn("text-sm text-zinc-500 leading-relaxed max-w-xs", supreme.className)}>
              Full-stack developer building performant, beautiful web experiences with React & Next.js.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-1">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                  style={{
                    background: `rgba(${link.colorRgb},0.06)`,
                    border: `1px solid rgba(${link.colorRgb},0.18)`,
                    color: `rgba(${link.colorRgb},0.65)`,
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `rgba(${link.colorRgb},0.12)`;
                    el.style.borderColor = `rgba(${link.colorRgb},0.45)`;
                    el.style.color = link.color;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = `rgba(${link.colorRgb},0.06)`;
                    el.style.borderColor = `rgba(${link.colorRgb},0.18)`;
                    el.style.color = `rgba(${link.colorRgb},0.65)`;
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav links column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <p className={cn("text-xs tracking-widest uppercase text-zinc-600 mb-1", supreme.className)}>
              Navigation
            </p>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn("text-sm text-zinc-400 transition-colors duration-200 w-fit", supreme.className)}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F97316")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(161,161,170,1)")}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Contact column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <p className={cn("text-xs tracking-widest uppercase text-zinc-600 mb-1", supreme.className)}>
              Get In Touch
            </p>
            <a
              href="mailto:kaustubhbhardwaj00@gmail.com"
              className={cn("text-sm text-zinc-400 transition-colors duration-200 break-all", supreme.className)}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F97316")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(161,161,170,1)")}
            >
              kaustubhbhardwaj00@gmail.com
            </a>
            <a
              href="https://wa.me/+918619402976"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-sm text-zinc-400 transition-colors duration-200", supreme.className)}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#EF4444")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(161,161,170,1)")}
            >
              +91 8619402976
            </a>

            {/* Availability badge */}
            <div
              className="mt-2 inline-flex items-center gap-2 px-3.5 py-2 w-fit"
              style={{
                background: "rgba(249,115,22,0.06)",
                border: "1px solid rgba(249,115,22,0.18)",
                clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className={cn("text-xs text-orange-400/80", supreme.className)}>
                Open to work
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(249,115,22,0.08)" }}
        >
          <p className={cn("text-xs text-zinc-600", supreme.className)}>
            © {year} Kaustubh Bhardwaj. All rights reserved.
          </p>
          <p className={cn("text-xs text-zinc-700", supreme.className)}>
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}