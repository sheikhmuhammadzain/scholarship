import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "GlobalStudyRoad - Intelligent Admission Platform",
  description: "AI-powered study abroad platform with smart scholarship matching and application tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans bg-[var(--background)] min-h-screen selection:bg-black selection:text-white flex flex-col cursor-none overflow-x-hidden`}>
        <div className="bg-noise"></div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}