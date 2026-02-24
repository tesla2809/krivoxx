'use client'

import Link from 'next/link';
import { ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* ── Rich dark background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0018] via-[#12002a] to-[#0f0020]" />

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 animate-blob-morph"
          style={{
            background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-15 animate-blob-morph"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)',
            bottom: '-20%',
            left: '-5%',
            animationDelay: '4s',
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(196,181,253,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(196,181,253,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div
              className="rounded-3xl p-8 md:p-14 relative overflow-hidden card-shine"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(196,181,253,0.2)',
                boxShadow: '0 0 80px rgba(124,58,237,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            >
              {/* Inner glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #a855f7, transparent)' }}
              />

              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                  style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }}>
                  <Sparkles className="w-4 h-4 text-violet-300" />
                  <span className="text-sm font-medium text-violet-200">Let's Work Together</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  Ready to Grow Your{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #a855f7 0%, #c4b5fd 60%, #7c3aed 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Business?
                  </span>
                </h2>
                <p className="text-lg text-violet-200/70 max-w-2xl mx-auto">
                  Let's discuss how KRIVOXX can help transform your digital presence and drive real results for your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                <ScaleIn delay={0.2}>
                  <Link href="/contact">
                    <button
                      className="group flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                        boxShadow: '0 0 30px rgba(124,58,237,0.5)',
                      }}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </ScaleIn>

                <ScaleIn delay={0.3}>
                  <Link href="/pricing">
                    <button
                      className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-violet-200 border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300"
                    >
                      View Pricing
                    </button>
                  </Link>
                </ScaleIn>
              </div>

              {/* Contact links */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <a
                  href="tel:+919998813569"
                  className="flex items-center space-x-2 text-violet-300/70 hover:text-violet-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 99988 13569</span>
                </a>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-violet-500/40" />
                <a
                  href="mailto:aditya@krivoxx.com"
                  className="flex items-center space-x-2 text-violet-300/70 hover:text-violet-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>aditya@krivoxx.com</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
