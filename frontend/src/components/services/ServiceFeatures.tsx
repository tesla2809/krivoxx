'use client';
import { Check } from 'lucide-react';

interface ServiceFeaturesProps {
  features: string[];
  color?: string;
}

export function ServiceFeatures({ features, color = '#6366f1' }: ServiceFeaturesProps) {
  return (
    <div className="space-y-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start space-x-3">
          <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color }} />
          <span className="text-gray-700">{feature}</span>
        </div>
      ))}
    </div>
  );
}