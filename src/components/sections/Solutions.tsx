import React from 'react';
import { Container } from '@/components/ui/Container';
import { solutions } from '@/constants/solutions';
import { Check } from 'lucide-react';

export function Solutions() {
  return (
    <div className="py-24 bg-black/80" id="solutions">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Solutions for Every Need
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you're a business or developer, we have the right solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-gray-800 bg-black/50 hover:bg-gray-900/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              
              <ul className="space-y-4">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-purple-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}