import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Presence & Branding - KRIVOX',
  description: 'Professional websites, graphic design, content writing, and social media management',
};

export default function DigitalPresenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}