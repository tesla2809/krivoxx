import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { MapSection } from '@/components/contact/MapSection';
import { Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - KRIVOXX',
  description: "Get in touch with KRIVOXX. We're here to help your business grow digitally.",
};

// Official WhatsApp SVG logo
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={className}
      fill="currentColor"
    >
      <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.2 1.6 1.7-6-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.7-11.8c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.4 1.8-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8s1.7 4.4 1.9 4.7c.2.3 3.3 5 8 7 1.1.5 2 .8 2.7 1 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.2-.5-.3-1-.5z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 min-h-screen flex items-center bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 mb-3 sm:mb-4">
                  <Headphones className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="text-xs font-semibold">Contact KRIVOXX</span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
                  Let's Build Your{' '}
                  <span className="text-primary">Digital Success</span> Together
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                  Ready to transform your business? Share your vision with us, and let's discuss how KRIVOXX can help you achieve your digital goals.
                </p>
              </div>
            </FadeIn>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <FadeIn delay={0.1}>
                <a href="tel:+919998813569" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center block">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Phone className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Call Us</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">Quick phone support</p>
                </a>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a href="https://wa.me/919998813569" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center block">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <WhatsAppIcon className="w-5 h-5 sm:w-7 sm:h-7 text-green-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">WhatsApp</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">Chat instantly</p>
                </a>
              </FadeIn>

              <FadeIn delay={0.3}>
                <a href="mailto:aditya@krivoxx.com" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center block">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-orange-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Email Us</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">Detailed response</p>
                </a>
              </FadeIn>

              <FadeIn delay={0.4}>
                <a href="#map" className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center block">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-purple-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Visit Us</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed hidden sm:block">Office location</p>
                </a>
              </FadeIn>
            </div>

            {/* Bottom Info Bar */}
            <FadeIn delay={0.5}>
              <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                  <div>
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Phone</div>
                    <div className="text-xs font-semibold text-gray-900">+91 99988 13569</div>
                  </div>
                  <div>
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Email</div>
                    <div className="text-xs font-semibold text-gray-900">aditya@krivoxx.com</div>
                  </div>
                  <div>
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Hours</div>
                    <div className="text-xs font-semibold text-gray-900">Mon - Sat: 9-7</div>
                  </div>
                  <div>
                    <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-xs text-gray-600 mb-1">Response</div>
                    <div className="text-xs font-semibold text-gray-900">2-3 Hours</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <SlideIn direction="left">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </SlideIn>
            </div>
            <div>
              <SlideIn direction="right">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <ContactInfo />
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Visit Our Office</h2>
              <MapSection />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Prefer a Different Way to Connect?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="tel:+919998813569" className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all">
                  <Phone className="w-12 h-12 mx-auto mb-3" />
                  <div className="font-semibold mb-1">Call Us</div>
                  <div className="text-sm text-white/90">+91 99988 13569</div>
                </a>
                <a href="https://wa.me/919998813569" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all">
                  <WhatsAppIcon className="w-12 h-12 mx-auto mb-3" />
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <div className="text-sm text-white/90">Chat with us instantly</div>
                </a>
                <a href="mailto:aditya@krivoxx.com" className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/30 transition-all">
                  <Mail className="w-12 h-12 mx-auto mb-3" />
                  <div className="font-semibold mb-1">Email</div>
                  <div className="text-sm text-white/90">aditya@krivoxx.com</div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}