"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const tanker = localFont({
  src: "../fonts/tanker.ttf",
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

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen, setMobileOpen]  = useState(false);
  const [active,     setActive]      = useState("");

  /* track scroll for background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* detect active section */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileMenuOpen {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-root { animation: navSlideDown 0.55s ease both; }
        .mobile-menu { animation: mobileMenuOpen 0.25s ease both; }
      `}</style>

      <header
        className="nav-root fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(6,4,4,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(249,115,22,0.12)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
              {/* Small accent mark */}
              <div
                className="w-1 h-7 rounded-full transition-all duration-300 group-hover:h-8"
                style={{ background: "linear-gradient(180deg, #F97316, #F43F5E)" }}
              />
              <span
                className={cn("text-2xl leading-none tracking-tight", tanker.className)}
                style={{
                  background: "linear-gradient(120deg, #ffffff 30%, #F97316 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                KB
              </span>
              <div
                className="w-1 h-7 rounded-full transition-all duration-300 group-hover:h-8"
                style={{ background: "linear-gradient(180deg, #F97316, #F43F5E)" }}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => {
                const isActive = active === link.href.slice(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm transition-colors duration-200",
                      supreme.className,
                    )}
                    style={{ color: isActive ? "#F97316" : "rgba(161,161,170,1)" }}
                    onMouseEnter={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = "#ffffff";
                    }}
                    onMouseLeave={e => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(161,161,170,1)";
                    }}
                  >
                    {link.label}
                    {/* Active underline */}
                    {isActive && (
                      <span
                        className="absolute bottom-0.5 left-4 right-4 h-px rounded-full"
                        style={{ background: "linear-gradient(90deg, #F97316, #F43F5E)" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              {/* Hire me button — desktop only */}
              <a
                href="mailto:kaustubhbhardwaj00@gmail.com"
                className={cn(
                  "hidden md:inline-flex items-center text-xs font-semibold px-5 py-2.5 transition-all duration-250",
                  supreme.className,
                )}
                style={{
                  background: "linear-gradient(135deg, #F97316, #EF4444)",
                  color: "#000",
                  clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  boxShadow: "0 0 16px rgba(249,115,22,0.3)",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(249,115,22,0.5)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(249,115,22,0.3)")}
              >
                Hire Me
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(o => !o)}
                aria-label="Toggle menu"
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200"
                style={{
                  background: "rgba(249,115,22,0.08)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  color: "#F97316",
                }}
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="mobile-menu md:hidden"
            style={{
              background: "rgba(6,4,4,0.97)",
              borderTop: "1px solid rgba(249,115,22,0.12)",
              borderBottom: "1px solid rgba(249,115,22,0.12)",
            }}
          >
            <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => {
                const isActive = active === link.href.slice(1);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-3 rounded-lg text-sm transition-colors duration-200",
                      supreme.className,
                    )}
                    style={{
                      color: isActive ? "#F97316" : "rgba(161,161,170,1)",
                      background: isActive ? "rgba(249,115,22,0.07)" : "transparent",
                    }}
                  >
                    {/* Left accent */}
                    <div
                      className="w-0.5 h-4 rounded-full transition-all duration-200"
                      style={{
                        background: isActive
                          ? "linear-gradient(180deg, #F97316, #F43F5E)"
                          : "rgba(249,115,22,0.2)",
                      }}
                    />
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="mailto:kaustubhbhardwaj00@gmail.com"
                className={cn("mt-2 flex items-center justify-center py-3 text-xs font-semibold", supreme.className)}
                style={{
                  background: "linear-gradient(135deg, #F97316, #EF4444)",
                  color: "#000",
                  clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Hire Me
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
