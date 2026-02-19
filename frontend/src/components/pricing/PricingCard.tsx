import { Check, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/lib/utils/formatters';
import type { PricingPackage } from '@/types';

interface PricingCardProps {
  package: PricingPackage;
}

export function PricingCard({ package: pkg }: PricingCardProps) {
  return (
    <Card className={`relative ${pkg.highlighted ? 'border-primary border-2 shadow-2xl' : ''}`}>
      {pkg.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-white px-4 py-1">Most Popular</Badge>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
        <CardDescription>{pkg.tagline}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{formatCurrency(pkg.price)}</span>
          <span className="text-gray-600">/{pkg.duration}</span>
        </div>
        <p className="text-sm text-gray-600 mt-2">Best for: {pkg.bestFor}</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
          <div>⏱️ Delivery: {pkg.deliveryTime}</div>
          <div>🔄 Revisions: {pkg.revisions}</div>
          <div>💬 Support: {pkg.support}</div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant={pkg.highlighted ? 'default' : 'outline'}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
}