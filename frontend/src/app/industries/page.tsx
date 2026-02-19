'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { IndustryDetail } from '@/components/industries/IndustryDetail';
import { CTASection } from '@/components/home/CTASection';
import { industries } from '@/lib/data/industries';
import { Building2, Store, Stethoscope, GraduationCap, Factory } from 'lucide-react';

export default function IndustriesPage() {
  return (
    <div className="pt-0">
      {/* Hero Section - FULLY RESPONSIVE */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Center Content */}
            <FadeIn>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 mb-3 sm:mb-4">
                  <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="text-xs font-semibold">Industries We Serve</span>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
                  Specialized{' '}
                  <span className="text-primary">Digital Solutions</span>{' '}
                  for Every Industry
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                  Tailored solutions for different business sectors in Gandhidham, Kutch, and across Gujarat
                </p>
              </div>
            </FadeIn>

            {/* Industry Icons Grid - RESPONSIVE */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {/* Retail Card */}
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Store className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Retail</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    E-commerce solutions
                  </p>
                </div>
              </FadeIn>

              {/* Healthcare Card */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Stethoscope className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Healthcare</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    Patient management
                  </p>
                </div>
              </FadeIn>

              {/* Education Card */}
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Education</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    Learning platforms
                  </p>
                </div>
              </FadeIn>

              {/* Manufacturing Card */}
              <FadeIn delay={0.4}>
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Factory className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Manufacturing</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">
                    Business automation
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Service Areas Banner - RESPONSIVE */}
            <FadeIn delay={0.5}>
              <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <h3 className="text-center text-xs sm:text-sm font-semibold text-gray-900 mb-3 sm:mb-4">
                  Service Areas Across Gujarat
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {[
                    'Gandhidham',
                    'Kutch',
                    'Mundra',
                    'Bhuj',
                    'Adipur',
                    'Anjar',
                    'Ahmedabad',
                    'Rajkot',
                  ].map((area, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-primary/10 text-primary rounded-full font-medium text-xs"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="px-2 sm:px-3 py-1 sm:py-1.5 bg-green-100 text-green-700 rounded-full font-medium text-xs">
                    + Remote Services
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industries List */}
      {industries.map((industry, index) => (
        <section
          key={industry.id}
          className={index % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-gray-50'}
        >
          <div className="container mx-auto px-4">
            <FadeIn>
              <IndustryDetail industry={industry} />
            </FadeIn>
          </div>
        </section>
      ))}

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Service Areas
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                While we're based in Gandhidham, we serve businesses across Gujarat and beyond
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  'Gandhidham',
                  'Kutch',
                  'Mundra',
                  'Bhuj',
                  'Adipur',
                  'Anjar',
                  'Ahmedabad',
                  'Rajkot',
                  'All Gujarat',
                  'Remote Services',
                ].map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </div>
  );
}