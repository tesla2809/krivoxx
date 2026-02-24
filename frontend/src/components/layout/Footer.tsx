'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { footerNavigation } from '@/lib/constants/navigation';
import { socialLinks } from '@/lib/constants/social';
import { contactInfo } from '@/lib/data/contact';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0018] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }}
      />
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-2 group w-fit">
              <Image
                src="/logo.png"
                alt="Krivoxx Logo"
                width={48}
                height={48}
                className="object-contain flex-shrink-0 drop-shadow-[0_0_8px_rgba(138,43,226,0.6)] group-hover:drop-shadow-[0_0_14px_rgba(138,43,226,0.9)] transition-all duration-300"
              />
              <span
                className="text-2xl font-extrabold tracking-tight whitespace-nowrap transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 50%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Krivoxx
              </span>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed">
              Your Digital Growth Partner. We manage your digital growth & operations so you can focus on business.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-1">
              {[
                { Icon: Instagram, label: 'Instagram', index: 1 },
                { Icon: Linkedin, label: 'LinkedIn', index: 2 },
              ].map(({ Icon, label, index }) => (
                <a
                  key={label}
                  href={socialLinks[index]?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(124,58,237,0.25)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124,58,237,0.4)';
                    (e.currentTarget as HTMLElement).style.color = '#a855f7';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '';
                  }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-5 text-white text-sm uppercase tracking-widest text-violet-300/60">Services</h4>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-violet-300 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-widest text-violet-300/60">Company</h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-violet-300 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-5 text-sm uppercase tracking-widest text-violet-300/60">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-violet-400" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.pincode}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-violet-400" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm text-gray-400 hover:text-violet-300 transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-violet-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-gray-400 hover:text-violet-300 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-sm text-gray-500">© {currentYear} KRIVOXX. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-violet-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-violet-300 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
