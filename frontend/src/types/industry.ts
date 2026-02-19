// Industry Types for KRIVOX
import { LucideIcon } from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  benefits: string[];
  color: string;
  caseStudy?: {
    clientName: string;
    problem: string;
    solution: string;
    results: string[];
  };
}

export type IndustryType = 
  | 'port-transport' 
  | 'msme' 
  | 'local-business' 
  | 'export-import'
  | 'manufacturing'
  | 'retail';