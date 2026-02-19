'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({ children, delay = 0, duration = 0.5, className }: ScaleInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}