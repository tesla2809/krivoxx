// Pricing Types for KRIVOX

export interface PricingFeature {
  name: string;
  included: boolean;
  description?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  duration: 'month' | 'year' | 'one-time';
  features: PricingFeature[];
  highlighted?: boolean;
  color: string;
  bestFor: string;
  deliveryTime: string;
  revisions: number | 'unlimited';
  support: string;
}

export type PackageTier = 'starter' | 'growth' | 'scale';