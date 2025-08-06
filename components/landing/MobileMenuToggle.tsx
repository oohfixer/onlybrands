// MobileMenuToggle.tsx
import React from 'react';

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

function MobileMenuToggle({ isOpen, onClick, className = '' }: MobileMenuToggleProps) {
  return (
    <button 
      className={`mobile-menu-toggle ${isOpen ? 'active' : ''} ${className}`}
      onClick={onClick}
      aria-label="Toggle mobile menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default MobileMenuToggle;