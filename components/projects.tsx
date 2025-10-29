"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const tanker = localFont({
  src: "../fonts/tanker.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

const bespoke = localFont({
  src: "../fonts/bespoke.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

const supreme = localFont({
  src: "../fonts/supreme.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

const projects = [
  {
    id: 1,
    title: "Kala Hive",
    description:
      "An art-centric social platform enabling artists to showcase, sell, and engage with a global creative community. Features include user roles, artwork management, and secure authentication.",
    image: "/kalahive.png?height=400&width=600",
    tags: [
      "Next.js",
      "React",
      "Lucia Auth",
      "Drizzle ORM",
      "Postgres",
      "Cloudinary",
      "Tailwind CSS",
    ],
    url: "https://kalahive.vercel.app",
  },
  {
    id: 2,
    title: "Chatter",
    description:
      "A full-stack real-time chat application supporting instant messaging, authentication, and live user presence with Socket.IO and React Native (Expo).",
    image: "/chatterimg.jpeg?height=400&width=600",
    tags: [
      "React Native",
      "Expo",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Node.js",
    ],
    url: "https://github.com/kaustubh010/Chatter",
  },
  {
    id: 3,
    title: "Vedsatwa Traders",
    description:
      "A modern e-commerce platform rooted in Ayurveda, featuring a custom admin dashboard, Razorpay payment integration, and complete order management system.",
    image: "/traders.png?height=400&width=600",
    tags: [
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "Lucia Auth",
      "Razorpay API",
      "Tailwind CSS",
    ],
    url: "https://www.traders.vedsatwa.com",
  },
  {
    id: 4,
    title: "Boom Camp & Resorts",
    description:
      "A visually immersive website for a luxury resort, designed for high performance and elegant animations using Framer Motion.",
    image: "/boomcamp.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://boom-resort.vercel.app",
  },
  {
    id: 5,
    title: "TrendLines News App",
    description:
      "A responsive news aggregation app delivering real-time headlines and category-based stories using the News API.",
    image: "/trendlines.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "News API", "React Hooks"],
    url: "https://trendlines.vercel.app",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and experience. Designed for clarity, performance, and subtle motion aesthetics.",
    image: "/portfolio.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "https://kaaustubh.vercel.app",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      className="bg-slate-950 py-24 relative overflow-hidden"
      id="projects"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span
            className={cn(
              "text-sky-400 text-sm font-semibold tracking-wider uppercase",
              supreme.className
            )}
          >
            Portfolio
          </span>
          <h2
            className={cn(
              "mt-3 text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent",
              tanker.className
            )}
          >
            My Projects
          </h2>
          <div className="mt-4 w-20 h-1 bg-sky-500 mx-auto rounded-full" />
          <p
            className={cn(
              "mx-auto mt-6 max-w-2xl text-slate-400 text-lg",
              supreme.className
            )}
          >
            A selection of apps and platforms I’ve built, solving real-world
            challenges with clean code and modern design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-sky-500 text-white rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className={cn(
                      "text-xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors",
                      bespoke.className
                    )}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={cn(
                      "text-slate-400 text-sm mb-4 leading-relaxed flex-grow",
                      supreme.className
                    )}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "bg-slate-800/50 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-full hover:border-sky-500/50 hover:text-sky-400 transition-colors",
                          supreme.className
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    <div
                      className={cn(
                        "flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-sky-400 transition-colors",
                        supreme.className
                      )}
                    >
                      <span>View Project</span>
                      <ExternalLink
                        size={16}
                        className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* See More */}
        {!showAll && projects.length > 6 && (
          <div className="mt-16 text-center">
            <motion.button
              className={cn(
                "bg-sky-500 hover:bg-sky-400 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300",
                supreme.className
              )}
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              See More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
