'use client';
import Link from 'next/link';

const stats = [
  { label: 'Curated Resources', value: '100+' },
  { label: 'Active Learners', value: '1,200+' },
  { label: 'Free Cheat Sheets', value: '25+' },
  { label: 'Code Snippets', value: '50+' },
];

const values = [
  {
    title: 'Open Education',
    description: 'Empowering students and developers with high-quality, completely free resources and code templates.',
    icon: '📖',
  },
  {
    title: 'Community Driven',
    description: 'Built specifically for BICT and Technology undergraduates to learn, share, and build together.',
    icon: '🤝',
  },
  {
    title: 'Modern Tech Stack',
    description: 'Focusing on production-ready tools like Next.js, React, Tailwind CSS, TypeScript, and Cloud platforms.',
    icon: '⚡',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Dark Blue Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors mb-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent tracking-tight">
            About Tech Resource Hub
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Bridging the gap between academic tech learning and real-world software engineering with curated dev tools, documentation, and project starter kits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl text-center space-y-1 shadow-lg"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-blue-400">{item.value}</div>
              <div className="text-xs text-slate-400 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Card */}
        <div className="bg-gradient-to-r from-blue-950/40 via-slate-900/90 to-indigo-950/40 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
            Our Mission
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Empowering Next-Generation Software Developers
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Tech Resource Hub was created to simplify the developer journey. Finding reliable starter templates, technical documentation, and best-practice roadmaps can be overwhelming. We gather and curate everything in one place so students and engineers can spend less time searching and more time building.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-white">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((val, index) => (
              <div
                key={index}
                className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 space-y-3 hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="text-3xl">{val.icon}</div>
                <h3 className="text-lg font-bold text-white">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Banner */}
        <div className="text-center pt-4">
          <Link
            href="/resources"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm hover:scale-105"
          >
            Explore Free Resources →
          </Link>
        </div>

      </div>
    </main>
  );
}