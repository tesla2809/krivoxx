'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Target } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { CTASection } from '@/components/home/CTASection';
import { Button } from '@/components/ui/button';
import { servicePillars } from '@/lib/data/services';

export default function LeadGenerationPage() {
  const pillar = servicePillars.find(p => p.id === '2');
  if (!pillar) return null;

  return (
    <div className="pt-0">
      {/* Hero Section - FULLY RESPONSIVE */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex items-center bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Center Content */}
            <FadeIn>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 rounded-full px-3 py-1.5 mb-3 sm:mb-4">
                  <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="text-xs font-semibold">{pillar.tagline}</span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
                  {pillar.title}
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4 mb-6">
                  {pillar.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg w-full sm:w-auto">
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Service Count Cards - RESPONSIVE */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {pillar.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeIn key={service.id} delay={0.1 + index * 0.1}>
                    <a
                      href={`#${service.slug}`}
                      className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center block"
                    >
                      <div 
                        className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <Icon className="w-5 h-5 sm:w-7 sm:h-7" style={{ color: service.color }} />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed hidden sm:block">
                        Click to view
                      </p>
                    </a>
                  </FadeIn>
                );
              })}
            </div>

            {/* Bottom Info Card - RESPONSIVE */}
            <FadeIn delay={0.5}>
              <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">
                      {pillar.services.length}
                    </div>
                    <div className="text-xs text-gray-600">Services</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">ROI</div>
                    <div className="text-xs text-gray-600">Focused</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">Quality</div>
                    <div className="text-xs text-gray-600">Leads</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">Growth</div>
                    <div className="text-xs text-gray-600">Guaranteed</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20 max-w-6xl mx-auto">
            {pillar.services.map((service, index) => (
              <FadeIn key={service.id}>
                <div id={service.slug} className="scroll-mt-24">
                  <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <ServiceDetail service={service} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 rounded-full px-4 py-2 mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-semibold">Why Choose {pillar.title}?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Real Results That Matter
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Stop wasting money on marketing that doesn't work. Our data-driven approach delivers qualified leads that actually convert.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-green-600 mb-2">01</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Targeted Campaigns</h3>
                  <p className="text-sm text-gray-600">Reach the right audience at the right time</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">02</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Track Everything</h3>
                  <p className="text-sm text-gray-600">Clear metrics and detailed reporting</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-orange-600 mb-2">03</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Optimize Daily</h3>
                  <p className="text-sm text-gray-600">Continuous improvement for better ROI</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </div>
  );
}