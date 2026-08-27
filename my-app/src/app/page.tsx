"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, BookOpen, Rocket, Users, FileText } from "lucide-react";

import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ResourcesSection from "@/components/ResourcesSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-dark-blue-animated min-h-screen text-white overflow-x-hidden">
      {/* Animated Hero & Hero Features Section */}
      <section className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden relative min-h-screen">
        {/* Background Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center max-w-5xl w-full"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-100 tracking-wide">
              Your Central Hub for Tech & Learning Resources
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-br from-white via-blue-200 to-blue-500 bg-clip-text text-transparent drop-shadow-sm">
            Empowering Tech Students & Developers
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Access top-curated programming materials, lecture guides, source codes, and tech documentation all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.a
              href="#resources"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)]"
            >
              Browse Resources <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-semibold transition-all backdrop-blur-md flex items-center justify-center gap-2"
            >
              <Rocket className="w-5 h-5 text-slate-300" />
              Our Services
            </motion.a>
          </div>
        </motion.div>

        {/* Hero Features Grid */}
        <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 w-full max-w-6xl">
          {[
            {
              icon: BookOpen,
              title: "Curated Study Materials",
              desc: "Comprehensive lecture notes, guides, and tech documentation.",
              color: "text-amber-400",
              bg: "bg-amber-400/10",
              border: "border-amber-400/20",
            },
            {
              icon: Code,
              title: "Source Code & Projects",
              desc: "Real-world project repositories, templates, and code snippets.",
              color: "text-emerald-400",
              bg: "bg-emerald-400/10",
              border: "border-emerald-400/20",
            },
            {
              icon: Users,
              title: "Community Driven",
              desc: "Built by students and developers to support peer learning.",
              color: "text-purple-400",
              bg: "bg-purple-400/10",
              border: "border-purple-400/20",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.06] transition-all cursor-pointer group"
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

      {/* Additional Dynamic Sections */}
      <AboutSection />
      <ServicesSection />
      <ResourcesSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
}