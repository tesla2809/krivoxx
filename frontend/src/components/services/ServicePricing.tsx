'use client';
import { Badge } from '@/components/ui/badge';
import type { Service } from '@/types';

interface ServicePricingProps {
  service: Service;
}

export function ServicePricing({ service }: ServicePricingProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Available in Packages:</h3>
      <div className="space-y-3">
        {service.pricing.starter && (
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <span className="font-medium">Starter Package</span>
            <Badge>₹12,000/month</Badge>
          </div>
        )}
        {service.pricing.growth && (
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <span className="font-medium">Growth Package</span>
            <Badge variant="success">₹35,000/month</Badge>
          </div>
        )}
        {service.pricing.scale && (
          <div className="flex items-center justify-between p-3 bg-white rounded-lg">
            <span className="font-medium">Scale Package</span>
            <Badge variant="default">₹85,000/month</Badge>
          </div>
        )}
      </div>
    </div>
  );
}