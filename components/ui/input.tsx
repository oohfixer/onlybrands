import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'input-base',
          error && 'border-status-error focus:border-status-error focus:shadow-status-error/20',
          success && 'border-status-success focus:border-status-success focus:shadow-status-success/20',
          className
        )}
        {...props}
      />
    );
  }
);