'use client';

// Industries data for KRIVOX
import { Truck, Factory, Store, Languages, type LucideIcon } from 'lucide-react';
import { Industry } from '@/types';

export const industries: Industry[] = [
  {
    id: 'port-transport',
    name: 'Port & Transport Business',
    slug: 'port-transport',
    description: 'Digital solutions for logistics, transporters, and port-related businesses in Gandhidham and Kutch region',
    icon: Truck,
    color: '#3b82f6',
    challenges: [
      'Manual booking and tracking',
      'Poor online visibility',
      'Difficulty in lead generation',
      'Complex data management',
    ],
    solutions: [
      'Custom websites with booking systems',
      'WhatsApp automation for bookings',
      'Invoice and data tracking tools',
      'Digital marketing for lead generation',
    ],
    services: [
      'Website Development',
      'WhatsApp Business Integration',
      'Lead Generation',
      'Data Management Systems',
    ],
    benefits: [
      'Streamlined booking process',
      'Better customer reach',
      'Automated invoicing',
      'Real-time tracking',
    ],
  },
  {
    id: 'msme',
    name: 'MSME Growth',
    slug: 'msme',
    description: 'Complete digital transformation for small and medium enterprises, factories, traders, and exporters',
    icon: Factory,
    color: '#10b981',
    challenges: [
      'Limited online presence',
      'Manual operations',
      'Difficulty finding clients',
      'Poor brand visibility',
    ],
    solutions: [
      'Professional website + branding',
      'Meta ads for lead generation',
      'CRM and automation setup',
      'Export documentation support',
    ],
    services: [
      'Digital Presence Setup',
      'Lead Generation Campaigns',
      'Business Automation',
      'Market Research',
    ],
    benefits: [
      'Increased online visibility',
      'Quality leads and clients',
      'Streamlined operations',
      'Better business growth',
    ],
  },
  {
    id: 'local-business',
    name: 'Local Business Automation',
    slug: 'local-business',
    description: 'Smart solutions for gyms, clinics, coaching centers, real estate, and retail businesses',
    icon: Store,
    color: '#f59e0b',
    challenges: [
      'Manual appointment booking',
      'No online booking system',
      'Poor customer management',
      'Limited marketing reach',
    ],
    solutions: [
      'Online booking and appointment systems',
      'CRM for customer management',
      'Social media marketing and ads',
      'WhatsApp automation for reminders',
    ],
    services: [
      'Booking System Setup',
      'CRM Implementation',
      'Social Media Marketing',
      'WhatsApp Automation',
    ],
    benefits: [
      'Easy appointment booking',
      'Better customer retention',
      'Increased footfall',
      'Automated reminders',
    ],
  },
  {
    id: 'sindhi-gujarati',
    name: 'Sindhi / Gujarati Language Marketing',
    slug: 'regional-marketing',
    description: 'Local language marketing for better connection with regional audience',
    icon: Languages,
    color: '#ec4899',
    challenges: [
      'English content not connecting',
      'Low engagement from local audience',
      'Cultural disconnect',
      'Generic marketing approach',
    ],
    solutions: [
      'Sindhi and Gujarati content creation',
      'Regional language social media',
      'Local influencer collaboration',
      'Cultural marketing strategies',
    ],
    services: [
      'Regional Content Writing',
      'Local Language Graphics',
      'Culturally Relevant Campaigns',
      'Community Building',
    ],
    benefits: [
      'Higher engagement rates',
      'Better local connection',
      'Increased trust',
      'More conversions',
    ],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}