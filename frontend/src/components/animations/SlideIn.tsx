'use client';

import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  className,
}: SlideInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const directions = {
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
    up: { x: 0, y: -50 },
    down: { x: 0, y: 50 },
  };

  const initial = { opacity: 0, ...directions[direction] };
  const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      ref={ref as any}
      initial={initial}
      animate={animate}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}