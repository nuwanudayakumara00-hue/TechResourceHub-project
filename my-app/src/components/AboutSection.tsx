import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#091122] border-b border-blue-950/80 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-blue-950/80 border border-blue-800/50 px-3.5 py-1.5 rounded-full">
          Who We Are
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-5 mb-4 tracking-tight">
          About Tech Resource Hub
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          We are dedicated to providing high-quality tools, code templates, and developer resources specially curated for BICT & Technology undergraduates to build real-world software.
        </p>
      </div>
    </section>
  );
}