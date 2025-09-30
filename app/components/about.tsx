"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const tanker = localFont({
  src: "../../fonts/tanker.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

const bespoke = localFont({
  src: "../../fonts/bespoke.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

const supreme = localFont({
  src: "../../fonts/supreme.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
});

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma js",
    "Supabase",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "Shadcn Ui",
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="about">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />

      <div ref={ref} className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={cn(
              "text-sky-400 text-sm font-semibold tracking-wider uppercase",
              supreme.className
            )}
          >
            Get to know me
          </span>
          <h2
            className={cn(
              "mt-3 text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent",
              tanker.className
            )}
          >
            About Me
          </h2>
          <div className="mt-4 w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Who I Am Section */}
          <motion.div
            className="space-y-6 h-full flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3
                  className={cn(
                    "text-2xl font-semibold text-white",
                    bespoke.className
                  )}
                >
                  Who I Am
                </h3>
              </div>

              <div
                className={cn(
                  "space-y-4 text-slate-400 leading-relaxed",
                  supreme.className
                )}
              >
                <p>
                  I'm Kaustubh Bhardwaj, a full-stack developer specializing in
                  React, Next.js, and scalable backend solutions. I focus on
                  building performant web applications that merge strong
                  engineering with thoughtful design.
                </p>
                <p>
                  My work spans authentication, payment integrations, and
                  database architecture—delivering complete end-to-end systems.
                  I aim to write clean, maintainable code that grows with
                  projects and provides seamless user experiences.
                </p>
                <p>
                  Beyond coding, I pay close attention to UI/UX details,
                  ensuring that the applications I build are not only functional
                  but intuitive and visually compelling.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-sky-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3
                  className={cn(
                    "text-2xl font-semibold text-white",
                    bespoke.className
                  )}
                >
                  Skills & Technologies
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className={cn(
                      "group relative rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-all hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400 hover:scale-105 cursor-default",
                      supreme.className
                    )}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    {skill}
                    <span className="absolute inset-0 rounded-full bg-sky-400/0 group-hover:bg-sky-400/5 transition-colors" />
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="bg-gradient-to-br from-sky-500/10 to-slate-900/50 backdrop-blur-sm border border-sky-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <div>
                  <h4
                    className={cn(
                      "text-lg font-semibold text-white mb-2",
                      bespoke.className
                    )}
                  >
                    My Philosophy
                  </h4>
                  <p
                    className={cn(
                      "text-sm text-slate-400 leading-relaxed",
                      supreme.className
                    )}
                  >
                    Quality over quantity. I believe in crafting solutions that
                    not only work but are maintainable, scalable, and delightful
                    to use.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
