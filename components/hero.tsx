"use client";

import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import LineWaves from "./lineWaves";

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

export default function ArtisticHero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-8 py-20 overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 z-0">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.2}
          color1="#F97316"
          color2="#EF4444"
          color3="#F43F5E"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-black/65" />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          from { left: -100%; }
          to   { left: 100%; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);    opacity: 0.45; }
          100% { transform: scale(1.38); opacity: 0; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .h-anim-img     { animation: fadeLeft 0.8s ease both 0.15s; }
        .h-anim-badge   { animation: fadeUp   0.6s ease both 0.1s; }
        .h-anim-title   { animation: fadeUp   0.8s ease both 0.25s; }
        .h-anim-role    { animation: fadeUp   0.7s ease both 0.4s; }
        .h-anim-desc    { animation: fadeUp   0.7s ease both 0.55s; }
        .h-anim-btns    { animation: fadeUp   0.7s ease both 0.7s; }

        .pulse-ring {
          position: absolute; inset: -10px; border-radius: 9999px;
          border: 2px solid rgba(249,115,22,0.32);
          animation: pulseRing 2.2s ease-out infinite;
        }
        .pulse-ring-2 {
          position: absolute; inset: -20px; border-radius: 9999px;
          border: 1px solid rgba(244,63,94,0.2);
          animation: pulseRing 2.2s ease-out 0.75s infinite;
        }

        .cyber-btn {
          position: relative; overflow: hidden;
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .cyber-btn::before {
          content: ""; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
        }
        .cyber-btn:hover::before { animation: shimmer 0.55s ease; }
        .cyber-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(249,115,22,0.35); }

        .ghost-btn {
          position: relative; overflow: hidden;
          transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .ghost-btn::before {
          content: ""; position: absolute; top: 0; left: 0;
          width: 0; height: 100%;
          background: rgba(249,115,22,0.08);
          transition: width 0.35s ease; z-index: -1;
        }
        .ghost-btn:hover::before { width: 100%; }
        .ghost-btn:hover { border-color: rgba(249,115,22,0.65); transform: translateY(-2px); }

        .cursor-blink { animation: blink 1.1s step-end infinite; }
      `}</style>

      {/* ── Main layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 w-full max-w-5xl mx-auto">

        {/* ── Profile image ── */}
        <div className="h-anim-img flex-shrink-0">
          <div className="relative">
            <div className="pulse-ring" />
            <div className="pulse-ring-2" />

            {/* Conic border ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-3px",
                background: "conic-gradient(from 0deg, #F97316, #EF4444, #F43F5E, #F97316)",
                padding: "2px",
                borderRadius: "9999px",
              }}
            >
              <div className="w-full h-full rounded-full bg-black/90" />
            </div>

            {/* Glow halo */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-20px",
                background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 65%)",
                filter: "blur(18px)",
              }}
            />

            {/* Photo */}
            <div
              className="relative rounded-full overflow-hidden z-10"
              style={{
                width: "clamp(180px, 22vw, 296px)",
                height: "clamp(180px, 22vw, 296px)",
                border: "2px solid rgba(249,115,22,0.5)",
                boxShadow: "0 0 32px rgba(249,115,22,0.22)",
              }}
            >
              <Image
                src="/profile.png"
                alt="Kaustubh Bhardwaj"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Corner accents */}
            <div className="absolute -top-1 -right-1 w-5 h-5 z-20" style={{ borderTop: "2px solid #F97316", borderRight: "2px solid #F97316" }} />
            <div className="absolute -bottom-1 -left-1 w-5 h-5 z-20" style={{ borderBottom: "2px solid #F43F5E", borderLeft: "2px solid #F43F5E" }} />

            {/* Status dot */}
            <span
              className="absolute top-3 right-3 z-30 block w-3 h-3 rounded-full bg-orange-400 animate-pulse"
              style={{ boxShadow: "0 0 8px #F97316" }}
            />
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 flex-1">

          {/* Available badge */}
          <div
            className="h-anim-badge inline-flex items-center gap-2.5 px-5 py-2"
            style={{
              background: "rgba(249,115,22,0.08)",
              border: "1px solid rgba(249,115,22,0.25)",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span className={cn("text-xs tracking-widest uppercase text-orange-400", supreme.className)}>
              Available for freelance
            </span>
            <span className="cursor-blink text-orange-400 text-xs font-mono leading-none">_</span>
          </div>

          {/* Name — single line */}
          <div className="h-anim-title w-full">
            <h1
              className={cn("leading-none tracking-tight whitespace-nowrap", tanker.className)}
              style={{
                fontSize: "clamp(2.6rem, 6.5vw, 6rem)",
                background: "linear-gradient(120deg, #ffffff 0%, #ffe8d6 35%, #F97316 65%, #F43F5E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kaustubh Bhardwaj
            </h1>
          </div>

          {/* Role line */}
          <div
            className={cn("h-anim-role flex flex-wrap justify-center lg:justify-start items-center gap-3", bespoke.className)}
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          >
            <span style={{ color: "#F97316" }}>Full-Stack Developer</span>
            <span className="font-mono text-zinc-600 text-sm">/</span>
            <span className="text-zinc-300">UI/UX Builder</span>
          </div>

        

          {/* Bio */}
          <p
            className={cn("h-anim-desc text-zinc-400 leading-[1.8]", supreme.className)}
            style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)", maxWidth: "480px" }}
          >
            Building scalable web apps with React, Next.js, and modern backends.
            Experienced in authentication, databases, and realtime systems.
            Passionate about clean design and smooth user experiences.
          </p>

          {/* CTA buttons */}
          <div className="h-anim-btns flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              href="#projects"
              className={cn("cyber-btn text-sm font-semibold text-black", supreme.className)}
              style={{
                padding: "0.75rem 2rem",
                background: "linear-gradient(135deg, #F97316, #EF4444)",
                boxShadow: "0 0 18px rgba(249,115,22,0.35)",
              }}
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className={cn("ghost-btn text-sm font-semibold border", supreme.className)}
              style={{
                padding: "0.75rem 2rem",
                borderColor: "rgba(249,115,22,0.35)",
                color: "#F97316",
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{
          background: "linear-gradient(90deg, transparent, #F97316, #EF4444, #F43F5E, transparent)",
          opacity: 0.45,
        }}
      />
    </div>
  );
}