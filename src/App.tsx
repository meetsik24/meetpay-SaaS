import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Solutions } from '@/components/sections/Solutions';
import { Integration } from '@/components/sections/Integration';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { Pricing } from '@/components/sections/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Solutions />
      <Integration />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;