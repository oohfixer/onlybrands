// Hero.tsx
import React from 'react';
import StatDisplay from './StatDisplay';
import DemoFrame from './DemoFrame';
import CTAButton from './CTAButton';
import HeroDemo from './HeroDemo';

interface HeroProps {
  onModalOpen?: (type: string) => void;
}

function Hero({ onModalOpen }: HeroProps) {
  const stats = [
    { number: 'Real-Time', label: 'Bid Notifications' },
    { number: 'Verified', label: 'Influencers Only' },
    { number: 'Secure', label: 'Escrow Payments' }
  ];

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('early-access');
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-text fade-in">
          <h1>The Future of Influencer Marketing</h1>
          <p className="hero-subtitle">
            Reverse the game. Let influencers compete for your experiential campaigns.
          </p>
          <p className="hero-description">
            OnlyBrands flips the traditional influencer marketing model. Instead of brands chasing influencers, 
            this platform creates a competitive marketplace where influencers bid for brand and agency campaigns.
          </p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <StatDisplay 
                key={index}
                number={stat.number}
                label={stat.label}
              />
            ))}
          </div>
        </div>
        
        <div className="hero-demo fade-in">
          <DemoFrame
            url="onlybrands.oohfixer.com/campaigns/nike-air-max"
            content={<HeroDemo />}
          />
        </div>
        
        <div className="fade-in" style={{ textAlign: 'center', marginTop: '10px' }}>
          <CTAButton 
            onClick={handleCTAClick}
            style={{ padding: '16px 32px', fontSize: '16px' }}
          >
            See the Solution
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default Hero;