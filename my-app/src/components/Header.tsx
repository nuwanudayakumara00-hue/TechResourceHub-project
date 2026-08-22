'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 👈 usePathname එකතු කළා
import AppLogo from '@/components/applogo';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const pathname = usePathname(); // 👈 Pathname එක ගත්තා

  useEffect(() => {
    // Page එක මාරු වෙන සෑම විටම localStorage පරීක්ෂා කරයි
    const loggedState = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedState);
    setUserName(localStorage.getItem('userName') || 'User');
  }, [pathname]); // 👈 pathname වෙනස් වෙද්දී මේක Run වෙනවා

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/30 bg-[#070c18]/85 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <AppLogo />
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link>
          <Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-sky-400 transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link>
        </nav>

        {/* Right Side Buttons OR User Profile */}
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <Link 
              href="/profile" 
              className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 px-3 py-1.5 rounded-full transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                {userName.charAt(0)}
              </div>
              <span className="text-xs font-medium text-slate-200 pr-1">{userName.split(' ')[0]}</span>
            </Link>
          ) : (
            <>
              <Link 
                href="/login" 
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
              >
                Login
              </Link>

              <Link
                href="/resources"
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-500 transition-colors"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

      </div>
    </header>
  );
}