"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BookOpen,
    title: "Resource Sharing",
    desc: "Access top curated programming materials, source codes, and documentation easily.",
    link: "#resources",
    btnText: "Explore Resources",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: Users,
    title: "Community Support",
    desc: "Connect with fellow tech enthusiasts, ask queries, and grow together.",
    link: "#community",
    btnText: "Join Community",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Rocket,
    title: "Guides & Tutorials",
    desc: "Step-by-step documentation and guides designed specifically for tech students.",
    link: "#tutorials",
    btnText: "Read Guides",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
          What We Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
          Our Services
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
          Everything you need to accelerate your learning and project development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-md flex flex-col justify-between hover:border-slate-700 transition-all group shadow-lg hover:shadow-2xl hover:shadow-blue-500/5"
          >
            <div>
              <div
                className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 border ${service.border} group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                {service.desc}
              </p>
            </div>

            <Link
              href={service.link}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
            >
              {service.btnText}
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}