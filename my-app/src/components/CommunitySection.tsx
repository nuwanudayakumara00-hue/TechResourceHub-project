"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bookmark, Sparkles } from "lucide-react";
import Link from "next/link";

// Custom GitHub SVG Icon
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function CommunitySection() {
  return (
    <div className="relative min-h-[85vh] bg-[#050714] text-white rounded-3xl overflow-hidden border border-slate-800/80 max-w-7xl mx-auto my-8 shadow-2xl flex flex-col justify-between">
      
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 z-20 relative border-b border-white/5 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <GithubIcon className="w-8 h-8 text-white hover:text-purple-400 transition-colors cursor-pointer" />
        </div>
        <div className="flex items-center gap-8 text-sm text-slate-400 font-medium">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#groups" className="hover:text-white transition-colors">Groups</Link>
          <Link href="#leaders" className="hover:text-white transition-colors">Leaders</Link>
        </div>
        <div className="w-8 h-8" />
      </nav>

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 blur-[160px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full" />
      </div>

      {/* Left Floating Island */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 w-36 h-48 bg-gradient-to-tr from-purple-950/80 to-purple-800/30 border border-purple-500/20 backdrop-blur-md rounded-3xl transform -rotate-12 shadow-2xl hidden lg:block z-10"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-purple-400/60" />
        </div>
      </motion.div>

      {/* Right Floating Island */}
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-28 right-12 w-32 h-44 bg-gradient-to-bl from-indigo-950/80 to-purple-900/30 border border-indigo-500/20 backdrop-blur-md rounded-3xl transform rotate-12 shadow-2xl hidden lg:block z-10"
      >
        <div className="w-full h-full flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-indigo-400/60" />
        </div>
      </motion.div>

      {/* Center Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-10 px-6 text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
          Explore • Build • Support
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Connect with the global developer community
        </h1>

        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-10">
          GitTogether groups are developer communities local to a city where like-minded developers connect, meet, learn and share over in-person and online events.
        </p>

        {/* Center Floating Character Platform */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex flex-col items-center mt-2"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-1 shadow-[0_0_35px_rgba(147,51,234,0.5)]">
            <div className="w-full h-full bg-[#090d21] rounded-full flex items-center justify-center">
              <span className="text-3xl">👨‍💻</span>
            </div>
          </div>
          
          <div className="w-44 h-10 mt-2 bg-gradient-to-r from-purple-900/90 via-indigo-900/90 to-purple-900/90 rounded-[100%] border border-purple-400/40 shadow-[0_10px_30px_rgba(147,51,234,0.4)] backdrop-blur-md flex items-center justify-center">
            <div className="w-20 h-1 bg-cyan-400/70 rounded-full blur-[1px]" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Information Card */}
      <div className="mt-12 px-8 py-8 flex items-end justify-between relative z-20 bg-gradient-to-t from-[#050714] via-[#050714]/90 to-transparent">
        <div>
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block mb-1">
            WEBSITE
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            Git Together
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md group cursor-pointer"
          >
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button
            type="button"
            className="p-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all backdrop-blur-md cursor-pointer"
          >
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
}