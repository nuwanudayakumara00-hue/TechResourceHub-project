import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070c18] via-[#0e172c] to-[#091122] py-28 text-center border-b border-blue-900/30">
      {/* Blue Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Royal Blue Center Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.35) 0%, rgba(30, 58, 138, 0.2) 50%, transparent 75%)',
          filter: 'blur(60px)'
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <span className="inline-block rounded-full bg-blue-900/50 px-4 py-1.5 text-xs font-semibold text-sky-300 border border-blue-700/50 mb-6 shadow-lg shadow-blue-900/20">
          ✨ Welcome to Tech Resource Hub
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight mb-6 drop-shadow-md">
          Empowering Developers with Top Tech Resources
        </h1>
        
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Discover curated tutorials, dev tools, and insights built specifically for BICT & Technology undergraduates.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-blue-500/40 transition-all">
            Explore Resources
          </button>
          <button className="bg-slate-800/80 text-slate-200 font-semibold px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-700/80 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}