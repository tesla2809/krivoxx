import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-primary rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Grow Your Business?
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Let's discuss how KRIVOX can help transform your digital presence and drive real results for your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <ScaleIn delay={0.2}>
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </ScaleIn>
                
                <ScaleIn delay={0.3}>
                  <Link href="/pricing">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      View Pricing
                    </Button>
                  </Link>
                </ScaleIn>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 text-sm">
                <a href="tel:+919998813569" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+91 99988 13569</span>
                </a>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
                <a href="mailto:aditya@krivoxx.com" className="flex items-center space-x-2 hover:text-white transition-colors">
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