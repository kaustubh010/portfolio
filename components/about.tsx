"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
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

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Node.js", "Express", "MongoDB", "PostgreSQL",
  "Prisma", "Supabase", "Tailwind CSS", "Framer Motion",
  "Redux", "Shadcn UI",
];

function SectionLabel({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-3">
      <div className="h-px w-10" style={{ background: `linear-gradient(90deg, transparent, ${color})` }} />
      <span className="font-mono text-xs tracking-widest uppercase" style={{ color }}>
        {text}
      </span>
      <div className="h-px w-10" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="py-28 relative overflow-hidden"
      id="about"
      style={{ background: "#090909" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.035) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-56 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Border lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.35), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(244,63,94,0.3), transparent)" }} />

      <div ref={ref} className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionLabel color="#F97316" text="About Me" />
          <h2
            className={cn("text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none", tanker.className)}
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #ffe8d6 45%, #F97316 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Who I Am
          </h2>
          <motion.div
            className="mt-4 mx-auto h-px rounded-full"
            style={{ background: "linear-gradient(90deg, #F97316, #EF4444, #F43F5E)" }}
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : { width: 0 }}
            transition={{ duration: 0.75, delay: 0.25 }}
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div
              className="h-full rounded-lg overflow-hidden"
              style={{
                background: "rgba(12,6,6,0.8)",
                border: "1px solid rgba(249,115,22,0.15)",
              }}
            >
              {/* Card top bar */}
              <div
                className="flex items-center gap-2.5 px-7 py-3.5"
                style={{
                  background: "rgba(249,115,22,0.06)",
                  borderBottom: "1px solid rgba(249,115,22,0.1)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ boxShadow: "0 0 5px #F97316" }} />
                <span className={cn("text-xs font-mono tracking-widest text-orange-400/60", supreme.className)}>
                  profile.bio
                </span>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-7">
                  <div
                    className="w-13 h-13 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(249,115,22,0.08)",
                      border: "1px solid rgba(249,115,22,0.2)",
                      width: 52, height: 52,
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="#F97316" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className={cn("text-2xl font-semibold text-white", bespoke.className)}>
                    Kaustubh Bhardwaj
                  </h3>
                </div>

                <div className={cn("space-y-5 text-zinc-400 leading-relaxed text-base", supreme.className)}>
                  <p>
                    I'm a full-stack developer specializing in React, Next.js, and scalable backend solutions. I focus on building performant web applications that merge strong engineering with thoughtful design.
                  </p>
                  <p>
                    My work spans authentication, payment integrations, and database architecture — delivering complete end-to-end systems with clean, maintainable code that grows with projects.
                  </p>
                  <p>
                    Beyond the code, I pay close attention to UI/UX details, ensuring every application I build is intuitive, fast, and visually compelling.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            {/* Skills card */}
            <div
              className="rounded-lg overflow-hidden"
              style={{
                background: "rgba(12,6,6,0.8)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
            >
              <div
                className="flex items-center gap-2.5 px-7 py-3.5"
                style={{
                  background: "rgba(239,68,68,0.05)",
                  borderBottom: "1px solid rgba(239,68,68,0.1)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ boxShadow: "0 0 5px #EF4444" }} />
                <span className={cn("text-xs font-mono tracking-widest text-red-400/60", supreme.className)}>
                  skills.stack
                </span>
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      width: 44, height: 44,
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="#EF4444" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className={cn("text-xl font-semibold text-white", bespoke.className)}>
                    Technologies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      className={cn("text-sm px-4 py-2 rounded-sm cursor-default transition-all duration-200", supreme.className)}
                      style={{
                        background: "rgba(249,115,22,0.05)",
                        border: "1px solid rgba(249,115,22,0.16)",
                        color: "rgba(249,115,22,0.75)",
                      }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.25, delay: 0.45 + i * 0.035 }}
                      whileHover={{
                        y: -2,
                        color: "#F97316",
                        borderColor: "rgba(249,115,22,0.45)",
                        background: "rgba(249,115,22,0.1)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Philosophy card */}
            <div
              className="rounded-lg overflow-hidden"
              style={{
                background: "rgba(12,6,6,0.8)",
                border: "1px solid rgba(244,63,94,0.15)",
              }}
            >
              <div
                className="flex items-center gap-2.5 px-7 py-3.5"
                style={{
                  background: "rgba(244,63,94,0.05)",
                  borderBottom: "1px solid rgba(244,63,94,0.1)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" style={{ boxShadow: "0 0 5px #F43F5E" }} />
                <span className={cn("text-xs font-mono tracking-widest text-rose-400/60", supreme.className)}>
                  philosophy
                </span>
              </div>

              <div className="p-7 flex items-start gap-5">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(244,63,94,0.08)",
                    border: "1px solid rgba(244,63,94,0.2)",
                    width: 44, height: 44,
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="#F43F5E" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className={cn("text-lg font-semibold text-white mb-2", bespoke.className)}>
                    My Approach
                  </h4>
                  <p className={cn("text-base text-zinc-400 leading-relaxed", supreme.className)}>
                    Quality over quantity. I craft solutions that are maintainable, scalable, and delightful to use — every pixel and every millisecond matters.
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
