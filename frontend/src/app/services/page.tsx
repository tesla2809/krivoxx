'use client';

import Link from 'next/link';
import { ArrowRight, Code, Megaphone, Zap, Headphones } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { ServiceCard } from '@/components/services/ServiceCard';
import { CTASection } from '@/components/home/CTASection';
import { servicePillars } from '@/lib/data/services';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  const pillarSlugs: { [key: string]: string } = {
    '1': 'digital-presence',
    '2': 'lead-generation',
    '3': 'business-automation',
    '4': 'tech-solutions',
  };

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            {/* Heading */}
            <FadeIn>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 mb-3 sm:mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xs font-semibold">15+ Services Available</span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
                  Complete{' '}
                  <span className="text-primary">Digital Solutions</span>{' '}
                  for Your Business
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
                  From website design to complete automation — everything you need to establish, grow, and scale your business online.
                </p>
              </div>
            </FadeIn>

            {/* Category Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <FadeIn delay={0.1}>
                <Link href="/services/digital-presence" className="block">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center h-full">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <Code className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Development</h3>
                    <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Websites & Apps</p>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2}>
                <Link href="/services/lead-generation" className="block">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center h-full">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <Megaphone className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Marketing</h3>
                    <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">SEO & Advertising</p>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Link href="/services/business-automation" className="block">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center h-full">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600" />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Automation</h3>
                    <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">CRM & Workflows</p>
                  </div>
                </Link>
              </FadeIn>

              <FadeIn delay={0.4}>
                <Link href="/services/tech-solutions" className="block">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center h-full">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                      <Headphones className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Support</h3>
                    <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Maintenance & Help</p>
                  </div>
                </Link>
              </FadeIn>
            </div>

            {/* Stats Bar */}
            <FadeIn delay={0.5}>
              <div className="mt-4 sm:mt-6 bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">15+</div>
                    <div className="text-xs text-gray-600">Services</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">4</div>
                    <div className="text-xs text-gray-600">Service Pillars</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">100%</div>
                    <div className="text-xs text-gray-600">Custom Solutions</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.6}>
              <div className="text-center mt-4 sm:mt-6">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="#services" className="w-full sm:w-auto">
                    <Button size="lg" className="shadow-lg w-full sm:w-auto">
                      Explore Services
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      {servicePillars.map((pillar, pillarIndex) => {
        const pillarSlug = pillarSlugs[pillar.id];

        return (
          <section
            key={pillar.id}
            id={pillarIndex === 0 ? 'services' : undefined}
            className={pillarIndex % 2 === 0 ? 'py-12 sm:py-16 lg:py-20 bg-white' : 'py-12 sm:py-16 lg:py-20 bg-gray-50'}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <FadeIn>
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                  <div
                    className="inline-flex items-center space-x-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4"
                    style={{ backgroundColor: `${pillar.color}20` }}
                  >
                    <span className="text-xs sm:text-sm font-medium" style={{ color: pillar.color }}>
                      {pillar.tagline}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                    {pillar.title}
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-5 sm:mb-6 px-2">
                    {pillar.description}
                  </p>
                  <Link href={`/services/${pillarSlug}`}>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View All {pillar.title} Services
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>

              <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {pillar.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    pillarSlug={pillarSlug}
                  />
                ))}
              </StaggerChildren>
            </div>
          </section>
        );
      })}

      {/* Pricing CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
                Ready to Get Started?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
                Choose from our flexible packages designed for businesses at every stage of growth
              </p>
              <Link href="/pricing" className="w-full sm:w-auto inline-block">
                <Button size="lg" className="w-full sm:w-auto">
                  View Pricing Packages
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </div>
  );
}