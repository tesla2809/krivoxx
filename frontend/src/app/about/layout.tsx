// src/app/about/layout.tsx
// This is a SERVER component — it exports metadata so the page doesn't have to
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Us | KRIVOXX - Your Digital Growth Partner',
  description:
    'Learn about KRIVOXX, the digital growth partner for businesses in Gandhidham, Kutch & Gujarat. Meet our team and discover our story.',
  keywords: ['about KRIVOXX', 'digital agency Gandhidham', 'Kutch digital marketing team'],
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
