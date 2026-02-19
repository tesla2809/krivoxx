'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { industries } from '@/lib/data/industries';

export function IndustriesServed() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Specialized solutions for different business sectors in Gandhidham, Kutch, and across Gujarat
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon;
            
            return (
              <Card key={industry.id} className="group hover-lift">
                <CardHeader>
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${industry.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: industry.color }} />
                  </div>
                  <CardTitle className="text-xl mb-2">{industry.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {industry.description.substring(0, 80)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {industry.solutions.slice(0, 2).map((solution, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: industry.color }} />
                        <span>{solution}</span>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={`/industries#${industry.slug}`} 
                    className="inline-flex items-center text-sm font-medium group-hover:text-primary transition-colors" 
                    style={{ color: industry.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </StaggerChildren>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/industries">
              <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium transition-colors">
                View All Industries
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}