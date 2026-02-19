'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
  pillarSlug?: string; // Add pillar slug to know which page to link to
}

export function ServiceCard({ service, pillarSlug }: ServiceCardProps) {
  const Icon = service.icon;
  
  // Determine the link based on whether we have a pillar slug
  const serviceLink = pillarSlug 
    ? `/services/${pillarSlug}#${service.slug}` 
    : `/services/${service.slug}`;
  
  return (
    <Card className="group hover-lift h-full flex flex-col">
      <CardHeader>
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${service.color}20` }}
        >
          <Icon className="w-6 h-6" style={{ color: service.color }} />
        </div>
        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
        <CardDescription>{service.shortDescription}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        
        <div className="space-y-2">
          <div className="text-sm font-semibold text-gray-700 mb-2">Key Features:</div>
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start space-x-2 text-sm text-gray-600">
              <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: service.color }} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing Badges */}
        <div className="flex flex-wrap gap-2 mt-4">
          {service.pricing.starter && <Badge variant="secondary">Starter</Badge>}
          {service.pricing.growth && <Badge variant="secondary">Growth</Badge>}
          {service.pricing.scale && <Badge variant="secondary">Scale</Badge>}
        </div>
      </CardContent>

      <CardFooter>
        <Link href={serviceLink} className="w-full">
          <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}