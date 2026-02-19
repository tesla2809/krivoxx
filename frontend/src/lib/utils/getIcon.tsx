import { 
  Layout, TrendingUp, Zap, Code,
  Globe, Palette, Pencil, Share2,
  Target, Video, Users, ChartNoAxesColumnIncreasing,
  UserCheck, Settings, Database, Shield,
  Smartphone, LayoutDashboard, DollarSign,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  TrendingUp,
  Zap,
  Code,
  Globe,
  Palette,
  Pencil,
  Share2,
  Target,
  Video,
  Users,
  ChartNoAxesColumnIncreasing,
  UserCheck,
  Settings,
  Database,
  Shield,
  Smartphone,
  LayoutDashboard,
  DollarSign,
};

export function getIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Globe; // Default to Globe if icon not found
}