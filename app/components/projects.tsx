"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Social Media App",
    description:
      "A mobile-first social media platform where users can create posts, like, comment, and chat with each other in real-time.",
    image: "/social.jpg?height=400&width=600",
    tags: ["React Native", "Supabase", "Realtime", "Expo"],
    url: "https://play.google.com/store/apps/details?id=com.kaustubh010.tellmeindia&pcampaignid=web_share",
  },
  {
    id: 2,
    title: "TellMeIndia E-Commerce",
    description:
      "A complete e-commerce solution for TellMeIndia to sell health products, including a fully-featured admin dashboard for product and order management.",
    image: "/tellshop.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    url: "https://tellmeindia.com/",
  },
  {
    id: 3,
    title: "Artistic Platform",
    description:
      "An engaging platform for artists to showcase and sell their artwork, and for buyers to discover and purchase unique pieces.",
    image: "/art.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "NextAuth"],
    url: "https://kala-hive.vercel.app/",
  },
  {
    id: 7,
    title: "Flagship Portfolio",
    description:
      "A creative portfolio soulution for the company Flagship to showcase their work.",
    image: "/flagship.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion"],
    url: "https://flagship.tellmeindia.com/",
  },
  {
    id: 4,
    title: "TellMeIndia Social",
    description:
      "A landing page for the company TellMeIndia to showcase their work on their app",
    image: "/socialTell.png?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    url: "https://social.tellmeindia.com/",
  },
  {
    id: 6,
    title: "TrendLines News App",
    description:
      "A minimal and responsive news app called TrendLines that displays the latest headlines and trending stories across categories.",
    image: "/news.png?height=400&width=600",
    tags: ["React", "Tailwind CSS", "News API"],
    url: "https://trendlines.vercel.app/",
  },
  {
    id: 5,
    title: "Clox E-Commerce",
    description:
      "An e-commerce site for Clox with a clean UI, secure payments, and a robust admin panel for managing inventory, orders, and analytics.",
    image: "/clox.jpg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Admin Panel"],
    url: "https://clox.vercel.app/",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="bg-zinc-950 py-20" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="mx-auto mb-12 max-w-2xl text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Each one represents a unique
          challenge and solution.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleProjects.map((project, index) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
            <motion.div
              key={project.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-zinc-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col justify-between h-[280px]">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() =>
                    window.open(project.url, "_blank", "noopener,noreferrer")
                  }
                  className="mt-auto bg-white text-black flex items-center justify-center gap-2 py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink size={16} /> View Project
                </button>
              </div>
            </motion.div>
            </a>
          ))}
        </div>

        {!showAll && (
          <div className="mt-16 text-center">
            <motion.button
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
