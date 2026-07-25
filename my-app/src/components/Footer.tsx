'use client';
import React from 'react';
import AppLogo from '@/components/applogo';

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/30 bg-[#050912] text-slate-400 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <AppLogo />
            <p className="mt-3 text-sm text-slate-400 max-w-sm">
              Elevating tech education and digital resource access — one developer at a time.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-950 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Tech Resource Hub. All Rights Reserved.</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">GitHub</span>
            <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}