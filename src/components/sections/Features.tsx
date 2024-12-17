import React from 'react';
import { Container } from '@/components/ui/Container';
import { features } from '@/constants/features';

export function Features() {
  return (
    <div className="py-24 bg-black" id="features">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to Accept Payments
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built for developers, trusted by businesses worldwide.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-800 bg-black/50 hover:bg-gray-900/50 transition-colors"
              >
                <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}