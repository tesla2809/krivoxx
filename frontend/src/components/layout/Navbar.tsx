'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '@/lib/constants/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/lib/utils/cn';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 20;

  const navBg = isHome && !isScrolled
    ? 'bg-transparent'
    : 'bg-[#0f0020]/95 backdrop-blur-lg border-b border-white/10 shadow-lg';

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', navBg)}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-violet-300">
              <Image
                src="/logo.png"
                alt="Krivoxx Logo"
                width={34}
                height={34}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-wide text-white transition-colors duration-300">
              KRIVOXX
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-medium transition-colors duration-300 text-sm text-gray-200 hover:text-white',
                  pathname === item.href && 'text-white font-semibold'
                )}
              >
                {item.label}
              </Link>
            ))}

            <Link href="/contact">
              <button
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                  boxShadow: '0 0 16px rgba(124,58,237,0.4)',
                }}
              >
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-[#0f0020] border-white/10">
          <div className="container mx-auto px-4 py-5 space-y-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 px-3 rounded-lg font-medium transition-colors text-sm text-gray-300 hover:text-white hover:bg-white/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button
                className="w-full mt-3 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
