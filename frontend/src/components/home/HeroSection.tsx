'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-green-50 text-green-700 rounded-full px-3 py-1.5 mb-4 border border-green-200"
            >
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Your Digital Growth Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="text-primary">Complete Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 mb-5"
            >
              From websites to automation - everything your business needs under one roof. Serving Gandhidham, Kutch & all of Gujarat.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-2 mb-6"
            >
              {[
                'One-stop solution for all digital needs',
                'Modern technology with local expertise',
                'Transparent pricing, no hidden costs',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact">
                <Button className="w-full sm:w-auto">
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Our Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side - Value Props Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-4">Why Choose KRIVOX?</h3>
              
              {/* Value Props */}
              <div className="space-y-3 mb-5">
                <div className="flex items-start space-x-3 p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Complete Solutions</div>
                    <div className="text-xs text-white/80">Branding to automation</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Quality Guaranteed</div>
                    <div className="text-xs text-white/80">Professional every time</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-2.5 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5">Fast Delivery</div>
                    <div className="text-xs text-white/80">Quick turnaround</div>
                  </div>
                </div>
              </div>

              {/* Service Highlights */}
              <div className="pt-4 border-t border-white/20">
                <div className="text-sm font-semibold mb-2">Services Include:</div>
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                    <span>Website & App Development</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                    <span>Digital Marketing & Ads</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                    <span>Business Automation & CRM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                    <span>Support & Maintenance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge - Moved to Right */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 border-4 border-white hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-900">Quality Assured</div>
                  <div className="text-xs text-gray-600">Professional</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}