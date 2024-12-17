import React from 'react';
import { Container } from '@/components/ui/Container';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "MeetPay has transformed how we handle payments. Their API is incredibly easy to integrate.",
    author: "Sarah Johnson",
    role: "CTO, TechAfrica",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "The best payment solution for African businesses. Their cross-border payments are seamless.",
    author: "Michael Okonjo",
    role: "CEO, AfriMarket",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

export function Testimonials() {
  return (
    <div className="py-24 bg-black/70">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by African Businesses
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See what our customers say about their experience with MeetPay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-lg border border-gray-800 bg-black/50">
              <Quote className="h-8 w-8 text-purple-400 mb-4" />
              <p className="text-gray-300 text-lg mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}