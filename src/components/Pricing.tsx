import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '0',
    features: ['5 documents per month', 'Basic AI simplification', 'Export to PDF'],
    popular: false
  },
  {
    name: 'Pro',
    price: '49',
    features: ['Unlimited documents', 'Advanced AI features', 'Custom branding', 'Priority support'],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '199',
    features: ['Everything in Pro', 'Custom AI training', 'API access', 'Dedicated support'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-lg ${
                plan.popular ? 'ring-2 ring-blue-600 scale-105' : 'border border-gray-100'
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-blue-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}