// Navigation.tsx
import React from 'react';
import NavLink from './NavLink';

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
  onLinkClick?: () => void;
}

function Navigation({ className = '', isMobile = false, onLinkClick }: NavigationProps) {
  const navItems = [
    { href: '/campaign', label: 'Campaign' },
    { href: '/app', label: 'App Demo' },
    { href: '/active', label: 'Active' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/documentation', label: 'Documentation' }
  ];

  // Auth links
  const authLinks = {
    login: '/login',
    register: '/register'
  };

  const navClass = isMobile ? 'mobile-nav-links' : 'nav-links';
  const linkClass = isMobile ? 'mobile-nav-link' : 'nav-link';

  return (
    <nav className={`${navClass} ${className}`}>
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          className={linkClass}
          onClick={onLinkClick}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navigation;