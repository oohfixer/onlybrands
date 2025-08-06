// FinalCTA.tsx
import React from 'react';
import SecondaryButton from './SecondaryButton';

interface FinalCTAProps {
  onModalOpen?: (type: string) => void;
}

function FinalCTA({ onModalOpen }: FinalCTAProps) {
  const handleEarlyAccessClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('early-access');
  };

  const handleInvestmentClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('investment');
  };

  return (
    <section className="final-cta" id="contact">
      <div className="section-content">
        <div className="fade-in">
          <h2>Ready to Transform Influencer Marketing?</h2>
          <p>
            Join the revolution. Whether you're a brand looking for better ROI or an investor 
            seeking the next big opportunity, I'd love to hear from you.
          </p>
          <div className="cta-buttons">
            <a 
              href="#" 
              className="cta-primary"
              onClick={handleEarlyAccessClick}
            >
              Get Early Access
            </a>
            <SecondaryButton onClick={handleInvestmentClick}>
              Investment Inquiries
            </SecondaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;