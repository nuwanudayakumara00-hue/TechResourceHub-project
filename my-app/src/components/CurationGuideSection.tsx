"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Target, Brain, Globe, Users, Search } from "lucide-react";

const curationBenefits = [
  {
    icon: Clock,
    title: "Saves time",
    desc: "Cuts down the hours spent searching for reliable information.",
    color: "text-amber-400",
    bg: "bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: Target,
    title: "Improves focus",
    desc: "Limits decision fatigue by providing 5 to 7 high-quality resources per topic.",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: Brain,
    title: "Enhances retention",
    desc: "Mixes diverse formats like summaries, flashcards, and quizzes.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
  },
];

const resourceSources = [
  {
    icon: Globe,
    title: "Open platforms",
    desc: "Explore open educational repositories like MIT OpenCourseWare for structured coursework.",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
  },
  {
    icon: Users,
    title: "Peer networks",
    desc: "Platforms like GetMaterials offer free teacher-uploaded notes and resources.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: Search,
    title: "Research tools",
    desc: "Academic databases and specialized search engines for deep-dive technical research.",
    color: "text-rose-400",
    bg: "bg-rose-400/10 border-rose-400/20",
  },
];

export default function CurationGuideSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 space-y-16">
      
      {/* Benefits of Curation */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight border-l-4 border-amber-400 pl-4">
          Benefits of Curation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {curationBenefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#0e1626]/80 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all text-left shadow-lg"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Where to Find Materials */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight border-l-4 border-purple-400 pl-4">
          Where to Find Materials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourceSources.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-[#0e1626]/80 border border-slate-800/80 backdrop-blur-md hover:border-slate-700 transition-all text-left shadow-lg"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${item.bg}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}