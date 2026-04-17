"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { projects } from "@/data/projects";

const tanker = localFont({ src: "../fonts/tanker.ttf", weight: "400", style: "normal", display: "swap" });
const bespoke = localFont({ src: "../fonts/bespoke.ttf", weight: "400", style: "normal", display: "swap" });
const supreme = localFont({ src: "../fonts/supreme.ttf", weight: "400", style: "normal", display: "swap" });

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      className="py-28 relative overflow-hidden"
      id="projects"
      style={{ background: "#0a0808" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(239,68,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(239,68,68,0.04) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(239,68,68,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.35), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }} />

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #EF4444)" }} />
            <span className={cn("font-mono text-xs tracking-widest uppercase text-red-400/70", supreme.className)}>
              Portfolio
            </span>
            <div className="h-px w-10" style={{ background: "linear-gradient(90deg, #EF4444, transparent)" }} />
          </div>
          <h2
            className={cn("text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none", tanker.className)}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #ffe8d6 45%, #EF4444 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </h2>
          <motion.div
            className="mt-4 mx-auto h-px rounded-full"
            style={{ background: "linear-gradient(90deg, #F97316, #EF4444, #F43F5E)" }}
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.75, delay: 0.25 }}
            viewport={{ once: true }}
          />
          <p className={cn("mt-5 text-base text-zinc-500 max-w-lg mx-auto leading-relaxed", supreme.className)}>
            A selection of apps and platforms I've built — solving real challenges with clean code and modern design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {visible.map((project, index) => (
            <motion.div
              key={project.title}
              className="group flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <div
                className="flex flex-col h-full rounded-lg overflow-hidden transition-all duration-350"
                style={{
                  background: "rgba(10,5,5,0.9)",
                  border: "1px solid rgba(249,115,22,0.1)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(249,115,22,0.38)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(249,115,22,0.1)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(249,115,22,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-zinc-900/60">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className={cn("text-lg font-semibold text-white mb-2.5 transition-colors duration-200 group-hover:text-orange-400", bespoke.className)}
                  >
                    {project.title}
                  </h3>
                  <p className={cn("text-sm text-zinc-500 leading-relaxed mb-5 flex-grow", supreme.className)}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className={cn("text-xs px-3 py-1.5 rounded-sm", supreme.className)}
                        style={{
                          background: "rgba(249,115,22,0.05)",
                          border: "1px solid rgba(249,115,22,0.15)",
                          color: "rgba(249,115,22,0.65)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex gap-3">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5", supreme.className)}
                        style={{
                          background: "linear-gradient(135deg, #F97316, #EF4444)",
                          clipPath: "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)",
                          boxShadow: "0 0 12px rgba(249,115,22,0.25)",
                        }}
                      >
                        <ExternalLink size={13} />
                        Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn("flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5", supreme.className)}
                        style={{
                          border: "1px solid rgba(249,115,22,0.25)",
                          color: "rgba(249,115,22,0.75)",
                          clipPath: "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)",
                        }}
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        {!showAll && projects.length > 6 && (
          <div className="mt-14 text-center">
            <motion.button
              onClick={() => setShowAll(true)}
              className={cn("text-sm font-semibold px-8 py-3 transition-all duration-200", supreme.className)}
              style={{
                background: "rgba(10,5,5,0.9)",
                border: "1px solid rgba(249,115,22,0.3)",
                color: "#F97316",
                clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
              }}
              whileHover={{ y: -2, boxShadow: "0 0 20px rgba(249,115,22,0.15)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
            >
              Load More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
