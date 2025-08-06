import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'btn-base',
          variant === 'primary' && 'btn-primary',
          variant === 'secondary' && 'btn-secondary',
          variant === 'ghost' && 'btn-ghost',
          variant === 'outline' && 'btn-outline',
          size === 'sm' && 'btn-sm',
          size === 'md' && 'btn-md',
          size === 'lg' && 'btn-lg',
          size === 'xl' && 'btn-xl',
          className
        )}
        {...props}
      >
        {loading && (
          <div className="loading-dots">
            <div style={{ '--i': 0 } as any}></div>
            <div style={{ '--i': 1 } as any}></div>
            <div style={{ '--i': 2 } as any}></div>
          </div>
        )}
        {children}
      </button>
    );
  }
);