// ============================================
// components/landing/CTAButton.tsx
// ============================================
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'primary' | 'secondary' | 'mobile';
}

function CTAButton({ 
  children, 
  onClick, 
  href = '#', 
  className = '', 
  style,
  variant = 'primary'
}: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const baseClasses = `cta-primary ${className}`;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={baseClasses}
      style={style}
    >
      {children}
    </a>
  );
}

export default CTAButton;
