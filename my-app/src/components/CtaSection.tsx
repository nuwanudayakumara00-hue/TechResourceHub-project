import React from 'react';

export default function CtaSection() {
  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 p-10 md:p-14 text-center shadow-2xl shadow-blue-900/30">
          
          {/* Subtle Banner Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8 text-base">
              Join hundreds of technology undergraduates leveraging Tech Resource Hub today.
            </p>
            <button className="bg-white text-blue-700 font-extrabold px-8 py-3.5 rounded-xl shadow-xl hover:bg-neutral-100 transition-all transform hover:-translate-y-0.5">
              Join Now for Free 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}