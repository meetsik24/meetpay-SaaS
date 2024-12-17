import React from 'react';
import { Container } from '@/components/ui/Container';

export function Integration() {
  const code = `// Initialize payment
const payment = await meetpay.createPayment({
  amount: 1000,
  currency: 'NGN',
  reference: 'order_123',
  customer: {
    email: 'customer@example.com'
  }
});`;

  return (
    <div className="py-24 bg-black" id="developers">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Simple Integration,
              <span className="block text-purple-400">Powerful API</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start accepting payments in minutes with our developer-friendly APIs and comprehensive documentation.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Robust API documentation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Multiple SDK options
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Webhook notifications
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <pre className="text-gray-300 overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </Container>
    </div>
  );
}