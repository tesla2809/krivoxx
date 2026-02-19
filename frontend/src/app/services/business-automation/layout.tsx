import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Automation & Operations - KRIVOX',
  description: 'Virtual assistants, management systems, data handling, and automation',
};

export default function BusinessAutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}