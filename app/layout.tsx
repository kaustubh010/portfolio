import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaustubh | Full-Stack Developer",
  description:
    "Portfolio of Kaustubh, a full-stack developer specializing in React and Next.js applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="ribhu.png" type="image/png" />
      </head>
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
