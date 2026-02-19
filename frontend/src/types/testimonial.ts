// Testimonial Types for KRIVOX

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  image?: string;
  location: string;
  date: string;
  service: string;
}

export interface Review {
  id: string;
  testimonialId: string;
  platform: 'google' | 'facebook' | 'direct';
  rating: number;
  verified: boolean;
}