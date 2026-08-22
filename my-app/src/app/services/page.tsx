'use client';
import Link from 'next/link';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'Building modern, scalable, and responsive web applications using Next.js, React, and Node.js.',
    icon: '💻',
    features: ['React & Next.js App Router', 'Tailwind CSS Styling', 'REST & GraphQL APIs'],
  },
  {
    title: 'UI/UX & Frontend Design',
    description: 'Creating sleek, interactive, and mobile-friendly dark-themed user interfaces with clean architecture.',
    icon: '🎨',
    features: ['Responsive Layouts', 'Figma to Code Conversion', 'Modern Animations'],
  },
  {
    title: 'Deployment & Cloud Solutions',
    description: 'Setting up automated CI/CD pipelines, custom domains, and fast hosting on Vercel and AWS.',
    icon: '🚀',
    features: ['Vercel Integration', 'Git & GitHub Workflows', 'Domain & SSL Setup'],
  },
  {
    title: 'Academic & Project Guidance',
    description: 'Assisting BICT & Technology undergraduates with final year project architectures and code snippets.',
    icon: '🎓',
    features: ['Project Boilerplates', 'Code Refactoring', 'Architecture Guidance'],
  },
  {
    title: 'Database Architecture',
    description: 'Designing optimized relational and NoSQL database schemas for smooth performance.',
    icon: '🗄️',
    features: ['PostgreSQL & MongoDB', 'Prisma & Drizzle ORM', 'Data Security'],
  },
  {
    title: 'Tech Consulting & Code Review',
    description: 'Reviewing existing codebases for performance bottlenecks, security flaws, and best practices.',
    icon: '🔍',
    features: ['Performance Tuning', 'SEO Optimization', 'Clean Code Practices'],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Dark Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors mb-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            Our Services & Solutions
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Empowering your digital projects with modern tech stacks, clean code, and developer-focused solutions.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/40 transition-all group duration-300"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-800/60">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-xs text-slate-300 gap-2">
                      <span className="text-blue-400 font-bold">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl font-bold text-white">Need a Custom Project or Solution?</h2>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Have a unique idea or need technical guidance? Let’s discuss and build it together.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}