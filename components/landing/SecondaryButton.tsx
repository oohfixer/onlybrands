// SecondaryButton.tsx
import React from 'react';

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
}

function SecondaryButton({ 
  children, 
  onClick, 
  href = '#', 
  className = '', 
  style 
}: SecondaryButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <a 
      href={href}
      className={`cta-secondary ${className}`}
      onClick={handleClick}
      style={style}
    >
      {children}
    </a>
  );
}

export default SecondaryButton;