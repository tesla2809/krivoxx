import { Check, X } from 'lucide-react';
import type { PricingFeature } from '@/types';

interface PackageFeaturesProps {
  features: PricingFeature[];
}

export function PackageFeatures({ features }: PackageFeaturesProps) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-3">
          {feature.included ? (
            <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          ) : (
            <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
          )}
          <div className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
            <div className="font-medium">{feature.name}</div>
            {feature.description && (
              <div className="text-sm mt-1">{feature.description}</div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}