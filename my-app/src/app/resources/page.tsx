'use client';
import { useState } from 'react';
import Link from 'next/link';

// Sample Tech Resources Data
const resources = [
  {
    id: 1,
    title: 'Next.js 15 Documentation',
    category: 'Web Dev',
    description: 'Official Next.js documentation covering App Router, React Server Components, and deployment.',
    link: 'https://nextjs.org/docs',
    icon: '⚡',
    badge: 'Popular',
  },
  {
    id: 2,
    title: 'Tailwind CSS Cheat Sheet',
    category: 'UI/UX',
    description: 'Quick reference for all Tailwind CSS classes, color palettes, and responsive breakpoints.',
    link: 'https://nerdcave.com/tailwind-cheat-sheet',
    icon: '🎨',
    badge: 'Must Have',
  },
  {
    id: 3,
    title: 'Free Public APIs List',
    category: 'DevTools',
    description: 'A collective list of free APIs for use in software and web development projects.',
    link: 'https://github.com/public-apis/public-apis',
    icon: '🌐',
    badge: 'Free',
  },
  {
    id: 4,
    title: 'GitHub Student Developer Pack',
    category: 'Offers',
    description: 'Free access to the best developer tools from GitHub and their partners for tech students.',
    link: 'https://education.github.com/pack',
    icon: '🎓',
    badge: 'Students',
  },
  {
    id: 5,
    title: 'React Icons Library',
    category: 'UI/UX',
    description: 'Include popular icons easily in your React projects with React Icons.',
    link: 'https://react-icons.github.io/react-icons/',
    icon: '✨',
    badge: 'Utility',
  },
  {
    id: 6,
    title: 'Roadmap.sh Guides',
    category: 'Learning',
    description: 'Community created roadmaps, guides, and career paths for developers.',
    link: 'https://roadmap.sh',
    icon: '🚀',
    badge: 'Guide',
  },
];

const categories = ['All', 'Web Dev', 'DevTools', 'UI/UX', 'Learning', 'Offers'];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filtering Logic
  const filteredResources = resources.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Dark Blue Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors mb-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            Tech Resources & Dev Tools
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Hand-picked collection of docs, cheat sheets, APIs, and tools tailored for developers and IT students.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search resources, tools, docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-xl"
            />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/40 transition-all group duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{res.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full">
                    {res.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">{res.category}</span>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                >
                  Visit Resource →
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No resources found matching "{searchQuery}".
          </div>
        )}

      </div>
    </main>
  );
}