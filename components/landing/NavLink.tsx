// ============================================
// components/landing/NavLink.tsx
// ============================================
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function NavLink({ href, children, className = '', onClick }: NavLinkProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      className={`text-text-secondary hover:text-text-primary transition-colors ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default NavLink;
