'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { servicePillars } from '@/lib/data/services';

export function ServicePillars() {
  // Map pillar IDs to slugs
  const pillarSlugs: { [key: string]: string } = {
    '1': 'digital-presence',
    '2': 'lead-generation',
    '3': 'business-automation',
    '4': 'tech-solutions',
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Pillars
            </h2>
            <p className="text-lg text-gray-600">
              Four comprehensive service pillars designed to take your business from offline to online success
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            const pillarSlug = pillarSlugs[pillar.id];
            
            return (
              <Card
                key={pillar.id}
                className="group hover-lift cursor-pointer"
                style={{ borderTopColor: pillar.color, borderTopWidth: '4px' }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${pillar.color}20` }}
                    >
                      <Icon size={32} color={pillar.color} />
                    </div>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {pillar.services.length} Services
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{pillar.title}</CardTitle>
                  <CardDescription className="text-base font-medium" style={{ color: pillar.color }}>
                    {pillar.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{pillar.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {pillar.services.slice(0, 3).map((service) => (
                      <div key={service.id} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: pillar.color }} />
                        <span>{service.title}</span>
                      </div>
                    ))}
                    {pillar.services.length > 3 && (
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                        <span>+{pillar.services.length - 3} more services</span>
                      </div>
                    )}
                  </div>

                  {/* Updated Link - Goes to specific pillar page */}
                  <Link href={`/services/${pillarSlug}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </StaggerChildren>

        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}