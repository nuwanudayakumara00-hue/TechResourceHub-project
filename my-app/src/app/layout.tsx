import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope, Fraunces } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'TechResourceHub — Your Developer Resource Platform',
  description: 'Curated developer tools, step-by-step tutorials, and real-time tech insights — everything you need to accelerate your engineering career.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
  openGraph: {
    title: 'TechResourceHub — Dev Resources',
    description: 'The ultimate hub for modern tech insights and developer tools.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body 
        className={`${manrope.className} bg-[#070714] text-white selection:bg-purple-500 selection:text-white`} 
        style={{ '--font-sans': 'var(--font-manrope)', '--font-display': 'var(--font-fraunces)' } as React.CSSProperties}
      >
        {/* Navigation Header */}
        <Header />

        {/* Dynamic Page Content (Added padding-top so fixed Header doesn't hide content) */}
        <div className="pt-16 md:pt-20 min-h-screen">
          {children}
        </div>

        {/* Next.js Optimized External Scripts */}
        <Script 
          type="module" 
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Ftechresour5823back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19" 
          strategy="afterInteractive"
        />
        <Script 
          type="module" 
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2" 
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}