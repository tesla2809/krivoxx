// Service Types for KRIVOX
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: LucideIcon;
  features: string[];
  benefits: string[];
  pricing: {
    starter: boolean;
    growth: boolean;
    scale: boolean;
  };
  color: string;
  image?: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  services: Service[];
  icon: LucideIcon;
  color: string;
}

export type ServiceCategory = 
  | 'digital-presence'
  | 'lead-generation'
  | 'business-automation'
  | 'tech-solutions';