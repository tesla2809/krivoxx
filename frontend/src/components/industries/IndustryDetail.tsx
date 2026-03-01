'use client';

import { Check } from 'lucide-react';
import type { Industry } from '@/types';

interface IndustryDetailProps {
  industry: Industry;
}

export function IndustryDetail({ industry }: IndustryDetailProps) {
  const Icon = industry.icon;

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md" id={industry.slug}>
      {/* Header bar with solid color — no transparency issues */}
      <div
        className="px-8 py-6 flex items-center gap-4"
        style={{ backgroundColor: industry.color }}
      >
        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{industry.name}</h2>
          <div className="w-12 h-0.5 rounded-full bg-white/50 mt-1.5" />
        </div>
      </div>

      {/* Body */}
      <div className="bg-white p-8">
        <p className="text-base text-gray-600 mb-8 leading-relaxed">{industry.description}</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Challenges */}
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wider"
              style={{ color: industry.color }}>
              Challenges
            </h3>
            <ul className="space-y-3">
              {industry.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: industry.color }}
                  />
                  <span className="text-gray-600 text-sm leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base font-bold mb-4 uppercase tracking-wider"
              style={{ color: industry.color }}>
              Our Solutions
            </h3>
            <ul className="space-y-3">
              {industry.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: industry.color }} />
                  <span className="text-gray-600 text-sm leading-relaxed">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Services grid — solid light background, no rgba transparency */}
        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: `${industry.color}0f` }}
        >
          <h3 className="text-base font-bold text-gray-900 mb-4 uppercase tracking-wider"
            style={{ color: industry.color }}>
            Services We Provide
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {industry.services.map((service, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${industry.color}20` }}
                >
                  <Check className="w-3 h-3" style={{ color: industry.color }} />
                </div>
                <span className="text-sm font-medium text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
