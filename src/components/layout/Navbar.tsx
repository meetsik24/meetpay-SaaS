import React from 'react';
import { CreditCard } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50 border-b border-gray-800">
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              PayFlow
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a>
            <Button>Get Started</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}