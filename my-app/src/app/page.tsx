import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ResourcesSection from '@/components/ResourcesSection';
import CtaSection from '@/components/CtaSection';
import FaqSection from '@/components/FaqSection';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
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