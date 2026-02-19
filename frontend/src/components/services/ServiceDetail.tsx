'use client';

import { Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { Service } from '@/types/service';

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  // Map string icon name to actual Lucide component
  const Icon = service.icon;
  
  return (
    <div className="bg-white rounded-xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${service.color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color: service.color }} />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
          <p className="text-gray-600">{service.shortDescription}</p>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: service.color }} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
          <ul className="space-y-3">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: service.color }} />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}