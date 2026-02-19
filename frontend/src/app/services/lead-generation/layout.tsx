import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Generation & Growth - KRIVOX',
  description: 'Meta ads, YouTube marketing, lead generation systems, and market research',
};

export default function LeadGenerationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}