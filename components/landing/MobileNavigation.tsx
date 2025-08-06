// MobileNavigation.tsx
import React, { useEffect } from 'react';
import Navigation from './Navigation';
import CTAButton from './CTAButton';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onCTAClick: (e: React.MouseEvent) => void;
}

function MobileNavigation({ isOpen, onClose, onCTAClick }: MobileNavigationProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const mobileNav = document.querySelector('.mobile-nav');
      const headerContent = document.querySelector('.header-content');
      
      if (isOpen && 
          !headerContent?.contains(target) && 
          !mobileNav?.contains(target)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('resize', handleResize);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <nav className={`mobile-nav ${isOpen ? 'active' : ''}`}>
      <div className="mobile-nav-links">
        <Navigation 
          isMobile={true} 
          onLinkClick={onClose}
        />
        <CTAButton 
          variant="mobile"
          onClick={onCTAClick}
        >
          Get in Touch
        </CTAButton>
      </div>
    </nav>
  );
}

export default MobileNavigation;