'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import type { Industry } from '@/types';

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = industry.icon;
  
  return (
    <Card className="group hover-lift relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
        style={{ 
          background: `linear-gradient(135deg, ${industry.color}40 0%, ${industry.color}10 100%)`
        }}
      />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-md"
            style={{ backgroundColor: `${industry.color}20` }}
          >
            <Icon className="w-8 h-8" style={{ color: industry.color }} />
          </div>
          <div 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: `${industry.color}15`, color: industry.color }}
          >
            Specialized
          </div>
        </div>
        
        <CardTitle className="text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300"
          style={{ 
            backgroundImage: `linear-gradient(135deg, ${industry.color} 0%, ${industry.color}80 100%)`
          }}>
          {industry.name}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {industry.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-sm font-semibold text-gray-700">
            <TrendingUp className="w-4 h-4" style={{ color: industry.color }} />
            <span>Key Solutions:</span>
          </div>
          {industry.solutions.slice(0, 3).map((solution, index) => (
            <div key={index} className="flex items-start space-x-3 text-sm text-gray-600 group/item">
              <div 
                className="w-1.5 h-1.5 rounded-full mt-1.5 group-hover/item:scale-150 transition-transform" 
                style={{ backgroundColor: industry.color }} 
              />
              <span className="line-clamp-2">{solution}</span>
            </div>
          ))}
        </div>
        
        <Link 
          href={`/industries#${industry.slug}`} 
          className="flex items-center justify-between w-full py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 group/btn"
          style={{ 
            backgroundColor: `${industry.color}10`,
            color: industry.color
          }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}