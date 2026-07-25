import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: "Resource Sharing",
      desc: "Access top curated programming materials, source codes, and documentation easily.",
      icon: "📚"
    },
    {
      title: "Community Support",
      desc: "Connect with fellow tech enthusiasts, ask queries, and grow together.",
      icon: "👥"
    },
    {
      title: "Guides & Tutorials",
      desc: "Step-by-step documentation and guides designed specifically for tech students.",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#091122] via-[#0d182e] to-[#091122] border-b border-blue-900/30">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300 bg-indigo-950/80 border border-indigo-800/50 px-3.5 py-1.5 rounded-full">
          What We Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-3">Our Services</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-14 text-sm">
          Everything you need to accelerate your learning and project development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-[#0f1c36]/70 border border-blue-900/40 shadow-xl hover:border-blue-500/50 hover:bg-[#132344] transition-all duration-300 text-left group"
            >
              <div className="text-3xl mb-5 p-3.5 bg-blue-950/60 border border-blue-800/40 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}