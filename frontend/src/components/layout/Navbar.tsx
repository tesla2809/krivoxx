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
  const isScrolled = scrollY > 20;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0f0020]/90 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-4">

        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Krivoxx Logo"
            width={36}
            height={36}
            className="object-contain"
          />
          <span className="text-xl font-semibold tracking-wide text-white">
            KRIVOXX
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white font-medium transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f0020] border-t border-white/10">
          <div className="container py-6 space-y-4">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-gray-300 hover:text-white font-medium transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button className="w-full mt-4 bg-primary hover:bg-primary-dark text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}