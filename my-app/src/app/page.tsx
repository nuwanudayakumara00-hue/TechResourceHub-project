"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, BookOpen, Rocket, Users } from "lucide-react";

import CommunitySection from "@/components/CommunitySection";
import CurationGuideSection from "@/components/CurationGuideSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResourcesSection from "@/components/ResourcesSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#070714] text-white min-h-screen overflow-x-hidden relative selection:bg-purple-500 selection:text-white">
      {/* Background Grid Pattern with Purple Tint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b076415_1px,transparent_1px),linear-gradient(to_bottom,#3b076415_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden relative min-h-screen">
        {/* Animated Deep Purple Glow Effects */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] md:w-[750px] md:h-[750px] bg-purple-700/25 blur-[150px] rounded-full pointer-events-none"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-indigo-600/20 blur-[130px] rounded-full pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center max-w-5xl w-full mt-10"
        >
          {/* Purple Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/25 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-200 tracking-wide">
              Your Central Hub for Tech & Learning Resources
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-white via-slate-100 to-purple-300/60 bg-clip-text text-transparent drop-shadow-sm leading-tight">
            Empowering Tech Students & Developers
          </h1>

          <p className="text-base md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Access top-curated programming materials, lecture guides, source codes, and tech documentation all in one place.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/resources" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(147,51,234,0.4)] cursor-pointer"
              >
                Browse Resources <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link href="/services" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-[#120e2b]/80 hover:bg-[#1a143b] text-purple-200 border border-purple-500/30 rounded-2xl font-semibold transition-all backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Rocket className="w-5 h-5 text-purple-400" />
                Our Services
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Feature Cards */}
        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full max-w-6xl">
          {[
            {
              icon: BookOpen,
              title: "Curated Study Materials",
              desc: "Comprehensive lecture notes, guides, and tech documentation.",
              color: "text-amber-400",
              bg: "bg-amber-400/10",
              border: "border-amber-400/20",
              floatDelay: 0,
            },
            {
              icon: Code,
              title: "Source Code & Projects",
              desc: "Real-world project repositories, templates, and code snippets.",
              color: "text-purple-400",
              bg: "bg-purple-400/10",
              border: "border-purple-400/20",
              floatDelay: 1,
            },
            {
              icon: Users,
              title: "Community Driven",
              desc: "Built by students and developers to support peer learning.",
              color: "text-indigo-400",
              bg: "bg-indigo-400/10",
              border: "border-indigo-400/20",
              floatDelay: 2,
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0] 
              }}
              transition={{
                opacity: { delay: 0.4 + idx * 0.15, duration: 0.5 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: feature.floatDelay,
                }
              }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-[#0e0921]/70 border border-purple-900/40 backdrop-blur-md hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.15)] transition-all group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 border ${feature.border} group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Git Together / Community Section */}
      <CommunitySection />

      {/* Curation Guide Section */}
      <CurationGuideSection />

      {/* Page Sections */}
      <AboutSection />
      <ServicesSection />
      <ResourcesSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
}