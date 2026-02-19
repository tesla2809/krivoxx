// Navigation menu items for KRIVOX

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Digital Presence & Branding',
        href: '/services/digital-presence',
      },
      {
        label: 'Lead Generation & Growth',
        href: '/services/lead-generation',
      },
      {
        label: 'Business Automation',
        href: '/services/business-automation',
      },
      {
        label: 'Tech Solutions',
        href: '/services/tech-solutions',
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const footerNavigation = {
  services: [
    { label: 'Digital Presence', href: '/services/digital-presence' },
    { label: 'Lead Generation', href: '/services/lead-generation' },
    { label: 'Business Automation', href: '/services/business-automation' },
    { label: 'Tech Solutions', href: '/services/tech-solutions' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Industries', href: '/industries' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};