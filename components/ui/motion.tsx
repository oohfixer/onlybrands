// ================================
// Framer Motion Components
// ================================

/*
'use client';

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

// Animation variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

export const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  }
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

// Motion components
interface MotionDivProps extends HTMLMotionProps<'div'> {
  variant?: 'fadeIn' | 'slideIn' | 'scaleIn' | 'staggerContainer';
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ variant = 'fadeIn', className, ...props }, ref) => {
    const variants = {
      fadeIn: fadeInVariants,
      slideIn: slideInVariants,
      scaleIn: scaleInVariants,
      staggerContainer: staggerContainerVariants,
    };

    return (
      <motion.div
        ref={ref}
        variants={variants[variant]}
        initial="hidden"
        animate="visible"
        className={className}
        {...props}
      />
    );
  }
);

export const MotionButton = forwardRef<HTMLButtonElement, HTMLMotionProps<'button'>>(
  ({ className, children, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  )
);

export const MotionCard = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ 
        y: -4, 
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.8), 0 10px 10px rgba(0, 0, 0, 0.7)' 
      }}
      transition={{ duration: 0.3 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
);

// Page transition wrapper
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn('min-h-screen', className)}
    >
      {children}
    </motion.div>
  );
}

// Loading spinner with motion
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className={cn('border-2 border-brand-primary border-t-transparent rounded-full', sizeClasses[size])}
    />
  );
}