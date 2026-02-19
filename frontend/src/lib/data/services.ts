// Services data for KRIVOX
import { 
  Layout, TrendingUp, Zap, Code,
  Globe, Palette, Pencil, Share2,
  Target, Video, Users, ChartNoAxesColumnIncreasing,
  UserCheck, Settings, Database, Shield,
  Smartphone, LayoutDashboard, DollarSign,
  type LucideIcon
} from 'lucide-react';

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
}

export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  services: Service[];
}

export const servicePillars: ServicePillar[] = [
  {
    id: '1',
    title: 'Digital Presence & Branding',
    tagline: 'First Impression for Clients',
    description: 'Build a strong online presence that attracts and converts customers',
    icon: Layout,
    color: '#6366f1',
    services: [
      {
        id: 's1',
        title: 'Website Creation',
        slug: 'website-creation',
        description: 'Professional, responsive websites that drive business growth',
        shortDescription: 'Custom websites for your business',
        icon: Globe,
        features: [
          'Responsive design for all devices',
          'SEO optimized structure',
          'Fast loading speed',
          'Content management system',
          'Custom design & branding',
        ],
        benefits: [
          'Professional online presence',
          'Increased credibility',
          'Better customer reach',
          '24/7 business showcase',
        ],
        pricing: { starter: true, growth: true, scale: true },
        color: '#6366f1',
      },
      {
        id: 's2',
        title: 'Graphic Designing',
        slug: 'graphic-designing',
        description: 'Eye-catching designs for all your marketing needs',
        shortDescription: 'Professional graphics & branding',
        icon: Palette,
        features: [
          'Logo design',
          'Social media graphics',
          'Marketing materials',
          'Brand identity',
          'Print & digital designs',
        ],
        benefits: [
          'Strong brand identity',
          'Professional appearance',
          'Consistent branding',
          'Higher engagement',
        ],
        pricing: { starter: true, growth: true, scale: true },
        color: '#ec4899',
      },
      {
        id: 's3',
        title: 'Content Writing',
        slug: 'content-writing',
        description: 'Engaging content that connects with your audience',
        shortDescription: 'SEO-friendly content creation',
        icon: Pencil,
        features: [
          'Website content',
          'Blog posts',
          'Social media content',
          'Product descriptions',
          'SEO optimization',
        ],
        benefits: [
          'Better search rankings',
          'Engaged audience',
          'Clear messaging',
          'Increased conversions',
        ],
        pricing: { starter: true, growth: true, scale: true },
        color: '#10b981',
      },
      {
        id: 's4',
        title: 'Social Media Management',
        slug: 'social-media',
        description: 'Grow your brand presence across all social platforms',
        shortDescription: 'Complete social media handling',
        icon: Share2,
        features: [
          'Content planning & posting',
          'Community management',
          'Profile optimization',
          'Analytics & reporting',
          'Engagement strategies',
        ],
        benefits: [
          'Consistent posting',
          'Growing follower base',
          'Better engagement',
          'Brand awareness',
        ],
        pricing: { starter: true, growth: true, scale: true },
        color: '#f59e0b',
      },
    ],
  },
  {
    id: '2',
    title: 'Lead Generation & Growth',
    tagline: 'What Businesses Really Want',
    description: 'Drive real results with targeted marketing campaigns',
    icon: TrendingUp,
    color: '#10b981',
    services: [
      {
        id: 's5',
        title: 'Meta Ads (Facebook & Instagram)',
        slug: 'meta-ads',
        description: 'Targeted advertising campaigns that bring quality leads',
        shortDescription: 'Facebook & Instagram advertising',
        icon: Target,
        features: [
          'Campaign strategy & setup',
          'Audience targeting',
          'Ad creative design',
          'A/B testing',
          'Performance optimization',
          'Detailed reporting',
        ],
        benefits: [
          'Qualified leads',
          'Better ROI',
          'Precise targeting',
          'Measurable results',
        ],
        pricing: { starter: false, growth: true, scale: true },
        color: '#3b82f6',
      },
      {
        id: 's6',
        title: 'YouTube Marketing',
        slug: 'youtube-marketing',
        description: 'Video marketing that builds trust and drives sales',
        shortDescription: 'YouTube ads & channel growth',
        icon: Video,
        features: [
          'YouTube ads campaigns',
          'Video SEO optimization',
          'Channel management',
          'Video content strategy',
          'Analytics tracking',
        ],
        benefits: [
          'High engagement',
          'Trust building',
          'Brand authority',
          'Long-term results',
        ],
        pricing: { starter: false, growth: true, scale: true },
        color: '#ef4444',
      },
      {
        id: 's7',
        title: 'Lead Generation Systems',
        slug: 'lead-generation',
        description: 'Automated systems that capture and nurture leads',
        shortDescription: 'Complete lead capture setup',
        icon: Users,
        features: [
          'Landing page creation',
          'Lead capture forms',
          'Email automation',
          'CRM integration',
          'Follow-up sequences',
        ],
        benefits: [
          'More qualified leads',
          'Automated follow-up',
          'Higher conversion',
          'Better tracking',
        ],
        pricing: { starter: false, growth: true, scale: true },
        color: '#8b5cf6',
      },
      {
        id: 's8',
        title: 'Market Research',
        slug: 'market-research',
        description: 'Data-driven insights for better business decisions',
        shortDescription: 'Audience & competitor analysis',
        icon: ChartNoAxesColumnIncreasing,
        features: [
          'Competitor analysis',
          'Audience research',
          'Market trends',
          'Customer insights',
          'Strategic recommendations',
        ],
        benefits: [
          'Better decisions',
          'Competitive advantage',
          'Clear strategy',
          'Risk reduction',
        ],
        pricing: { starter: false, growth: true, scale: true },
        color: '#06b6d4',
      },
    ],
  },
  {
    id: '3',
    title: 'Business Automation & Operations',
    tagline: 'Where You Become Different',
    description: 'Streamline operations and save time with smart automation',
    icon: Zap,
    color: '#f59e0b',
    services: [
      {
        id: 's9',
        title: 'Virtual Assistants',
        slug: 'virtual-assistants',
        description: 'Dedicated support for your daily business tasks',
        shortDescription: 'Professional virtual assistance',
        icon: UserCheck,
        features: [
          'Email & calendar management',
          'Data entry & management',
          'Customer support',
          'Administrative tasks',
          'Social media assistance',
        ],
        benefits: [
          'Save time',
          'Focus on core business',
          'Cost-effective',
          'Flexible support',
        ],
        pricing: { starter: false, growth: true, scale: true },
        color: '#14b8a6',
      },
      {
        id: 's10',
        title: 'Business Management Systems',
        slug: 'management-systems',
        description: 'Organized systems for smooth business operations',
        shortDescription: 'CRM & workflow automation',
        icon: Settings,
        features: [
          'CRM setup & training',
          'Workflow automation',
          'Task management',
          'Team collaboration tools',
          'Process optimization',
        ],
        benefits: [
          'Better organization',
          'Team efficiency',
          'Clear processes',
          'Reduced errors',
        ],
        pricing: { starter: false, growth: true, scale: true },
        color: '#a855f7',
      },
      {
        id: 's11',
        title: 'Bulk Data Management',
        slug: 'data-management',
        description: 'Handle large volumes of data efficiently',
        shortDescription: 'Data processing & organization',
        icon: Database,
        features: [
          'Data organization',
          'Bulk message sending',
          'Database management',
          'Data cleaning',
          'Import/export handling',
        ],
        benefits: [
          'Save hours of work',
          'Error-free data',
          'Quick processing',
          'Better insights',
        ],
        pricing: { starter: false, growth: false, scale: true },
        color: '#f97316',
      },
      {
        id: 's12',
        title: 'Basic Cybersecurity',
        slug: 'cybersecurity',
        description: 'Protect your business from digital threats',
        shortDescription: 'Security consulting & setup',
        icon: Shield,
        features: [
          'Security audit',
          'Password management',
          'Backup solutions',
          'Basic threat protection',
          'Security training',
        ],
        benefits: [
          'Protected data',
          'Peace of mind',
          'Compliance ready',
          'Risk mitigation',
        ],
        pricing: { starter: false, growth: false, scale: true },
        color: '#dc2626',
      },
    ],
  },
  {
    id: '4',
    title: 'Tech & Advanced Solutions',
    tagline: 'High-Ticket Clients',
    description: 'Custom technology solutions for growing businesses',
    icon: Code,
    color: '#8b5cf6',
    services: [
      {
        id: 's13',
        title: 'App Development',
        slug: 'app-development',
        description: 'Custom mobile and web applications',
        shortDescription: 'Mobile & web app creation',
        icon: Smartphone,
        features: [
          'iOS & Android apps',
          'Web applications',
          'Custom features',
          'API integration',
          'Maintenance & support',
        ],
        benefits: [
          'Custom solution',
          'Scalable platform',
          'Competitive edge',
          'Better user experience',
        ],
        pricing: { starter: false, growth: false, scale: true },
        color: '#6366f1',
      },
      {
        id: 's14',
        title: 'Custom Dashboards',
        slug: 'custom-dashboards',
        description: 'Data visualization and business intelligence tools',
        shortDescription: 'Internal tools & dashboards',
        icon: LayoutDashboard,
        features: [
          'Custom dashboard design',
          'Real-time data tracking',
          'Report automation',
          'Data visualization',
          'Integration with tools',
        ],
        benefits: [
          'Better insights',
          'Quick decisions',
          'Time savings',
          'Clear overview',
        ],
        pricing: { starter: false, growth: false, scale: true },
        color: '#06b6d4',
      },
      {
        id: 's15',
        title: 'Finance Tech Support',
        slug: 'finance-tech',
        description: 'Technology solutions for financial operations',
        shortDescription: 'Billing & financial automation',
        icon: DollarSign,
        features: [
          'Billing automation',
          'Invoice generation',
          'Financial reporting',
          'Payment integration',
          'Accounting software setup',
        ],
        benefits: [
          'Accurate billing',
          'Faster payments',
          'Better tracking',
          'Reduced errors',
        ],
        pricing: { starter: false, growth: false, scale: true },
        color: '#10b981',
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  for (const pillar of servicePillars) {
    const service = pillar.services.find((s) => s.slug === slug);
    if (service) return service;
  }
  return null;
}

export function getServicePillarById(id: string) {
  return servicePillars.find((pillar) => pillar.id === id);
}