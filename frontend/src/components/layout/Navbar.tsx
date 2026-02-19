'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '@/lib/constants/navigation';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils/cn';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScrollPosition();

  const isScrolled = scrollY > 50;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-white/95 backdrop-blur-md',
        isScrolled ? 'shadow-lg border-b border-gray-200/50' : 'shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/logo.png"
              alt="Krivoxx Logo"
              width={56}
              height={56}
              className="object-contain drop-shadow-[0_0_8px_rgba(138,43,226,0.5)] group-hover:drop-shadow-[0_0_14px_rgba(138,43,226,0.8)] transition-all duration-300"
            />
            <div className="text-3xl font-extrabold tracking-tight leading-none">
              <span
                className="transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #1a0030 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none',
                  filter: 'drop-shadow(0 2px 4px rgba(124,58,237,0.4))',
                }}
              >
                Krivoxx
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                    "text-gray-700 hover:text-primary hover:bg-primary/5",
                    "relative overflow-hidden"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></span>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 relative z-10 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 relative z-10 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {mainNavigation.map((item, index) => (
              <div
                key={item.href}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <Link
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 font-medium rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 mt-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block animate-fadeInUp"
              style={{
                animationDelay: `${mainNavigation.length * 100}ms`
              }}
            >
              <Button className="w-full mt-4">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}