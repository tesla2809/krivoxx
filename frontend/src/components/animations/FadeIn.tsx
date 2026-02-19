'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, duration = 0.6, className }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}