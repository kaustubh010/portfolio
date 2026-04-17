"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react"
import localFont from "next/font/local"
import { cn } from "@/lib/utils"

const tanker = localFont({ src: "../fonts/tanker.ttf", weight: "400", style: "normal", display: "swap" });
const bespoke = localFont({ src: "../fonts/bespoke.ttf", weight: "400", style: "normal", display: "swap" });
const supreme = localFont({ src: "../fonts/supreme.ttf", weight: "400", style: "normal", display: "swap" });

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "kaustubhbhardwaj00@gmail.com",
    href: "mailto:kaustubhbhardwaj00@gmail.com",
    color: "#F97316",
    colorRgb: "249,115,22",
    description: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 8619402976",
    href: "https://wa.me/+918619402976",
    color: "#EF4444",
    colorRgb: "239,68,68",
    description: "Quick chat or call",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaipur, Rajasthan, India",
    href: null,
    color: "#F43F5E",
    colorRgb: "244,63,94",
    description: "Open to remote work",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open to Opportunities",
    href: null,
    color: "#F97316",
    colorRgb: "249,115,22",
    description: "Freelance & full-time",
  },
]

export default function Contact() {
  return (
    <section
      className="relative overflow-hidden py-28"
      id="contact"
      style={{ background: "#090909" }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,63,94,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.035) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-56 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(244,63,94,0.35), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)" }} />

      <div className="container relative z-10 mx-auto px-8 max-w-7xl">

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left — heading + description + CTA */}
          <motion.div
            className="lg:col-span-2 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #F43F5E)" }} />
              <span className={cn("font-mono text-xs tracking-widest uppercase text-rose-400/70", supreme.className)}>
                Contact
              </span>
            </div>

            {/* Heading */}
            <h2
              className={cn("text-5xl md:text-6xl xl:text-7xl tracking-tight leading-none mb-6", tanker.className)}
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #ffe8d6 45%, #F43F5E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Let's<br />Connect
            </h2>

            {/* Divider line */}
            <motion.div
              className="h-px rounded-full mb-7"
              style={{ background: "linear-gradient(90deg, #F97316, #EF4444, #F43F5E)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <p className={cn("text-base text-zinc-400 leading-relaxed mb-8 max-w-sm", supreme.className)}>
              I'm always open to new projects and opportunities. Whether it's a quick question or a full project — reach out through any channel.
            </p>

            {/* Availability badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-3 mb-8"
              style={{
                background: "rgba(249,115,22,0.07)",
                border: "1px solid rgba(249,115,22,0.22)",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" style={{ boxShadow: "0 0 6px #F97316" }} />
              <span className={cn("text-sm text-orange-400/90 font-mono", supreme.className)}>
                Available — Freelance &amp; Full-time
              </span>
            </div>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Card wrapper */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "rgba(10,5,5,0.9)",
                border: "1px solid rgba(244,63,94,0.15)",
                boxShadow: "0 0 60px rgba(244,63,94,0.05)",
              }}
            >
              {/* Top bar */}
              <div
                className="flex items-center gap-2.5 px-8 py-4"
                style={{
                  background: "rgba(244,63,94,0.05)",
                  borderBottom: "1px solid rgba(244,63,94,0.1)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" style={{ boxShadow: "0 0 5px #F43F5E" }} />
                <span className={cn("text-xs font-mono tracking-widest text-rose-400/50", supreme.className)}>
                  contact.relay — status: active
                </span>
              </div>

              {/* Cards grid — 2 cols inside the card */}
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {contactItems.map((item, i) => {
                  const Tag = item.href ? "a" : "div";
                  const linkProps = item.href
                    ? {
                        href: item.href,
                        target: item.href.startsWith("http") ? "_blank" : undefined,
                        rel: item.href.startsWith("http") ? "noopener noreferrer" : undefined,
                      }
                    : {};

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.08 * i }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Tag
                        {...linkProps}
                        className="flex flex-col gap-4 p-6 rounded-lg h-full transition-all duration-250 block"
                        style={{
                          background: `rgba(${item.colorRgb},0.04)`,
                          border: `1px solid rgba(${item.colorRgb},0.13)`,
                          cursor: item.href ? "pointer" : "default",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                          (e.currentTarget as HTMLElement).style.borderColor = `rgba(${item.colorRgb},0.35)`;
                          (e.currentTarget as HTMLElement).style.background = `rgba(${item.colorRgb},0.08)`;
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px rgba(${item.colorRgb},0.08)`;
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                          (e.currentTarget as HTMLElement).style.borderColor = `rgba(${item.colorRgb},0.13)`;
                          (e.currentTarget as HTMLElement).style.background = `rgba(${item.colorRgb},0.04)`;
                          (e.currentTarget as HTMLElement).style.boxShadow = "none";
                        }}
                      >
                        {/* Icon row */}
                        <div className="flex items-center justify-between">
                          <div
                            className="flex items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105"
                            style={{
                              background: `rgba(${item.colorRgb},0.1)`,
                              border: `1px solid rgba(${item.colorRgb},0.25)`,
                              width: 48, height: 48,
                            }}
                          >
                            <item.icon style={{ color: item.color, width: 20, height: 20 }} />
                          </div>
                          {item.href && (
                            <ArrowUpRight
                              size={14}
                              style={{ color: `rgba(${item.colorRgb},0.4)` }}
                              className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 opacity-60"
                            />
                          )}
                        </div>

                        {/* Text */}
                        <div>
                          <p
                            className={cn("text-xs font-mono tracking-widest uppercase mb-1.5", supreme.className)}
                            style={{ color: `rgba(${item.colorRgb},0.5)` }}
                          >
                            {item.label}
                          </p>
                          <p
                            className={cn("text-base text-white font-medium leading-snug break-all transition-colors duration-200 group-hover:text-current", supreme.className)}
                            style={{ color: item.href ? "#ffffff" : "#ffffff" }}
                          >
                            {item.value}
                          </p>
                          <p className={cn("text-xs text-zinc-600 mt-1", supreme.className)}>
                            {item.description}
                          </p>
                        </div>
                      </Tag>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div
                className="px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
                style={{ borderTop: "1px solid rgba(249,115,22,0.08)" }}
              >
                <p className={cn("text-sm text-zinc-500", supreme.className)}>
                  All channels monitored daily
                </p>
                <p className={cn("text-xs text-zinc-700 font-mono", supreme.className)}>
                  avg. response &lt; 24h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}