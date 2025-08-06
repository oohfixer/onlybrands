import { cn } from '@/lib/utils';
import { HTMLAttributes, createElement } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body-lg' | 'body' | 'body-sm' | 'caption' | 'tiny';
  gradient?: boolean;
}

export function Typography({ 
  as = 'p', 
  variant = 'body', 
  gradient = false, 
  className, 
  children, 
  ...props 
}: TypographyProps) {
  const variantClasses = {
    h1: 'text-5xl font-extrabold tracking-tight',
    h2: 'text-4xl font-bold tracking-tight',
    h3: 'text-3xl font-semibold',
    h4: 'text-2xl font-semibold',
    h5: 'text-xl font-medium',
    h6: 'text-lg font-medium',
    'body-lg': 'text-lg',
    'body': 'text-base',
    'body-sm': 'text-sm',
    'caption': 'text-xs',
    'tiny': 'text-xs',
  };

  return createElement(
    as,
    {
      className: cn(
        variantClasses[variant],
        gradient && 'text-gradient',
        className
      ),
      ...props
    },
    children
  );
}