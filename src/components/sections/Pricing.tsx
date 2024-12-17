import React from 'react';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { plans } from '@/constants/pricing';

export function Pricing() {
  return (
    <div className="py-24 bg-black/50" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transparent, Volume-Based Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border ${
                plan.popular
                  ? 'border-purple-500 bg-purple-900/20'
                  : 'border-gray-800 bg-black/50'
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 text-sm text-purple-400 bg-purple-900/50 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-purple-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}