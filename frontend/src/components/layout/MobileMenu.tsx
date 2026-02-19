'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { mainNavigation } from '@/lib/constants/navigation';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold">
              <span className="text-primary">KRI</span>VOX
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <div>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 text-gray-900 hover:text-primary font-medium transition-colors"
                      onClick={(e) => {
                        if (item.children) {
                          e.preventDefault();
                          setExpandedItem(expandedItem === item.label ? null : item.label);
                        } else {
                          onClose();
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            expandedItem === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </Link>

                    {/* Submenu */}
                    {item.children && expandedItem === item.label && (
                      <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                              onClick={onClose}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="p-6 border-t">
            <Link href="/contact" onClick={onClose}>
              <Button className="w-full" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}