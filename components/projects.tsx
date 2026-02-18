"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

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
              supreme.className,
            )}
          >
            Portfolio
          </span>
          <h2
            className={cn(
              "mt-3 text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent",
              tanker.className,
            )}
          >
            My Projects
          </h2>
          <div className="mt-4 w-20 h-1 bg-sky-500 mx-auto rounded-full" />
          <p
            className={cn(
              "mx-auto mt-6 max-w-2xl text-slate-400 text-lg",
              supreme.className,
            )}
          >
            A selection of apps and platforms I’ve built, solving real-world
            challenges with clean code and modern design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3
                    className={cn(
                      "text-xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors",
                      bespoke.className,
                    )}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-slate-400 text-sm mb-5 leading-relaxed flex-grow",
                      supreme.className,
                    )}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={cn(
                          "bg-slate-800/60 border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-full",
                          supreme.className,
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    {/* Primary — Prototype / Live */}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex-1 flex items-center justify-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white py-2.5 text-sm font-semibold transition hover:-translate-y-0.5",
                          supreme.className,
                        )}
                      >
                        <ExternalLink size={16} />
                        View Prototype
                      </a>
                    )}

                    {/* Secondary — GitHub (Optional) */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex-1 flex items-center justify-center gap-2 rounded-lg border border-slate-700 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 py-2.5 text-sm font-semibold transition",
                          supreme.className,
                        )}
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More */}
        {!showAll && projects.length > 6 && (
          <div className="mt-16 text-center">
            <motion.button
              className={cn(
                "bg-sky-500 hover:bg-sky-400 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300",
                supreme.className,
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
