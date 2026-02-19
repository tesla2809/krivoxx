import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech & Advanced Solutions - KRIVOX',
  description: 'App development, custom dashboards, and finance tech support',
};

export default function TechSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}