import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { PricingPackage } from '@/types';

interface PricingCardProps {
  package: PricingPackage;
}

export function PricingCard({ package: pkg }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${
        pkg.highlighted
          ? 'shadow-2xl'
          : 'shadow-md hover:shadow-xl border border-gray-200'
      }`}
      style={pkg.highlighted ? { border: `2px solid ${pkg.color}` } : {}}
    >
      {/* Most Popular badge */}
      {pkg.highlighted && (
        <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: pkg.color }} />
      )}
      {pkg.highlighted && (
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 mt-3">
          <span
            className="inline-block text-white text-xs font-bold px-4 py-1 rounded-full shadow"
            style={{ backgroundColor: pkg.color }}
          >
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div
        className="px-6 pt-8 pb-6"
        style={{ backgroundColor: pkg.highlighted ? pkg.color : '#f9fafb' }}
      >
        <h3
          className="text-2xl font-bold mb-1"
          style={{ color: pkg.highlighted ? '#ffffff' : '#111827' }}
        >
          {pkg.name}
        </h3>
        <p
          className="text-sm mb-4"
          style={{ color: pkg.highlighted ? 'rgba(255,255,255,0.8)' : '#6b7280' }}
        >
          {pkg.tagline}
        </p>

        <div className="flex items-end gap-1">
          <span
            className="text-4xl font-extrabold"
            style={{ color: pkg.highlighted ? '#ffffff' : '#111827' }}
          >
            ₹{pkg.price.toLocaleString('en-IN')}
          </span>
          <span
            className="text-sm mb-1"
            style={{ color: pkg.highlighted ? 'rgba(255,255,255,0.7)' : '#6b7280' }}
          >
            /{pkg.duration}
          </span>
        </div>

        <p
          className="text-xs mt-2"
          style={{ color: pkg.highlighted ? 'rgba(255,255,255,0.75)' : '#6b7280' }}
        >
          Best for: {pkg.bestFor}
        </p>
      </div>

      {/* Features */}
      <div className="bg-white px-6 py-5 flex-1">
        <ul className="space-y-3">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${pkg.color}20` }}
                >
                  <Check className="w-3 h-3" style={{ color: pkg.color }} />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-gray-400" />
                </div>
              )}
              <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Details */}
        <div className="mt-5 pt-5 border-t border-gray-100 space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>⏱️</span>
            <span>Delivery: <strong className="text-gray-800">{pkg.deliveryTime}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>🔄</span>
            <span>Revisions: <strong className="text-gray-800">{pkg.revisions}</strong></span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>💬</span>
            <span>Support: <strong className="text-gray-800">{pkg.support}</strong></span>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white px-6 pb-6">
        <Link href="/contact">
          <button
            className="w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            style={
              pkg.highlighted
                ? {
                    background: `linear-gradient(135deg, ${pkg.color}, #a855f7)`,
                    color: '#ffffff',
                    boxShadow: `0 8px 24px ${pkg.color}40`,
                  }
                : {
                    backgroundColor: 'transparent',
                    color: pkg.color,
                    border: `2px solid ${pkg.color}`,
                  }
            }
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
