// SolutionSection.tsx
import React from 'react';
import DemoFrame from './DemoFrame';
import CTAButton from './CTAButton';
import SolutionDemo from './SolutionDemo';

interface SolutionSectionProps {
  onModalOpen?: (type: string) => void;
}

function SolutionSection({ onModalOpen }: SolutionSectionProps) {
  const features = [
    {
      iconId: 'lightning',
      title: 'Instant Competition:',
      description: 'Multiple bids within hours, not weeks'
    },
    {
      iconId: 'dollar',
      title: 'Market Pricing:',
      description: 'Competitive rates drive fair pricing'
    },
    {
      iconId: 'target',
      title: 'Quality Control:',
      description: 'Only verified influencers can bid'
    },
    {
      iconId: 'shield',
      title: 'Secure Payments:',
      description: 'Escrow protection for all parties'
    }
  ];

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onModalOpen?.('early-access');
  };

  return (
    <section className="section" id="solution">
      <div className="section-content">
        <div className="section-grid">
          <div className="section-text fade-in">
            <h2>Reverse Bidding Changes Everything</h2>
            <p>
              OnlyBrands inverts the entire process. Brands post campaigns, set budgets, 
              and watch as qualified influencers compete with competitive bids.
            </p>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <svg className="feature-icon icon">
                    <use href={`#${feature.iconId}`}></use>
                  </svg>
                  <span>
                    <strong>{feature.title}</strong> {feature.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="solution-demo fade-in">
            <DemoFrame
              url="onlybrands.oohfixer.com/dashboard"
              content={<SolutionDemo />}
            />
          </div>
        </div>
        
        <div className="fade-in" style={{ 
          textAlign: 'center', 
          marginTop: '60px' 
        }}>
          <CTAButton 
            onClick={handleCTAClick}
            style={{ padding: '16px 32px', fontSize: '16px' }}
          >
            Start Building Campaigns
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;