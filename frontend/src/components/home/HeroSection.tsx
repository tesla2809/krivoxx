'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Clock, Users, Sparkles, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
      {/* ── Rich Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0018] via-[#12002a] to-[#0f0020]" />

      {/* Animated mesh blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-25 animate-blob-morph"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
            top: '-10%',
            left: '-10%',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 animate-blob-morph"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            top: '40%',
            right: '-5%',
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-15 animate-blob-morph"
          style={{
            background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)',
            bottom: '10%',
            left: '30%',
            animationDelay: '5s',
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(196,181,253,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196,181,253,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* ── Left: Content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full px-4 py-2 mb-6 border"
              style={{
                background: 'rgba(124,58,237,0.15)',
                borderColor: 'rgba(124,58,237,0.4)',
              }}
            >
              <Sparkles className="w-4 h-4 text-violet-300" />
              <span className="text-sm font-medium text-violet-200">Your Digital Growth Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]"
            >
              Transform Your Business with{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #c4b5fd 50%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Complete Digital Solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-violet-200/80 mb-8 leading-relaxed"
            >
              From websites to automation — everything your business needs under one roof.
              Serving Gandhidham, Kutch & all of Gujarat.
            </motion.p>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              {[
                'One-stop solution for all digital needs',
                'Modern technology with local expertise',
                'Transparent pricing, no hidden costs',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-400/40 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-violet-300" />
                  </div>
                  <span className="text-violet-100/80 text-sm">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <button
                  className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                    boxShadow: '0 0 30px rgba(124,58,237,0.5), 0 4px 20px rgba(0,0,0,0.3)',
                  }}
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button
                  className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-violet-200 border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                >
                  View Our Services
                </button>
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Value Props Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative"
          >
            {/* Glow behind card */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-40 animate-pulse-slow"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            />

            {/* Main Card */}
            <div
              className="relative rounded-3xl p-7 text-white card-shine"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(196,181,253,0.2)',
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-yellow-300" />
                <h3 className="text-xl font-bold text-white">Why Choose KRIVOXX?</h3>
              </div>

              {/* Value Props */}
              <div className="space-y-3 mb-6">
                {[
                  { icon: Users, title: 'Complete Solutions', sub: 'Branding to automation' },
                  { icon: Shield, title: 'Quality Guaranteed', sub: 'Professional every time' },
                  { icon: Clock, title: 'Fast Delivery', sub: 'Quick turnaround' },
                ].map(({ icon: Icon, title, sub }) => (
                  <div
                    key={title}
                    className="flex items-start space-x-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/10"
                    style={{ background: 'rgba(255,255,255,0.05)' }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(124,58,237,0.3)' }}>
                      <Icon className="w-5 h-5 text-violet-300" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white">{title}</div>
                      <div className="text-xs text-violet-300/70">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Highlights */}
              <div className="pt-5 border-t border-white/10">
                <div className="text-xs font-semibold text-violet-300/70 uppercase tracking-widest mb-3">Services Include</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Website & App Development',
                    'Digital Marketing & Ads',
                    'Business Automation & CRM',
                    'Support & Maintenance',
                  ].map((s) => (
                    <div key={s} className="flex items-center space-x-2 text-xs text-violet-200/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div
              className="absolute -bottom-5 -right-5 rounded-2xl p-4 hidden lg:flex items-center space-x-3 animate-float"
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(196,181,253,0.3)',
              }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(124,58,237,0.3)' }}>
                <Shield className="w-5 h-5 text-violet-300" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Quality Assured</div>
                <div className="text-xs text-violet-300/70">Professional</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
