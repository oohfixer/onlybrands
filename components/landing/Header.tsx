// Header.tsx
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import CTAButton from './CTAButton';
import MobileMenuToggle from './MobileMenuToggle';
import MobileNavigation from './MobileNavigation';

interface HeaderProps {
  onModalOpen?: (type: string) => void;
}

function Header({ onModalOpen }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('contact');
  };

  const handleMobileCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('contact');
    closeMobileMenu();
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <Logo />

          {/* Desktop Navigation */}
          <div className="nav-container">
            <Navigation />
            <CTAButton onClick={handleCTAClick}>
              Get in Touch
            </CTAButton>
          </div>

          {/* Mobile Menu Toggle */}
          <MobileMenuToggle 
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        onCTAClick={handleMobileCTAClick}
      />
    </>
  );
}

export default Header;