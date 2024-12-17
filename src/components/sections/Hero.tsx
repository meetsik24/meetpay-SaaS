import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      
      <Container className="relative pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Seamless Payments
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Across Africa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Accept payments from customers across Africa. Simple integration, powerful features, instant settlements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg">
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              Contact Sales
            </Button>
          </div>

          <div className="mt-20">
            <p className="text-gray-400 mb-8">Trusted by leading African businesses</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
              {/* Replace with actual client logos */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-12 bg-white/10 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}