// Pricing packages data for KRIVOXX
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

// Individual service pricing (shown in the Services section of pricing page)
export const servicePricing = [
  {
    category: 'Digital Presence & Branding',
    color: '#7c3aed',
    services: [
      { name: 'Basic Business Website (5 pages)', price: 15000, duration: 'one-time' },
      { name: 'Advanced Website (10+ pages)', price: 35000, duration: 'one-time' },
      { name: 'Logo & Brand Identity Pack', price: 8000, duration: 'one-time' },
      { name: 'Social Media Profile Setup', price: 5000, duration: 'one-time' },
      { name: 'Content Writing (per page)', price: 1500, duration: 'one-time' },
    ],
  },
  {
    category: 'Lead Generation & Marketing',
    color: '#10b981',
    services: [
      { name: 'Meta Ads Management', price: 12000, duration: 'month' },
      { name: 'Google Ads Campaign', price: 10000, duration: 'month' },
      { name: 'YouTube Marketing', price: 8000, duration: 'month' },
      { name: 'Lead Generation System Setup', price: 20000, duration: 'one-time' },
      { name: 'WhatsApp Marketing Setup', price: 6000, duration: 'one-time' },
    ],
  },
  {
    category: 'Business Automation',
    color: '#f59e0b',
    services: [
      { name: 'CRM Setup & Training', price: 18000, duration: 'one-time' },
      { name: 'Virtual Assistant (Part-time)', price: 15000, duration: 'month' },
      { name: 'Virtual Assistant (Full-time)', price: 25000, duration: 'month' },
      { name: 'WhatsApp Automation Bot', price: 12000, duration: 'one-time' },
      { name: 'Bulk Data Management', price: 8000, duration: 'one-time' },
    ],
  },
  {
    category: 'Tech & Advanced Solutions',
    color: '#6366f1',
    services: [
      { name: 'Mobile App Development', price: 80000, duration: 'one-time' },
      { name: 'Custom Web Application', price: 50000, duration: 'one-time' },
      { name: 'Business Dashboard', price: 25000, duration: 'one-time' },
      { name: 'E-commerce Store', price: 30000, duration: 'one-time' },
      { name: 'Maintenance & Support', price: 5000, duration: 'month' },
    ],
  },
];

export function getPricingPackageById(id: string) {
  return pricingPackages.find((pkg) => pkg.id === id);
}
