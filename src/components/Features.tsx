import React from 'react';
import { Shield, Rocket, Zap } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-blue-600" />,
    title: 'Instant Simplification',
    description: 'Convert complex technical jargon into clear, simple explanations instantly.'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: 'AI-Powered Accuracy',
    description: 'Our AI ensures technical accuracy while maintaining simplicity.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
    title: 'Boost Understanding',
    description: 'Increase user comprehension and reduce support tickets by up to 50%.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Clear Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform complex technical documentation into clear, engaging content.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}