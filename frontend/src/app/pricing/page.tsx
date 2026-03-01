'use client';

import { Check, ArrowRight, Sparkles, Shield, Clock, TrendingUp, DollarSign } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { PricingCard } from '@/components/pricing/PricingCard';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { CTASection } from '@/components/home/CTASection';
import { pricingPackages, addOnServices, servicePricing } from '@/lib/data/pricing';
import { getFAQsByCategory } from '@/lib/data/faqs';
import { formatCurrency } from '@/lib/utils/formatters';
import Link from 'next/link';

export default function PricingPage() {
  const pricingFAQs = getFAQsByCategory('pricing');

  return (
    <div className="pt-0">
      {/* ── Hero ── */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
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
                  Choose the perfect package for your business. No hidden costs, no surprises — just clear pricing and exceptional service.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {[
                { icon: Shield, label: 'No Hidden Costs', sub: 'Clear pricing upfront', bg: 'bg-primary/10', iconColor: 'text-primary' },
                { icon: TrendingUp, label: 'Flexible Plans', sub: 'Scale as you grow', bg: 'bg-green-100', iconColor: 'text-green-600' },
                { icon: Clock, label: 'Cancel Anytime', sub: 'No long-term lock-in', bg: 'bg-orange-100', iconColor: 'text-orange-600' },
                { icon: Sparkles, label: 'Best Value', sub: 'All-inclusive packages', bg: 'bg-purple-100', iconColor: 'text-purple-600' },
              ].map(({ icon: Icon, label, sub, bg, iconColor }, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 ${bg} rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4`}>
                      <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${iconColor}`} />
                    </div>
                    <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{label}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">{sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  {[
                    { val: '3', label: 'Packages', color: 'text-primary' },
                    { val: '100%', label: 'Transparent', color: 'text-green-600' },
                    { val: 'Custom', label: 'Solutions', color: 'text-orange-600' },
                    { val: '24/7', label: 'Support', color: 'text-purple-600' },
                  ].map(({ val, label, color }) => (
                    <div key={label}>
                      <div className={`text-xl sm:text-2xl font-bold ${color} mb-1`}>{val}</div>
                      <div className="text-xs text-gray-600">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Pricing Packages ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Choose Your Package</h2>
              <p className="text-lg text-gray-600">Monthly retainer packages for complete digital management</p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg) => (
              <PricingCard key={pkg.id} package={pkg} />
            ))}
          </StaggerChildren>

          <FadeIn delay={0.4}>
            <div className="mt-12 text-center">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
                {['No Setup Fees', 'Cancel Anytime', 'Flexible Payment Terms'].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Individual Service Pricing ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 mb-4">
                <DollarSign className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">À La Carte Pricing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Individual Service Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Only need specific services? Pick exactly what your business needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicePricing.map((category, catIndex) => (
              <FadeIn key={catIndex} delay={catIndex * 0.1}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                  {/* Category header */}
                  <div
                    className="px-6 py-4 flex items-center gap-3"
                    style={{ backgroundColor: category.color }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/70" />
                    <h3 className="text-base font-bold text-white">{category.category}</h3>
                  </div>

                  {/* Services list */}
                  <div className="divide-y divide-gray-50">
                    {category.services.map((service, sIndex) => (
                      <div
                        key={sIndex}
                        className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: category.color }}
                          />
                          <span className="text-sm text-gray-700">{service.name}</span>
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <span className="text-base font-bold" style={{ color: category.color }}>
                            ₹{service.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-gray-400 ml-1">
                            {service.duration === 'one-time' ? '' : `/${service.duration}`}
                          </span>
                          {service.duration === 'one-time' && (
                            <div className="text-xs text-gray-400">one-time</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="text-center text-sm text-gray-500 mt-8">
              * All prices are starting rates. Final pricing depends on scope and requirements.{' '}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Get a custom quote →
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Add-On Services ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Add-On Services</h2>
              <p className="text-lg text-gray-600">Need something specific? Add these services to any package</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">
                    ₹{service.price.toLocaleString('en-IN')}
                    {service.duration !== 'one-time' && (
                      <span className="text-sm text-gray-600 font-normal">/{service.duration}</span>
                    )}
                    {service.duration === 'one-time' && (
                      <span className="text-sm text-gray-500 font-normal ml-1">one-time</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consultation Banner ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div
              className="max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)' }}
            >
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }} />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
                Not Sure Which Package to Choose?
              </h2>
              <p className="text-lg text-white/90 mb-8 relative z-10">
                Let's discuss your specific needs and recommend the perfect package for your business goals.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-lg relative z-10">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
              <p className="text-lg text-gray-600">Common questions about our pricing and packages</p>
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
