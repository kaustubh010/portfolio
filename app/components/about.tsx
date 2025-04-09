"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
  ]

  return (
    <section className="py-20" id="about">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-teal-400">Who I Am</h3>
            <p className="mb-4 text-gray-300">
              I'm a passionate full-stack developer with expertise in building modern web applications. With a strong
              foundation in React and Next.js, I create seamless user experiences that combine elegant design with
              robust functionality.
            </p>
            <p className="text-gray-300">
              My approach to development focuses on writing clean, maintainable code that scales well and performs
              efficiently. I'm constantly exploring new technologies and methodologies to enhance my skills and deliver
              better solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-4 text-xl font-semibold text-teal-400">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-teal-400 transition-colors hover:bg-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

