'use client';
import React from 'react';
import AppLogo from '@/components/applogo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#070c18]/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <AppLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
          <a href="#resources" className="hover:text-sky-400 transition-colors">Resources</a>
          <a href="#services" className="hover:text-sky-400 transition-colors">Services</a>
          <a href="#about" className="hover:text-sky-400 transition-colors">About Us</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
        </nav>
        <div>
          <a
            href="#get-started"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/30 hover:bg-blue-500 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}