'use client';
import { useState } from 'react';
import Link from 'next/link';

interface ChatMessage {
  id: number;
  name: string;
  role: string;
  message: string;
  time: string;
  badge: string;
}

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    name: 'Kasun Perera',
    role: 'BICT Student',
    message: 'Hey guys! Does anyone have good tutorials for Next.js 15 App Router?',
    time: '10 mins ago',
    badge: 'Student',
  },
  {
    id: 2,
    name: 'Nuwan Admin',
    role: 'Admin / Developer',
    message: 'Welcome everyone! You can check our Resources section for Next.js docs & cheat sheets.',
    time: '5 mins ago',
    badge: 'Admin',
  },
];

export default function ContactPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [messageText, setMessageText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !messageText.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now(),
      name: name,
      role: role || 'Community Member',
      message: messageText,
      time: 'Just now',
      badge: 'User',
    };

    setMessages([newMessage, ...messages]);
    setMessageText('');
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Dark Blue Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

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
            Contact & Live Community Chat
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            Have questions, ideas, or feedback? Drop a message below and connect with the community!
          </p>
        </div>

        {/* Main Grid: Left = Post Message / Right = Chat Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Box (Left) */}
          <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-xl border border-slate-800 p-6 md:p-8 rounded-3xl shadow-2xl space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>💬</span> Post a Message
              </h2>
              <p className="text-xs text-slate-400">
                Share your ideas or inquiries directly on our page.
              </p>
            </div>

            {isSubmitted && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-xl flex items-center gap-2">
                <span>✓</span> Your message has been posted to the feed!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Supun Perera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Role / Bio (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. BICT 2nd Year Student"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Message / Thought *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Type your message, question, or feedback here..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-xs hover:scale-[1.02]"
              >
                Post Message →
              </button>
            </form>
          </div>

          {/* Live Chat Feed Box (Right) */}
          <div className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 p-6 md:p-8 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h2 className="text-xl font-bold text-white">Live Discussion Feed</h2>
              </div>
              <span className="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/50">
                {messages.length} Messages
              </span>
            </div>

            {/* Chat List */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-4 space-y-2 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 text-xs">
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          {msg.name}
                          <span className="text-[10px] font-normal text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-md">
                            {msg.role}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500">{msg.time}</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed pl-10">
                    {msg.message}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}