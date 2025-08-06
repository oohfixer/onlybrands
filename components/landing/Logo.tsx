// Logo.tsx
import React from 'react';

interface LogoProps {
  className?: string;
}

function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`logo-container ${className}`}>
      <div className="logo-icon"></div>
      <div>
        <div className="logo-text">OnlyBrands</div>
        <div className="logo-tagline">by the OOH Fixer</div>
      </div>
    </div>
  );
}

export default Logo;