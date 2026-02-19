'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Shield, Clock, TrendingUp, DollarSign } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { PricingCard } from '@/components/pricing/PricingCard';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { CTASection } from '@/components/home/CTASection';
import { pricingPackages, addOnServices } from '@/lib/data/pricing';
import { getFAQsByCategory } from '@/lib/data/faqs';
import { formatCurrency } from '@/lib/utils/formatters';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PricingPage() {
  const pricingFAQs = getFAQsByCategory('pricing');

  return (
    <div className="pt-0">
      {/* Hero Section - FULLY RESPONSIVE */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Top Section */}
            <FadeIn>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 mb-3 sm:mb-4">
                  <DollarSign className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="text-xs font-semibold">Transparent & Flexible Pricing</span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
                  Simple Pricing for{' '}
                  <span className="text-primary">Complete Digital Solutions</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                  Choose the perfect package for your business. No hidden costs, no surprises - just clear pricing and exceptional service.
                </p>
              </div>
            </FadeIn>

            {/* Cards Grid - RESPONSIVE */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Transparent Pricing */}
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Shield className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">No Hidden Costs</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    Clear pricing upfront
                  </p>
                </div>
              </FadeIn>

              {/* Flexible Plans */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Flexible Plans</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    Scale as you grow
                  </p>
                </div>
              </FadeIn>

              {/* Cancel Anytime */}
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Clock className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Cancel Anytime</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    No long-term lock-in
                  </p>
                </div>
              </FadeIn>

              {/* Value for Money */}
              <FadeIn delay={0.4}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Best Value</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    All-inclusive packages
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Bottom Info Card - RESPONSIVE */}
            <FadeIn delay={0.5}>
              <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary mb-1">3</div>
                    <div className="text-xs text-gray-600">Packages</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-xs text-gray-600">Transparent</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">Custom</div>
                    <div className="text-xs text-gray-600">Solutions</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.id} package={pkg} />
            ))}
          </StaggerChildren>

          {/* Trust Badges */}
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Flexible Payment Terms</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Add-On Services
              </h2>
              <p className="text-lg text-gray-600">
                Need something specific? Add these services to any package
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">
                    {formatCurrency(service.price)}
                    {service.duration !== 'one-time' && (
                      <span className="text-sm text-gray-600 font-normal">/{service.duration}</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-linear-to-br from-primary to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Package to Choose?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Let's discuss your specific needs and recommend the perfect package for your business goals.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pricing FAQs
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our pricing and packages
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single">
              {pricingFAQs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} trigger={faq.question}>
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}