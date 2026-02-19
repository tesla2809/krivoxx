// Pricing packages data for KRIVOX
import { PricingPackage } from '@/types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for Getting Started',
    price: 12000,
    duration: 'month',
    bestFor: 'Small businesses & startups',
    deliveryTime: '3-4 weeks',
    revisions: 2,
    support: 'Email support',
    color: '#6366f1',
    features: [
      { name: 'Website / Social Media Setup', included: true },
      { name: 'Basic Graphic Design', included: true },
      { name: 'Content Writing (Limited)', included: true },
      { name: 'Social Media Posting', included: true },
      { name: 'Monthly Performance Report', included: true },
      { name: 'Meta Ads Campaign', included: false },
      { name: 'Lead Generation System', included: false },
      { name: 'CRM Setup', included: false },
      { name: 'Virtual Assistant', included: false },
      { name: 'Advanced Analytics', included: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Most Popular Choice',
    price: 35000,
    duration: 'month',
    highlighted: true,
    bestFor: 'Growing businesses wanting leads',
    deliveryTime: '2-3 weeks',
    revisions: 3,
    support: 'Priority email & call support',
    color: '#10b981',
    features: [
      { name: 'Everything in Starter', included: true },
      { name: 'Meta Ads + Lead Generation', included: true },
      { name: 'Advanced Graphics & Content', included: true },
      { name: 'CRM Setup & Training', included: true },
      { name: 'YouTube Marketing', included: true },
      { name: 'Market Research', included: true },
      { name: 'Weekly Reporting', included: true },
      { name: 'WhatsApp Integration', included: true },
      { name: 'Virtual Assistant (20 hrs)', included: false },
      { name: 'Custom App Development', included: false },
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'Complete Growth Solution',
    price: 85000,
    duration: 'month',
    bestFor: 'Established businesses scaling up',
    deliveryTime: '1-2 weeks',
    revisions: 'unlimited',
    support: 'Dedicated account manager + 24/7 support',
    color: '#8b5cf6',
    features: [
      { name: 'Everything in Growth', included: true },
      { name: 'Virtual Assistant (Full-time)', included: true },
      { name: 'Business Automation Setup', included: true },
      { name: 'Bulk Data Management', included: true },
      { name: 'Custom Dashboards', included: true },
      { name: 'Advanced Security Setup', included: true },
      { name: 'Finance Tech Support', included: true },
      { name: 'App Development (Basic)', included: true },
      { name: 'Daily Reporting', included: true },
      { name: 'Dedicated Team', included: true },
    ],
  },
];

export const addOnServices = [
  {
    name: 'Custom App Development',
    price: 50000,
    duration: 'one-time',
    description: 'Full mobile/web application',
  },
  {
    name: 'Advanced Dashboard',
    price: 25000,
    duration: 'one-time',
    description: 'Custom business intelligence dashboard',
  },
  {
    name: 'Extra Virtual Assistant Hours',
    price: 500,
    duration: 'hour',
    description: 'Additional VA support as needed',
  },
  {
    name: 'Video Production',
    price: 15000,
    duration: 'one-time',
    description: 'Professional video content creation',
  },
];

export function getPricingPackageById(id: string) {
  return pricingPackages.find((pkg) => pkg.id === id);
}