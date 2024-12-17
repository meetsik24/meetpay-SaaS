import React from 'react';
import { Container } from '@/components/ui/Container';

const stats = [
  { value: '10M+', label: 'Transactions Processed' },
  { value: '50K+', label: 'Active Merchants' },
  { value: '15+', label: 'African Countries' },
  { value: '99.9%', label: 'Uptime' }
];

export function Stats() {
  return (
    <div className="py-16 bg-black/90">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}