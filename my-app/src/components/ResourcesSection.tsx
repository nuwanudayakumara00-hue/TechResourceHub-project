import React from 'react';

export default function ResourcesSection() {
  const resources = [
    { name: "Frontend Templates", tag: "UI Kits", count: "25+ Items" },
    { name: "Backend Starters", tag: "Node & Next.js", count: "15+ Repos" },
    { name: "Database Schemas", tag: "SQL & NoSQL", count: "10+ Models" },
    { name: "Cheat Sheets", tag: "Dev Tools", count: "30+ PDF/Guides" },
  ];

  return (
    <section className="py-20 bg-neutral-950/80 border-b border-neutral-900">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Featured Resources</h2>
        <p className="text-neutral-400 max-w-xl mx-auto mb-12 text-sm">
          Explore curated tools, UI components, and project boilerplates.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((res, i) => (
            <div key={i} className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-neutral-700 text-left transition-all">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-950 text-blue-400 border border-blue-800/40">
                {res.tag}
              </span>
              <h4 className="text-lg font-bold text-white mt-4 mb-1">{res.name}</h4>
              <p className="text-xs text-neutral-500">{res.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}