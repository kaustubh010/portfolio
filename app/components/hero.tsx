"use client";

import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Silk from "./silk";

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

export default function ArtisticHero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden bg-slate-950">
      {/* Full-page animated background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={3}
          scale={1.2}
          color="#0ea5e9"
          noiseIntensity={0.8}
          rotation={15}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/80" />
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .hero-badge {
          animation: fadeInUp 0.6s ease-in-out 0.1s both;
        }
        .hero-title {
          animation: fadeInUp 0.8s ease-in-out 0.3s both;
        }
        .hero-subtitle {
          animation: fadeInUp 0.8s ease-in-out 0.5s both;
        }
        .hero-stats {
          animation: fadeInUp 0.8s ease-in-out 0.7s both;
        }
        .hero-buttons {
          animation: fadeInUp 0.8s ease-in-out 0.9s both;
        }

        /* Get Started Button Hover */
        .get-started-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .get-started-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
        }
        .get-started-btn:hover::before {
          animation: shimmer 0.6s ease;
        }
        .get-started-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(14, 165, 233, 0.4);
        }
        .get-started-btn:active {
          transform: translateY(0);
        }

        /* Learn More Button Hover */
        .learn-more-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }
        .learn-more-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: rgba(148, 163, 184, 0.1);
          transition: width 0.4s ease;
          z-index: -1;
        }
        .learn-more-btn:hover::before {
          width: 100%;
        }
        .learn-more-btn:hover {
          border-color: rgb(148, 163, 184);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(148, 163, 184, 0.2);
        }
        .learn-more-btn:active {
          transform: translateY(0);
        }
      `}</style>

      <div className="hero-container relative z-10 flex flex-col items-center justify-center gap-8 max-w-5xl">
        {/* Greeting Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span className={cn("text-sm text-slate-300", supreme.className)}>
            Available for Freelance Work
          </span>
        </div>

        {/* Main Heading */}
        <div className="text-center space-y-4">
          <h1
            className={cn(
              "hero-title text-6xl md:text-8xl tracking-tight leading-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent",
              tanker.className
            )}
          >
            Kaustubh Bhardwaj
          </h1>
          <div
            className={cn(
              "flex flex-wrap justify-center items-center gap-2 text-2xl md:text-4xl text-sky-400",
              bespoke.className
            )}
          >
            <span>Full-Stack Developer</span>
            <span className="text-slate-500">•</span>
            <span>UI/UX Builder</span>
          </div>
        </div>

        {/* Description */}
        <p
          className={cn(
            "hero-subtitle max-w-2xl text-base md:text-lg text-slate-400 leading-relaxed px-4",
            supreme.className
          )}
        >
          Building scalable web apps with React, Next.js, and modern backends.
          Experienced in authentication, databases, and realtime systems.
          Passionate about clean design and crafting smooth user experiences.
        </p>

        {/* Call to Actions */}
        <div className="hero-buttons flex flex-wrap justify-center gap-4 mt-6">
          <Link
            href={"/signup"}
            className={cn(
              "get-started-btn rounded-full bg-sky-500 hover:bg-sky-400 text-white md:px-8 px-6 py-3.5 text-base font-semibold shadow-lg shadow-sky-500/30",
              supreme.className
            )}
          >
            View My Work
          </Link>
          <Link
            href={"/about"}
            className={cn(
              "learn-more-btn rounded-full border-2 font-semibold border-slate-600 text-slate-200 md:px-8 px-6 py-3.5 text-base",
              supreme.className
            )}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
