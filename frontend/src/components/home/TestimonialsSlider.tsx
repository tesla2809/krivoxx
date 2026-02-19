'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FadeIn } from '@/components/animations/FadeIn';
import { testimonials } from '@/lib/data/testimonials';

export function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from real businesses we've helped grow
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-24 h-24 text-primary" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed">
                  "{activeTestimonial.content}"
                </p>

                {/* Author Info */}
                <div className="text-center">
                  <div className="font-bold text-gray-900 text-lg mb-1">
                    {activeTestimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm mb-1">
                    {activeTestimonial.position} at {activeTestimonial.company}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {activeTestimonial.location}
                  </div>
                </div>

                {/* Service Badge */}
                <div className="flex justify-center mt-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {activeTestimonial.service}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-8 bg-primary'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}