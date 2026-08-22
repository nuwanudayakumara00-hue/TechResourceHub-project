import React from 'react';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ResourcesSection from '@/components/ResourcesSection';
import CtaSection from '@/components/CtaSection';
import FaqSection from '@/components/FaqSection';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-hidden">
      {/* Background Animated Dark Blue Glowing Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />

      {/* Main Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ResourcesSection />
        <CtaSection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
}