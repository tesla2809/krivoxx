'use client';

import { Check } from 'lucide-react';
import type { Industry } from '@/types';

interface IndustryDetailProps {
  industry: Industry;
}

export function IndustryDetail({ industry }: IndustryDetailProps) {
  const Icon = industry.icon;
  
  return (
    <div className="bg-white rounded-xl p-8" id={industry.slug}>
      <div className="flex items-center space-x-4 mb-6">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${industry.color}20` }}
        >
          <Icon className="w-8 h-8" style={{ color: industry.color }} />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900">{industry.name}</h2>
          <div className="w-16 h-1 rounded-full mt-2" style={{ backgroundColor: industry.color }}></div>
        </div>
      </div>

      <p className="text-lg text-gray-700 mb-8">{industry.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
          <ul className="space-y-3">
            {industry.challenges.map((challenge, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full mt-2" style={{ backgroundColor: industry.color }} />
                <span className="text-gray-700">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solutions</h3>
          <ul className="space-y-3">
            {industry.solutions.map((solution, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: industry.color }} />
                <span className="text-gray-700">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: `${industry.color}10` }}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Services We Provide</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {industry.services.map((service, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5" style={{ color: industry.color }} />
              <span className="font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}