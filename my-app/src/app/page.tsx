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
    <main className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResourcesSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </main>
  );
}